import React from 'react';
import { MapPin, Building2, Globe2, Mail } from 'lucide-react';
import { OfficeLocation } from '../types';
import ScrollAnimation from './ScrollAnimation';

interface OfficeDetailsProps {
  office: OfficeLocation;
}

const OfficeDetails: React.FC<OfficeDetailsProps> = ({ office }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#135bec]/10 rounded-lg text-[#135bec]">
          <Building2 size={20} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#135bec]">
          {office.type}
        </span>
      </div>

      <h3 className="text-3xl font-bold text-white mb-2">{office.city}</h3>
      <p className="text-slate-400 flex items-center gap-2 mb-8 italic text-sm">
        <Globe2 size={16} /> {office.country}
      </p>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="mt-1 text-slate-500"><MapPin size={18} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Dirección</p>
            <p className="text-slate-300 text-sm leading-relaxed">{office.address}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1 text-slate-500"><Mail size={18} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Contacto</p>
            <p className="text-slate-300 text-sm">contacto@blackti.cl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
