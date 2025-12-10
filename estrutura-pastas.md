# Nova Estrutura de Pastas

```
src/
├── app/
│   ├── App.tsx                    # Componente raiz simplificado
│   └── providers/
│       └── AppProviders.tsx       # Futuros providers (Context, etc)
│
├── features/
│   └── protocols/
│       ├── components/
│       │   ├── ProtocolCard.tsx
│       │   ├── ProtocolForm.tsx
│       │   ├── ProtocolList.tsx
│       │   ├── ProtocolModal.tsx
│       │   ├── ProtocolStats.tsx
│       │   └── ProtocolSearch.tsx
│       ├── hooks/
│       │   ├── useProtocols.ts
│       │   └── useProtocolFilters.ts
│       ├── types/
│       │   └── protocol.types.ts
│       ├── utils/
│       │   ├── protocol.validators.ts
│       │   └── protocol.formatters.ts
│       └── constants/
│           └── protocol.constants.ts
│
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── Badge.types.ts
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.types.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.types.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.types.ts
│   │   │   └── Modal/
│   │   │       ├── Modal.tsx
│   │   │       └── Modal.types.ts
│   │   └── layout/
│   │       ├── Header/
│   │       │   └── Header.tsx
│   │       ├── Sidebar/
│   │       │   └── Sidebar.tsx
│   │       └── PageLayout/
│   │           └── PageLayout.tsx
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── common.types.ts
│   └── utils/
│       ├── date.utils.ts
│       ├── format.utils.ts
│       └── validation.utils.ts
│
├── styles/
│   └── index.css
│
└── main.tsx

```

## Princípios Aplicados

### 1. **Feature-Based Structure**

- Cada feature (protocols) tem sua própria pasta
- Facilita escalabilidade e manutenção

### 2. **Separation of Concerns**

- Components: apenas UI
- Hooks: lógica de estado e side effects
- Utils: funções puras e helpers
- Types: definições de tipos centralizadas

### 3. **Single Responsibility**

- Cada arquivo tem uma única responsabilidade
- Componentes menores e mais focados

### 4. **DRY (Don't Repeat Yourself)**

- Componentes compartilhados em `shared/`
- Lógica reutilizável em hooks e utils

### 5. **Open/Closed Principle**

- Componentes extensíveis via props
- Fácil adicionar novas features sem modificar existentes
