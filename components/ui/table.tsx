/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TeX from '@matejmazur/react-katex'

interface Column {
  title: string
  accesor: string
  isTex: boolean
}

interface tableProps {
  items: Array<any>
  columns: Array<Column>
}

export const Table: FunctionComponent<tableProps> = ({ items, columns }) => {
  const [page, setPage] = useState<number>(1)
  const [perPage] = useState<number>(10)
  const totalPages: number =
    items.length % perPage === 0
      ? Math.floor(items.length / perPage)
      : Math.floor(items.length / perPage) + 1

  const havePrev = (): boolean => {
    return page > 1
  }

  const haveNext = (): boolean => {
    return page < totalPages
  }

  return (
    <>
      <div className="min-w-4xl max-w-4xl  overflow-x-auto ">
        <table className="table-auto  w-full">
          <thead className="justify-between ">
            <tr className="bg-pink-900 text-white" key={uuidv4()}>
              {columns.map((column: Column) => (
                <th className="p-3 text-center" key={uuidv4()}>
                  {column.isTex ? (
                    <TeX>{column.title}</TeX>
                  ) : (
                    <span>{column.title}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {items
              .slice(perPage * (page - 1), perPage * page)
              .map((item: any) => {
                return (
                  <tr
                    key={uuidv4()}
                    className="border-b border-gray-900 text-right"
                  >
                    {columns.map((column: Column) => (
                      <td className="p-3 py-2" key={uuidv4()}>
                        <span className="font-bold">
                          {item[column.accesor]}
                        </span>
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
        {totalPages > 1 ? (
          <div className="w-full py-5 grid grid-rows-2 justify-end">
            <span className="text-xs xs:text-sm text-white-900">
              Showing {perPage * (page - 1) + 1} to{' '}
              {perPage * page > items.length ? items.length : perPage * page} of{' '}
              {items.length} entries
            </span>
            <div className="grid grid-cols-2 gap-2 justify-center">
              <button
                onClick={() => {
                  setPage(page - 1)
                }}
                disabled={!havePrev()}
                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                onClick={() => setPage(page + 1)}
                disabled={!haveNext()}
                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
