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
          href="/"
        >
          <Image src={logoSVG} alt="Logo UAI" />
        </ActiveLink>
        <div
          id="sideMenuHideOnMobile"
          className="flex flex-row gap-5 font-semibold text-white transition-all duration-500 transform translate-x-0"
        ></div>
      </nav>
    </div>
  )
}
