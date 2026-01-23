import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { OFFICE_LOCATIONS } from '../constants';
import { OfficeLocation } from '../types';

interface WorldMapProps {
  onSelectOffice: (office: OfficeLocation) => void;
  selectedOfficeId?: string;
}

const WorldMap: React.FC<WorldMapProps> = ({ onSelectOffice, selectedOfficeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredOffice, setHoveredOffice] = useState<OfficeLocation | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 450;

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('width', '100%')
      .style('height', 'auto');

    svg.selectAll('*').remove();

    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);
    const g = svg.append('g');

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((data: any) => {
        const countries = feature(data, data.objects.countries) as any;

        // 🔥 Ajusta el mapa automáticamente al tamaño del SVG
        projection.fitSize([width, height], countries);

        g.selectAll('path')
          .data(countries.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', '#0f172a')
          .attr('stroke', '#1e293b')
          .attr('stroke-width', 0.5)
          .attr('class', 'country');

        const headquarters = OFFICE_LOCATIONS.find(o => o.type === 'Headquarters');

        if (headquarters) {
          const hqCoords = projection(headquarters.coordinates as [number, number]);

          OFFICE_LOCATIONS
            .filter(o => o.id !== headquarters.id)
            .forEach(office => {
              const officeCoords = projection(office.coordinates as [number, number]);

              if (hqCoords && officeCoords) {
                const dx = officeCoords[0] - hqCoords[0];
                const dy = officeCoords[1] - hqCoords[1];
                const dr = Math.sqrt(dx * dx + dy * dy);

                g.append('path')
                  .attr(
                    'd',
                    `M${hqCoords[0]},${hqCoords[1]} A${dr},${dr} 0 0,1 ${officeCoords[0]},${officeCoords[1]}`
                  )
                  .attr('fill', 'none')
                  .attr('stroke', 'rgba(59, 130, 246, 0.1)')
                  .attr('stroke-width', 1)
                  .attr('stroke-dasharray', '3,5');
              }
            });
        }

        const markers = g
          .selectAll('.office-marker')
          .data(OFFICE_LOCATIONS)
          .enter()
          .append('g')
          .attr('class', 'office-marker')
          .attr('transform', d => {
            const p = projection(d.coordinates as [number, number]);
            return p ? `translate(${p[0]}, ${p[1]})` : 'translate(0,0)';
          })
          .style('cursor', 'pointer')
          .on('click', (_, d) => onSelectOffice(d))
          .on('mouseenter', (_, d) => setHoveredOffice(d))
          .on('mouseleave', () => setHoveredOffice(null));

        markers
          .append('circle')
          .attr('r', 10)
          .attr('fill', d =>
            d.type === 'Headquarters'
              ? 'rgba(59, 130, 246, 0.25)'
              : 'rgba(148, 163, 184, 0.1)'
          )
          .append('animate')
          .attr('attributeName', 'r')
          .attr('values', '8;15;8')
          .attr('dur', '4s')
          .attr('repeatCount', 'indefinite');

        markers
          .append('circle')
          .attr('r', d => (d.type === 'Headquarters' ? 5 : 4))
          .attr('fill', d => (d.type === 'Headquarters' ? '#3b82f6' : '#475569'))
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5);

        markers
          .append('text')
          .attr('dy', -18)
          .attr('text-anchor', 'middle')
          .attr('font-size', '11px')
          .attr('font-weight', '600')
          .attr('fill', '#f8fafc')
          .text(d => d.city)
          .attr('opacity', 0)
          .attr('class', 'label')
          .style('pointer-events', 'none')
          .style('text-shadow', '0 2px 4px rgba(0,0,0,0.9)')
          .style('transition', 'opacity 0.2s ease');
      });
  }, [onSelectOffice]);

  useEffect(() => {
    d3.selectAll('.office-marker .label')
      .attr('opacity', (d: any) =>
        d.id === selectedOfficeId ||
        (hoveredOffice && d.id === hoveredOffice.id)
          ? 1
          : 0
      );

    d3.selectAll('.office-marker circle:last-of-type')
      .transition()
      .duration(200)
      .attr('fill', (d: any) => {
        if (d.id === selectedOfficeId) return '#3b82f6';
        if (hoveredOffice && d.id === hoveredOffice.id) return '#60a5fa';
        return d.type === 'Headquarters' ? '#3b82f6' : '#475569';
      })
      .attr(
        'r',
        (d: any) =>
          d.id === selectedOfficeId ||
          (hoveredOffice && d.id === hoveredOffice.id)
            ? 6.5
            : d.type === 'Headquarters'
            ? 5
            : 4
      );
  }, [selectedOfficeId, hoveredOffice]);

  return (
    <div className="relative w-full h-full bg-slate-950/40 rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
      <svg ref={svgRef} className="w-full h-full block min-h-[400px]" />
      <div className="absolute top-6 left-6 flex flex-col gap-2.5 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500 border border-white/90 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            Sede Central
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-slate-600 border border-white/90" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Sucursales
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
