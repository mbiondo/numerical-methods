import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full pt-1 footer">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mt-2 border-t-2 border-gray-100">
          <div className="py-6 text-center sm:w-2/3">
            <p className="mb-2 text-sm font-bold text-pink-900">
              © 2021 Biondo Maximiliano
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
