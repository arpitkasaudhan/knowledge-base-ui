import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

export default function CreateNewModal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002',
  })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Handle creation logic here
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/40"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white h-full w-full max-w-sm shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 border-b border-gray-100">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Create New Knowledge Base
            </h2>
            <p className="text-xs text-gray-500 mt-1 max-w-xs">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4 mt-0.5"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 p-5 gap-5 overflow-y-auto">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Name{' '}
              <span className="text-gray-500 font-normal text-xs">
                (Cannot be edited later)
              </span>
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 resize-none"
            />
          </div>

          {/* Vector Store */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="vectorStore"
                value={form.vectorStore}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white"
              >
                <option value="Qdrant">Qdrant</option>
                <option value="Pinecone">Pinecone</option>
                <option value="Weaviate">Weaviate</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="embeddingModel"
                value={form.embeddingModel}
                onChange={handleChange}
                className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white"
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                <option value="text-embedding-3-small">text-embedding-3-small</option>
                <option value="text-embedding-3-large">text-embedding-3-large</option>
              </select>
              <ChevronDown
                size={16}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="p-5 border-t border-gray-100">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2.5 rounded-md text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#4F46E5' }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
