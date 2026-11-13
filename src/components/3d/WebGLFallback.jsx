import React from 'react';

export function WebGLFallback() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Outer Glow Halo */}
      <div 
        className="absolute w-72 h-72 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(120, 166, 132, 0.34) 0%, rgba(76, 105, 84, 0.18) 50%, transparent 75%)',
          filter: 'blur(35px)'
        }}
      />

      {/* Futuristic Gyroscopic Rings */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Ring 1 */}
        <div 
          className="absolute inset-0 rounded-full border border-emerald-200/30"
          style={{
            borderTopColor: '#a2c6aa',
            borderRightColor: 'transparent',
            boxShadow: '0 0 15px rgba(162, 198, 170, 0.22)'
          }}
        />

        {/* Ring 2 */}
        <div 
          className="absolute inset-4 rounded-full border border-stone-300/25"
          style={{
            borderBottomColor: '#9eada1',
            borderLeftColor: 'transparent',
            boxShadow: '0 0 15px rgba(158, 173, 161, 0.18)'
          }}
        />

        {/* Ring 3 (Tilted) */}
        <div 
          className="absolute inset-8 rounded-full border border-dashed border-emerald-100/20"
        />

        {/* Inner Glowing Core */}
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl relative"
          style={{
            background: 'linear-gradient(135deg, rgba(151, 190, 160, 0.82), rgba(88, 123, 96, 0.82))',
            boxShadow: '0 0 40px rgba(120, 166, 132, 0.35), inset 0 0 15px rgba(255, 255, 255, 0.35)'
          }}
        >
          {/* Core Symbol */}
          <span className="font-mono font-bold text-xs tracking-wider text-black bg-white/70 px-2 py-0.5 rounded-full shadow">
            ST::CORE
          </span>
        </div>

        {/* Orbiting Satellite Dots */}
        <div 
          className="absolute w-3 h-3 rounded-full bg-emerald-200 shadow-[0_0_12px_#a2c6aa]"
          style={{
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
    </div>
  );
}
