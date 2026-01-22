
import React from 'react';

interface Logo {
  name: string;
  src: string;
}

interface LogoTickerProps {
  logos: Logo[];
  className?: string;
}

const LogoTicker: React.FC<LogoTickerProps> = ({ logos, className = '' }) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className={`relative w-full overflow-hidden bg-slate-100 py-16 border-t border-slate-200 ${className}`}>
      {/* Fade izquierdo */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full"
        style={{
          width: 'clamp(48px, 8vw, 160px)',
          background: 'linear-gradient(to right, rgb(241 245 249) 0%, rgba(241 245 249, 0.85) 40%, rgba(241 245 249, 0) 100%)',
        }}
      />
      {/* Fade derecho */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full"
        style={{
          width: 'clamp(48px, 8vw, 160px)',
          background: 'linear-gradient(to left, rgb(241 245 249) 0%, rgba(241 245 249, 0.85) 40%, rgba(241 245 249, 0) 100%)',
        }}
      />

      <div className="animate-marquee flex items-center">
        {duplicatedLogos.map((logo, idx) => (
          <div key={idx} className="flex min-w-[180px] md:min-w-[260px] items-center justify-center px-10">
            <img src={logo.src} alt={logo.name} className="max-h-14 w-auto object-contain grayscale opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
