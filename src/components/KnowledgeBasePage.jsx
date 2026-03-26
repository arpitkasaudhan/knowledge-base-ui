import { Search, Plus } from 'lucide-react'
import KnowledgeBaseCard from './KnowledgeBaseCard'
import Pagination from './Pagination'

const DUMMY_CARDS = [
  {
    id: 1,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
  {
    id: 2,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
  {
    id: 3,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
  {
    id: 4,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
  {
    id: 5,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
  {
    id: 6,
    title: 'Test',
    description:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy',
    createdOn: '14/07/2025',
  },
]

export default function KnowledgeBasePage({ onCreateNew }) {
  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
      {/* Page Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Knowledge Base</h1>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md pl-9 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 w-52"
            />
          </div>

          <button
            onClick={onCreateNew}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4F46E5' }}
          >
            <Plus size={16} />
            Create New
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          {DUMMY_CARDS.map((card) => (
            <KnowledgeBaseCard
              key={card.id}
              title={card.title}
              description={card.description}
              createdOn={card.createdOn}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        totalRows={6}
        rowsPerPage={10}
        currentPage={1}
        totalPages={1}
      />
    </main>
  )
}
