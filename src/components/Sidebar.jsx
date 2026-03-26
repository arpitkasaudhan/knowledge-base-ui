import {
  Bot,
  Brain,
  BookOpen,
  CheckCircle,
  Server,
  List,
  Zap,
  Briefcase,
  Play,
  Lock,
  Database,
  Key,
  Building2,
  Plug,
} from 'lucide-react'

const navSections = [
  {
    label: 'MY PROJECTS',
    items: [
      { icon: Bot, label: 'Agents' },
      { icon: Brain, label: 'AI Models' },
      { icon: BookOpen, label: 'Library' },
    ],
  },
  {
    label: 'ORCHESTRATOR',
    items: [
      { icon: CheckCircle, label: 'Published' },
      { icon: Server, label: 'Machines' },
      { icon: List, label: 'Queues' },
      { icon: Zap, label: 'Triggers' },
      { icon: Briefcase, label: 'Jobs' },
      { icon: Play, label: 'Executions' },
      { icon: Lock, label: 'Vault' },
      { icon: Database, label: 'Knowledge Base', active: true },
      { icon: Key, label: 'Key Store' },
    ],
  },
  {
    label: 'ADMIN',
    items: [
      { icon: Building2, label: 'Tenant' },
      { icon: Plug, label: 'Integrations' },
    ],
  },
]

function NavItem({ icon: Icon, label, active }) {
  return (
    <li>
      <button
        className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md text-left transition-colors ${
          active
            ? 'text-white border-l-2 border-indigo-400 bg-white/10 pl-[14px]'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <Icon size={16} className={active ? 'text-indigo-400' : ''} />
        <span>{label}</span>
      </button>
    </li>
  )
}

export default function Sidebar() {
  return (
    <aside
      className="w-52 shrink-0 overflow-y-auto py-4"
      style={{ backgroundColor: '#1E1B4B' }}
    >
      {navSections.map((section) => (
        <div key={section.label} className="mb-4">
          <p className="px-4 mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            {section.label}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
