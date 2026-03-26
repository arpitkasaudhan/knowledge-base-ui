import { MoreVertical } from 'lucide-react'

export default function KnowledgeBaseCard({ title, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors -mr-1">
          <MoreVertical size={16} />
        </button>
      </div>

      <p className="text-gray-500 text-xs leading-relaxed flex-1">{description}</p>

      <p className="text-gray-400 text-xs mt-auto">Created On: {createdOn}</p>
    </div>
  )
}
