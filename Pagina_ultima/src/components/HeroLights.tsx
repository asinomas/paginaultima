import React from 'react';

const HeroLights: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Luz 1 */}
      <div
        className="
          absolute top-[-10%] left-[-10%]
          w-[50%] h-[50%]
          bg-[#135bec]/20
          rounded-full
          blur-[120px]
          animate-[pulse_6s_infinite]
        "
        style={{ animationDelay: '0s' }}
      />

      {/* Luz 2 */}
      <div
        className="
          absolute bottom-[-10%] left-[-10%]
          w-[45%] h-[45%]
          bg-blue-600/10
          rounded-full
          blur-[100px]
          animate-[pulse_10s_infinite_reverse]
        "
        style={{ animationDelay: '2s' }}
      />

      {/* Luz 3 */}
      <div
        className="
          absolute top-[-5%] right-[-10%]
          w-[40%] h-[40%]
          bg-[#135bec]/15
          rounded-full
          blur-[110px]
          animate-[pulse_8s_infinite]
        "
        style={{ animationDelay: '4s' }}
      />

      {/* Luz 4 */}
      <div
        className="
          absolute bottom-[-5%] right-[-5%]
          w-[35%] h-[35%]
          bg-blue-500/10
          rounded-full
          blur-[90px]
          animate-[pulse_5s_infinite]
        "
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
};

export default HeroLights;
