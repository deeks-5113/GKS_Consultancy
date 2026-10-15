import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  TrendingUp,
  Trophy,
  Share2,
  HeartHandshake,
  Smile,
  GraduationCap,
  Mountain,
  CheckCircle,
  Crown,
  MessageSquare,
  UserCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info,
} from 'lucide-react';
import {
  signatureProgrammes,
  standardPillars,
} from '../data/gksContent';

export const ProgrammesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'signature' | 'standard'>('signature');
  const [expandedProgId, setExpandedProgId] = useState<string | null>(null);
  const [activeMobilePillar, setActiveMobilePillar] = useState<number>(0);

  const getSignatureIcon = (iconName: string) => {
    const iconClass = 'w-5 h-5 text-orange-600';
    switch (iconName) {
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      case 'Trophy':
        return <Trophy className={iconClass} />;
      case 'Share2':
        return <Share2 className={iconClass} />;
      case 'HeartHandshake':
        return <HeartHandshake className={iconClass} />;
      case 'Smile':
        return <Smile className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'Mountain':
        return <Mountain className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-orange-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-orange-600" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedProgId(expandedProgId === id ? null : id);
  };

  const handleInquire = (progTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to preselect in form
      window.dispatchEvent(
        new CustomEvent('gks:select-service', { detail: { service: progTitle } })
      );
    }
  };

  return (
    <section id="programmes" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Interventions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Customised Behavioral Training Programmes
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We <span className="font-semibold text-slate-900">Design, Develop, and Deliver</span> customized behavioral training programs based on your Training Needs, Business Context, and Organization Culture.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2 max-w-md w-full">
            <button
              type="button"
              onClick={() => setActiveTab('signature')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'signature'
                  ? 'bg-[#0F2942] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Zap className={`w-4 h-4 ${activeTab === 'signature' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span>Signature Flagships (8)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('standard')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'standard'
                  ? 'bg-[#0F2942] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Crown className={`w-4 h-4 ${activeTab === 'standard' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span>Standard Modules (15)</span>
            </button>
          </div>
        </div>

        {/* =======================================================
            TAB 1: 8 SIGNATURE PROGRAMMES (Performance Acceleration)
            ======================================================= */}
        {activeTab === 'signature' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200/80">
              <span className="font-semibold uppercase tracking-wider text-orange-600">
                Flagship Performance Acceleration Curriculum
              </span>
              <span>8 Comprehensive Interventions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signatureProgrammes.map((prog, index) => {
                const isExpanded = expandedProgId === prog.id;
                return (
                  <div
                    key={prog.id}
                    className={`rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      isExpanded
                        ? 'border-orange-500 shadow-md ring-1 ring-orange-500/20'
                        : 'border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100">
                          {getSignatureIcon(prog.iconName)}
                        </div>
                        <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                          {prog.tag}
                        </span>
                      </div>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Signature 0{index + 1}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                        {prog.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                        {prog.description}
                      </p>

                      {/* Expandable detailed curriculum */}
                      {isExpanded && (
                        <div className="pt-3 mt-3 border-t border-slate-100 space-y-2 animate-fadeIn text-xs text-slate-700 bg-slate-50/70 p-3 rounded-xl">
                          <p className="leading-relaxed font-normal">{prog.fullDescription}</p>
                          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold pt-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Classroom &amp; Experiential Format</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="px-6 py-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => toggleExpand(prog.id)}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                      >
                        <span>{isExpanded ? 'Less' : 'Syllabus'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleInquire(prog.title)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =======================================================
            TAB 2: 15 STANDARD PROGRAMMES (3 Categorized Pillars)
            ======================================================= */}
        {activeTab === 'standard' && (
          <div className="space-y-8">
            {/* Mobile Pillar Switcher (< md) */}
            <div className="flex md:hidden gap-2 overflow-x-auto pb-2">
              {standardPillars.map((pillar, idx) => (
                <button
                  key={pillar.pillar}
                  type="button"
                  onClick={() => setActiveMobilePillar(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                    activeMobilePillar === idx
                      ? 'bg-[#0F2942] text-white border-transparent'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {pillar.pillar}
                </button>
              ))}
            </div>

            {/* Desktop 3 Columns / Mobile Selected Pillar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standardPillars.map((pillar, pIdx) => (
                <div
                  key={pillar.pillar}
                  className={`rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between ${
                    pIdx !== activeMobilePillar ? 'hidden md:flex' : 'flex'
                  }`}
                >
                    {/* Pillar Header */}
                    <div className="p-6 bg-slate-900 text-white border-b border-slate-800">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                          {getPillarIcon(pillar.iconName)}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                          Pillar 0{pIdx + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white">
                        {pillar.pillar}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-snug">
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* 5 Modular Courses */}
                    <div className="p-6 divide-y divide-slate-100 flex-1">
                      {pillar.programmes.map((item, iIdx) => (
                        <div key={item.name} className="py-4 first:pt-0 last:pb-0 space-y-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                              <span>{item.name}</span>
                            </h4>
                            <span className="text-[10px] text-slate-400 font-mono">
                              M0{iIdx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
                            {item.summary}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Pillar Footer Action */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleInquire(`Pillar: ${pillar.pillar}`)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-orange-600 hover:border-orange-500 transition-all shadow-2xs"
                      >
                        <span>Request Syllabus &amp; Modules</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Bottom Banner Note on Customization */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Need a tailored module combination for your organization?
              </p>
              <p className="text-xs text-slate-500">
                All 23 programmes can be adapted for half-day, full-day, or multi-day retreat formats based on your organizational TNA.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleInquire('Customized Curriculum Architecture')}
            className="shrink-0 bg-[#0F2942] hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs"
          >
            Request Custom Architecture
          </button>
        </div>
      </div>
    </section>
  );
};
