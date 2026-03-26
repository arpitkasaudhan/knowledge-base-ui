import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import KnowledgeBasePage from './components/KnowledgeBasePage'
import CreateNewModal from './components/CreateNewModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <KnowledgeBasePage onCreateNew={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <CreateNewModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}

export default App
