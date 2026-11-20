import React, { useState } from 'react';
import { soundFX } from '../../utils/soundEffects';

// Map levels to retro RPG EXP percentages
const LEVEL_MAP = {
  'Core Language': { lvl: 'LVL 95', exp: 95, color: '#f3c75e' },
  'Systems Foundation': { lvl: 'LVL 88', exp: 88, color: '#e58c63' },
  'Web Standard': { lvl: 'LVL 96', exp: 96, color: '#598063' },
  'Data Querying': { lvl: 'LVL 92', exp: 92, color: '#38bdf8' },
  'Markup Standard': { lvl: 'LVL 98', exp: 98, color: '#f3c75e' },
  'Styling & Animation': { lvl: 'LVL 94', exp: 94, color: '#a855f7' },
  'Component Framework': { lvl: 'LVL 96', exp: 96, color: '#38bdf8' },
  'Relational Database': { lvl: 'LVL 90', exp: 90, color: '#10b981' },
  'Problem Solving Engine': { lvl: 'LVL 92', exp: 92, color: '#e58c63' },
  'Software Architecture': { lvl: 'LVL 90', exp: 90, color: '#598063' },
  'Reliability & Correctness': { lvl: 'LVL 89', exp: 89, color: '#f3c75e' },
  'Codebase Navigation': { lvl: 'LVL 94', exp: 94, color: '#38bdf8' },
  'Version Control': { lvl: 'LVL 95', exp: 95, color: '#e58c63' },
  'Build Engine': { lvl: 'LVL 91', exp: 91, color: '#a855f7' }
};

export function InteractiveSkillTag({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showXpParticle, setShowXpParticle] = useState(false);

  const meta = LEVEL_MAP[skill.level] || {
    lvl: 'LVL 90',
    exp: 90,
    color: '#f3c75e'
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playBlip();
  };

  const handleClick = () => {
    soundFX.playLevelUp();
    setIsExpanded((prev) => !prev);
    setShowXpParticle(true);
    setTimeout(() => setShowXpParticle(false), 900);
  };

  return (
    <li className="relative list-none">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className={`group cursor-pointer border-2 border-[#20251f] p-2.5 transition-all duration-150 select-none ${
          isHovered
            ? 'bg-[#dce9d3] -translate-y-0.5 shadow-[3px_3px_0_#20251f]'
            : 'bg-white shadow-[2px_2px_0_#20251f]'
        }`}
      >
        {/* Top Header: Name and Level Tag */}
        <div className="flex items-center justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 border border-[#20251f] transition-transform duration-150 ${
                isHovered ? 'scale-125 rotate-45' : ''
              }`}
              style={{ backgroundColor: meta.color }}
            />
            <span className="font-mono text-xs font-bold uppercase text-[#20251f]">
              {skill.name}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="border border-[#20251f] bg-[#f4f0e4] px-1.5 py-0.5 font-mono text-[8px] font-black uppercase text-[#475446]">
              {meta.lvl}
            </span>
          </div>
        </div>

        {/* Retro XP Progress Bar */}
        <div className="mt-2 h-1.5 w-full overflow-hidden border border-[#20251f] bg-[#f4f0e4]">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: isHovered ? '100%' : `${meta.exp}%`,
              backgroundColor: isHovered ? '#355d48' : meta.color
            }}
          />
        </div>

        {/* Floating XP Gain Badge Particle */}
        {showXpParticle && (
          <span className="absolute -top-3 right-2 z-20 animate-bounce border border-[#20251f] bg-[#f3c75e] px-1.5 py-0.5 font-mono text-[8px] font-black uppercase text-[#20251f] shadow-[2px_2px_0_#20251f]">
            +10 XP!
          </span>
        )}

        {/* Expandable Detail View on Click */}
        {isExpanded && (
          <div className="mt-2.5 border-t border-dashed border-[#a6b4a2] pt-2 font-mono text-[9px] text-[#475446] space-y-1">
            {skill.highlight && (
              <p className="leading-snug">
                <strong className="text-[#20251f]">Focus:</strong> {skill.highlight}
              </p>
            )}
            {skill.projects && skill.projects.length > 0 && (
              <p className="text-[8px] text-[#6b7c69]">
                Applied in: {skill.projects.join(', ')}
              </p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default InteractiveSkillTag;
