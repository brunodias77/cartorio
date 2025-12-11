// features/protocols/hooks/useProtocolFilters.ts

import { useState, useMemo, useCallback } from 'react';
import type { Protocol } from '../types/protocol.types';

export const useProtocolFilters = (protocols: Protocol[]) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProtocols = useMemo(() => {
        if (!searchTerm.trim()) return protocols;

        const lowerSearchTerm = searchTerm.toLowerCase();

        return protocols.filter(protocol =>
            protocol.clientName.toLowerCase().includes(lowerSearchTerm) ||
            protocol.protocolNumber.includes(lowerSearchTerm)
        );
    }, [protocols, searchTerm]);

    const handleSearchChange = useCallback((value: string) => {
        setSearchTerm(value);
    }, []);

    return {
        searchTerm,
        filteredProtocols,
        handleSearchChange,
    };
};