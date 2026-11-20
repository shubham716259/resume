import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minus, Square, CornerDownLeft, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../../utils/soundEffects';

const AVAILABLE_COMMANDS = [
  { cmd: 'help', desc: 'Display all available terminal commands' },
  { cmd: 'projects', desc: 'List projects (or type "open <name>" for case study)' },
  { cmd: 'skills', desc: 'View technical inventory and level breakdown' },
  { cmd: 'contact', desc: 'Output verified contact details & profiles' },
  { cmd: 'about', desc: 'Show developer bio, academic stats & quest' },
  { cmd: 'resume', desc: 'Open interactive curriculum vitae modal' },
  { cmd: 'matrix', desc: 'Toggle retro digital rain matrix overlay' },
  { cmd: 'audio', desc: 'Toggle 8-bit synthesizer audio ON/OFF' },
  { cmd: 'clear', desc: 'Clear the terminal output screen' },
  { cmd: 'sudo', desc: 'Elevate recruiter privileges to root' }
];

export function RetroTerminal({
  projects = [],
  skills = [],
  onSelectProject,
  onOpenResume,
  onToggleMatrix,
  isMatrixActive = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isSoundOn, setIsSoundOn] = useState(soundFX.isEnabled());

  const [outputLines, setOutputLines] = useState([
    {
      type: 'system',
      text: 'SHUBHAM_OS v1.0.4 [Retro-Pixel Edition] initialized.'
    },
    {
      type: 'system',
      text: 'Type "help" to view commands, or click the quick-chips below.'
    }
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Sync sound status
  useEffect(() => {
    return soundFX.subscribe((enabled) => {
      setIsSoundOn(enabled);
    });
  }, []);

  // Auto-scroll terminal on new output
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [outputLines, isOpen]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    soundFX.playClick();

    // Add to history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    // Append user input line
    const newLines = [
      ...outputLines,
      { type: 'input', text: `shubham@dev:~$ ${trimmed}` }
    ];

    switch (cmd) {
      case 'help': {
        soundFX.playSuccess();
        newLines.push({
          type: 'output',
          text: (
            <div className="space-y-1 my-1">
              <div className="text-[#f3c75e] font-bold">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                {AVAILABLE_COMMANDS.map((item) => (
                  <div key={item.cmd} className="flex gap-2">
                    <span className="text-[#4ade80] font-bold min-w-[70px]">{item.cmd}</span>
                    <span className="text-[#a4b4a0]">- {item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-[#788874] mt-2">
                Tip: Type "open 1" or "open eco-recycler" to launch case study modal directly.
              </div>
            </div>
          )
        });
        break;
      }

      case 'projects': {
        soundFX.playSuccess();
        newLines.push({
          type: 'output',
          text: (
            <div className="space-y-2 my-1">
              <div className="text-[#f3c75e] font-bold">FEATURED PROJECTS (Click to inspect):</div>
              <div className="grid gap-1.5 text-xs">
                {projects.map((proj, idx) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      soundFX.playClick();
                      if (onSelectProject) onSelectProject(proj);
                    }}
                    className="cursor-pointer border border-[#304030] bg-[#1a241c] hover:bg-[#28382c] p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[#e0fae4] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#f3c75e] font-mono">[{idx + 1}]</span>
                      <strong className="text-white uppercase">{proj.title}</strong>
                      <span className="text-[10px] text-[#8ea08a] bg-[#121614] px-1.5 py-0.5 border border-[#2b3a2d]">
                        {proj.category}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#4ade80] underline font-mono">
                      Type "open {idx + 1}" or Click →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        });
        break;
      }

      case 'open': {
        if (!arg) {
          soundFX.playError();
          newLines.push({
            type: 'error',
            text: 'Please specify project number or id. Example: "open 1" or "open eco-recycler"'
          });
          break;
        }

        const projectIndex = parseInt(arg, 10) - 1;
        let targetProj = null;

        if (!isNaN(projectIndex) && projects[projectIndex]) {
          targetProj = projects[projectIndex];
        } else {
          targetProj = projects.find(
            (p) =>
              p.id.toLowerCase() === arg ||
              p.title.toLowerCase().includes(arg)
          );
        }

        if (targetProj) {
          soundFX.playSuccess();
          if (onSelectProject) onSelectProject(targetProj);
          newLines.push({
            type: 'success',
            text: `Opening Case Study for "${targetProj.title}"...`
          });
        } else {
          soundFX.playError();
          newLines.push({
            type: 'error',
            text: `Project "${arg}" not found. Type "projects" to see available projects.`
          });
        }
        break;
      }

      case 'skills': {
        soundFX.playLevelUp();
        newLines.push({
          type: 'output',
          text: (
            <div className="space-y-2 my-1">
              <div className="text-[#f3c75e] font-bold">DEVELOPER INVENTORY & EXPERTISE:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skills.slice(0, 8).map((skill) => (
                  <div key={skill.name} className="border border-[#304030] p-1.5 bg-[#172018]">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#4ade80] font-bold">{skill.name}</span>
                      <span className="text-[#f3c75e] text-[9px] uppercase">{skill.level}</span>
                    </div>
                    <div className="text-[10px] text-[#8ea08a] truncate mt-0.5">
                      {skill.highlight || skill.description}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-[#788874]">
                Explore the full inventory visually in the backpack section (#skills).
              </div>
            </div>
          )
        });
        break;
      }

      case 'contact': {
        soundFX.playSuccess();
        newLines.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs my-1">
              <div className="text-[#f3c75e] font-bold">TRANSMISSION CHANNELS:</div>
              <div className="text-[#e2ead8]">
                ● Email: <span className="text-[#4ade80]">shubhamthakur.dev@example.com</span>
              </div>
              <div className="text-[#e2ead8]">
                ● LinkedIn: <a href="https://www.linkedin.com/in/shubham-thakur-61a82737b/" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">linkedin.com/in/shubham-thakur-61a82737b</a>
              </div>
              <div className="text-[#e2ead8]">
                ● GitHub: <a href="https://github.com/shubham716259" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">github.com/shubham716259</a>
              </div>
              <div className="text-[#e2ead8]">
                ● Location: <span className="text-[#e8e4d7]">Chitkara University / Punjab, India</span>
              </div>
            </div>
          )
        });
        break;
      }

      case 'about': {
        soundFX.playSuccess();
        newLines.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs my-1">
              <div className="text-[#f3c75e] font-bold">PLAYER BIO // SHUBHAM THAKUR:</div>
              <p className="text-[#d0ded0] leading-relaxed">
                Computer Science Engineering student at Chitkara University. Passionate about converting theoretical computing and software craftsmanship into elegant, high-impact digital solutions.
              </p>
              <div className="text-[10px] text-[#8ea08a] pt-1">
                Core Stack: Java • React • SQL • Data Structures & Algorithms
              </div>
            </div>
          )
        });
        break;
      }

      case 'resume': {
        soundFX.playSuccess();
        if (onOpenResume) onOpenResume();
        newLines.push({
          type: 'success',
          text: 'Opening formatted curriculum vitae modal...'
        });
        break;
      }

      case 'matrix': {
        soundFX.playMatrixSweep();
        if (onToggleMatrix) onToggleMatrix();
        newLines.push({
          type: 'success',
          text: isMatrixActive
            ? 'Matrix digital rain mode deactivated.'
            : 'Matrix digital rain mode activated across viewport!'
        });
        break;
      }

      case 'audio':
      case 'sound': {
        const newState = soundFX.toggle();
        setIsSoundOn(newState);
        newLines.push({
          type: 'success',
          text: `8-bit Web Audio Synthesizer: ${newState ? 'ENABLED [SFX ON]' : 'MUTED [SFX OFF]'}`
        });
        break;
      }

      case 'clear': {
        setOutputLines([]);
        setInputVal('');
        return;
      }

      case 'sudo': {
        soundFX.playSuccess();
        newLines.push({
          type: 'output',
          text: (
            <div className="border border-[#f3c75e] bg-[#2a2410] p-2 text-xs text-[#f3c75e]">
              [PRIVILEGE ELEVATED]: Root recruiter permissions granted! Shubham Thakur is actively available for software engineering internships and collaborative roles.
            </div>
          )
        });
        break;
      }

      case 'goto': {
        const target = arg || 'home';
        const el = document.getElementById(target);
        if (el) {
          soundFX.playSuccess();
          el.scrollIntoView({ behavior: 'smooth' });
          newLines.push({
            type: 'success',
            text: `Navigating to #${target}...`
          });
        } else {
          soundFX.playError();
          newLines.push({
            type: 'error',
            text: `Section #${target} not found. Try: goto home | work | about | skills | journey | contact`
          });
        }
        break;
      }

      default: {
        soundFX.playError();
        newLines.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`
        });
        break;
      }
    }

    setOutputLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = inputVal.toLowerCase().trim();
      if (!val) return;
      const match = AVAILABLE_COMMANDS.find((c) => c.cmd.startsWith(val));
      if (match) {
        setInputVal(match.cmd);
        soundFX.playBlip();
      }
    } else {
      soundFX.playBlip();
    }
  };

  return (
    <>
      {/* Floating Launcher Pill */}
      {!isOpen && (
        <aside
          aria-label="Developer Terminal Launcher"
          className="fixed bottom-4 right-4 z-40"
        >
          <button
            onClick={() => {
              soundFX.playClick();
              setIsOpen(true);
            }}
            className="group flex items-center gap-2.5 border-[3px] border-[#20251f] bg-[#20251f] px-3.5 py-2 font-mono text-xs font-bold text-white shadow-[4px_4px_0_#f3c75e] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Open Retro Terminal CLI"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
            </span>
            <span className="text-[#4ade80] font-black">&gt;_</span>
            <span>TERMINAL CLI</span>
            <span className="border border-white/20 bg-white/10 px-1 py-0.5 text-[9px] text-[#f3c75e]">
              v1.0
            </span>
          </button>
        </aside>
      )}

      {/* Floating Retro Terminal Window */}
      {isOpen && (
        <section
          role="region"
          aria-label="Interactive Retro Terminal CLI"
          className={`fixed z-50 flex flex-col border-[4px] border-[#20251f] bg-[#121614] text-[#4ade80] shadow-[8px_8px_0_#20251f] transition-all duration-150 ${
            isMaximized
              ? 'inset-3 sm:inset-6'
              : 'bottom-4 right-4 w-[95vw] max-w-[560px] h-[480px] max-h-[85vh]'
          }`}
        >
          {/* Retro Window Titlebar */}
          <header className="flex items-center justify-between border-b-[3px] border-[#20251f] bg-[#20251f] px-3 py-2 text-white select-none">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#4ade80]" />
              <h3 className="font-mono text-xs font-black uppercase tracking-wide text-[#e8f5e6]">
                shubham@portfolio-os: ~/bin/sh
              </h3>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Sound Toggle Button in Header */}
              <button
                onClick={() => soundFX.toggle()}
                title={isSoundOn ? 'Mute 8-bit Sound' : 'Enable 8-bit Sound'}
                className="border border-white/30 bg-black/40 p-1 text-[#f3c75e] hover:bg-black"
              >
                {isSoundOn ? <Volume2 size={12} /> : <VolumeX size={12} />}
              </button>

              {/* Maximize / Restore */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsMaximized(!isMaximized);
                }}
                title={isMaximized ? 'Restore Window' : 'Maximize Window'}
                className="border border-white/30 bg-black/40 p-1 text-white hover:bg-black"
              >
                <Square size={12} />
              </button>

              {/* Minimize to dock */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsOpen(false);
                }}
                title="Minimize Terminal"
                className="border border-white/30 bg-black/40 p-1 text-white hover:bg-black"
              >
                <Minus size={12} />
              </button>

              {/* Close Terminal */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsOpen(false);
                }}
                title="Close Terminal"
                className="border border-white/30 bg-[#e58c63] p-1 text-white hover:bg-[#d4784e]"
              >
                <X size={12} />
              </button>
            </div>
          </header>

          {/* Quick-Click Command Chips Bar */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-[#243326] bg-[#172019] px-3 py-1.5 font-mono text-[10px]">
            <span className="text-[#788874] uppercase text-[9px]">Run:</span>
            {['help', 'projects', 'skills', 'contact', 'resume', 'matrix'].map((c) => (
              <button
                key={c}
                onClick={() => handleCommand(c)}
                className="border border-[#2d4230] bg-[#121614] px-1.5 py-0.5 text-[#4ade80] hover:border-[#4ade80] hover:bg-[#203022] transition-colors"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Terminal Output Buffer */}
          <div
            tabIndex={0}
            role="log"
            aria-live="polite"
            className="flex-1 overflow-y-auto p-3 font-mono text-xs leading-relaxed space-y-1.5 focus:outline-none"
          >
            {outputLines.map((line, idx) => {
              if (line.type === 'input') {
                return (
                  <div key={idx} className="text-[#f3c75e] font-semibold">
                    {line.text}
                  </div>
                );
              }
              if (line.type === 'error') {
                return (
                  <div key={idx} className="text-[#f87171]">
                    [ERROR] {line.text}
                  </div>
                );
              }
              if (line.type === 'success') {
                return (
                  <div key={idx} className="text-[#38bdf8]">
                    [OK] {line.text}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-[#b8d6b8]">
                  {line.text}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input Line */}
          <div className="flex items-center gap-2 border-t-[2px] border-[#243326] bg-[#0d120f] px-3 py-2 font-mono text-xs">
            <span className="text-[#4ade80] font-bold shrink-0">shubham@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g. help, projects, skills)..."
              className="flex-1 bg-transparent text-[#e8f5e6] placeholder-[#4e6450] focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="border border-[#2d4230] bg-[#172019] px-2 py-1 text-[#4ade80] hover:bg-[#203022]"
              title="Submit command"
            >
              <CornerDownLeft size={12} />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default RetroTerminal;
