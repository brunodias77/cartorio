// features/protocols/components/ProtocolList.tsx

import { Pencil, Trash2, Search } from 'lucide-react';
import { Card } from '../../../shared/components/ui/Card/Card';
import { Badge } from '../../../shared/components/ui/Badge/Badge';
import type { Protocol } from '../types/protocol.types';
import { formatDate } from '../../../shared/utils/date.utils';
import { MESSAGES } from '../constants/protocol.constants';

interface ProtocolListProps {
    protocols: Protocol[];
    onEdit: (protocol: Protocol) => void;
    onDelete: (id: string | number) => void;
}

export const ProtocolList = ({ protocols, onEdit, onDelete }: ProtocolListProps) => (
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
                    {protocols.length > 0 ? (
                        protocols.map((protocol) => (
                            <tr key={protocol.id} className="group">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-slate-800">
                                        {protocol.clientName}
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        Cadastrado em {formatDate(protocol.createdAt)}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                                    {protocol.phoneNumber}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Badge status={protocol.requestedStatus} />
                                </td>
                                <td className="px-6 py-4 font-mono text-sm font-medium text-slate-700">
                                    {protocol.protocolNumber}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Badge status={protocol.sentStatus} />
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => onEdit(protocol)}
                                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            aria-label="Editar protocolo"
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(protocol.id)}
                                            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                            aria-label="Excluir protocolo"
                                        >
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
                                    <p>{MESSAGES.noDataFound}</p>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Card>
);