import React from 'react';

const NewYearAnimation: React.FC = () => {
  const spans = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div 
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'animate 25s linear infinite'
        }}
      >
        {spans.map((i) => (
          <span
            key={i}
            className="absolute whitespace-nowrap uppercase font-black text-5xl px-2.5 leading-tight"
            style={{
              color: '#333', // Darker text for better visibility
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
              textShadow: '0 5px 15px rgba(255, 255, 255, 0.3)',
              transformStyle: 'preserve-3d',
              transform: `translate(-50%, -50%) rotateX(${i * 22.5}deg) translateZ(106px)`,
            }}
          >
            <i className="not-italic text-rose-500">Cryenx</i> 3D{' '}
            <i className="not-italic text-sky-500">Page</i> 2025
          </span>
        ))}
      </div>

      <style>{`
        @keyframes animate {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotate(25deg);
          }
          100% {
            transform: perspective(1000px) rotateX(360deg) rotate(25deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NewYearAnimation;