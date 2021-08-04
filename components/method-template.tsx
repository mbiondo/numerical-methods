import { useEffect, useRef, useState, FunctionComponent } from 'react'

interface HeadingElement {
  label: string
  href: string
}

export const MethodTemplate: FunctionComponent = ({ children }) => {
  const [headings, setHeadings] = useState<Array<HeadingElement>>([])
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    const post = ref.current || document
    const headingElements = post.querySelectorAll('.post-content h2')

    const callback = ([entry]: Array<IntersectionObserverEntry>) => {
      const activeHeading = entry.target
      const links = Array.from(
        document.querySelectorAll('.table-of-contents a')
      )

      links.forEach(link => {
        const [, href] = (link as HTMLAnchorElement).href.split('#')

        if (entry.isIntersecting && href === activeHeading.id) {
          links.forEach(l =>
            l.parentElement?.classList.remove(
              'border-l-2',
              'border-pink-800',
              'bg-pink-50'
            )
          )
          link.parentElement?.classList.add(
            'border-l-2',
            'border-pink-800',
            'bg-pink-50'
          )
        }
      })
    }

    const observer = new IntersectionObserver(callback, { threshold: [0.8] })

    setHeadings(
      Array.from(headingElements)
        .filter(h2 => h2.id !== 'table-of-contents')
        .map(h2 => {
          observer.observe(h2)

          return {
            label: (h2 as HTMLElement).innerText,
            href: `#${h2.id}`
          }
        })
    )

    return () => {
      Array.from(headingElements).map(h2 => {
        observer.unobserve(h2)
      })
    }
  }, [ref])

  return (
    <>
      <article className="flex flex-row gap-20 px-5 lg:px-0" ref={ref}>
        <aside className="table-of-contents hidden lg:block">
          <div className="toc-sticky-container">
            <h3 className="text-2xl py-2" id="table-of-contents">
              Tabla de contenido
            </h3>
            <ul className="list-none w-full">
              {headings.map(heading => (
                <li key={`heading-${heading.href}`} className="py-2 w-full">
                  <a href={heading.href} className="px-2 py-2 min-w-full">
                    {heading.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="prose lg:prose-xl post-content">{children}</div>
      </article>
    </>
  )
}
