// features/protocols/hooks/useProtocols.ts

import { useState, useCallback } from 'react';
import type { Protocol, ProtocolFormData, CreateProtocolData, ProtocolStats } from '../types/protocol.types';
import { ProtocolStatus } from '../types/protocol.types';
import { MESSAGES } from '../constants/protocol.constants';

const INITIAL_PROTOCOLS: Protocol[] = [
    {
        id: 1,
        protocolNumber: '12345',
        clientName: 'João da Silva',
        phoneNumber: '(11) 99999-9999',
        createdAt: new Date(),
        requestedStatus: ProtocolStatus.PENDING,
        sentStatus: ProtocolStatus.YES,
    },
];

export const useProtocols = () => {
    const [protocols, setProtocols] = useState<Protocol[]>(INITIAL_PROTOCOLS);

    const createProtocol = useCallback((data: CreateProtocolData) => {
        const newProtocol: Protocol = {
            id: Date.now(),
            protocolNumber: '',
            createdAt: new Date(),
            ...data,
        };

        setProtocols(prev => [newProtocol, ...prev]);
    }, []);

    const updateProtocol = useCallback((id: string | number, data: ProtocolFormData) => {
        setProtocols(prev =>
            prev.map(protocol =>
                protocol.id === id
                    ? { ...protocol, ...data }
                    : protocol
            )
        );
    }, []);

    const deleteProtocol = useCallback((id: string | number) => {
        if (!window.confirm(MESSAGES.deleteConfirm)) return;

        setProtocols(prev => prev.filter(protocol => protocol.id !== id));
    }, []);

    const getStats = useCallback((): ProtocolStats => {
        return {
            total: protocols.length,
            pendingSent: protocols.filter(p => p.sentStatus === ProtocolStatus.PENDING).length,
            completed: protocols.filter(p => p.sentStatus === ProtocolStatus.YES).length,
        };
    }, [protocols]);

    return {
        protocols,
        createProtocol,
        updateProtocol,
        deleteProtocol,
        getStats,
    };
};