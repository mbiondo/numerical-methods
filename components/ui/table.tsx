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
      <div className="overflow-x-auto min-w-4xl ">
        <table className="w-full table-fixed">
          <thead className="justify-between ">
            <tr className="text-white bg-pink-900" key={uuidv4()}>
              {columns.map((column: Column) => (
                <th className="p-3 text-left" key={uuidv4()}>
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
                    className="text-left border-b border-gray-900"
                  >
                    {columns.map((column: Column) => (
                      <td className="p-3 py-2 truncate" key={uuidv4()}>
                        <span className="">
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
          <div className="grid justify-end w-full grid-rows-2 py-5">
            <span className="text-xs xs:text-sm text-white-900">
              Showing {perPage * (page - 1) + 1} to{' '}
              {perPage * page > items.length ? items.length : perPage * page} of{' '}
              {items.length} entries
            </span>
            <div className="grid justify-center grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setPage(page - 1)
                }}
                disabled={!havePrev()}
                className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
              >
                Prev
              </button>
              <button
                onClick={() => setPage(page + 1)}
                disabled={!haveNext()}
                className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
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
