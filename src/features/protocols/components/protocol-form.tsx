// features/protocols/components/ProtocolForm.tsx

import { type FormEvent } from 'react';
import type { ProtocolFormData, CreateProtocolData } from '../types/protocol.types';
import { ProtocolStatus } from '../types/protocol.types';
import { STATUS_OPTIONS, FORM_LABELS } from '../constants/protocol.constants';

interface ProtocolFormProps {
    initialData?: Partial<ProtocolFormData>;
    onSubmit: (data: ProtocolFormData | CreateProtocolData) => void;
    onCancel: () => void;
    submitLabel?: string;
    showProtocolNumber?: boolean;
}

export const ProtocolForm = ({
    initialData,
    onSubmit,
    onCancel,
    submitLabel = 'Salvar',
    showProtocolNumber = true,
}: ProtocolFormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const data: ProtocolFormData = {
            protocolNumber: formData.get('protocolNumber') as string || '',
            clientName: formData.get('clientName') as string || '',
            phoneNumber: formData.get('phoneNumber') as string || '',
            requestedStatus: (formData.get('requestedStatus') as ProtocolStatus) || ProtocolStatus.PENDING,
            sentStatus: (formData.get('sentStatus') as ProtocolStatus) || ProtocolStatus.PENDING,
        };

        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className={`grid ${showProtocolNumber ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {showProtocolNumber && (
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase">
                            {FORM_LABELS.protocolNumber}
                        </label>
                        <input
                            name="protocolNumber"
                            required
                            type="text"
                            defaultValue={initialData?.protocolNumber}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                    </div>
                )}
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">
                        {FORM_LABELS.clientName}
                    </label>
                    <input
                        name="clientName"
                        required
                        type="text"
                        defaultValue={initialData?.clientName}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                    {FORM_LABELS.phoneNumber}
                </label>
                <input
                    name="phoneNumber"
                    required
                    type="tel"
                    defaultValue={initialData?.phoneNumber}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">
                        {FORM_LABELS.requestedStatus}
                    </label>
                    <select
                        name="requestedStatus"
                        defaultValue={initialData?.requestedStatus || ProtocolStatus.PENDING}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                        {STATUS_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase">
                        {FORM_LABELS.sentStatus}
                    </label>
                    <select
                        name="sentStatus"
                        defaultValue={initialData?.sentStatus || ProtocolStatus.PENDING}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                        {STATUS_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="pt-4 flex gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
};