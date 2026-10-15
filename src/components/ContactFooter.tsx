import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Clock,
  ArrowUp,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { contactDetails, signatureProgrammes, consultingServices } from '../data/gksContent';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: 'Winning Attitude',
    audienceSize: '25-50 Participants',
    message: '',
  });

  const [submittedMethod, setSubmittedMethod] = useState<'whatsapp' | 'email' | null>(null);

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ service: string }>;
      if (customEvent.detail && customEvent.detail.service) {
        setFormData((prev) => ({
          ...prev,
          serviceInterest: customEvent.detail.service,
        }));
      }
    };

    window.addEventListener('gks:select-service', handleServiceSelect);
    return () => window.removeEventListener('gks:select-service', handleServiceSelect);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `*GKS Consultancy Training Proposal Inquiry*\n\n` +
        `*Name:* ${formData.name || 'Not provided'}\n` +
        `*Organization:* ${formData.organization || 'Not provided'}\n` +
        `*Email:* ${formData.email || 'Not provided'}\n` +
        `*Phone:* ${formData.phone || 'Not provided'}\n` +
        `*Programme / Service:* ${formData.serviceInterest}\n` +
        `*Audience Size:* ${formData.audienceSize}\n` +
        `*Notes / Context:* ${formData.message || 'We would like to request a training proposal & outline.'}`
    );

    setSubmittedMethod('whatsapp');
    const waUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodedMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Training Proposal Request: ${formData.serviceInterest} - ${formData.organization || 'Corporate Inquiry'}`
    );
    const body = encodeURIComponent(
      `Dear GKS Consultancy Team,\n\n` +
        `We would like to request a formal training proposal.\n\n` +
        `Contact Name: ${formData.name}\n` +
        `Organization: ${formData.organization}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        `Programme / Service of Interest: ${formData.serviceInterest}\n` +
        `Estimated Audience Size: ${formData.audienceSize}\n\n` +
        `Project Context & Objectives:\n${formData.message || 'Please share your standard module outline, commercial proposal, and trainer availability.'}\n\n` +
        `Best regards,\n${formData.name}`
    );

    setSubmittedMethod('email');
    window.location.href = `mailto:${contactDetails.primaryEmail}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0F2942] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate an Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Partner With GKS Consultancy
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Let us design a high-impact behavioral intervention tailored to your enterprise culture and business milestones.
          </p>
        </div>

        {/* 2-Column Split: Left Contact Details / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-slate-800">
          {/* Left Column: Coordinates & Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block p-2 bg-white rounded-xl shadow-xs">
                <img
                  src="/assets/gks-logo.jpg"
                  alt="GKS Consultancy"
                  className="h-10 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <h3 className="text-2xl font-bold text-white font-display">
                {contactDetails.companyName}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {contactDetails.brandTagline}. Since 1998, empowering leaders and teams across India and overseas.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-600/20 text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Headquarters
                  </h4>
                  <p className="text-sm text-slate-200 mt-1 font-medium leading-relaxed">
                    {contactDetails.address}
                  </p>
                  <p className="text-sm text-slate-300 font-medium">
                    {contactDetails.cityStateZip}, {contactDetails.country}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{contactDetails.workingHours}</span>
              </div>
            </div>

            {/* Direct Phone & Email Coordinates */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Direct Phone Lines (Click to Call)
                  </h4>
                  <div className="flex flex-col space-y-1">
                    {contactDetails.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-sm text-slate-200 hover:text-orange-400 font-semibold transition-colors flex items-center gap-2"
                      >
                        <span>{phone}</span>
                        {phone === contactDetails.phones[0] && (
                          <span className="text-[10px] bg-orange-600/30 text-orange-300 px-2 py-0.5 rounded-md font-normal">
                            WhatsApp / Primary
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${contactDetails.primaryEmail}`}
                    className="text-sm text-slate-200 hover:text-orange-400 font-semibold transition-colors"
                  >
                    {contactDetails.primaryEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-8 sm:p-10 shadow-2xl">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold text-white font-display">
                  Request a Training Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Submit your training specifications. We will respond within 24 business hours with customized modules and trainer credentials.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. ramesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      placeholder="e.g. Enterprise Ltd."
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Programme Interest Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Programme / Service of Interest
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <optgroup label="Flagship Signature Programmes">
                        {signatureProgrammes.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Strategic L&D Consulting">
                        {consultingServices.map((c) => (
                          <option key={c.id} value={`Consulting: ${c.title}`}>
                            Consulting: {c.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Other Offerings">
                        <option value="Outbound Training (OBT)">Outbound Training (OBT)</option>
                        <option value="Leadership & Management Pillar">Leadership &amp; Management Pillar</option>
                        <option value="Communication & Team Synergy">Communication &amp; Team Synergy</option>
                        <option value="Custom Training Architecture">Custom Training Architecture</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Audience Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Estimated Audience Size
                    </label>
                    <select
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="10-25 Participants (Cohort / Senior Group)">
                        10-25 Participants (Cohort / Senior Group)
                      </option>
                      <option value="25-50 Participants (Standard Workshop)">
                        25-50 Participants (Standard Workshop)
                      </option>
                      <option value="50-100 Participants (Multi-Batch)">
                        50-100 Participants (Multi-Batch)
                      </option>
                      <option value="100+ Participants (Enterprise-Wide Rollout)">
                        100+ Participants (Enterprise-Wide Rollout)
                      </option>
                      <option value="Executive Coaching (1-on-1 / Core Leadership)">
                        Executive Coaching (1-on-1 / Core Leadership)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Specific Learning Needs / Context (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Share specific challenges, preferred timeline, location (Visakhapatnam, client site, outbound, or virtual)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                {/* Dual Submission Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Pre-filled Trigger */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-950" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  {/* Mailto Direct Trigger */}
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>Submit via Email</span>
                  </button>
                </div>

                {/* Form feedback status */}
                {submittedMethod && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {submittedMethod === 'whatsapp'
                        ? 'Opening WhatsApp with your pre-filled inquiry details...'
                        : 'Opening your default email client with your pre-formatted proposal request...'}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} {contactDetails.companyName}. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Corporate Behavioral Training &amp; L&amp;D Advisory</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#programmes"
              className="hover:text-white transition-colors"
            >
              Programmes
            </a>
            <a
              href="#consulting"
              className="hover:text-white transition-colors"
            >
              Consulting
            </a>
            <a
              href="#clients"
              className="hover:text-white transition-colors"
            >
              Clientele
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
