import { Pencil, Trash2, Search } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProtocolItem {
    id: string | number;
    protocolo: string;
    cliente: string;
    telefone: string;
    data: string | number | Date;
    solicitado: string;
    enviado: string;
}

interface ProtocolTableProps {
    data: ProtocolItem[];
    onEdit: (item: ProtocolItem) => void;
    onDelete: (id: string | number) => void;
}

export const ProtocolTable = ({ data, onEdit, onDelete }: ProtocolTableProps) => (
    <Card className="overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-500 font-semibold">

                        <th className="px-6 py-4">Cliente</th>
                        <th className="px-6 py-4">Telefone</th>
                        <th className="px-6 py-4 text-center">Solicitado?</th>
                        <th className="px-6 py-4">Protocolo</th>
                        <th className="px-6 py-4 text-center">Enviado?</th>
                        <th className="px-6 py-4 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id} className=" group">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-slate-800">{item.cliente}</div>
                                    <div className="text-xs text-slate-400">Cadastrado em {new Date(item.data).toLocaleDateString()}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-mono">{item.telefone}</td>
                                <td className="px-6 py-4 text-center"><Badge status={item.solicitado} /></td>
                                <td className="px-6 py-4 font-mono text-sm font-medium text-slate-700">{item.protocolo}</td>
                                <td className="px-6 py-4 text-center"><Badge status={item.enviado} /></td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => onEdit(item)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Pencil size={18} />
                                        </button>
                                        <button onClick={() => onDelete(item.id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center">
                                        <Search size={24} className="text-slate-300" />
                                    </div>
                                    <p>Nenhum protocolo encontrado.</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Card>
);
