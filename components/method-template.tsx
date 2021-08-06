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
      <article className="flex flex-row gap-20 px-5 pt-6 lg:px-0" ref={ref}>
        <aside className="hidden table-of-contents lg:block">
          <div className="toc-sticky-container">
            <h3 className="py-2 text-2xl" id="table-of-contents">
              Tabla de contenido
            </h3>
            <ul className="w-full list-none">
              {headings.map(heading => (
                <li key={`heading-${heading.href}`} className="w-full py-2">
                  <a href={heading.href} className="min-w-full px-2 py-2">
                    {heading.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="p-6 bg-white shadow">
          <div className="prose lg:prose-xl post-content">{children}</div>
        </div>
      </article>
    </>
  )
}
