import Head from 'next/head'
import TeX from '@matejmazur/react-katex'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'
import makeCarousel from 'react-reveal/makeCarousel'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Slide from 'react-reveal/Slide';

const Intro = () => {
  const Carousel = makeCarousel(CarouselUI)
  return (
    <>
      <Head>
        <title>Métodos numéricos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Uno de los problemas que más se presenta en matemáticas es el de
              calcular la solución de una ecuación. En algunas (pocas)
              ocasiones, esto puede hacerse por métodos analíticos, es decir, se
              puede “despejar” la incógnita para encontrar el o los valores que
              resuelven la ecuación. En la gran mayoría de las ocasiones con
              algún interés práctico esto no es posible y es necesario recurrir
              a un método numérico que, con la ayuda de un ordenador, nos
              permita calcular un valor aproximado de la solución."
        />
      </Head>
      <div className="w-full pb-24 bg-gray-100">
        <div className="relative flex flex-col items-center justify-center max-w-6xl py-64 mx-auto overflow-hidden text-center text-gray-900 bg-gray-100 ">
          <div className="absolute inset-0 z-0">
            <Carousel
              defaultWait={4000}
              maxTurns={99} /*wait for 1000 milliseconds*/
            >
              <Slide right>
                <div className="flex flex-col items-center justify-center h-full py-24">
                  <Fade>
                    <h2 className="text-6xl text-center ">Métodos numéricos</h2>
                  </Fade>
                  <Fade delay={100}>
                    <h3 className="mt-2 font-sans text-3xl italic text-center">
                      Resolución numérica de ecuaciones
                    </h3>
                  </Fade>
                  <Fade delay={120}>
                    <Link href="/">
                      <a className="inline-block p-2 px-4 mt-4 font-bold text-pink-100 duration-100 bg-pink-700 rounded-md cursor-pointer hover:bg-pink-800">
                        Introducción
                      </a>
                    </Link>
                  </Fade>
                </div>
              </Slide>
              <Slide right>
                <div className="flex flex-col items-center justify-center h-full py-24">

                  <Link href="/methods/bisection">
                    <a className="inline-block p-2 px-4 mt-4 font-bold text-pink-100 duration-100 bg-pink-700 rounded-md cursor-pointer hover:bg-pink-800">
                    Métodos
                    </a>
                  </Link>
                </div>
              </Slide>
              <Slide right>
                <div className="flex flex-col items-center justify-center h-full py-24">
                  <Link href="/playground">
                    <a className="inline-block p-2 px-4 mt-4 font-bold text-pink-100 duration-100 bg-pink-700 rounded-md cursor-pointer hover:bg-pink-800">
                      Playground
                    </a>
                  </Link>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <section className="max-w-5xl mx-auto mt-6 bg-white shadow">
          <article className="px-3 py-24 mx-auto font-serif prose lg:prose-xl">
            <h3>Introducción</h3>
            <p>
              Uno de los problemas que más se presenta en matemáticas es el de
              calcular la solución de una ecuación. En algunas (pocas)
              ocasiones, esto puede hacerse por métodos analíticos, es decir, se
              puede “despejar” la incógnita para encontrar el o los valores que
              resuelven la ecuación. En la gran mayoría de las ocasiones con
              algún interés práctico esto no es posible y es necesario recurrir
              a un método numérico que, con la ayuda de un ordenador, nos
              permita calcular un valor aproximado de la solución.
            </p>
            <p>
              Los métodos de aproximación de raices de ecuaciones necesitan
              conocer, o bien un intervalo que contenga sólo una raíz, o bien un
              punto inicial que esté suficientemente cerca de ella. Por tanto,
              como paso previo a la aplicación de un método de aproximación, es
              necesario localizar la raíz, es decir encontrar un intervalo que
              la contenga y separar la raíz, es decir encontrar un intervalo que
              sólo contenga dicha raíz. Esto se hace por métodos analíticos,
              gráficos y, en algunos casos, empíricos.
            </p>
            <p>
              Los siguientes métodos son para calcular las raíces reales de una
              ecuación dada por <TeX>{`f(x) = 0`}</TeX> donde se exige al menos
              que la función f sea una función continua para garantizar la
              existencia de solución. La mayoría de métodos se obtienen de
              interpolar la función, generalmente mediante un polinomio de
              primer grado (interpolación lineal) y después aproximar la
              solución mediante alguna de las raíces del polinomio.
            </p>
            <p>
              El algoritmo más simple de búsqueda de raíces es el método de
              bisección. Requiere un intervalo inicial que contenga alguna raíz
              de la ecuación (de forma que la función tome en los extremos del
              mismo valores de distinto signo; véase el teorema de Bolzano).
              Dicho intervalo inicial se va dividiendo sucesivamente por la
              mitad (se bisecta) tomándose el intervalo que contiene a la raíz.
              A pesar de ser un método que siempre converge a una solución,
              converge muy lentamente.
            </p>
            <p>
              El método de Newton asume que la función f sea continuamente
              derivable y que se conoce la derivada de la función. Este método
              puede no converger si se comienza con un valor muy alejado de la
              raíz. Sin embargo, si converge, lo hace mucho más rápido que el
              método de bisección (usualmente, de manera cuadrática), por eso el
              número de dígitos correctos se duplica en cada iteración. El
              método de Newton también es útil porque se generaliza para
              problemas de dimensiones más altas.
            </p>
            <p>
              Reemplazando la derivada del método de Newton por un cociente
              incremental, obtenemos el método de la secante. Este método no
              requiere el cálculo (ni la existencia) de la derivada, pero el
              precio que se debe pagar es un orden de convergencia más bajo
              (aproximadamente 1.6).
            </p>
            <p>
              El método de la regla falsa (o regula falsi) es un método que
              combina lo mejor del método de bisección y del método de la
              secante. El método corta el intervalo en dos partes como en el
              método de bisección, pero a diferencia de éste, lo corta por el
              valor obtenido aplicando el método de la secante a los extremos
              del intervalo, no siendo generalmente las partes iguales. El
              método converge siempre a una raíz de la ecuación, generalmente de
              forma más rápida que el método de bisección pero más lenta que el
              método de la secante.
            </p>
            <p>
              Finalmente, hay una familia de métodos conocidos como métodos de
              punto fijo. Estos métodos se basan en obtener a partir de la
              ecuación f(x) = 0 una ecuación equivalente de la forma g(x) = x
              cuya solución se convierta en un punto fijo de g e iterando a
              partir de un valor inicial hasta que se alcance.
            </p>
          </article>
        </section>
      </div>
    </>
  )
}
export default Intro

const CarouselUI = ({ position, total, handleClick, children }) => (
  <div className="relative w-full h-full mb-0 overflow-hidden border border-pink-100 shadow-lg">
    <div>
      <div
        className="absolute z-50 items-center justify-center hidden w-12 h-12 -mt-6 text-5xl text-center text-pink-900 duration-200 transform cursor-pointer hover:scale-105 hover:translate-x-1 left-2 hover:text-gray-600 md:flex top-1/2"
        onClick={handleClick}
        data-position={position - 1}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="absolute z-50 items-center justify-center hidden w-12 h-12 -mt-6 text-5xl text-center text-pink-900 duration-200 transform cursor-pointer hover:scale-105 hover:-translate-x-1 right-2 hover:text-gray-600 md:flex top-1/2"
        right="true"
        onClick={handleClick}
        data-position={position + 1}
      >
        <AiOutlineArrowRight />
      </div>
      <div>{children}</div>
      <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center text-pink-100 bg-pink-900 bg-opacity-90">
        {Array(...Array(total)).map((val, index) => (
          <div
            className="mx-1 text-4xl cursor-pointer"
            key={index}
            onClick={handleClick}
            data-position={index}
          >
            {index === position ? <BiRadioCircleMarked /> : <BiRadioCircle />}
          </div>
        ))}
      </div>
    </div>
  </div>
)
