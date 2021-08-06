import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import TeX from '@matejmazur/react-katex'

export interface FormFields {
  equation: string
  gEquation: string
  a: number
  b: number
  maxIterations: number
  tolerate: number
  fAprox: number
  sAprox: number
}

interface FormProps extends FormFields {
  submitHandler(data: FormFields): void
}

export const Form: FunctionComponent<FormProps> = ({
  submitHandler,
  equation,
  a,
  b,
  maxIterations,
  tolerate,
  fAprox,
  sAprox,
  gEquation
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      equation,
      a,
      b,
      maxIterations,
      tolerate,
      fAprox,
      sAprox,
      gEquation
    }
  })

  const onSubmit = (data: FormFields) => {
    submitHandler(data)
  }

  return (
    <div className="sticky top-0 w-full max-w-4xl px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
          <label htmlFor="equation">
            <TeX>{`f(x)`}</TeX>
          </label>
          <input
            id="equation"
            {...register('equation', { required: true })}
            className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
          />
          {errors.equation && errors.equation.type === 'required' && (
            <span>This is required</span>
          )}
        </fieldset>
        <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
          <label htmlFor="gEquation">
            <TeX>{`g(x)`}</TeX>
          </label>
          <input
            id="gEquation"
            {...register('gEquation', { required: true })}
            className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
          />
          {errors.gEquation && errors.gEquation.type === 'required' && (
            <span>This is required</span>
          )}
        </fieldset>
        <div className="grid gap-4 md:grid-cols-2">
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="a">
              <TeX>{`a`}</TeX>
            </label>
            <input
              id="a"
              {...register('a', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.a && errors.a.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="b">
              <TeX>{`b`}</TeX>
            </label>
            <input
              id="b"
              {...register('b', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.b && errors.b.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="maxIterations">
              <TeX>{`Iteraciones`}</TeX>
            </label>
            <input
              id="maxIterations"
              {...register('maxIterations', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.maxIterations &&
              errors.maxIterations.type === 'required' && (
                <span>This is required</span>
              )}
          </fieldset>
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="tolerate">
              <TeX>{`Tolerancia`}</TeX>
            </label>
            <input
              id="tolerate"
              {...register('tolerate', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.tolerate && errors.tolerate.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="fAprox">
              <TeX>{`Primer`}</TeX> <TeX>{`aproximación`}</TeX>
            </label>
            <input
              id="fAprox"
              {...register('fAprox', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.fAprox && errors.fAprox.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="flex flex-col items-center py-1 text-sm text-left md:items-start">
            <label htmlFor="sAprox">
              <TeX>{`Segunda`}</TeX> <TeX>{`aproximación`}</TeX>
            </label>
            <input
              id="sAprox"
              {...register('sAprox', { required: true })}
              className="w-full px-2 py-2 mt-2 text-lg leading-tight text-left placeholder-opacity-50 bg-gray-100 border-b border-pink-500 appearance-none focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.sAprox && errors.sAprox.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
        </div>
        <div className="flex items-center justify-center py-3">
          <input
            type="submit"
            value="Calcular"
            className="relative z-10 w-full px-4 py-2 mx-auto font-bold text-white bg-green-800 border-b-4 border-green-700 rounded cursor-pointer hover:bg-green-900 hover:border-green-900 "
          />
        </div>
      </form>
    </div>
  )
}
