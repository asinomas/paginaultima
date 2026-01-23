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
    svg.selectAll("*").remove(); // Limpiar antes de renderizar

    const projection = d3.geoMercator()
      .scale(120)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    // Cargar mapa mundial
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any) => {
      const countries = topojson.feature(data, data.objects.countries);

      // Dibujar países
      svg.append("g")
        .selectAll("path")
        .data((countries as any).features)
        .enter()
        .append("path")
        .attr("d", path as any)
        .attr("fill", "#1e293b") // Slate 800
        .attr("stroke", "#334155") // Slate 700
        .attr("stroke-width", 0.5);

      // Dibujar puntos de oficinas
      svg.append("g")
        .selectAll("circle")
        .data(OFFICE_LOCATIONS)
        .enter()
        .append("circle")
        .attr("cx", d => projection(d.coordinates as [number, number])![0])
        .attr("cy", d => projection(d.coordinates as [number, number])![1])
        .attr("r", d => d.id === selectedOfficeId ? 8 : 4)
        .attr("fill", d => d.id === selectedOfficeId ? "#135bec" : "#64748b")
        .attr("class", "cursor-pointer transition-all duration-300")
        .style("filter", d => d.id === selectedOfficeId ? "drop-shadow(0 0 8px #135bec)" : "none")
        .on("click", (event, d) => onSelectOffice(d));
    });
  }, [selectedOfficeId, onSelectOffice]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 800 450"
        className="w-full h-auto max-h-[500px]"
      />
    </div>
  );
};

export default WorldMap;
