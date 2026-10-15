// Centralized Content & Type Definitions for GKS Consultancy

export interface NavLink {
  label: string;
  href: string;
}

export interface KpiMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Target' | 'BookOpen' | 'Sparkles' | 'Award';
}

export interface SignatureProgramme {
  id: string;
  title: string;
  tag: string;
  description: string;
  fullDescription: string;
  iconName: string;
}

export interface StandardProgrammeItem {
  name: string;
  summary: string;
}

export interface StandardPillar {
  pillar: string;
  tagline: string;
  iconName: string;
  color: string;
  programmes: StandardProgrammeItem[];
}

export interface ConsultingService {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
  iconName: 'Briefcase' | 'Compass' | 'CheckCircle2' | 'FileText' | 'BarChart3' | 'Users';
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ClientItem {
  name: string;
  category: string;
  logoUrl?: string;
  subtitle?: string;
}

export interface ClientCategory {
  category: string;
  description: string;
  clients: ClientItem[];
}

export interface MarqueeClient {
  name: string;
  logoUrl?: string;
}

export interface ContactInfo {
  companyName: string;
  brandTagline: string;
  address: string;
  cityStateZip: string;
  country: string;
  phones: string[];
  primaryEmail: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  website: string;
  workingHours: string;
}

// ==========================================
// 1. Navigation
// ==========================================
export const navLinks: NavLink[] = [
  { label: 'About & Philosophy', href: '#about' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'L&D Consulting', href: '#consulting' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Clientele', href: '#clients' },
];

// ==========================================
// 2. Hero Section
// ==========================================
export const heroContent = {
  badge: 'Transforming Organizations Since 1998',
  headline: 'Unleashing Human Potential Through Transformative Behavioral Learning.',
  subheadline:
    'Through customized behavioral learning and strategic L&D consulting, we enable professionals to build winning attitudes—driving sustained career growth and organizational excellence.',
  primaryCta: {
    label: 'Explore Training Programmes',
    href: '#programmes',
  },
  secondaryCta: {
    label: 'L&D Consulting Services',
    href: '#consulting',
  },
  jackWelchQuote: {
    quote:
      'An Organization’s ability to LEARN and transform that learning into ACTION rapidly is the ultimate Competitive Advantage.',
    author: 'Jack Welch',
    designation: 'Legendary Chairman & CEO, General Electric',
  },
};

// ==========================================
// 3. Impact Counters & Trust Bar
// ==========================================
export const kpiMetrics: KpiMetric[] = [
  {
    value: '25+',
    label: 'Years of Proven Legacy',
    subtext: 'Empowering enterprises since 1998',
  },
  {
    value: '50,000+',
    label: 'Participants Trained',
    subtext: 'From entry executives to C-suite leaders',
  },
  {
    value: '5,000+',
    label: 'Standing Manhours Delivered',
    subtext: 'Workshops, outbound bootcamps & coaching',
  },
  {
    value: '35+',
    label: 'Corporates & Institutes',
    subtext: 'Tier-1 clients across India & Overseas',
  },
];

export const trustBadges = [
  'OBTs & In-House Programs',
  'Consistent High Feedback',
  'Results-Proven Delivery',
  'Customized Competency Blueprints',
];

export const marqueeClients: MarqueeClient[] = [
  { name: 'Reliance Industries Limited', logoUrl: '/clients/reliance_industries.jpg' },
  { name: 'ITC Limited', logoUrl: '/clients/ITC_Limited_Logo.svg' },
  { name: 'Coca-Cola', logoUrl: '/clients/Coca_cola.png' },
  { name: 'GlaxoSmithKline (GSK)', logoUrl: '/clients/Gsk-logo.webp' },
  { name: 'Natco Pharma Limited', logoUrl: '/clients/Natco_pharma.png' },
  { name: 'Adani Wilmar', logoUrl: '/clients/adani_wilmar.png' },
  { name: 'Aditya Birla UltraTech Cement', logoUrl: '/clients/aditya_birla.png' },
  { name: 'MRF', logoUrl: '/clients/mrf_logo.png' },
  { name: 'Qatar Petroleum', logoUrl: '/clients/qatar_petroleum_logo.webp' },
  { name: 'Amara Raja Group', logoUrl: '/clients/Amara_raja_group.png' },
  { name: 'Hershey’s', logoUrl: '/clients/hersheys.jpg' },
  { name: 'Eisai', logoUrl: '/clients/eisai.png' },
  { name: 'The India Cements Ltd', logoUrl: '/clients/India_Cements_logo.png' },
  { name: 'Ramco SuperGrade', logoUrl: '/clients/ramco_supergrade.jpg' },
  { name: 'ETA Star & Ascon', logoUrl: '/clients/eta_star_logo.jpg' },
];


// ==========================================
// 4. About & Philosophy
// ==========================================
export const philosophyContent = {
  sectionTag: 'Our Core Philosophy',
  headline: 'Born as a Chooser: The GKS Philosophy',
  quote:
    'Neither are we born as a Winner nor as a Loser—we are born as a Chooser. The greatest discovery of any generation is that a human being can transform their life by transforming their Attitude.',
  narrative: [
    'Founded in 1998 by seasoned corporate practitioners, GKS Consultancy was established to bridge a fundamental paradox in modern enterprises: ambitious professionals constantly seek clear, fulfilling pathways for career progression, while corporate leaders strive to elevate productivity and achieve sustained organizational breakthroughs.',
    'Over 25 years of immersive field delivery have proven that skill training alone is insufficient without emotional and behavioral alignment. We design deep behavioral interventions that align individual attitude with corporate vision—unlocking the extraordinary capability dormant within every team.',
  ],
  vision: {
    label: 'OUR VISION',
    tagline: 'Inspire & Expand Human Capabilities',
    copy: 'To inspire individuals through transformative learning experiences to unleash their hidden potential, expand their capabilities, and become the best version of themselves.',
  },
  mission: {
    label: 'OUR MISSION',
    tagline: 'Enable Attitudes That Win',
    copy: 'Through transformative behavioural learning and development, we enable people to build the right attitudes towards life, work, and organization—leading to sustained career growth and organizational excellence.',
  },
};

export const coreValues: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'We act with honesty, uncompromising ethics, and consummate professionalism in every stakeholder interaction.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Customer Focus',
    description: 'We are committed to deeply understanding and consistently exceeding the expectations of our clients and learners.',
    iconName: 'Target',
  },
  {
    title: 'Continuous Learning',
    description: 'We believe learning is a lifelong journey, intellectual renewal, and the indispensable bedrock of sustained growth.',
    iconName: 'BookOpen',
  },
  {
    title: 'Empowerment',
    description: 'We enable individuals to discover their innate strengths, conquer cognitive blindspots, and realize their full potential.',
    iconName: 'Sparkles',
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest benchmarks in program architecture, pedagogical delivery, and measurable ROI.',
    iconName: 'Award',
  },
];

// ==========================================
// 5. Training Programmes
// ==========================================
export const signatureProgrammes: SignatureProgramme[] = [
  {
    id: 'prog-winning-attitude',
    title: 'Winning Attitude',
    tag: 'Mindset & Ownership',
    description: 'Cultivating mindset shifts for peak workplace ownership.',
    fullDescription:
      'Transforms passive compliance into proactive enterprise ownership. Participants deconstruct self-limiting beliefs, cultivate emotional resilience, and adopt an unshakeable accountability for organizational outcomes.',
    iconName: 'Zap',
  },
  {
    id: 'prog-21st-century-managers',
    title: '21st Century Managers',
    tag: 'Leadership Excellence',
    description: 'Equipping modern leaders for agile, high-performing teams.',
    fullDescription:
      'Prepares emerging and frontline managers for the demands of the modern hybrid and matrix workplace. Focuses on constructive delegation, psychological safety, empathetic coaching, and rapid decision-making.',
    iconName: 'TrendingUp',
  },
  {
    id: 'prog-live-like-champion',
    title: 'Live Like A Champion',
    tag: 'Peak Performance',
    description: 'High-energy behavioral mastery for personal and professional excellence.',
    fullDescription:
      'A high-octane experiential catalyst workshop engineered to shatter comfort zones, instill champion-grade work habits, and foster relentless enthusiasm in high-pressure corporate environments.',
    iconName: 'Trophy',
  },
  {
    id: 'prog-collaborating-success',
    title: 'Collaborating for Success',
    tag: 'Cross-Functional Synergy',
    description: 'Breaking silos and building cross-functional synergy.',
    fullDescription:
      'Dismantles bureaucratic department silos and dissolves interpersonal friction. Aligns disparate teams toward unified business milestones with mutual empathy and transparent coordination.',
    iconName: 'Share2',
  },
  {
    id: 'prog-power-of-empathy',
    title: 'The Power of Empathy',
    tag: 'Emotional Intelligence',
    description: 'Human-centric leadership and emotional connection at work.',
    fullDescription:
      'Deepens interpersonal emotional intelligence across managerial cadres. Teaches leaders how to decode unspoken concerns, defuse customer friction, and establish trust-based cultures.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'prog-quality-work-life',
    title: 'Quality of Work Life',
    tag: 'Well-Being & Balance',
    description: 'Harmonizing productivity, engagement, and personal well-being.',
    fullDescription:
      'Equips high-performing executives with science-backed cognitive stress modulation, energy management routines, and balance strategies to sustain peak output without burnout.',
    iconName: 'Smile',
  },
  {
    id: 'prog-train-the-trainer',
    title: 'Train the Trainer',
    tag: 'Internal Capability',
    description: 'Building internal L&D capability and facilitation excellence.',
    fullDescription:
      'Transforms subject matter experts and senior supervisors into dynamic internal facilitators, mastering adult learning principles, room engagement, and feedback debriefing.',
    iconName: 'GraduationCap',
  },
  {
    id: 'prog-outbound-programs',
    title: 'Out Bound Programs (OBTs)',
    tag: 'Experiential Mastery',
    description: 'Experiential outdoor learning for team bonding and leadership breakthrough.',
    fullDescription:
      'High-impact experiential simulations in retreat settings. Teams navigate physical and psychological challenges that simulate market volatility, cementing unbreakable mutual trust.',
    iconName: 'Mountain',
  },
];

export const standardPillars: StandardPillar[] = [
  {
    pillar: 'Leadership & Management',
    tagline: 'Strategic vision, managerial dexterity, and execution prowess',
    iconName: 'Crown',
    color: 'orange',
    programmes: [
      {
        name: 'Leadership Skills',
        summary: 'Inspiring collective vision, driving authentic change, and setting exemplary executive standards.',
      },
      {
        name: 'Managerial Skills',
        summary: 'Operational discipline, performance appraisal mastery, balanced delegation, and workflow oversight.',
      },
      {
        name: 'Strategic Management',
        summary: 'Connecting high-level corporate roadmap with day-to-day tactical departmental priorities.',
      },
      {
        name: 'Emotional Intelligence',
        summary: 'Self-regulation, social radar, and managing complex stakeholder relationships with poise.',
      },
      {
        name: 'Negotiation Skills',
        summary: 'Value-creating negotiation, commercial deal-making, and navigating internal and vendor disagreements.',
      },
    ],
  },
  {
    pillar: 'Communication & Team Synergy',
    tagline: 'Interpersonal clarity, persuasive rhetoric, and seamless collaboration',
    iconName: 'MessageSquare',
    color: 'emerald',
    programmes: [
      {
        name: 'Communication Skills',
        summary: 'Crisp verbal and written business articulation that eliminates ambiguity across all corporate tiers.',
      },
      {
        name: 'Presentation Skills',
        summary: 'High-impact executive storytelling, slide structuring, stage presence, and persuasive delivery.',
      },
      {
        name: 'The Art of Listening',
        summary: 'Active, non-judgmental listening frameworks that unlock client needs and prevent costly operational mistakes.',
      },
      {
        name: 'Teamwork',
        summary: 'Fostering collective psychological commitment, peer appreciation, and collaborative velocity.',
      },
      {
        name: 'Customer Focus',
        summary: 'Cultivating customer-centric DNA across front-line and back-office teams for lasting retention.',
      },
    ],
  },
  {
    pillar: 'Personal Effectiveness & Mastery',
    tagline: 'Individual discipline, stress mastery, and continuous self-optimization',
    iconName: 'UserCheck',
    color: 'navy',
    programmes: [
      {
        name: 'Being an Effective Employee',
        summary: 'Professional workplace etiquette, taking ownership, and executing duties with proactive accountability.',
      },
      {
        name: 'Personal Effectiveness',
        summary: 'Maximizing cognitive output, personal productivity habits, and emotional poise.',
      },
      {
        name: 'Goal Setting',
        summary: 'Translating abstract goals into executable milestone roadmaps using OKRs and SMART rigor.',
      },
      {
        name: 'Time Management',
        summary: 'Eisenhower matrix application, calendar defense, batch processing, and eliminating time sinks.',
      },
      {
        name: 'Stress Management',
        summary: 'Neuroscience-backed relaxation techniques, cognitive reframing, and sustainable stamina under pressure.',
      },
    ],
  },
];

// ==========================================
// 6. Strategic L&D Consulting Services
// ==========================================
export const consultingServices: ConsultingService[] = [
  {
    id: 'consulting-role-spec',
    stepNumber: '01',
    title: 'Role Specification Development',
    description: 'Defining clear accountabilities, key performance indicators (KPIs), and role expectations across hierarchies.',
    deliverable: 'Comprehensive Role Definition Manual & Hierarchy Accountability Matrices',
    iconName: 'Briefcase',
  },
  {
    id: 'consulting-competency-mapping',
    stepNumber: '02',
    title: 'Competency Mapping',
    description: 'Identifying, structuring, and benchmarking critical behavioral and functional competencies for key roles.',
    deliverable: 'Multi-Tier Competency Dictionary & Behavioral Anchored Rating Scales (BARS)',
    iconName: 'Compass',
  },
  {
    id: 'consulting-skill-assessment',
    stepNumber: '03',
    title: 'Skill Process & Skill Assessment',
    description: 'Systematically evaluating current workforce capabilities, diagnosing skill gaps, and prioritizing training investments.',
    deliverable: 'Diagnostic Gap Analysis Report & Targeted Capability Heatmaps',
    iconName: 'CheckCircle2',
  },
  {
    id: 'consulting-ld-procedure',
    stepNumber: '04',
    title: 'L&D Procedure Development',
    description: 'Establishing standardized standard operating procedures (SOPs), governance policies, and quality frameworks for organizational learning.',
    deliverable: 'Standardized L&D Governance SOP & Annual Training Calendar Playbook',
    iconName: 'FileText',
  },
  {
    id: 'consulting-ld-metrics-audits',
    stepNumber: '05',
    title: 'L&D Metrics & L&D Audits',
    description: 'Measuring training ROI, behavioral learning effectiveness (Kirkpatrick models), and auditing institutional training compliance.',
    deliverable: 'Executive ROI Dashboards & Kirkpatrick Levels 1-4 Audit Benchmarks',
    iconName: 'BarChart3',
  },
  {
    id: 'consulting-leader-behaviors',
    stepNumber: '06',
    title: 'Leader Behaviors Framework',
    description: 'Architecting custom, bespoke leadership behavioral competency models closely aligned with your enterprise culture and strategic goals.',
    deliverable: 'Bespoke Leadership Charter & 360-Degree Feedback Behavioral Rubric',
    iconName: 'Users',
  },
];

// ==========================================
// 7. Methodology Steps
// ==========================================
export const methodologyContent = {
  tagline: 'We strive to create better and better positive experiences for both the Audience and the Management.',
  steps: [
    {
      step: '01',
      title: 'Understand Organization & Business',
      description: 'In-depth discovery session with top management and department heads to decode company culture, competitive pressures, and long-term strategic goals.',
      highlight: 'Discovery & Context Immersion',
    },
    {
      step: '02',
      title: 'Training Need Analysis (TNA)',
      description: 'Multi-stakeholder diagnostic assessments, supervisory feedback, and participant surveys to pinpoint exact behavioral skill bottlenecks.',
      highlight: 'Targeted Diagnostic Audits',
    },
    {
      step: '03',
      title: 'Define Training Objectives',
      description: 'Collaboratively defining measurable, performance-linked learning objectives that directly mirror business KPIs and ROI metrics.',
      highlight: 'Measurable Outcome Anchoring',
    },
    {
      step: '04',
      title: 'Design the Outline',
      description: 'Architecting customized pedagogical blueprints, scenario simulations, group roleplays, and behavioral case studies.',
      highlight: 'Curriculum & Experiential Architecture',
    },
    {
      step: '05',
      title: 'Develop the Content',
      description: 'Authoring context-specific participant guides, multimedia visual assets, facilitator handbooks, and practical workplace job aids.',
      highlight: 'Bespoke Material Engineering',
    },
    {
      step: '06',
      title: 'Deliver the Programme',
      description: 'High-energy, interactive delivery facilitated by senior corporate behavioral master trainers in classroom, hybrid, or outbound environments.',
      highlight: 'High-Impact Immersive Delivery',
    },
    {
      step: '07',
      title: 'Measure Effectiveness & Recommendations',
      description: 'Evaluating post-session learning retention, synthesizing participant feedback, and presenting strategic recommendations to executive management.',
      highlight: 'ROI & Continuous Reinforcement',
    },
  ],
};

// ==========================================
// 8. Esteemed Clientele (21 Organizations)
// ==========================================
export const clientCategories: ClientCategory[] = [
  {
    category: 'Pharma & Lifesciences',
    description: 'Global and domestic pharmaceutical giants maintaining rigorous quality and compliance standards.',
    clients: [
      {
        name: 'Natco Pharma Limited',
        category: 'Pharma & Lifesciences',
        logoUrl: '/clients/Natco_pharma.png',
        subtitle: 'Global Oncology & Specialty Pharma',
      },
      {
        name: 'GlaxoSmithKline (GSK)',
        category: 'Pharma & Lifesciences',
        logoUrl: '/clients/Gsk-logo.webp',
        subtitle: 'Global Biopharma Leader',
      },
      {
        name: 'Eisai',
        category: 'Pharma & Lifesciences',
        logoUrl: '/clients/eisai.png',
        subtitle: 'Human Health Care (hhc) Pharma',
      },
      {
        name: 'Suven Life Sciences',
        category: 'Pharma & Lifesciences',
        logoUrl: '/clients/suven_life_sciences.jpg',
        subtitle: 'CNS Drug Discovery & Biopharma',
      },
      {
        name: 'Krebs Biochemicals',
        category: 'Pharma & Lifesciences',
        logoUrl: '/clients/krebs.png',
        subtitle: 'Biochemicals & Fermentation',
      },
    ],
  },
  {
    category: 'FMCG & Conglomerates',
    description: 'Leading consumer goods powerhouses driving high-velocity operations and customer loyalty.',
    clients: [
      {
        name: 'ITC Limited',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/ITC_Limited_Logo.svg',
        subtitle: 'Diversified Conglomerate',
      },
      {
        name: 'Coca-Cola',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/Coca_cola.png',
        subtitle: 'Global Beverage Leader',
      },
      {
        name: 'Adani Wilmar',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/adani_wilmar.png',
        subtitle: 'Fortune Edible Oils & FMCG',
      },
      {
        name: 'Hershey’s',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/hersheys.jpg',
        subtitle: 'Confectionery & Food Products',
      },
      {
        name: 'Nutrine',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/nutrine.jpg',
        subtitle: 'Heritage Confectionery Brand',
      },
      {
        name: 'Parrys (EID Parry)',
        category: 'FMCG & Conglomerates',
        logoUrl: '/clients/parrys.png',
        subtitle: 'Murugappa Group / Bio-Products',
      },
    ],
  },
  {
    category: 'Industrial, Cement & Manufacturing',
    description: 'Heavy industrial, infrastructure, and manufacturing corporations powering economic infrastructure.',
    clients: [
      {
        name: 'Reliance Industries Limited',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/reliance_industries.jpg',
        subtitle: 'Energy, Petrochemicals & Materials',
      },
      {
        name: 'MRF',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/mrf_logo.png',
        subtitle: 'Tire & Rubber Manufacturing',
      },
      {
        name: 'Amara Raja',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/Amara_raja_group.png',
        subtitle: 'Energy Storage & Industrial Power',
      },
      {
        name: 'Aditya Birla UltraTech Cement',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/aditya_birla.png',
        subtitle: 'UltraTech Building Solutions',
      },
      {
        name: 'The India Cements Ltd',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/India_Cements_logo.png',
        subtitle: 'Infrastructure & Cement Manufacturing',
      },
      {
        name: 'Ramco SuperGrade',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/ramco_supergrade.jpg',
        subtitle: 'The Ramco Cements Limited',
      },
      {
        name: 'KCP Cement',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/kcp_cement.png',
        subtitle: 'The KCP Group / Heavy Engineering',
      },
      {
        name: 'International Paper',
        category: 'Industrial, Cement & Manufacturing',
        logoUrl: '/clients/international_paper.png',
        subtitle: 'Global Packaging & Pulp',
      },
      {
        name: 'Nava Bharat',
        category: 'Industrial, Cement & Manufacturing',
        subtitle: 'Ferro Alloys, Energy & Mining',
      },
    ],
  },
  {
    category: 'International & Infrastructure',
    description: 'Overseas energy leaders and prominent transnational infrastructure engineering firms.',
    clients: [
      {
        name: 'Qatar Petroleum',
        category: 'International & Infrastructure',
        logoUrl: '/clients/qatar_petroleum_logo.webp',
        subtitle: 'QatarEnergy / Oil & Gas Enterprise',
      },
      {
        name: 'ETA Ascon',
        category: 'International & Infrastructure',
        logoUrl: '/clients/eta_ascon_logo.jpg',
        subtitle: 'No.1 MEP Contractor & Engineering',
      },
      {
        name: 'ETA Star',
        category: 'International & Infrastructure',
        logoUrl: '/clients/eta_star_logo.jpg',
        subtitle: 'Property Development & Hospitality',
      },
      {
        name: 'ETA Logistics',
        category: 'International & Infrastructure',
        logoUrl: '/clients/eta_logisctics_logo.jpg',
        subtitle: 'Transnational Cargo & Supply Chain',
      },
    ],
  },
];

// All Clients Flattened for quick stats & marquee
export const allClients: ClientItem[] = clientCategories.flatMap((cat) => cat.clients);


// ==========================================
// 9. Contact Details & Official Coordinates
// ==========================================
export const contactDetails: ContactInfo = {
  companyName: 'GKS Consultancy',
  brandTagline: 'Transformative Behavioral Learning & Strategic L&D Consulting',
  address: 'Flat No. 1108, 11th Floor, Vaisakhi Skyline Towers, Yendada',
  cityStateZip: 'Visakhapatnam - 530048, Andhra Pradesh',
  country: 'India',
  phones: ['+91 97043 23804', '+91 96183 25208', '+91 99851 42999'],
  primaryEmail: 'info@gksconsultancy.com',
  whatsappNumber: '919704323804',
  whatsappFormatted: '+91 97043 23804',
  website: 'www.gksconsultancy.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST',
};
