import Head from 'next/head'
import { FunctionComponent } from 'react'
import { MethodTemplate } from '../../components/method-template'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
  return { props: { slug: 'index' } }
}

export default Methods
