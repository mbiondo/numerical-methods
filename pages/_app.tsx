import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { Footer } from '../components/footer'
import { Hero } from '../components/hero'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'katex/dist/katex.min.css'
import '../styles/global.css'

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
      <main className="w-full min-h-full mx-auto py-10 flex flex-col justify-center items-center gap-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default NumericalIntegration
