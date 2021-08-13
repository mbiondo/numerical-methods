import { parse, MathNode } from 'mathjs'

interface Trace {
  a: number
  b: number
  c: number
  evalC: number
  err: number
  index: number
}

export interface EvaluateFalsePositionResult {
  result: number
  iterations: number
  err: number
  tolerate: number
  trace: Array<Trace>
  timeElapsed: number
  rawEquation: string
}

interface FalsePositionParams {
  equation: string
  a: number
  b: number
  maxIterations: number
  tolerate: number
}

export const FalsePositionMethod = (
  params: FalsePositionParams
): EvaluateFalsePositionResult => {
  let err = 100
  let index = 1
  let a: number = params.a
  let b: number = params.b
  let c: number = a

  const trace: Array<Trace> = []
  const equation: MathNode = parse(params.equation)
  const initProcess: number = Date.now()

  if (equation.evaluate({ x: a }) < equation.evaluate({ x: b })) {
    const aux = a
    a = b
    b = aux
  }

  while (index <= params.maxIterations && err > params.tolerate) {
    const evalA: number = equation.evaluate({ x: a })
    const evalB: number = equation.evaluate({ x: b })
    const evalC: number = equation.evaluate({ x: c })

    c = b - (evalB * (b - a)) / (evalB - evalA)

    err = Math.abs(c - b)
    trace.push({
      a,
      b,
      c,
      evalC,
      err,
      index
    })

    a = evalB * evalC > 0 ? a : c
    b = evalB * evalC > 0 ? c : b
    index++
  }

  const timeElapsed: number = Date.now() - initProcess

  const rawEquation: string = equation
    ? equation.toTex({ parenthesis: 'keep', implicit: 'hide' })
    : ''

  return {
    result: c,
    rawEquation,
    iterations: index - 1,
    err,
    tolerate: params.tolerate,
    timeElapsed,
    trace
  }
}
