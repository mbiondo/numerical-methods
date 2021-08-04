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
    <div className="max-w-4xl p-5 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="py-2 flex flex-col items-center">
          <label htmlFor="equation">
            <TeX>{`f(x)`}</TeX>
          </label>
          <input
            id="equation"
            {...register('equation', { required: true })}
            className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
          />
          {errors.equation && errors.equation.type === 'required' && (
            <span>This is required</span>
          )}
        </fieldset>
        <fieldset className="py-2 flex flex-col items-center">
          <label htmlFor="gEquation">
            <TeX>{`g(x)`}</TeX>
          </label>
          <input
            id="gEquation"
            {...register('gEquation', { required: true })}
            className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
          />
          {errors.gEquation && errors.gEquation.type === 'required' && (
            <span>This is required</span>
          )}
        </fieldset>
        <div className="grid md:grid-cols-4 gap-4">
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="a">
              <TeX>{`a`}</TeX>
            </label>
            <input
              id="a"
              {...register('a', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.a && errors.a.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="b">
              <TeX>{`b`}</TeX>
            </label>
            <input
              id="b"
              {...register('b', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.b && errors.b.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="maxIterations">
              <TeX>{`Iteraciones`}</TeX>
            </label>
            <input
              id="maxIterations"
              {...register('maxIterations', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.maxIterations &&
              errors.maxIterations.type === 'required' && (
                <span>This is required</span>
              )}
          </fieldset>
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="tolerate">
              <TeX>{`Tolerancia`}</TeX>
            </label>
            <input
              id="tolerate"
              {...register('tolerate', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.tolerate && errors.tolerate.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="fAprox">
              <TeX>{`Primer`}</TeX> <TeX>{`aproximacion`}</TeX>
            </label>
            <input
              id="fAprox"
              {...register('fAprox', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.fAprox && errors.fAprox.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
          <fieldset className="py-2 flex flex-col items-center">
            <label htmlFor="sAprox">
              <TeX>{`Segunda`}</TeX> <TeX>{`aproximacion`}</TeX>
            </label>
            <input
              id="sAprox"
              {...register('sAprox', { required: true })}
              className="appearance-none placeholder-opacity-50 border-pink-500  text-2xl bg-gray-100 w-full py-2 text-center mt-2 px-2 leading-tight border-b focus:outline-none ng-pristine ng-invalid ng-touched"
            />
            {errors.sAprox && errors.sAprox.type === 'required' && (
              <span>This is required</span>
            )}
          </fieldset>
        </div>
        <div className="flex justify-center items-center py-3">
          <input
            type="submit"
            className="relative cursor-pointer z-10 px-4 py-2 font-bold text-white bg-pink-500 border-b-4 border-pink-700 rounded hover:bg-pink-600 hover:border-pink-700 "
          />
        </div>
      </form>
    </div>
  )
}
