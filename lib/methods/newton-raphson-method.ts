import { parse, MathNode, derivative } from 'mathjs'

interface Trace {
  p: number
  err: number
  index: number
}

export interface EvaluateNewtonRaphsonResult {
  result: number
  iterations: number
  err: number
  tolerate: number
  trace: Array<Trace>
  timeElapsed: number
  rawEquation: string
  rawDEquation: string
}

interface NewtonRaphsonParams {
  equation: string
  initial: number
  tolerate: number
  maxIterations: number
}

export const NewtonRaphsonMethod = (
  params: NewtonRaphsonParams
): EvaluateNewtonRaphsonResult => {
  const trace: Array<Trace> = []
  const equation: MathNode = parse(params.equation)
  const equationD: MathNode = derivative(equation, 'x')
  const initProcess: number = Date.now()
  let index = 1
  let err = 1
  let p: number = params.initial

  while (err > params.tolerate && index <= params.maxIterations) {
    const oldP: number = p
    p = oldP - equation.evaluate({ x: oldP }) / equationD.evaluate({ x: oldP })
    err = Math.abs(p - oldP)
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
  const rawDEquation: string = equationD
    ? equationD.toTex({ parenthesis: 'keep', implicit: 'hide' })
    : ''

  return {
    result: p,
    rawEquation,
    rawDEquation,
    iterations: index - 1,
    err,
    tolerate: params.tolerate,
    timeElapsed,
    trace
  }
}
