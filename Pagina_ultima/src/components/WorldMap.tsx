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
        className="w-full h-auto max-h-[500px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* MAPA - CONTINENTES */}
        <path
          d="M250,150 L300,100 L400,120 L450,80 L600,100 L750,50 L850,100 L950,150 L900,300 L750,450 L600,400 L500,450 L400,350 L250,400 L150,300 L100,200 Z" // Este es un placeholder simplificado del mapa
          /* CAMBIO AQUÍ: Relleno Gris Oscuro y Líneas Gris Claro */
          fill="#334155" // slate-700 (Gris oscuro profesional)
          stroke="#94a3b8" // slate-400 (Gris claro para fronteras)
          strokeWidth="1"
        />

        {/* PUNTOS DE LAS OFICINAS */}
        {OFFICE_LOCATIONS.map((office) => {
          // Conversión simple de coordenadas a coordenadas SVG
          // Nota: Si usas una librería como D3 o react-simple-maps, la lógica de proyección va aquí
          const x = (office.coordinates[0] + 180) * (1000 / 360);
          const y = (90 - office.coordinates[1]) * (500 / 180);

          const isSelected = selectedOfficeId === office.id;

          return (
            <g
              key={office.id}
              className="cursor-pointer group"
              onClick={() => onSelectOffice(office)}
            >
              {/* Efecto de pulso para el punto seleccionado */}
              {isSelected && (
                <circle cx={x} cy={y} r="12" className="fill-[#135bec]/30 animate-ping" />
              )}
              
              {/* Punto de la ubicación */}
              <circle
                cx={x}
                cy={y}
                r={isSelected ? "6" : "4"}
                className={`${
                  isSelected ? 'fill-[#135bec]' : 'fill-slate-300 group-hover:fill-[#135bec]'
                } transition-all duration-300 shadow-lg`}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WorldMap;
