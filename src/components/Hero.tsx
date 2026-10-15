import React from 'react';
import { ArrowRight, Award, Compass, Sparkles, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { heroContent } from '../data/gksContent';

export const Hero: React.FC = () => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.05) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:pr-4">
            {/* 1998 Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
              <span>{heroContent.badge}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">25+ Yrs of Executive Impact</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Unleashing Human Potential Through{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0F2942] via-blue-900 to-[#EA580C]">
                Transformative
              </span>{' '}
              Behavioral Learning.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              {heroContent.subheadline}
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('programmes')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#c2410c] text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{heroContent.primaryCta.label}</span>
                <ArrowRight className="w-5 h-5 text-orange-200" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('consulting')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-xl border border-slate-300 hover:border-slate-800 shadow-xs transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>{heroContent.secondaryCta.label}</span>
              </button>
            </div>

            {/* Key Trust Highlights under CTAs */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Customized Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Tier-1 Enterprise Trusted</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Visakhapatnam HQ &amp; Global</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols Executive Quote Card */}
          <div className="lg:col-span-5 relative">
            {/* Subtle glow border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-blue-500/20 to-slate-800/30 blur-md opacity-70" />

            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
              {/* Card top banner with Navy accent */}
              <div className="bg-[#0F2942] px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase ml-2">
                    Executive Perspective
                  </span>
                </div>
                <span className="text-[11px] font-medium text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                  Leadership Principle
                </span>
              </div>

              {/* Quote Body */}
              <div className="p-7 sm:p-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 shrink-0">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                      The Ultimate Advantage
                    </span>
                    <p className="text-xs text-slate-400">Continuous Organizational Transformation</p>
                  </div>
                </div>

                {/* The Signature Jack Welch Quote */}
                <blockquote className="font-serif italic text-xl sm:text-2xl text-slate-800 leading-snug border-l-4 border-orange-500 pl-4 py-1">
                  &ldquo;{heroContent.jackWelchQuote.quote}&rdquo;
                </blockquote>

                {/* Author attribution */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-display">
                      {heroContent.jackWelchQuote.author}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {heroContent.jackWelchQuote.designation}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/80 text-[11px] font-semibold text-slate-600">
                    <Award className="w-3.5 h-3.5 text-orange-600" />
                    <span>L&amp;D Benchmark</span>
                  </div>
                </div>

                {/* Micro-impact ribbon */}
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Attitude Transformation</span>
                  </div>
                  <span className="text-slate-300">&bull;</span>
                  <div>Measurable Business ROI</div>
                  <span className="text-slate-300">&bull;</span>
                  <div className="text-orange-700 font-semibold">GKS Pedagogy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
