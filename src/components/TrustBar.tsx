import React from 'react';
import { Calendar, Users, Clock, Building2, CheckCircle, Shield } from 'lucide-react';
import { kpiMetrics, trustBadges, marqueeClients } from '../data/gksContent';

export const TrustBar: React.FC = () => {
  const getKpiIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 text-orange-400" />;
      case 1:
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Clock className="w-5 h-5 text-blue-400" />;
      case 3:
        return <Building2 className="w-5 h-5 text-amber-400" />;
      default:
        return <Shield className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section className="relative w-full">
      {/* Part A: 4-KPI Impact Counter Grid */}
      <div className="bg-[#0F2942] text-white py-12 lg:py-16 relative overflow-hidden border-b border-slate-800">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header row with supporting trust badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-700/60">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Enterprise Track Record
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                25+ Years of Measurable Human Capital Impact
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 KPI Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {kpiMetrics.map((kpi, index) => (
              <div
                key={kpi.label}
                className="relative group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/80 hover:border-orange-500/50 transition-all duration-300 hover:bg-slate-800/80"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700">
                    {getKpiIcon(index)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                    Metric 0{index + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-1 group-hover:text-orange-400 transition-colors">
                  {kpi.value}
                </div>
                <div className="text-base font-semibold text-slate-200 mb-1">
                  {kpi.label}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {kpi.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part B: Quick Client Marquee Ticker */}
      <div className="bg-slate-50 py-5 border-b border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="w-2 h-2 rounded-full bg-orange-600" />
            <span>Trusted By India&apos;s Leading Enterprises</span>
          </div>
          <a
            href="#clients"
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline"
          >
            View all 21+ Client Partners &rarr;
          </a>
        </div>

        {/* Infinite Marquee Strip */}
        <div className="relative w-full overflow-hidden flex mask-radial">
          {/* Gradient fade on left and right */}
          <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Repeated twice for seamless loop) */}
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-2">
            {[...marqueeClients, ...marqueeClients].map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs sm:text-sm font-semibold text-slate-700 hover:border-orange-400 hover:text-slate-900 transition-all cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
