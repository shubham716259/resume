import React from 'react';
import { 
  Recycle, Utensils, CloudSun, Server, Database, CheckSquare, 
  Leaf, Flame, Droplets, Wind, Terminal, Cpu, Clock, BarChart3, 
  Calendar, Layers, ShieldCheck
} from 'lucide-react';

export function ProjectCardMockup({ projectId, accentColor }) {
  switch (projectId) {
    case 'eco-recycler':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-emerald-500/20 flex flex-col justify-between overflow-hidden relative group">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                <Recycle size={14} />
              </span>
              <span className="font-mono text-xs text-emerald-300 font-semibold tracking-wide">ECO::RECYCLE_OS</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Pickup Active
            </span>
          </div>

          {/* Main Content Dashboard */}
          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/15 flex flex-col">
              <span className="text-[10px] text-slate-400">Total Recycled</span>
              <span className="font-mono text-sm font-bold text-white mt-0.5">148.5 kg</span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-auto">
                <Leaf size={10} /> +12.4% this mo
              </span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/15 flex flex-col">
              <span className="text-[10px] text-slate-400">Next Slot</span>
              <span className="font-mono text-xs font-semibold text-cyan-300 mt-1">Tomorrow</span>
              <span className="text-[9px] text-slate-400 mt-auto">10:00 AM - Dry Waste</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/15 flex flex-col">
              <span className="text-[10px] text-slate-400">Eco-Points</span>
              <span className="font-mono text-sm font-bold text-emerald-300 mt-0.5">850 pts</span>
              <span className="text-[9px] text-emerald-400/80 mt-auto">Silver Tier</span>
            </div>
          </div>

          {/* Bottom Category Badges */}
          <div className="flex items-center gap-1.5 overflow-hidden pt-1 border-t border-slate-800">
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">Plastics (45%)</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950/60 text-sky-300 border border-sky-500/20">E-Waste (25%)</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-500/20">Paper (30%)</span>
          </div>
        </div>
      );

    case 'cookfusion':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-purple-500/20 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-purple-500/20 text-purple-400">
                <Utensils size={14} />
              </span>
              <span className="font-mono text-xs text-purple-300 font-semibold tracking-wide">COOKFUSION::SEARCH</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
              3 Pantry Matches
            </span>
          </div>

          {/* Featured Recipe Card Preview */}
          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-purple-500/20 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Basil Garlic Linguine</div>
              <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-2">
                <span className="flex items-center gap-1 text-purple-300"><Clock size={10} /> 20 min</span>
                <span className="flex items-center gap-1 text-amber-300"><Flame size={10} /> 420 kcal</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] px-2 py-1 rounded-md bg-purple-500/20 text-purple-200 border border-purple-400/30 font-semibold">
                Cook Now
              </span>
            </div>
          </div>

          {/* Matched Ingredients Chips */}
          <div className="flex items-center gap-1.5 pt-1 border-t border-slate-800">
            <span className="text-[10px] font-mono text-slate-400">Matched:</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">✓ Fresh Basil</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">✓ Olive Oil</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">✓ Garlic</span>
          </div>
        </div>
      );

    case 'weather-application':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-cyan-500/20 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-2 right-4 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-cyan-500/20 text-cyan-400">
                <CloudSun size={14} />
              </span>
              <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wide">HORIZON::METEO</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">Chandigarh, IN</span>
          </div>

          {/* Main Weather Display */}
          <div className="flex items-center justify-between my-1">
            <div>
              <div className="font-mono text-3xl font-extrabold text-white tracking-tight flex items-baseline">
                24°<span className="text-cyan-400 text-lg">C</span>
              </div>
              <div className="text-[11px] text-slate-300 font-medium">Clear Skies • Moderate Breeze</div>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                <Droplets size={11} className="text-cyan-400" /> Humidity: 46%
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                <Wind size={11} className="text-sky-400" /> Wind: 14 km/h
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                <ShieldCheck size={11} className="text-emerald-400" /> AQI: 52 (Good)
              </div>
            </div>
          </div>

          {/* Forecast Sparkline */}
          <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-slate-800 text-center font-mono">
            <div className="text-[10px] text-slate-400 bg-slate-900/60 py-1 rounded">12 PM: 23°</div>
            <div className="text-[10px] text-slate-400 bg-slate-900/60 py-1 rounded">3 PM: 26°</div>
            <div className="text-[10px] text-slate-400 bg-slate-900/60 py-1 rounded">6 PM: 22°</div>
            <div className="text-[10px] text-cyan-300 bg-cyan-950/30 py-1 rounded border border-cyan-500/20">9 PM: 19°</div>
          </div>
        </div>
      );

    case 'java-swing-system':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-sky-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-sky-500/20 flex flex-col justify-between overflow-hidden relative">
          {/* Java Window Title Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-sky-300 font-semibold ml-2">SmartManager.java [Swing GUI]</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">JDK 21 • EDT Safe</span>
          </div>

          {/* Simulated JTable */}
          <div className="rounded border border-slate-800 overflow-hidden text-[10px] font-mono bg-slate-950/70">
            <div className="grid grid-cols-4 bg-slate-900 px-2 py-1 text-slate-400 font-bold border-b border-slate-800">
              <span>REC_ID</span>
              <span>ITEM_NAME</span>
              <span>CATEGORY</span>
              <span className="text-right">STATUS</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-1 text-slate-300 border-b border-slate-800/50 hover:bg-sky-950/20">
              <span className="text-sky-400">#CS-101</span>
              <span>Logic Analyzer</span>
              <span>Hardware</span>
              <span className="text-emerald-400 text-right">In Stock (12)</span>
            </div>
            <div className="grid grid-cols-4 px-2 py-1 text-slate-300 hover:bg-sky-950/20">
              <span className="text-sky-400">#CS-102</span>
              <span>Network Switch</span>
              <span>Peripherals</span>
              <span className="text-amber-400 text-right">Reserved (4)</span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            <div className="flex gap-1">
              <span className="text-[9px] px-2 py-0.5 rounded bg-sky-900/40 text-sky-300 border border-sky-500/30">+ Insert</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Filter By ID</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Server size={10} className="text-sky-400" /> File I/O Sync: OK
            </span>
          </div>
        </div>
      );

    case 'sql-analytics-exploration':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-pink-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-pink-500/20 flex flex-col justify-between overflow-hidden relative">
          {/* Query Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-pink-500/20 text-pink-400">
                <Database size={14} />
              </span>
              <span className="font-mono text-xs text-pink-300 font-semibold tracking-wide">MYSQL::ANALYTICS</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Clock size={10} className="text-pink-400" /> 14ms execution
            </span>
          </div>

          {/* SQL Code Snippet */}
          <div className="p-2 rounded bg-slate-950/90 border border-slate-800 font-mono text-[10px] leading-tight text-slate-300">
            <span className="text-pink-400 font-bold">SELECT</span> category_name, 
            <span className="text-purple-400"> COUNT</span>(order_id) <span className="text-pink-400">AS</span> vol,
            <span className="text-sky-400"> ROUND</span>(AVG(revenue), 2) <span className="text-pink-400">AS</span> avg_rev<br/>
            <span className="text-pink-400 font-bold">FROM</span> transactions 
            <span className="text-pink-400 font-bold"> GROUP BY</span> 1 
            <span className="text-pink-400 font-bold"> ORDER BY</span> vol <span className="text-pink-400 font-bold">DESC</span>;
          </div>

          {/* Visual Trend Bars */}
          <div className="flex items-end justify-between gap-1 pt-1 border-t border-slate-800 h-8">
            <div className="w-1/4 bg-slate-800 rounded-t h-4 flex items-center justify-center text-[8px] font-mono text-slate-400">Q1</div>
            <div className="w-1/4 bg-slate-800 rounded-t h-6 flex items-center justify-center text-[8px] font-mono text-slate-400">Q2</div>
            <div className="w-1/4 bg-pink-900/60 border border-pink-500/40 rounded-t h-7 flex items-center justify-center text-[8px] font-mono text-pink-200">Q3</div>
            <div className="w-1/4 bg-gradient-to-t from-pink-600 to-purple-500 rounded-t h-8 flex items-center justify-center text-[8px] font-mono text-white font-bold">Q4</div>
          </div>
        </div>
      );

    case 'developer-utilities':
    default:
      return (
        <div className="w-full h-48 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 p-4 rounded-xl border border-amber-500/20 flex flex-col justify-between overflow-hidden relative">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-500/20 text-amber-400">
                <CheckSquare size={14} />
              </span>
              <span className="font-mono text-xs text-amber-300 font-semibold tracking-wide">DEV::UTILITIES_MATRIX</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
              Offline Ready
            </span>
          </div>

          {/* Task Matrix Preview */}
          <div className="space-y-1.5 my-1 font-mono text-[10px]">
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/90 border border-slate-800">
              <span className="flex items-center gap-2 text-slate-200">
                <span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/60 flex items-center justify-center text-[8px] text-amber-300">✓</span>
                Binary Search Tree Implementation
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 font-bold">HIGH</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-slate-900/90 border border-slate-800">
              <span className="flex items-center gap-2 text-slate-200">
                <span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/60 flex items-center justify-center text-[8px] text-amber-300">✓</span>
                Design Responsive Navigation Bar
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">MED</span>
            </div>
          </div>

          {/* Bottom Calculator & Persistence Info */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            <div className="flex gap-1">
              <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Calc: 2^10 = 1024</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">LocalStorage: Synced</span>
          </div>
        </div>
      );
  }
}
