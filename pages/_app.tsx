import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Footer } from '../components/footer'
import { Hero } from '../components/hero'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'katex/dist/katex.min.css'
import '../styles/global.css'
import '../styles/pattern.css'
import '../styles/home.css'

import { MDXProvider } from '@mdx-js/react'
const mdComponents = {}
const NumericalIntegration: FunctionComponent<AppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <main className="flex flex-col items-center justify-center w-full min-h-full gap-10 pb-10 mx-auto">
        <MDXProvider components={mdComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>
      <Footer />
    </div>
  )
}

export default NumericalIntegration
