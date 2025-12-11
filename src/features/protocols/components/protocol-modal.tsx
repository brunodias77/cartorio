// features/protocols/components/ProtocolModal.tsx

import { XCircle } from 'lucide-react';
import { ProtocolForm } from './protocol-form';
import type { ProtocolFormData, CreateProtocolData } from '../types/protocol.types';

interface ModalWrapperProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

const ModalWrapper = ({ children, title, onClose }: ModalWrapperProps) => (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-lg text-slate-800">{title}</h3>
                <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600"
                    aria-label="Fechar modal"
                >
                    <XCircle size={24} />
                </button>
            </div>
            {children}
        </div>
    </div>
);

interface CreateProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: CreateProtocolData) => void;
}

export const CreateProtocolModal = ({
    isOpen,
    onClose,
    onSubmit,
}: CreateProtocolModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalWrapper title="Novo Documento" onClose={onClose}>
            <ProtocolForm
                onSubmit={onSubmit}
                onCancel={onClose}
                submitLabel="Criar"
                showProtocolNumber={false}
            />
        </ModalWrapper>
    );
};

interface EditProtocolModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ProtocolFormData) => void;
    initialData: ProtocolFormData;
}

export const EditProtocolModal = ({
    isOpen,
    onClose,
    onSubmit,
    initialData,
}: EditProtocolModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalWrapper title="Editar Documento" onClose={onClose}>
            <ProtocolForm
                initialData={initialData}
                onSubmit={onSubmit}
                onCancel={onClose}
                showProtocolNumber={true}
                submitLabel="Salvar"
            />
        </ModalWrapper>
    );
};