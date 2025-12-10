import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import './App.css'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { ProtocolTable } from './components/protocols/ProtocolTable'
import { StatsGrid } from './components/protocols/StatsGrid'
import { ProtocolModal } from './components/protocols/ProtocolModal';

interface ProtocolItem {
  id: string | number;
  protocolo: string;
  cliente: string;
  telefone: string;
  data: string | number | Date;
  solicitado: 'Pendente' | 'Sim' | 'Não' | string;
  enviado: 'Pendente' | 'Sim' | 'Não' | string;
}

const INITIAL_DATA: ProtocolItem[] = [
  {
    id: 1,
    protocolo: '12345',
    cliente: 'João da Silva',
    telefone: '(11) 99999-9999',
    data: new Date(),
    solicitado: 'Pendente',
    enviado: 'Sim'
  }
];

function App() {
  const [items, setItems] = useState<ProtocolItem[]>(INITIAL_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateInit = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditInit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string | number) => {
    if (confirm('Tem certeza que deseja excluir este protocolo?')) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleFormSubmit = (formData: any) => {
    if (editingItem) {
      setItems(prev => prev.map(item =>
        item.id === editingItem.id ? { ...formData, id: item.id, data: item.data } : item
      ));
    } else {
      const newItem = {
        ...formData,
        id: Date.now(),
        data: new Date()
      };
      setItems(prev => [newItem, ...prev]);
    }
    setIsModalOpen(false);
  };

  const filteredTodos = items.filter(item =>
    item.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.protocolo.includes(searchTerm)
  );

  const stats = {
    total: items.length,
    pendenteEnvio: items.filter(i => i.enviado === 'Pendente').length,
    concluidos: items.filter(i => i.enviado === 'Sim').length
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Header />
      <Sidebar />
      <main className="pt-24 px-4 pb-12 lg:pl-72 lg:pr-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Controle de IBTI</h1>
          <p className="text-slate-500 text-sm">Gerencie solicitações e envios de documentos do cartório.</p>
        </div>

        <StatsGrid stats={stats} />

        <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Buscar por cliente ou protocolo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-sm"
            />
          </div>
          <button
            onClick={handleCreateInit}
            className="w-full md:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Plus size={20} />
            Novo Protocolo
          </button>
        </div>

        <ProtocolTable
          data={filteredTodos}
          onEdit={handleEditInit}
          onDelete={handleDelete}
        />
      </main>

      <ProtocolModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingItem}
      />
    </div>
  )
}

export default App
