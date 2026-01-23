import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';

interface WorldMapProps {
  onSelectOffice: (office: OfficeLocation) => void;
  selectedOfficeId: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ onSelectOffice, selectedOfficeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 450;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3.geoMercator().scale(120).translate([width / 2, height / 1.5]);
    const path = d3.geoPath().projection(projection);

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any) => {
      const countries = topojson.feature(data, data.objects.countries);
      const santiago = OFFICE_LOCATIONS.find(o => o.id === 'santiago')!;

      // 1. Dibujar Países
      svg.append("g")
        .selectAll("path")
        .data((countries as any).features)
        .enter().append("path")
        .attr("d", path as any)
        .attr("fill", "#0f172a").attr("stroke", "#1e293b").attr("stroke-width", 0.5);

      // 2. Dibujar Líneas de Conexión (desde Santiago)
      const lineGroup = svg.append("g");
      OFFICE_LOCATIONS.forEach(office => {
        if (office.id === 'santiago') return;
        const start = projection(santiago.coordinates as [number, number])!;
        const end = projection(office.coordinates as [number, number])!;
        
        lineGroup.append("path")
          .attr("d", `M${start[0]},${start[1]} Q${(start[0]+end[0])/2},${Math.min(start[1], end[1])-50} ${end[0]},${end[1]}`)
          .attr("fill", "none")
          .attr("stroke", "url(#lineGradient)")
          .attr("stroke-width", 1)
          .attr("stroke-dasharray", "4,4")
          .attr("opacity", 0.4);
      });

      // Gradiente para las líneas
      const defs = svg.append("defs");
      const gradient = defs.append("linearGradient").attr("id", "lineGradient");
      gradient.append("stop").attr("offset", "0%").attr("stop-color", "#135bec");
      gradient.append("stop").attr("offset", "100%").attr("stop-color", "#38bdf8");

      // 3. Dibujar Puntos con efecto Latido
      const points = svg.append("g")
        .selectAll("g")
        .data(OFFICE_LOCATIONS)
        .enter().append("g")
        .attr("transform", d => `translate(${projection(d.coordinates as [number, number])})`)
        .attr("class", "cursor-pointer")
        .on("click", (event, d) => onSelectOffice(d));

      // Círculo de pulso (animado por CSS abajo)
      points.append("circle")
        .attr("r", 8)
        .attr("fill", "#135bec")
        .attr("class", "animate-ping opacity-20");

      // Círculo sólido central
      points.append("circle")
        .attr("r", d => d.id === selectedOfficeId ? 6 : 4)
        .attr("fill", d => d.id === selectedOfficeId ? "#135bec" : "#38bdf8")
        .style("filter", d => d.id === selectedOfficeId ? "drop-shadow(0 0 8px #135bec)" : "none");
    });
  }, [selectedOfficeId, onSelectOffice]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
      <svg ref={svgRef} viewBox="0 0 800 450" className="w-full h-auto" />
    </div>
  );
};

export default WorldMap;
