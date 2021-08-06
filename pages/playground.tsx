import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Geogebra from 'react-geogebra'
import { Form, FormFields } from '../components/form'
import { Table } from '../components/ui/table'
import {
  BisectionMethod,
  EvaluateBisectionResult
} from '../lib/methods/bisection-method'
import {
  EvaluateSecantResult,
  SecantMethod
} from '../lib/methods/secant-method'
import {
  EvaluateFalsePositionResult,
  FalsePositionMethod
} from '../lib/methods/false-position-method'
import {
  EvaluateNewtonRaphsonResult,
  NewtonRaphsonMethod
} from '../lib/methods/newton-raphson-method'
import {
  EvaluateFixedPointResult,
  FixedPointMethod
} from '../lib/methods/fixed-point-method'

import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs'
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then(mod => mod.Tabs),
  { ssr: false }
)

import 'react-tabs/style/react-tabs.css'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ggbApplet: any
  }
}

interface MethodResult {
  result: number
  err: number
  iterations: number
  timeElapsed: number
  name: string
}
const methodCompareColumns = [
  { title: 'Metodo', accesor: 'name', isTex: true },
  { title: 'P', accesor: 'result', isTex: true },
  { title: 'Iteraciones', accesor: 'iterations', isTex: true },
  { title: 'Error', accesor: 'err', isTex: true },
  { title: 'Tiempo (ms)', accesor: 'timeElapsed', isTex: true }
]

const genericResultColumn = [
  { title: 'Iteracion', accesor: 'index', isTex: true },
  { title: 'a', accesor: 'a', isTex: true },
  { title: 'b', accesor: 'b', isTex: true },
  { title: 'c', accesor: 'c', isTex: true },
  { title: 'f(c)', accesor: 'evalC', isTex: true },
  { title: 'Error', accesor: 'err', isTex: true }
]

const newtonRaphsonColumns = [
  { title: 'Iteracion', accesor: 'index', isTex: true },
  { title: 'p', accesor: 'p', isTex: true },
  { title: 'Error', accesor: 'err', isTex: true }
]

const Playground: FunctionComponent = () => {
  const [geogebraReady, setGeogebraReady] = useState<boolean>(false)
  const methodResultList: Array<MethodResult> = []

  const [evaluateParams, setEvaluateParams] = useState<FormFields>({
    equation: 'x^3 + 4x^2 - 10',
    gEquation: 'x - ((x^3 +4x^2 -10)/(3x^2 + 8x))',
    maxIterations: 20,
    a: 1,
    b: 2,
    tolerate: 0.0001,
    fAprox: 1,
    sAprox: 2
  })

  const bisectionResult: EvaluateBisectionResult = BisectionMethod({
    equation: evaluateParams.equation,
    a: +evaluateParams.a,
    b: +evaluateParams.b,
    tolerate: +evaluateParams.tolerate,
    maxIterations: +evaluateParams.maxIterations
  })

  const secantResult: EvaluateSecantResult = SecantMethod({
    equation: evaluateParams.equation,
    a: +evaluateParams.fAprox,
    b: +evaluateParams.sAprox,
    tolerate: +evaluateParams.tolerate,
    maxIterations: +evaluateParams.maxIterations
  })

  const falsePositionResult: EvaluateFalsePositionResult = FalsePositionMethod({
    equation: evaluateParams.equation,
    a: +evaluateParams.a,
    b: +evaluateParams.b,
    tolerate: +evaluateParams.tolerate,
    maxIterations: +evaluateParams.maxIterations
  })

  const newtonRaphsonResult: EvaluateNewtonRaphsonResult = NewtonRaphsonMethod({
    equation: evaluateParams.equation,
    maxIterations: +evaluateParams.maxIterations,
    tolerate: +evaluateParams.tolerate,
    initial: +evaluateParams.fAprox
  })

  const fixedPointResult: EvaluateFixedPointResult = FixedPointMethod({
    equation: evaluateParams.equation,
    gEquation: evaluateParams.gEquation,
    maxIterations: +evaluateParams.maxIterations,
    tolerate: +evaluateParams.tolerate,
    initial: +evaluateParams.fAprox
  })

  methodResultList.push({ ...bisectionResult, name: 'Biseccion' })
  methodResultList.push({ ...newtonRaphsonResult, name: 'Newton Raphson' })
  methodResultList.push({ ...secantResult, name: 'Secante' })
  methodResultList.push({ ...falsePositionResult, name: 'Posición falsa' })
  methodResultList.push({ ...fixedPointResult, name: 'Punto fijo' })

  const geogebraReadyHandler = () => {
    setGeogebraReady(true)
  }

  if (geogebraReady === true) {
    const ggbApplet = window.ggbApplet
    ggbApplet.evalCommand(`f(x)=${evaluateParams.equation}`)
    ggbApplet.evalCommand(`g(x)=${evaluateParams.gEquation}`)
    ggbApplet.evalCommand(
      `P = Root(f, ${evaluateParams.a}, ${evaluateParams.b})`
    )
  }

  return (
    <>
      <Head>
        <title>Method's Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid w-full pt-6 pl-6 lg:grid-cols-4">
        <div className="pt-2 bg-white lg:max-w-lg">
          <Form
            {...evaluateParams}
            submitHandler={(data: FormFields) => {
              setEvaluateParams(data)
            }}
          />
        </div>
        <div className="pt-0 lg:col-span-3">
          <div className="flex justify-center mb-6">
            <Geogebra
              id={'geogebra-applet'}
              height={400}
              width={1200}
              showMenuBar={true}
              showToolBar={true}
              showAlgebraInput={false}
              appletOnLoad={() => {
                return ''
              }}
              onReady={geogebraReadyHandler}
              LoadComponent={() => <h1>Loading</h1>}
            />
          </div>
          <div className="px-6">
            <Tabs>
              <TabList>
                <Tab key={1}>Vista general</Tab>
                <Tab key={2}>Biseccion</Tab>
                <Tab key={3}>Punto fijo</Tab>
                <Tab key={4}>Newton Raphson</Tab>
                <Tab key={5}>Secante</Tab>
                <Tab key={6}>Posición Falsa</Tab>
              </TabList>

              <TabPanel key={1}>
                <Table
                  items={methodResultList.sort(
                    (a: MethodResult, b: MethodResult) =>
                      a.iterations > b.iterations ? 1 : -1
                  )}
                  columns={methodCompareColumns}
                />
              </TabPanel>
              <TabPanel key={2}>
                <Table
                  items={bisectionResult.trace}
                  columns={genericResultColumn}
                />
              </TabPanel>
              <TabPanel key={3}>
                <Table
                  items={fixedPointResult.trace}
                  columns={newtonRaphsonColumns}
                />
              </TabPanel>
              <TabPanel key={4}>
                <Table
                  items={newtonRaphsonResult.trace}
                  columns={newtonRaphsonColumns}
                />
              </TabPanel>
              <TabPanel key={5}>
                <Table
                  items={secantResult.trace}
                  columns={genericResultColumn}
                />
              </TabPanel>
              <TabPanel key={6}>
                <Table
                  items={falsePositionResult.trace}
                  columns={genericResultColumn}
                />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
export default Playground
