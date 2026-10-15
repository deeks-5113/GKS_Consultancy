import React, { useState } from 'react';
import { Award, Globe2, CheckCircle } from 'lucide-react';
import { clientCategories, allClients } from '../data/gksContent';

export const ClienteleWall: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredClients =
    selectedCategory === 'All'
      ? allClients
      : allClients.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Pharma & Lifesciences':
        return '💊';
      case 'FMCG & Conglomerates':
        return '🛒';
      case 'Industrial, Cement & Manufacturing':
        return '🏗️';
      case 'International & Infrastructure':
        return '🌐';
      default:
        return '🏢';
    }
  };

  const getMonogram = (name: string) => {
    const words = name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(Boolean);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="clients" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Trusted Enterprise Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Our Esteemed Clientele
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-slate-700">
            &ldquo;Increasing our clients year on year... By Committing to Excellence.&rdquo;
          </p>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-normal">
            For over two decades, prominent blue-chip corporations, multinationals, and industry leaders have entrusted GKS with their highest-priority talent and leadership interventions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#0F2942] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Organizations ({allClients.length})
          </button>
          {clientCategories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.category
                  ? 'bg-[#0F2942] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <span>{getCategoryIcon(cat.category)}</span>
              <span>
                {cat.category.split('&')[0].trim()} ({cat.clients.length})
              </span>
            </button>
          ))}
        </div>

        {/* 21 Categorized Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-orange-400 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Monogram Badge */}
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-orange-50 border border-slate-200 group-hover:border-orange-200 flex items-center justify-center font-bold text-xs font-display text-slate-700 group-hover:text-orange-600 transition-colors">
                    {getMonogram(client.name)}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-slate-400">
                    PARTNER
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-display line-clamp-2">
                  {client.name}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500 truncate max-w-[170px]">
                  {client.category}
                </span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Delivery Note */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Pan-India &amp; Overseas Delivery Capability
              </p>
              <p className="text-xs text-slate-500">
                On-site facilitation delivered across key industrial corridors in India and the Middle East.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700"
          >
            <span>Request Corporate Client References &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
