import { parse, MathNode } from 'mathjs'

interface Trace {
  a: number
  b: number
  c: number
  evalA: number
  evalC: number
  err: number
  index: number
}

export interface EvaluateBisectionResult {
  result: number
  iterations: number
  err: number
  tolerate: number
  trace: Array<Trace>
  timeElapsed: number
  rawEquation: string
}

interface BisectionParams {
  equation: string
  a: number
  b: number
  maxIterations: number
  tolerate: number
}

export const BisectionMethod = (
  params: BisectionParams
): EvaluateBisectionResult => {
  let err = 1
  let c = 0
  let index = 1
  let a: number = params.a
  let b: number = params.b
  let finded = false

  const trace: Array<Trace> = []
  const equation: MathNode = parse(params.equation)
  const initProcess: number = Date.now()

  while (index < params.maxIterations && err > params.tolerate && !finded) {
    c = (b + a) / 2

    err = Math.abs((a - b) / 2 ** (index - 1))

    const evalC: number = equation.evaluate({ x: c })
    const evalA: number = equation.evaluate({ x: a })

    if (evalC === 0) {
      err = 0
      finded = true
    }

    trace.push({
      a,
      b,
      c,
      evalA,
      evalC,
      err,
      index
    })

    a = evalA * evalC > 0 ? c : a
    b = evalA * evalC < 0 ? c : b
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
