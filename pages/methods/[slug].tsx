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
    require(`./../../content/methods/es/${slug}.mdx`).default

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const metaData = require(`./../../content/methods/es/${slug}.mdx`).metaData

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaData.description} />
      </Head>
      <MethodTemplate>
        <ComponentToRender />
      </MethodTemplate>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = [
    'bisection',
    'newton-raphson',
    'fixed-point',
    'false-position',
    'secant'
  ]
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
