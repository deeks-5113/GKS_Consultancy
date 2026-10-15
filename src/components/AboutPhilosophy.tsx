import React from 'react';
import {
  Quote,
  Eye,
  Rocket,
  ShieldCheck,
  Target,
  BookOpen,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { philosophyContent, coreValues } from '../data/gksContent';

export const AboutPhilosophy: React.FC = () => {
  const renderValueIcon = (iconName: string) => {
    const iconClasses = 'w-6 h-6 text-orange-600 transition-transform duration-300 group-hover:scale-110';
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'Target':
        return <Target className={iconClasses} />;
      case 'BookOpen':
        return <BookOpen className={iconClasses} />;
      case 'Sparkles':
        return <Sparkles className={iconClasses} />;
      case 'Award':
        return <Award className={iconClasses} />;
      default:
        return <Sparkles className={iconClasses} />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ====================================================
            PART 3.1: The GKS Story & Philosophy Banner
            ==================================================== */}
        <div className="space-y-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>{philosophyContent.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {philosophyContent.headline}
            </h2>
          </div>

          {/* Featured Core Philosophy Pull-Quote Box */}
          <div className="relative rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-50 to-orange-500/5 p-8 sm:p-10 border border-orange-200/90 shadow-sm">
            <div className="absolute top-6 right-8 text-orange-200/80 pointer-events-none">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700">
                Foundational Truth
              </span>
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-snug">
                &ldquo;{philosophyContent.quote}&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-orange-800">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                <span>The Guiding North Star of GKS Consultancy since 1998</span>
              </div>
            </div>
          </div>

          {/* Narrative text on the corporate gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-slate-600 leading-relaxed font-normal">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Bridging Career Growth &amp; Organizational Goals
              </h3>
              <p>{philosophyContent.narrative[0]}</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                Aligning Individual Attitude With Corporate Purpose
              </h3>
              <p>{philosophyContent.narrative[1]}</p>
            </div>
          </div>
        </div>

        {/* ====================================================
            PART 3.2: Asymmetric Vision & Mission Cards
            ==================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Strategic Foundation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-display">
                Our Vision &amp; Mission
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              A dual commitment to personal mindset transformation and enterprise-wide business excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card (Dark Navy #0F2942) */}
            <div className="relative group rounded-2xl bg-[#0F2942] text-white p-8 sm:p-10 border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{philosophyContent.vision.label}</span>
                  </div>
                  <span className="text-xs text-slate-400">Future Horizon</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">
                  {philosophyContent.vision.tagline}
                </h4>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  {philosophyContent.vision.copy}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Inspiring 50,000+ professionals and expanding</span>
              </div>
            </div>

            {/* Mission Card (White Surface with Orange Accent Border) */}
            <div className="relative group rounded-2xl bg-white p-8 sm:p-10 border-t-4 border-t-orange-600 border-x border-b border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold tracking-wider">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>{philosophyContent.mission.label}</span>
                  </div>
                  <span className="text-xs text-slate-400">Core Mandate</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-display">
                  {philosophyContent.mission.tagline}
                </h4>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {philosophyContent.mission.copy}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-orange-600" />
                <span>Custom behavioral interventions tailored to business context</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            PART 3.3: 5 Core Values Icon Grid
            ==================================================== */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Our 5 Core Organizational Values
            </h3>
            <p className="text-slate-600 text-sm">
              The unchanging standards of ethics, quality, and human care that govern every GKS engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-orange-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors">
                      {renderValueIcon(val.iconName)}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-orange-600 transition-colors">
                    {val.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-400 group-hover:text-orange-600 transition-colors">
                  <span>Standard 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
