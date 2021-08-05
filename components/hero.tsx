import { FunctionComponent } from 'react'
import ActiveLink from '../components/active-link'
import Image from 'next/image'
import logoSVG from '../public/images/logo-uai.svg'

export const Hero: FunctionComponent = () => {
  return (
    <nav className="px-4 py-4 bg-pink-900 shadow top-0 flex justify-between items-center">
      <ActiveLink className="" activeClassName="" href="/">
        <Image src={logoSVG} alt="Logo UAI" />
      </ActiveLink>
      <div
        id="sideMenuHideOnMobile"
        className="font-semibold flex flex-row gap-5 text-white px-10 transition-all duration-500 transform translate-x-0"
      >
        <ActiveLink
          className="sm:mx-2 my-2 border-b-2 hover:border-pink-600 hover:text-gray-400 transition-all duration-500 sm:p-0"
          activeClassName="border-pink-600 text-gray-400"
          href="/playground"
        >
          Playground
        </ActiveLink>
      </div>
    </nav>
  )
}
