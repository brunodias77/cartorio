import { Building2, Clock } from 'lucide-react';

export const Header = () => (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white border-b border-slate-200 z-20 flex items-center px-6 justify-between lg:pl-64">
        <div className="lg:hidden flex items-center gap-3 font-bold text-slate-700">
            <Building2 className="text-blue-600" /> Cartório Digital
        </div>
        <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500 ml-10">
            <Clock size={16} /> {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                AD
            </div>
        </div>
    </nav>
);
