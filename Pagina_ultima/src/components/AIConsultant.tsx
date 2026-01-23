import React from 'react';

interface AIConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-end p-6 pointer-events-none">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl flex flex-col h-[400px] pointer-events-auto border border-slate-100 overflow-hidden">
        <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
          <span className="font-bold">Consultor BlackTI</span>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded">✕</button>
        </div>
        <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
          <p className="text-slate-600 mb-4">Estamos actualizando el sistema de IA.</p>
          <button onClick={onClose} className="bg-primary text-white px-6 py-2 rounded-xl">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
