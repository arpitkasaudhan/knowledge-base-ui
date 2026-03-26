import { Bell, Search, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header
      className="flex items-center px-4 py-3 shrink-0"
      style={{ backgroundColor: '#1E1B4B' }}
    >
      {/* Logo + Workspace */}
      <div className="flex items-center gap-3 w-52 shrink-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
          style={{ backgroundColor: '#4F46E5' }}
        >
          W
        </div>
        <span className="text-white font-semibold text-base">Worcspace</span>
        <button className="flex items-center gap-1 text-gray-300 text-sm ml-1 hover:text-white transition-colors">
          Workspace 1
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-full max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/10 text-gray-200 placeholder-gray-400 rounded-md py-2 pl-9 pr-16 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs border border-gray-500 rounded px-1">
            ⌘K
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="text-gray-300 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
          style={{ backgroundColor: '#16A34A' }}
        >
          GK
        </div>
      </div>
    </header>
  )
}
