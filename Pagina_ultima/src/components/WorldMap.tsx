import React from 'react';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';

interface WorldMapProps {
  onSelectOffice: (office: OfficeLocation) => void;
  selectedOfficeId: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ onSelectOffice, selectedOfficeId }) => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto max-h-[500px] drop-shadow-[0_0_30px_rgba(19,91,236,0.1)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mapa Mundial Detallado */}
        <path
          d="M162.3,161.2c-2.3,1.4-4.8,2.7-7.3,4c-5.1,2.6-10.2,5.1-15.3,7.7c-0.6,0.3-1.3,0.6-1.9,1c-4.9,2.8-9.8,5.7-14.4,9.1 c-1.2,0.9-2.3,1.8-3.5,2.7c-4,3.3-7.8,7-11.2,11.1c-0.4,0.5-0.9,1-1.3,1.5c-3,3.7-5.5,7.7-7.5,12c-0.2,0.4-0.4,0.9-0.6,1.3 c-1.6,3.6-2.8,7.3-3.6,11.2c-0.1,0.5-0.2,1-0.3,1.5c-0.6,4.1-0.7,8.2-0.3,12.3c0,0.6,0.1,1.1,0.2,1.7c0.6,4.3,1.8,8.5,3.6,12.4 c0.3,0.6,0.5,1.3,0.8,1.9c2,4.1,4.7,7.8,7.9,11.1c0.4,0.4,0.8,0.8,1.3,1.2c4,3.6,8.6,6.4,13.6,8.4c0.5,0.2,1.1,0.4,1.6,0.6 c5.1,1.9,10.5,3,15.9,3.3c0.7,0,1.3,0,2,0c5.3-0.3,10.6-1.5,15.6-3.6c0.6-0.2,1.2-0.5,1.7-0.8c4.6-2.3,8.7-5.5,12.1-9.4 c0.3-0.4,0.6-0.8,0.9-1.2c3-4,5.2-8.5,6.5-13.2c0.1-0.5,0.2-1,0.3-1.5c1-4.8,1.2-9.7,0.5-14.6c-0.1-0.6-0.2-1.3-0.4-1.9 c-1.2-4.9-3.2-9.6-6-13.8c-0.3-0.5-0.7-1-1.1-1.5c-3.2-4.1-7.2-7.5-11.7-10.2c-0.5-0.3-1-0.6-1.5-0.9 C174.1,166.4,168.4,163.2,162.3,161.2z M852.1,114.7c-50,0-80,40-100,90s-10,120,40,150s110-20,130-70S892.1,114.7,852.1,114.7z M450.1,294.7c-20,50-60,80-110,80s-90-40-90-90s40-90,90-90S470.1,244.7,450.1,294.7z M600.1,94.7c-30,0-50,20-50,50s20,50,50,50 s50-20,50-50S630.1,94.7,600.1,94.7z"
          fill="currentColor"
          className="text-slate-800/40"
        />
        
        {/* Grilla Global */}
        <path
          d="M0,250 L1000,250 M500,0 L500,500"
          stroke="currentColor"
          className="text-slate-800/20"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />

        {/* Puntos de Oficinas */}
        {OFFICE_LOCATIONS.map((office) => {
          const x = (office.coordinates[0] + 180) * (1000 / 360);
          const y = (90 - office.coordinates[1]) * (500 / 180);
          const isSelected = selectedOfficeId === office.id;

          return (
            <g
              key={office.id}
              className="cursor-pointer group"
              onClick={() => onSelectOffice(office)}
            >
              {/* Resplandor seleccionado */}
              {isSelected && (
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  className="fill-[#135bec]/20 animate-pulse"
                />
              )}
              
              {/* Punto central */}
              <circle
                cx={x}
                cy={y}
                r={isSelected ? "6" : "4"}
                className={`transition-all duration-300 ${
                  isSelected 
                    ? 'fill-[#135bec] shadow-[0_0_15px_rgba(19,91,236,0.5)]' 
                    : 'fill-slate-600 group-hover:fill-[#135bec]'
                }`}
              />
              
              {/* Anillo de pulso */}
              {isSelected && (
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  stroke="#135bec"
                  strokeWidth="2"
                  fill="none"
                  className="animate-[ping_2s_linear_infinite] opacity-30"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WorldMap;
