// app/App.tsx

import { useState } from 'react';
import { Header } from '../shared/components/layout/Header';
import { Sidebar } from '../shared/components/layout/sidebar';
import { ProtocolList } from '../features/protocols/components/protocol-list';
import { ProtocolStats } from '../features/protocols/components/protocol-stats';
import { ProtocolSearch } from '../features/protocols/components/protocol-search';
import { CreateProtocolModal, EditProtocolModal } from '../features/protocols/components/protocol-modal';
import { useProtocols } from '../features/protocols/hooks/useProtocols';
import { useProtocolFilters } from '../features/protocols/hooks/useProtocolFilters';
import type { Protocol, ProtocolFormData } from '../features/protocols/types/protocol.types';

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingProtocol, setEditingProtocol] = useState<Protocol | null>(null);

  const {
    protocols,
    createProtocol,
    updateProtocol,
    deleteProtocol,
    getStats,
  } = useProtocols();

  const {
    searchTerm,
    filteredProtocols,
    handleSearchChange,
  } = useProtocolFilters(protocols);

  const stats = getStats();

  const handleCreateClick = () => setIsCreateModalOpen(true);
  const handleEditClick = (protocol: Protocol) => setEditingProtocol(protocol);
  const handleCloseModals = () => {
    setIsCreateModalOpen(false);
    setEditingProtocol(null);
  };

  const handleCreateSubmit = (data: ProtocolFormData) => {
    createProtocol(data);
    handleCloseModals();
  };

  const handleEditSubmit = (data: ProtocolFormData) => {
    if (editingProtocol) {
      updateProtocol(editingProtocol.id, data);
      handleCloseModals();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <Sidebar />

      <main className="pt-24 px-4 pb-12 lg:pl-72 lg:pr-8 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Controle de IBTI</h1>
          <p className="text-slate-500 text-sm">
            Gerencie solicitações e envios de documentos do cartório.
          </p>
        </header>

        <ProtocolStats stats={stats} />

        <ProtocolSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onCreateClick={handleCreateClick}
        />

        <ProtocolList
          protocols={filteredProtocols}
          onEdit={handleEditClick}
          onDelete={deleteProtocol}
        />
      </main>

      <CreateProtocolModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseModals}
        onSubmit={handleCreateSubmit}
      />

      <EditProtocolModal
        isOpen={!!editingProtocol}
        onClose={handleCloseModals}
        onSubmit={handleEditSubmit}
        initialData={editingProtocol as ProtocolFormData}
      />
    </div>
  );
}

export default App;