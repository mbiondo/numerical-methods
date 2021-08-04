import { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import Head from 'next/head'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, Navigation])

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

      <section className="px-5 md:px-0 prose lg:prose-2xl">
        <h2>Métodos numéricos</h2>
        <h3>Resolución numérica de ecuaciones</h3>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Los siguientes métodos son para calcular las raíces reales de una
              ecuación dada por f(x) = 0 donde se exige al menos que la función
              f sea una función continua para garantizar la existencia de
              solución. La mayoría de métodos se obtienen de interpolar la
              función, generalmente mediante un polinomio de primer grado
              (interpolación lineal) y después aproximar la solución mediante
              alguna de las raíces del polinomio.
            </p>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Reemplazando la derivada del método de Newton por un cociente
              incremental, obtenemos el método de la secante. Este método no
              requiere el cálculo (ni la existencia) de la derivada, pero el
              precio que se debe pagar es un orden de convergencia más bajo
              (aproximadamente 1.6).
            </p>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <p>
              Finalmente, hay una familia de métodos conocidos como métodos de
              punto fijo. Estos métodos se basan en obtener a partir de la
              ecuación f(x) = 0 una ecuación equivalente de la forma g(x) = x
              cuya solución se convierta en un punto fijo de g e iterando a
              partir de un valor inicial hasta que se alcance.
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
export default Home
