import { FunctionComponent } from 'react'
import ActiveLink from '../components/active-link'
import Image from 'next/image'
import logoSVG from '../public/images/logo-uai.svg'

export const Hero: FunctionComponent = () => {
  return (
    <div className="relative top-0 z-50 bg-pink-900 shadow ">
      <nav className="flex items-center justify-between max-w-full p-4 mx-auto">
        <ActiveLink
          className="duration-500 transform"
          activeClassName="scale-95"
          href="/slides"
        >
          <Image src={logoSVG} alt="Logo UAI" />
        </ActiveLink>
        <div
          id="sideMenuHideOnMobile"
          className="flex flex-row gap-5 font-semibold text-white transition-all duration-500 transform translate-x-0"
        >
          <ActiveLink
            className="my-2 transition-all duration-500 border-b-2 sm:mx-2 hover:border-white hover:opacity-80 sm:p-0"
            activeClassName="border-pink-600 text-white-400"
            href="/playground"
          >
            Playground
          </ActiveLink>
        </div>
      </nav>
    </div>
  )
}
