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
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* MAPA MUNDIAL DETALLADO */}
        <path
          d="M208.2,143.1c-0.6-0.2-1.2-0.4-1.8-0.6c-5-1.5-10.1-2.4-15.3-2.6c-0.6,0-1.2,0-1.8,0.1c-4.4,0.4-8.8,1.4-13.1,2.9 c-1.5,0.5-2.9,1.1-4.4,1.8c-3.6,1.7-7,3.9-10.2,6.4c-0.4,0.3-0.8,0.6-1.2,1c-3.4,3.2-6.4,6.8-8.8,10.7c-0.2,0.4-0.4,0.8-0.7,1.2 c-1.5,2.7-2.7,5.5-3.6,8.5c-0.2,0.8-0.4,1.6-0.6,2.4c-0.7,3.4-1.1,6.8-1,10.2c0,0.6,0.1,1.1,0.1,1.7c0.4,4.4,1.5,8.7,3.2,12.8 c0.3,0.7,0.6,1.4,1,2.1c2,4.1,4.7,7.8,7.9,11.1c0.4,0.4,0.8,0.8,1.3,1.2c4,3.6,8.6,6.4,13.6,8.4c0.5,0.2,1.1,0.4,1.6,0.6 c5.1,1.9,10.5,3,15.9,3.3c0.7,0,1.3,0,2,0c5.3-0.3,10.6-1.5,15.6-3.6c0.6-0.2,1.2-0.5,1.7-0.8c4.6-2.3,8.7-5.5,12.1-9.4 c0.3-0.4,0.6-0.8,0.9-1.2c3-4,5.2-8.5,6.5-13.2c0.1-0.5,0.2-1,0.3-1.5c1-4.8,1.2-9.7,0.5-14.6c-0.1-0.6-0.2-1.3-0.4-1.9 c-1.2-4.9-3.2-9.6-6-13.8c-0.3-0.5-0.7-1-1.1-1.5C222.8,152.1,216.1,146.5,208.2,143.1z M852,120c-50,0-80,40-100,90s-10,120,40,150 s110-20,130-70S892,120,852,120z M450,300c-20,50-60,80-110,80s-90-40-90-90s40-90,90-90S470,250,450,300z M600,100 c-30,0-50,20-50,50s20,50,50,50s50-20,50-50S630,100,600,100z" 
          fill="#1e293b" 
          className="text-slate-800/40"
        />
        
        {/* GRILLA SIMPLIFICADA */}
        <path
          d="M0,250 L1000,250 M500,0 L500,500"
          stroke="#334155"
          className="opacity-20"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />

        {OFFICE_LOCATIONS.map((office) => {
          // Proyección Mercator simplificada para los puntos
          const x = (office.coordinates[0] + 180) * (1000 / 360);
          const y = (90 - office.coordinates[1]) * (500 / 180);
          const isSelected = selectedOfficeId === office.id;

          return (
            <g
              key={office.id}
              className="cursor-pointer group"
              onClick={() => onSelectOffice(office)}
            >
              {isSelected && (
                <circle cx={x} cy={y} r="15" className="fill-[#135bec]/20 animate-pulse" />
              )}
              
              <circle
                cx={x}
                cy={y}
                r={isSelected ? "6" : "4"}
                className={`transition-all duration-300 ${
                  isSelected 
                    ? 'fill-[#135bec] shadow-[0_0_15px_rgba(19,91,236,0.8)]' 
                    : 'fill-slate-500 group-hover:fill-[#135bec]'
                }`}
              />
              
              {isSelected && (
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  stroke="#135bec"
                  strokeWidth="2"
                  fill="none"
                  className="animate-[ping_2s_linear_infinite] opacity-40"
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
