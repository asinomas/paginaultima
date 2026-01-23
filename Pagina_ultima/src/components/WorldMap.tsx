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
         d="M162.3,161.2c-2.3,1.4-4.8,2.7-7.3,4c-5.1,2.6-10.2,5.1-15.3,7.7..." // Aquí va el path real del mapa mundial
         fill="#334155" /* Gris oscuro (Slate 700) */
         stroke="#e2e8f0" /* Gris muy claro (Slate 200) para las líneas */
          strokeWidth="0.5"
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
