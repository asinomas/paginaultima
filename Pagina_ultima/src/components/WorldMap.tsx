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
        {/* MAPA MUNDIAL ESTILIZADO ORIGINAL */}
        <path
          d="M160,140 L180,120 L220,130 L250,100 L300,110 L350,90 L400,100 L450,80 L500,90 L550,70 L600,90 L650,80 L700,90 L750,70 L800,90 L850,80 L900,100 L950,120 L940,150 L920,200 L930,250 L900,300 L850,320 L800,350 L750,380 L700,400 L650,420 L600,410 L550,430 L500,440 L450,420 L400,400 L350,380 L300,370 L250,390 L200,400 L150,380 L120,350 L100,300 L90,250 L100,200 L120,160 Z"
          fill="currentColor"
          className="text-slate-800/40"
        />
        
        {/* LÍNEAS DE RED / GRILLA */}
        <path
          d="M0,250 L1000,250 M500,0 L500,500"
          stroke="currentColor"
          className="text-slate-800/20"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />

        {/* MARCADORES DE OFICINAS */}
        {OFFICE_LOCATIONS.map((office) => {
          // Proyección de coordenadas a SVG
          const x = (office.coordinates[0] + 180) * (1000 / 360);
          const y = (90 - office.coordinates[1]) * (500 / 180);
          const isSelected = selectedOfficeId === office.id;

          return (
            <g
              key={office.id}
              className="cursor-pointer group"
              onClick={() => onSelectOffice(office)}
            >
              {/* Efecto de resplandor (Glow) para el seleccionado */}
              {isSelected && (
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  className="fill-[#135bec]/20 animate-pulse"
                />
              )}
              
              {/* Punto de ubicación */}
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
              
              {/* Anillo de pulso exterior */}
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
