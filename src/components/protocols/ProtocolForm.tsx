import { type FormEvent } from 'react';

type Status = 'Pendente' | 'Sim' | 'Não';

export interface ProtocolFormData {
    protocolo: string;
    cliente: string;
    telefone: string;
    solicitado: Status;
    enviado: Status;
}

interface ProtocolFormProps {
    initialData?: ProtocolFormData;
    onSubmit: (data: ProtocolFormData) => void;
    showProtocolField?: boolean;
    onCancel: () => void;
    submitLabel?: string;
}

export const ProtocolForm = ({ initialData, onSubmit, showProtocolField = true, onCancel, submitLabel = 'Salvar' }: ProtocolFormProps) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data: ProtocolFormData = {
            protocolo: formData.get('protocolo') as string || '',
            cliente: formData.get('cliente') as string || '',
            telefone: formData.get('telefone') as string || '',
            solicitado: (formData.get('solicitado') as Status) || 'Pendente',
            enviado: (formData.get('enviado') as Status) || 'Pendente',
        };

        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className={`grid ${showProtocolField ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {showProtocolField && (
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase">Protocolo</label>
                        <input
                            name="protocolo"
                            required
                            type="text"
                            defaultValue={initialData?.protocolo}
                            className="input-base w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                )}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Nome do Cliente</label>
                    <input
                        name="cliente"
                        required
                        type="text"
                        defaultValue={initialData?.cliente}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Telefone</label>
                <input
                    name="telefone"
                    required
                    type="tel"
                    defaultValue={initialData?.telefone}
                    className="input-base w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                />
            </div>


            <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Solicitado?</label>
                    <select
                        name="solicitado"
                        defaultValue={initialData?.solicitado || 'Pendente'}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">Enviado?</label>
                    <select
                        name="enviado"
                        defaultValue={initialData?.enviado || 'Pendente'}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
            </div>

            <div className="pt-4 flex gap-3">
                <button type="button" onClick={onCancel} className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200">Cancelar</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20">{submitLabel}</button>
            </div>
        </form>
    );
};
