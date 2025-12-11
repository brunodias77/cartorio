// features/protocols/constants/protocol.constants.ts

import { ProtocolStatus } from "../types/protocol.types";

export const STATUS_OPTIONS = [
  { value: ProtocolStatus.PENDING, label: "Pendente" },
  { value: ProtocolStatus.YES, label: "Sim" },
  { value: ProtocolStatus.NO, label: "Não" },
] as const;

export const INITIAL_PROTOCOL_DATA = {
  requestedStatus: ProtocolStatus.PENDING,
  sentStatus: ProtocolStatus.PENDING,
};

export const FORM_LABELS = {
  protocolNumber: "Protocolo",
  clientName: "Nome do Cliente",
  phoneNumber: "Telefone",
  requestedStatus: "Solicitado?",
  sentStatus: "Enviado?",
} as const;

export const MESSAGES = {
  deleteConfirm: "Tem certeza que deseja excluir este protocolo?",
  noDataFound: "Nenhum protocolo encontrado.",
  searchPlaceholder: "Buscar por cliente ou protocolo...",
} as const;
