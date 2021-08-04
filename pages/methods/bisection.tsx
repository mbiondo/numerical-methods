import { FunctionComponent } from 'react'
import { MethodTemplate } from '../../components/method-template'
import Head from 'next/head'
import Image from 'next/image'
import TeX from '@matejmazur/react-katex'
import bisectionImage from '../../public/images/bisection_1.png'

const Bisection: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>El método de bisección</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Basado en el teorema de valor intermedio, recibe el nombre de
          bisección, o método de la búsqueda binaria."
        />
      </Head>
      <MethodTemplate>
        <h2 id="el-metodo-de-biseccion">El método de bisección</h2>
        <p>
          Basado en el teorema de valor intermedio, recibe el nombre de
          bisección, o método de la búsqueda binaria.
        </p>
        <p>
          Suponga que <TeX>f</TeX> es una función continua definida dentro del
          intervalo <TeX>[a, b]</TeX> con <TeX>f(a)</TeX> y <TeX>f(b)</TeX> de
          signos opuestos. El teorema del valor intermedio inplica que existe un
          número <TeX>p</TeX> en <TeX>(a, b)</TeX> con <TeX>f(p) = 0</TeX>.
        </p>
        <p>
          El método realiza repetidamente una reducción a la mitad (o bisección)
          de los subintervalos <TeX>[a, b]</TeX> y, en cada paso, localizar la
          mitad que contiene <TeX>p</TeX>.
        </p>
        <h2 id="procedimiento">Procedimiento</h2>
        <p>
          Para comenzar, sea <TeX>{String.raw`a_{1} = a`}</TeX> ,{' '}
          <TeX>{String.raw`b_{1} = b`}</TeX> y sea{' '}
          <TeX>{String.raw`p_{1}`}</TeX> el punto medio de <TeX>[a, b]</TeX>, es
          decir{' '}
          <TeX>{String.raw`p_{1} = a_{1} + \frac{(b_{1} - a_{1})}{2} = \frac{a_{1} + b_{1}}{2}`}</TeX>
        </p>
        <ul className="list-none">
          <li>
            Si <TeX>{String.raw`f({p_1}) = 0`}</TeX>, entonces{' '}
            <TeX>{String.raw`p = p_{1}`}</TeX>
          </li>
          <li>
            Si <TeX>{String.raw`f({p_1}) \neq 0`}</TeX>, entonces{' '}
            <TeX>{String.raw`p_{1}`}</TeX> tiene el mismo signo que{' '}
            <TeX>{String.raw`f(a_{1})`}</TeX> o{' '}
            <TeX>{String.raw`f(b_{1})`}</TeX>
            <ul>
              <li>
                Si <TeX>{String.raw`f(a_{1})`}</TeX> y{' '}
                <TeX>{String.raw`f(b_{1})`}</TeX> tienen el mismo signo,
                <TeX>{String.raw`p \in (p_{1}, b_{1})`}</TeX>. Sea{' '}
                <TeX>{String.raw`a_{2} = p_{1}`}</TeX> y{' '}
                <TeX>{String.raw`b_{2} = b_{1}`}</TeX>
              </li>
              <li>
                Si <TeX>{String.raw`f(a_{1})`}</TeX> y{' '}
                <TeX>{String.raw`f(b_{1})`}</TeX> tienen signos opuestos,
                <TeX>{String.raw`p \in (a_{1}, p_{1})`}</TeX>. Sea{' '}
                <TeX>{String.raw`a_{2} = a_{1}`}</TeX> y{' '}
                <TeX>{String.raw`b_{2} = p_{1}`}</TeX>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Entonces, volvemos a aplicar el proceso al interalo{' '}
          <TeX>{String.raw`[a_{2}, b_{2}]`}</TeX>, hasta encontrar una
          aproximación a la raíz.
        </p>
        <Image src={bisectionImage} alt="Ejemplo grafico" />
        <h2 id="convergencia-cota-de-error">Convergencia y cota de error</h2>
        <p>
          Suponiendo que se cumplen las condiciones iniciales para la puesta en
          práctica del algoritmo, definimos r como una raíz dentro del intervalo{' '}
          <TeX>[a, b]</TeX>. El intervalo de búsqueda en el n-ésimo paso tiene
          longitud:
        </p>
        <TeX>{String.raw`l_{n} = \frac{b_{n}- a_{n}}{2} = \frac{|b-a|}{2^n}`}</TeX>
        <p>
          Como <TeX>{String.raw`r_{n}`}</TeX>, que es la raiz n-ésima
          cualculada, se encuentra siempre dentro del intervalo de búsqueda,
          tenemos entonces que:
        </p>
        <TeX>{String.raw`|r - r_{n}| \leq \frac{b-a}{2^n}`}</TeX>
        <p>Tomando limites,</p>
        <TeX>{String.raw`\lim_{n \to \infty}|r - r_{n}| = 0 \to \lim_{n \to \infty} r_{n} = r`}</TeX>
        <p>
          Queda demostrado entonces, que si se cumplen las condiciones iniciales
          del problema, el método de bisección converge al menos, a una de las
          raíces que se encuentran en el intervalo señalado.
        </p>
        <p>
          El error cometido tras realizar <TeX>n \geq 0</TeX> iteraciones del
          método de bisección es
        </p>
        <TeX>{String.raw`\varepsilon :=|r - r_{n}| < \frac{b-a}{2^{n+1}}`}</TeX>
        <p>
          Para lograr un error inferior a <TeX>{String.raw`\varepsilon`}</TeX>,
          el número de iteraciones <TeX>n</TeX> a realizar debe ser
        </p>
        <TeX>{String.raw`n > \frac{ln(b-a) - ln(\varepsilon)}{ln(2)} - 1`}</TeX>
        <h2 id="conclucion">Conclución</h2>
        <p>
          El método de bisección, a pesar de que está conceptualmente claro,
          tiene desventajas significativas. Su velocidad de convergencia es más
          lenta y se podria descartar una aproximación intermedia
          inadvertidamente.
        </p>
        <p>
          Si existieran más de una raíz en el intervalo entonces el método sigue
          siendo convergente pero no resulta tan fácil caracterizar hacia qué
          raíz converge el método.
        </p>
        <p>
          Sin embargo, el método tiene la importante propiedad de que siempre
          converge a una solución y por esta razón con frecuencia se utiliza
          como iniciador para los métodos más eficientes.
        </p>
      </MethodTemplate>
    </>
  )
}
export default Bisection
