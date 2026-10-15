import React from 'react';
import {
  Briefcase,
  Compass,
  CheckCircle2,
  FileText,
  BarChart3,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { consultingServices } from '../data/gksContent';

export const ConsultingGrid: React.FC = () => {
  const getConsultingIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-orange-400';
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={iconClass} />;
      case 'FileText':
        return <FileText className={iconClass} />;
      case 'BarChart3':
        return <BarChart3 className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  const handleConsultingInquiry = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('gks:select-service', { detail: { service: `Consulting: ${serviceTitle}` } })
      );
    }
  };

  return (
    <section id="consulting" className="py-20 lg:py-28 bg-[#0F2942] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Advisory for CHROs &amp; Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            End-to-End L&amp;D Consulting &amp; Architecture
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Beyond classroom delivery, we partner with executive management to build scalable Learning &amp; Development ecosystems that drive measurable organizational capability and governance.
          </p>
        </div>

        {/* 6 Consulting Pillars - 3x2 High Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultingServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-orange-500/60 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-slate-800/90 shadow-lg"
            >
              <div>
                {/* Step / Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-orange-500/50 transition-colors">
                    {getConsultingIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400">
                    SERVICE 0{service.stepNumber}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                {/* Core Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverable Badge & Action */}
              <div className="pt-6 border-t border-slate-700/80 space-y-4">
                <div className="rounded-xl bg-slate-900/90 p-3 border border-slate-700/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                    Key Institutional Deliverable:
                  </span>
                  <p className="text-xs text-slate-300 font-medium leading-snug">
                    {service.deliverable}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleConsultingInquiry(service.title)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-orange-400 transition-colors pt-1"
                >
                  <span>Consult with L&amp;D Advisory</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Value Statement Box */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white font-display">
              Ready to Architect a World-Class L&amp;D Governance Model?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We conduct confidential capability diagnostics and align competency models with your board-level KPIs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleConsultingInquiry('Full L&D Capability Audit')}
            className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
          >
            Schedule Advisory Diagnostic
          </button>
        </div>
      </div>
    </section>
  );
};
