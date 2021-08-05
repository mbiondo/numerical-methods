import Head from 'next/head'
import { FunctionComponent } from 'react'
import { MethodTemplate } from '../../components/method-template'
import { GetStaticPaths, GetStaticProps } from 'next'

interface MethodsProps {
  slug: string
}

const Methods: FunctionComponent<MethodsProps> = ({ slug }) => {
  const ComponentToRender: FunctionComponent =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require(`./../../content/methods/${slug}.mdx`).default
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
        <ComponentToRender />
      </MethodTemplate>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ['bisection', 'newton-raphson', 'index']
  const paths = arr.map(slug => {
    return {
      params: { slug }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  return { props: { slug: context.params?.slug } }
}

export default Methods
