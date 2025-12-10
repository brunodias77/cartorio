import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { XCircle } from 'lucide-react';

type Status = 'Pendente' | 'Sim' | 'Não';

interface ProtocolForm {
    protocolo: string;
    cliente: string;
    telefone: string;
    solicitado: Status;
    enviado: Status;
}

const INITIAL_FORM: ProtocolForm = { protocolo: '', cliente: '', telefone: '', solicitado: 'Pendente', enviado: 'Pendente' };

interface ProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ProtocolForm) => void;
    initialData?: ProtocolForm;
}

export const ProtocolModal = ({ isOpen, onClose, onSubmit, initialData }: ProtocolModalProps) => {
    const [formData, setFormData] = useState<ProtocolForm>(INITIAL_FORM);

    useEffect(() => {
        if (isOpen) {
            setFormData(initialData || INITIAL_FORM);
        }
    }, [isOpen, initialData]);

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-lg text-slate-800">{initialData ? 'Editar Documento' : 'Novo Documento'}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><XCircle size={24} /></button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Protocolo</label>
                            <input type="text" className="input-base w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                                value={formData.protocolo} onChange={e => setFormData({ ...formData, protocolo: e.target.value })} />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Telefone</label>
                            <input required type="tel" className="input-base w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                                value={formData.telefone} onChange={e => setFormData({ ...formData, telefone: e.target.value })} />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase">Nome do Cliente</label>
                        <input required type="text" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                            value={formData.cliente} onChange={e => setFormData({ ...formData, cliente: e.target.value })} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Solicitado?</label>
                            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                                value={formData.solicitado} onChange={e => setFormData({ ...formData, solicitado: e.target.value as Status })}>
                                <option value="Pendente">Pendente</option><option value="Sim">Sim</option><option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Enviado?</label>
                            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                                value={formData.enviado} onChange={e => setFormData({ ...formData, enviado: e.target.value as Status })}>
                                <option value="Pendente">Pendente</option><option value="Sim">Sim</option><option value="Não">Não</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button type="button" onClick={onClose} className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200">Cancelar</button>
                        <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20">{initialData ? 'Salvar' : 'Criar'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
