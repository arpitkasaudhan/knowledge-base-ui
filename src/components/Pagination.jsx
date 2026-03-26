import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function Pagination({ totalRows, rowsPerPage, currentPage, totalPages }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white text-sm text-gray-600">
      <span>{totalRows} rows</span>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select
            defaultValue={rowsPerPage}
            className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-400"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-40"
            disabled={currentPage === 1}
          >
            <ChevronsLeft size={16} />
          </button>
          <button
            className="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-40"
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </button>

          <span className="px-2 text-gray-700">
            page {currentPage} of {totalPages}
          </span>

          <button
            className="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-40"
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </button>
          <button
            className="p-1 rounded hover:bg-gray-100 transition-colors disabled:opacity-40"
            disabled={currentPage === totalPages}
          >
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
