import { FunctionComponent } from 'react'
import Head from 'next/head'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import { v4 as uuidv4 } from 'uuid'

import { MethodList } from '../methods'

const Home: FunctionComponent = () => {
  const IntroComponent =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require(`../content/home/es/intro.mdx`).default

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const metaData = require(`../content/home/es/intro.mdx`).metaData

  const rowClass = (index: number) => (index % 2 !== 0 ? 'oddClass' : '')

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaData.description} />
      </Head>
      <div className="w-full pb-12 bg-gray-100 ">
        <div className="fixed top-0 left-0 z-40 flex flex-col justify-center min-h-screen p-2 space-y-2 text-gray-500 bg-white shadow ">
          <AnchorLink
            className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
            href="#introduccion"
          >
            Intro
          </AnchorLink>
          {MethodList.map(method => (
            <AnchorLink
              className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50"
              href={`#${method.id}`}
              key={uuidv4()}
            >
              {method.name}
            </AnchorLink>
          ))}
          <Link href="/playground">
            <a className="w-full px-3 py-2 border-l-2 focus:text-pink-800 focus:font-bold focus:border-pink-800 focus:bg-pink-50">
              Playground
            </a>
          </Link>
        </div>
        <section className="max-w-5xl min-h-screen mx-auto my-6 bg-white shadow">
          <article
            id="introduccion"
            className="px-3 py-12 pb-3 mx-auto font-serif prose lg:prose-xl"
          >
            <IntroComponent />
          </article>
        </section>
        {MethodList.map((method, index) => {
          const MethodComponent =
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require(`../content/home/es/${method.id}.mdx`).default
          return (
            <div
              className={`relative flex items-center justify-center min-h-screen  bg-fixed bg-pink-800 pattern-grid-lg  ${rowClass(
                index
              )}`}
              id={method.id}
              key={uuidv4()}
            >
              <div className="grid grid-cols-2 gap-2 px-6 pb-6 mx-auto bg-pink-900 shadow-md max-w-7xl">
                <Fade delay={400}>
                  <div className="mt-5">
                    <Image
                      layout="responsive"
                      src={method.image}
                      alt="Ejemplo grafico"
                    />
                  </div>
                </Fade>
                <Fade>
                  <div className="flex flex-col items-center justify-center p-6 text-left text-white">
                    <div className="prose lg:prose-xl text-white">
                      <MethodComponent />
                    </div>
                    <div className="flex justify-start w-full">
                      <Link href={`/methods/${method.id}`}>
                        <a className="inline-block p-3 px-8 mt-4 font-bold text-pink-900 duration-500 bg-white rounded-md cursor-pointer hover:bg-gray-300">
                          Ver detalle
                        </a>
                      </Link>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
