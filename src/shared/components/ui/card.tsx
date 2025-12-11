// shared/components/ui/Card/Card.tsx

import type { CardProps } from '../types/card.types';

export const Card = ({ children, className = '' }: CardProps) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 ${className}`}>
        {children}
    </div>
);