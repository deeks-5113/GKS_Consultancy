import React, { useState } from 'react';
import {
  Compass,
  Search,
  Target,
  Layout,
  FileCode,
  Presentation,
  BarChart,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { methodologyContent } from '../data/gksContent';

export const MethodologySteps: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    const iconClass = 'w-5 h-5 text-orange-600';
    switch (index) {
      case 0:
        return <Compass className={iconClass} />;
      case 1:
        return <Search className={iconClass} />;
      case 2:
        return <Target className={iconClass} />;
      case 3:
        return <Layout className={iconClass} />;
      case 4:
        return <FileCode className={iconClass} />;
      case 5:
        return <Presentation className={iconClass} />;
      case 6:
        return <BarChart className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven 7-Stage Delivery Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Approach &amp; Methodology
          </h2>

          <div className="pt-2">
            <p className="font-serif italic text-lg sm:text-xl text-slate-800 font-medium">
              &ldquo;{methodologyContent.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* =======================================================
            DESKTOP STEPPER VIEW (Hidden on small screens)
            ======================================================= */}
        <div className="hidden lg:block space-y-8">
          {/* Progress track */}
          <div className="relative">
            {/* Connecting background line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 -translate-y-1/2 z-0 transition-all duration-500"
              style={{
                width: `${(activeStepIndex / (methodologyContent.steps.length - 1)) * 100}%`,
              }}
            />

            {/* Stepper nodes */}
            <div className="relative z-10 flex justify-between">
              {methodologyContent.steps.map((item, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                        isActive
                          ? 'bg-orange-600 text-white scale-110 ring-4 ring-orange-100 shadow-md'
                          : isPassed
                          ? 'bg-[#0F2942] text-white'
                          : 'bg-white text-slate-500 border-2 border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {item.step}
                    </div>

                    <span
                      className={`mt-3 text-xs font-bold max-w-[100px] text-center leading-tight transition-colors ${
                        isActive
                          ? 'text-orange-600'
                          : isPassed
                          ? 'text-slate-900'
                          : 'text-slate-400'
                      }`}
                    >
                      {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Feature Box */}
          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/90 p-8 shadow-sm">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-orange-100/80 border border-orange-200">
                    {getStepIcon(activeStepIndex)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/70 px-3 py-1 rounded-full">
                    Stage {methodologyContent.steps[activeStepIndex].step} of 07
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {methodologyContent.steps[activeStepIndex].highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  {methodologyContent.steps[activeStepIndex].title}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {methodologyContent.steps[activeStepIndex].description}
                </p>
              </div>

              <div className="col-span-4 bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Quality Assurance Standard</span>
                </div>
                <p className="text-xs text-slate-500">
                  Each phase requires mutual stakeholder sign-off to ensure rigorous alignment with corporate metrics.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <button
                    type="button"
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-40"
                  >
                    &larr; Previous Stage
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIndex === methodologyContent.steps.length - 1}
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        Math.min(methodologyContent.steps.length - 1, prev + 1)
                      )
                    }
                    className="font-bold text-orange-600 hover:text-orange-700 disabled:opacity-40 flex items-center gap-1"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            MOBILE VERTICAL TIMELINE (< lg)
            ======================================================= */}
        <div className="block lg:hidden space-y-6">
          <div className="relative pl-6 border-l-2 border-orange-500 space-y-8">
            {methodologyContent.steps.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Node icon dot */}
                <div className="absolute -left-[35px] top-0.5 w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  {item.step}
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/90 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                      {item.highlight}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Phase 0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
