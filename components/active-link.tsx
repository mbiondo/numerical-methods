import { useRouter } from 'next/router'
import { FunctionComponent, useCallback } from 'react'

interface activeLinkProps {
  children: React.ReactChild
  href: string
  className: string
  activeClassName: string
}

const ActiveLink: FunctionComponent<activeLinkProps> = ({
  children,
  href,
  activeClassName,
  className
}) => {
  const router = useRouter()

  const isActive = useCallback(() => {
    return router.route === href ? activeClassName : 'border-transparent'
  }, [router.route, href])

  return (
    <a
      href={href}
      className={`${className} ${isActive()}`}
      onClick={e => {
        e.preventDefault()
        router.push(href)
      }}
    >
      {children}
    </a>
  )
}

export default ActiveLink
