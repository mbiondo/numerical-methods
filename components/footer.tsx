import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  return (
    <footer className="footer w-full pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-800 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-pink-900 font-bold mb-2">
              © 2021 Biondo Maximiliano
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
