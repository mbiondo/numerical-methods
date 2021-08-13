import { parse, MathNode } from 'mathjs'

interface Trace {
  p: number
  err: number
  index: number
}

export interface EvaluateFixedPointResult {
  result: number
  iterations: number
  err: number
  tolerate: number
  trace: Array<Trace>
  timeElapsed: number
  rawEquation: string
  rawGEquation: string
}

interface FixedPointParams {
  equation: string
  gEquation: string
  initial: number
  tolerate: number
  maxIterations: number
}

export const FixedPointMethod = (
  params: FixedPointParams
): EvaluateFixedPointResult => {
  const trace: Array<Trace> = []
  const equation: MathNode = parse(params.equation)
  const gEquation: MathNode = parse(params.gEquation)
  const initProcess: number = Date.now()

  let index = 1
  let err = 1
  let p: number = params.initial

  while (Math.abs(err) > params.tolerate && index <= params.maxIterations) {
    const oldP: number = p
    p = gEquation.evaluate({ x: p })

    err = Math.abs((p - oldP) / gEquation.evaluate({ x: p }))

    trace.push({
      p,
      err,
      index
    })

    index++
  }

  const timeElapsed: number = Date.now() - initProcess

  const rawEquation: string = equation
    ? equation.toTex({ parenthesis: 'keep', implicit: 'hide' })
    : ''
  const rawGEquation: string = gEquation
    ? gEquation.toTex({ parenthesis: 'keep', implicit: 'hide' })
    : ''

  return {
    result: p,
    rawEquation,
    rawGEquation,
    iterations: index - 1,
    err,
    tolerate: params.tolerate,
    timeElapsed,
    trace
  }
}
