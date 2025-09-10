export const SITE_CONFIG = {
  name: "Hudson Valley CISO",
  description: "Fractional CISO services for Hudson Valley SMBs. Board-level security leadership right-sized to your budget and goals.",
  url: "https://hudsonvalleyciso.com",
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "support@hvciso.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "845-418-8823",
  },
  calendarLink: import.meta.env.VITE_CALENDAR_LINK || "https://calendly.com/cyberintelpros",
  blogs: {
    cloudArchitecture: "https://cloud-architecture.blog/",
    dataSecurity: "https://data-security.blog/",
  },
};

export const TRUST_BADGES = [
  { 
    name: "CISSP", 
    fullName: "Certified Information Systems Security Professional",
    description: "Advanced security practitioner certification"
  },
  { 
    name: "CISM", 
    fullName: "Certified Information Security Manager",
    description: "Information security management certification"
  },
  { 
    name: "CIPM", 
    fullName: "Certified Information Privacy Manager",
    description: "Privacy management certification"
  },
  { 
    name: "CCSP", 
    fullName: "Certified Cloud Security Professional",
    description: "Cloud security specialist certification"
  },
];

export const CREDENTIALS = {
  security: {
    title: "Security Leadership & Risk",
    items: ["CISSP + concentrations", "CISM", "CRISC"]
  },
  privacy: {
    title: "Privacy & Data Protection", 
    items: ["CIPM", "CDPSE"]
  },
  cloud: {
    title: "Cloud & Software Security",
    items: ["CCSP", "CCSK", "CSSLP", "CCAK"]
  },
  program: {
    title: "Program & Delivery Management",
    items: ["PMP", "PMI-ACP", "PSM I"]
  },
  comptia: {
    title: "CompTIA Advanced Stack",
    items: ["Advanced security and infrastructure portfolio"]
  },
  education: {
    title: "Education",
    items: ["MS Computer Science", "MS Electrical Engineering", "BS Electrical Engineering"]
  },
  innovation: {
    title: "Innovation",
    items: ["Networking and systems innovation patents"]
  }
};

export const SERVICE_TIERS = [
  {
    name: "Starter",
    bestFor: "First security leader, basic compliance needs",
    inclusions: [
      "Security discovery and risk snapshot",
      "Essential policies and procedures", 
      "Cyber insurance questionnaire support",
      "3-month roadmap with priorities",
      "Monthly executive summary"
    ]
  },
  {
    name: "Standard",
    bestFor: "Growing businesses with compliance requirements",
    popular: true,
    inclusions: [
      "Everything in Starter, plus:",
      "Incident response playbook development",
      "Security awareness program kickoff",
      "KPI/KRI dashboard setup",
      "Vendor risk assessment framework",
      "Quarterly strategy reviews"
    ]
  },
  {
    name: "Comprehensive", 
    bestFor: "Rapidly scaling companies with complex needs",
    inclusions: [
      "Everything in Standard, plus:",
      "SOC 2 / ISO 27001 readiness program",
      "Advanced threat modeling",
      "Board-ready security reporting",
      "M&A security due diligence support",
      "24/7 incident response coordination"
    ]
  }
];

export const ADDONS = [
  {
    icon: "fire",
    name: "IR Retainer",
    description: "Custom incident response agreement",
    color: "red"
  },
  {
    icon: "users",
    name: "Tabletop Exercises", 
    description: "Crisis simulation and team training",
    color: "blue"
  },
  {
    icon: "clipboard-check",
    name: "Compliance Readiness",
    description: "Audit preparation and gap analysis", 
    color: "green"
  },
  {
    icon: "handshake",
    name: "Vendor Due Diligence",
    description: "Third-party security assessments",
    color: "purple"
  }
];

export const TIMELINE_PHASES = [
  {
    phase: 1,
    weeks: "Weeks 1-2",
    title: "Discovery & Quick Wins",
    items: [
      "Security discovery assessment",
      "Immediate risk identification", 
      "Quick wins implementation",
      "Executive risk snapshot"
    ]
  },
  {
    phase: 2, 
    weeks: "Weeks 3-6",
    title: "Foundation & Planning",
    items: [
      "Strategic roadmap development",
      "Essential policy framework",
      "Control baseline establishment",
      "Incident response playbook"
    ]
  },
  {
    phase: 3,
    weeks: "Weeks 7-12", 
    title: "Implementation & Measurement",
    items: [
      "Priority implementation",
      "Staff training programs",
      "Metrics and KRI tracking",
      "Quarterly strategy review"
    ]
  }
];

export const SCENARIOS = [
  {
    icon: "hospital",
    title: "Healthcare Practice",
    description: "Needs HIPAA compliance attestation for insurance and patient trust. Requires business associate agreements, risk assessments, and staff training.",
    outcome: "HIPAA-ready documentation and ongoing compliance support",
    color: "blue"
  },
  {
    icon: "industry", 
    title: "Manufacturing Company",
    description: "Large customers requiring security questionnaires and vendor risk assessments. Needs to demonstrate operational security and incident response capabilities.",
    outcome: "Pass customer security reviews and win more business",
    color: "orange"
  },
  {
    icon: "cloud",
    title: "Growing SaaS Company", 
    description: "Scaling rapidly and enterprise customers asking for SOC 2 compliance. Needs formal security program and audit readiness without hiring full-time security staff.",
    outcome: "SOC 2 Type II certification and enterprise sales enablement",
    color: "purple"
  }
];

export const FAQS = [
  {
    question: "How much time will you spend with our company each month?",
    answer: "This varies by service tier and company needs. Starter plans typically involve 8-12 hours monthly, Standard plans 15-20 hours, and Comprehensive plans 25-35 hours. This includes strategic sessions, reviews, and hands-on implementation support."
  },
  {
    question: "How do you work with our existing MSP or IT team?", 
    answer: "We coordinate closely with your MSP/IT team. I provide governance and strategic direction while they handle day-to-day implementation. This includes joint planning sessions, clear escalation paths, and shared accountability for security outcomes."
  },
  {
    question: "Do you help with cyber insurance questionnaires?",
    answer: "Yes, absolutely. Insurance questionnaire support is included in all service tiers. I help you understand requirements, implement necessary controls, and provide documentation that demonstrates your security posture to insurers."
  },
  {
    question: "What's the difference between your service tiers?",
    answer: "Starter is perfect for companies establishing their first formal security program. Standard adds incident response planning and awareness programs for growing businesses. Comprehensive includes advanced compliance preparation and board-level reporting for scaling companies."
  },
  {
    question: "How quickly can we get started?",
    answer: "After our initial consultation and agreement, we typically begin within 1-2 weeks. The first phase involves discovery and quick wins, so you'll see immediate value while we develop your comprehensive security roadmap."
  },
  {
    question: "Is incident response support included?",
    answer: "All plans include incident response playbook development and coordination protocols. For 24/7 incident response coverage, we offer custom retainer agreements based on your specific needs and risk profile."
  }
];
