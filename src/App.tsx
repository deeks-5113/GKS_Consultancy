import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutPhilosophy } from './components/AboutPhilosophy';
import { ProgrammesTabs } from './components/ProgrammesTabs';
import { ConsultingGrid } from './components/ConsultingGrid';
import { MethodologySteps } from './components/MethodologySteps';
import { ClienteleWall } from './components/ClienteleWall';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-orange-600 selection:text-white">
      {/* 0. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Enterprise Trust & Impact Bar */}
        <TrustBar />

        {/* 3. About, Philosophy, Vision, Mission & Core Values */}
        <AboutPhilosophy />

        {/* 4. Customised Behavioral Training Programmes */}
        <ProgrammesTabs />

        {/* 5. Strategic L&D Consulting Grid */}
        <ConsultingGrid />

        {/* 6. 7-Step Approach & Methodology */}
        <MethodologySteps />

        {/* 7. Esteemed Clientele Wall */}
        <ClienteleWall />
      </main>

      {/* 8. Contact & Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
