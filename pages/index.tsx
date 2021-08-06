import { FunctionComponent } from 'react'
import Head from 'next/head'
import TeX from '@matejmazur/react-katex'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import bisectionImage from '../public/images/bisection_1.png'
import falsePositionImage from '../public/images/false-position_1.png'
import fixedPointImage from '../public/images/fixed-point_1.png'
import newtonRapshonImg from '../public/images/newton_iteration.png'
import secantImage from '../public/images/secant_1.png'

const Home: FunctionComponent = () => {
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
      <div className="w-full pb-12 bg-gray-100 ">
        <div className="fixed top-0 left-0 z-40 flex flex-col justify-center min-h-screen p-2 space-y-2 text-gray-500 bg-white shadow ">
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#introduccion"
          >
            Introducción
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#metodo-de-bisección"
          >
            Método de Bisección
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#newton"
          >
            Método de Newton
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#secante"
          >
            Método de la secante
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#regla-falsa"
          >
            Método de la regla Falsa
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#punto-fijo"
          >
            Método del punto fijo
          </AnchorLink>
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#comparativa"
          >
            Comparativa
          </AnchorLink>
        </div>
        <section className="max-w-5xl min-h-screen mx-auto my-6 bg-white shadow">
          <article
            id="introduccion"
            className="px-3 py-12 pb-3 mx-auto font-serif prose lg:prose-xl"
          >
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
          </article>
        </section>
        <div
          className="relative flex items-center justify-center min-h-screen text-pink-900 bg-fixed bg-pink-800 pattern-grid-lg"
          id="metodo-de-bisección"
        >
          <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
            <Fade delay={400}>
              <div className="mt-5">
                <Image
                  layout="responsive"
                  src={bisectionImage}
                  alt="Ejemplo grafico"
                />
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                <h3 className="w-full pb-6 text-4xl font-bold text-left text-white">
                  Método de bisección
                </h3>
                <p className="text-xl text-white ">
                  El algoritmo más simple de búsqueda de raíces es el método de
                  bisección. Requiere un intervalo inicial que contenga alguna
                  raíz de la ecuación (de forma que la función tome en los
                  extremos del mismo valores de distinto signo; véase el teorema
                  de Bolzano). Dicho intervalo inicial se va dividiendo
                  sucesivamente por la mitad (se bisecta) tomándose el intervalo
                  que contiene a la raíz. A pesar de ser un método que siempre
                  converge a una solución, converge muy lentamente.
                </p>
                <div className="flex justify-start w-full">
                  <Link href="/methods/bisection">
                    <a className="inline-block p-3 px-8 mt-4 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                      Ver detalle
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center min-h-screen text-pink-900 bg-fixed bg-pink-800 pattern-grid-lg"
          id="newton"
        >
          <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
            <Fade>
              <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                <h3 className="w-full pb-6 text-4xl font-bold text-left text-white">
                  Método de Newton
                </h3>
                <p className="mb-3 text-xl text-white">
                  El método de Newton asume que la función f sea continuamente
                  derivable y que se conoce la derivada de la función. Este
                  método puede no converger si se comienza con un valor muy
                  alejado de la raíz.
                </p>
                <p className="text-xl text-white">
                  Sin embargo, si converge, lo hace mucho más rápido que el
                  método de bisección (usualmente, de manera cuadrática), por
                  eso el número de dígitos correctos se duplica en cada
                  iteración. El método de Newton también es útil porque se
                  generaliza para problemas de dimensiones más altas.
                </p>
                <div className="flex justify-start w-full">
                  <Link href="/methods/newton-raphson">
                    <a className="inline-block p-3 px-8 mt-6 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                      Ver detalle
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className="p-2 mt-5 bg-white">
                
                <Image
                  layout="responsive"
                  src={newtonRapshonImg}
                  alt="Ejemplo grafico"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center min-h-screen text-pink-900 bg-fixed bg-pink-800 pattern-grid-lg"
          id="secante"
        >
          <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
            <Fade delay={400}>
              <div className="mt-5">
                <Image
                  layout="responsive"
                  src={secantImage}
                  alt="Ejemplo grafico"
                />
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                <h3 className="w-full pb-6 text-4xl font-bold text-left text-white">
                  Método de la Secante
                </h3>
                <p className="text-2xl text-white ">
                  Reemplazando la derivada del método de Newton por un cociente
                  incremental, obtenemos el método de la secante. Este método no
                  requiere el cálculo (ni la existencia) de la derivada, pero el
                  precio que se debe pagar es un orden de convergencia más bajo
                  (aproximadamente 1.6).
                </p>
                <div className="flex justify-start w-full">
                  <Link href="/methods/secant">
                    <a className="inline-block p-3 px-8 mt-4 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                      Ver detalle
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center min-h-screen text-pink-900 bg-fixed bg-pink-800 pattern-grid-lg"
          id="regla-falsa"
        >
          <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
            <Fade delay={400}>
              <div className="mt-5">
                <Image
                  layout="responsive"
                  src={falsePositionImage}
                  alt="Ejemplo grafico"
                />
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                <h3 className="w-full pb-6 text-4xl font-bold text-left text-white">
                  Método de la regla falsa
                </h3>
                <p className="text-xl text-white ">
                  El método de la regla falsa (o regula falsi) es un método que
                  combina lo mejor del método de bisección y del método de la
                  secante. El método corta el intervalo en dos partes como en el
                  método de bisección, pero a diferencia de éste, lo corta por
                  el valor obtenido aplicando el método de la secante a los
                  extremos del intervalo, no siendo generalmente las partes
                  iguales. El método converge siempre a una raíz de la ecuación,
                  generalmente de forma más rápida que el método de bisección
                  pero más lenta que el método de la secante.
                </p>
                <div className="flex justify-start w-full">
                  <Link href="/methods/false-position">
                    <a className="inline-block p-3 px-8 mt-4 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                      Ver detalle
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center min-h-screen text-pink-900 bg-fixed bg-pink-800 pattern-grid-lg"
          id="punto-fijo"
        >
          <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
            <Fade>
              <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                <h3 className="w-full pb-6 text-4xl font-bold text-left text-white">
                  Método del punto fijo
                </h3>
                <p className="text-2xl text-white ">
                  Finalmente, hay una familia de métodos conocidos como métodos
                  de punto fijo. Estos métodos se basan en obtener a partir de
                  la ecuación f(x) = 0 una ecuación equivalente de la forma g(x)
                  = x cuya solución se convierta en un punto fijo de g e
                  iterando a partir de un valor inicial hasta que se alcance.
                </p>
                <div className="flex justify-start w-full">
                  <Link href="/methods/fixed-point">
                    <a className="inline-block p-3 px-8 mt-4 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                      Ver detalle
                    </a>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className="mt-5">
                <Image
                  layout="responsive"
                  src={fixedPointImage}
                  alt="Ejemplo grafico"
                />
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center min-h-screen bg-pink-800"
          id="comparativa"
        >
          <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto overflow-hidden text-center text-gray-900 bg-gray-100 ">
            <h2 className="py-6 text-3xl text-center">Comparativa</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
