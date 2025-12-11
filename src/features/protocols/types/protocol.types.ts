// features/protocols/types/protocol.types.ts

export const ProtocolStatus = {
  PENDING: "Pendente",
  YES: "Sim",
  NO: "Não",
} as const;

export type ProtocolStatus =
  (typeof ProtocolStatus)[keyof typeof ProtocolStatus];

export interface Protocol {
  id: string | number;
  protocolNumber: string;
  clientName: string;
  phoneNumber: string;
  createdAt: Date;
  requestedStatus: ProtocolStatus;
  sentStatus: ProtocolStatus;
}

export interface ProtocolFormData {
  protocolNumber: string;
  clientName: string;
  phoneNumber: string;
  requestedStatus: ProtocolStatus;
  sentStatus: ProtocolStatus;
}

export interface CreateProtocolData
  extends Omit<ProtocolFormData, "protocolNumber"> {}

export interface ProtocolStats {
  total: number;
  pendingSent: number;
  completed: number;
}

export interface ProtocolFilters {
  searchTerm: string;
}
