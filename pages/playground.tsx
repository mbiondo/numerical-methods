import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import Geogebra from 'react-geogebra'
import { v4 as uuidv4 } from 'uuid'
import { Form, FormFields } from '../components/form'
import { Table } from '../components/ui/table'
import {
  BisectionMethod,
  EvaluateBisectionResult
} from '../lib/bisection-method'
import { EvaluateSecantResult, SecantMethod } from '../lib/secant-method'
import {
  EvaluateFalsePositionResult,
  FalsePositionMethod
} from '../lib/false-position-method'
import {
  EvaluateNewthonRaphsonResult,
  NewthonRaphsonMethod
} from '../lib/newton-raphson-method'
import {
  EvaluateFixedPointResult,
  FixedPointMethod
} from '../lib/fixed-point-method'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
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

const newthonRaphsonColumns = [
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

  const newthonRaphsonResult: EvaluateNewthonRaphsonResult =
    NewthonRaphsonMethod({
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
  methodResultList.push({ ...newthonRaphsonResult, name: 'Newthon Raphson' })
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
      <Form
        {...evaluateParams}
        submitHandler={(data: FormFields) => {
          setEvaluateParams(data)
        }}
      />
      <Tabs>
        <TabList>
          <Tab>Vista general</Tab>
          <Tab>Biseccion</Tab>
          <Tab>Punto fijo</Tab>
          <Tab>Newthon Raphson</Tab>
          <Tab>Secante</Tab>
          <Tab>Posición Falsa</Tab>
        </TabList>

        <TabPanel>
          <Table
            items={methodResultList.sort((a: MethodResult, b: MethodResult) =>
              a.iterations > b.iterations ? 1 : -1
            )}
            columns={methodCompareColumns}
          />
        </TabPanel>
        <TabPanel>
          <Table items={bisectionResult.trace} columns={genericResultColumn} />
        </TabPanel>
        <TabPanel>
          <Table
            items={fixedPointResult.trace}
            columns={newthonRaphsonColumns}
          />
        </TabPanel>
        <TabPanel>
          <Table
            items={newthonRaphsonResult.trace}
            columns={newthonRaphsonColumns}
          />
        </TabPanel>
        <TabPanel>
          <Table items={secantResult.trace} columns={genericResultColumn} />
        </TabPanel>
        <TabPanel>
          <Table
            items={falsePositionResult.trace}
            columns={genericResultColumn}
          />
        </TabPanel>
      </Tabs>

      <Geogebra
        id={uuidv4()}
        showMenuBar={false}
        showToolBar={false}
        showAlgebraInput={false}
        appletOnLoad={() => {
          return ''
        }}
        onReady={geogebraReadyHandler}
        LoadComponent={() => <h1>Loading</h1>}
      />
    </>
  )
}
export default Playground
