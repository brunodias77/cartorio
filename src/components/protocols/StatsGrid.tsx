import { FileDigit, Clock, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card'; // Ajuste o import conforme necessário

interface Stats {
    total: number;
    pendenteEnvio: number;
    concluidos: number;
}

export const StatsGrid = ({ stats }: { stats: Stats }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 flex items-center justify-between border-l-4 border-l-blue-500">
            <div>
                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Total de Protocolos</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">{stats.total}</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-full text-blue-600"><FileDigit size={24} /></div>
        </Card>

        <Card className="p-6 flex items-center justify-between border-l-4 border-l-amber-500">
            <div>
                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Envios Pendentes</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">{stats.pendenteEnvio}</h3>
            </div>
            <div className="p-3 bg-amber-50 rounded-full text-amber-600"><Clock size={24} /></div>
        </Card>

        <Card className="p-6 flex items-center justify-between border-l-4 border-l-emerald-500">
            <div>
                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Concluídos</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-1">{stats.concluidos}</h3>
            </div>
            <div className="p-3 bg-emerald-50 rounded-full text-emerald-600"><CheckCircle2 size={24} /></div>
        </Card>
    </div>
);
