// ============================================================================
// CSC DIGITAL SEVA PORTAL (DSP) — CONTENT ACCORDING TO PROPOSAL SPECIFICATION
// Exact section headings, storytelling narratives, verified service details
// ============================================================================

// 05A. For Aspiring VLEs — Step-by-Step Interactive Journey
export const VLE_JOURNEY_STAGES = [
  {
    id: 'explore',
    label: '1. Explore',
    title: 'Understand the VLE Role',
    desc: 'Learn how a Village Level Entrepreneur operates as a trusted local service provider, delivering 400+ central, state, banking, and commercial services.',
    prep: 'What to prepare: Basic computer literacy and desire to serve your local community.',
    image: '/images/vle-rajeshwar.jpg',
  },
  {
    id: 'eligibility',
    label: '2. Check Eligibility',
    title: 'Review Criteria & Requirements',
    desc: 'Candidates must be 18+ years old, hold a minimum 10th-grade qualification from a recognized board, and possess a valid Aadhaar and PAN card.',
    prep: 'What to prepare: Proof of age, educational mark sheet, PAN, and local residence certificate.',
    image: '/images/vle-gurpreet.jpg',
  },
  {
    id: 'register',
    label: '3. Register',
    title: 'TEC Course & Formal Application',
    desc: 'Enroll in and clear the Telecentre Entrepreneur Course (TEC) on the CSC Academy portal. Use your TEC certificate number to submit your formal application.',
    prep: 'What to prepare: TEC certificate number, cancelled bank cheque, and centre photos.',
    image: '/images/vle-sunita.jpg',
  },
  {
    id: 'verification',
    label: '4. Verification',
    title: 'Physical Audit & District Approval',
    desc: 'Your designated District Manager conducts a physical verification of your centre premises, biometric hardware, and broadband connectivity.',
    prep: 'What to prepare: PC/laptop, printer, biometric scanner, and stable internet connection.',
    image: '/images/step-03-biometric.jpg?v=6',
  },
  {
    id: 'get-started',
    label: '5. Get Started',
    title: 'Launch Counter & Deliver Services',
    desc: 'Receive your 12-digit CSC ID, top up your Digital Seva wallet, and start providing essential government certificates, banking, and utility services.',
    prep: 'What to prepare: Launch your counter terminal and announce available services to villagers.',
    image: '/images/step-04-delivery.jpg?v=6',
  },
];

// 05B. For Citizens — Everyday Needs & Assisted Services
export const CITIZEN_NEEDS = [
  {
    id: 'certificates',
    label: 'Certificates & Identity',
    title: 'State Revenue & Identity Services',
    desc: 'Apply for income, caste, domicile, birth, and death certificates, alongside Aadhaar demographic updates, e-Aadhaar print, and PAN card generation.',
    required: 'Documents required: Existing identity proof, residence certificate, and passport photographs.',
    image: '/images/step-01-visit.jpg?v=6',
  },
  {
    id: 'bills',
    label: 'Bill Payments & Recharges',
    title: 'Bharat BillPay & Transit Top-ups',
    desc: 'Settle monthly electricity, piped gas, water, and municipal corporation taxes instantly with official printed receipts, plus FASTag reloads.',
    required: 'Documents required: Consumer account number or bill reference copy.',
    image: '/images/step-02-review.jpg?v=6',
  },
  {
    id: 'banking',
    label: 'Banking & Social Pension',
    title: 'Aadhaar Micro-ATM & Life Certificates',
    desc: 'Withdraw cash from any interoperable bank account using Aadhaar biometric authentication (AEPS), and generate digital life certificates (Jeevan Pramaan).',
    required: 'Documents required: Aadhaar number and registered bank name for biometric verification.',
    image: '/images/step-03-biometric.jpg?v=6',
  },
  {
    id: 'welfare',
    label: 'Welfare & Crop Insurance',
    title: 'PM-KISAN, Ayushman & Crop Protection',
    desc: 'Complete PM-KISAN biometric e-KYC, apply for Ayushman PM-JAY golden health cards, and enrol in PM Fasal Bima seasonal crop protection.',
    required: 'Documents required: Land records (Khasra/Khatauni), Aadhaar, and ration card.',
    image: '/images/step-04-delivery.jpg?v=6',
  },
];

export const PLATFORM_CARDS = [
  {
    number: '01',
    title: 'Digital Services & Unified Ledger',
    description:
      'One operator login connecting 400+ central, state, and commercial portals with a single wallet balance.',
    outerBg: 'bg-[#0a1628]',
    sheetColor: '#071120',
    textColor: 'text-white',
    subColor: 'text-[#9cb1d4]',
    accentColor: 'text-[#ff5500]',
    variant: 'cobalt',
  },
  {
    number: '02',
    title: 'Your Enterprise & Assisted Delivery',
    description:
      'Built for Village Level Entrepreneurs to verify documents, capture biometrics, and issue receipts on the spot.',
    outerBg: 'bg-white',
    sheetColor: '#f3f6fc',
    textColor: 'text-[#0a1628]',
    subColor: 'text-[#334766]',
    accentColor: 'text-[#ff5500]',
    variant: 'chromatic',
  },
  {
    number: '03',
    title: 'Earning Model & Transparent Settlement',
    description:
      'Automated commission splits, instant BBPS bill reconciliation, and downloadable tax statements.',
    outerBg: 'bg-[#0d1e3a]',
    sheetColor: '#0a1628',
    textColor: 'text-white',
    subColor: 'text-[#9cb1d4]',
    accentColor: 'text-[#ff5500]',
    variant: 'obsidian',
  },
];

export const SERVICE_DIRECTORY = [
  // Page 1 Services (First 8 Services)
  {
    id: 'uidai',
    category: 'G2C',
    code: 'G2C · UIDAI SERVICES',
    name: 'Aadhaar',
    description:
      'Assisted demographic updates, e-Aadhaar print, document verification, and mobile number linking at authorized UCL centres.',
    department: 'UIDAI · Authorized UCL',
  },
  {
    id: 'edistrict',
    category: 'G2C',
    code: 'G2C · STATE PORTALS',
    name: 'e-District Certificates',
    description:
      'Income, caste, domicile, birth and death registration, and land record copies issued through state revenue networks.',
    department: 'State e-Governance Departments',
  },
  {
    id: 'identity',
    category: 'G2C',
    code: 'G2C · IDENTITY & TAX',
    name: 'PAN & Passport Seva',
    description:
      'PAN card applications (NSDL / UTIITSL), Passport Seva appointments, electoral roll updates, and identity documentation.',
    department: 'Central Ministries & PSUs',
  },
  {
    id: 'municipal',
    category: 'G2C',
    code: 'G2C · URBAN & LOCAL BODIES',
    name: 'Municipal & Civic Services',
    description:
      'Property tax collection, municipal water charges, trade license renewals, and local panchayat fee submissions.',
    department: 'Municipal Corporations & ULBs',
  },
  {
    id: 'electricity',
    category: 'B2C',
    code: 'B2C · BHARAT BILLPAY',
    name: 'Electricity & BillPay',
    description:
      'Real-time bill fetch and instant receipt generation across 80+ state electricity distribution companies and gas utilities.',
    department: 'NPCI Bharat BillPay (BBPS)',
  },
  {
    id: 'recharge',
    category: 'B2C',
    code: 'B2C · TELECOM & TRANSIT',
    name: 'Mobile, DTH & FASTag',
    description:
      'Prepaid mobile top-ups, postpaid bill settlement, DTH recharges, and National Electronic Toll Collection (FASTag) reloads.',
    department: 'Telecom & NHAI Partners',
  },
  {
    id: 'banking',
    category: 'B2C',
    code: 'B2C · FINANCIAL INCLUSION',
    name: 'DigiPay Banking',
    description:
      'Aadhaar-enabled cash withdrawal (AEPS), balance inquiry, mini-statements, and domestic money transfer across interoperable banks.',
    department: 'NPCI & Partner Banks',
  },
  {
    id: 'insurance',
    category: 'B2C',
    code: 'B2C · RISK & MOBILITY',
    name: 'Insurance & Protection',
    description:
      'Crop, motor, health, and life micro-insurance policies alongside authorized policy renewals and claim assistance.',
    department: 'IRDAI RAP · Partner Insurers',
  },

  // Page 2 Services (Next 8 Services)
  {
    id: 'welfare',
    category: 'G2C',
    code: 'G2C · SOCIAL SECURITY',
    name: 'Ayushman & Welfare',
    description:
      'Ayushman Bharat PM-JAY health cards, PM-KISAN biometric e-KYC, e-Shram unorganized worker cards, and social security schemes.',
    department: 'NHA · MoA&FW · MoLE',
  },
  {
    id: 'pension',
    category: 'G2C',
    code: 'G2C · PENSION & RETIREMENT',
    name: 'Jeevan Pramaan & Pension',
    description:
      'Biometric Digital Life Certificates for pensioners, NPS Tier-I/II onboarding, and Atal Pension Yojana social security enrolments.',
    department: 'PFRDA · NIC Jeevan Pramaan',
  },
  {
    id: 'telelaw',
    category: 'G2C',
    code: 'G2C · ACCESS TO JUSTICE',
    name: 'Tele-Law Legal Aid',
    description:
      'Video consultations connecting rural citizens with panel lawyers and paralegal volunteers for pre-litigation legal advice.',
    department: 'Department of Justice · MoLJ',
  },
  {
    id: 'agriculture',
    category: 'G2C',
    code: 'G2C · AGRI & FARMER WELFARE',
    name: 'PMFBY Crop Insurance',
    description:
      'Pradhan Mantri Fasal Bima Yojana seasonal crop coverage, soil health card registration, and farmer producer input booking.',
    department: 'Ministry of Agriculture & FW',
  },
  {
    id: 'irctc',
    category: 'B2C',
    code: 'B2C · AUTHORIZED TRANSIT',
    name: 'IRCTC Railway Ticketing',
    description:
      'Authorized B2B reservation counter for Indian Railways sleeper and AC tickets, domestic flight bookings, and state transport buses.',
    department: 'IRCTC · Authorized Travel Desk',
  },
  {
    id: 'academy',
    category: 'B2C',
    code: 'B2C · DIGITAL LITERACY',
    name: 'CSC Academy & Skills',
    description:
      'Certified rural computer literacy, financial awareness modules, BCC/CCC examination centres, and vocational training.',
    department: 'CSC Academy · NIELIT',
  },
  {
    id: 'telehealth',
    category: 'B2C',
    code: 'B2C · RURAL HEALTHCARE',
    name: 'Tele-Medicine Consults',
    description:
      'Online allopathic and AYUSH doctor video consultations, generic medicine ordering, and preventive diagnostic packages.',
    department: 'CSC Health · Partner Hospitals',
  },
  {
    id: 'grameen',
    category: 'B2C',
    code: 'B2C · RURAL E-COMMERCE',
    name: 'CSC Grameen e-Store',
    description:
      'Last-mile rural delivery of consumer appliances and agricultural inputs alongside BharatNet FTTH broadband subscriber support.',
    department: 'CSC Grameen e-Store · BBNL',
  },
];

// E. How Digital Seva Works (4-Step Visual Flow — Scroll-Expanding Pill Accordion)
// Follows Proposal Sequence: A citizen arrives -> VLE welcomes & understands -> Assisted delivery -> Leaves with clarity & receipt
export const WORKFLOW_STEPS = [
  {
    step: '01',
    shortTitle: 'Citizen Arrival',
    title: 'A citizen arrives with an everyday need',
    subtitle:
      'A resident walks into their local Common Service Centre with a specific certificate, utility, banking, or welfare request.',
    image: '/images/step-01-visit.jpg?v=6',
  },
  {
    step: '02',
    shortTitle: 'Verify Requirements',
    title: 'The VLE welcomes them & verifies requirements',
    subtitle:
      'The entrepreneur listens to what is needed, checks supporting documents, and explains the transparent official fee upfront.',
    image: '/images/step-02-review.jpg?v=6',
  },
  {
    step: '03',
    shortTitle: 'Process via Platform',
    title: 'The VLE assists using the Digital Seva platform',
    subtitle:
      'Accessing the integrated government or business portal, capturing Aadhaar biometric or OTP consent, and authorizing payment.',
    image: '/images/step-03-biometric.jpg?v=6',
  },
  {
    step: '04',
    shortTitle: 'Receipt & Guidance',
    title: 'The citizen receives guidance & leaves with clarity',
    subtitle:
      'The transaction is completed on the spot with an official printed receipt and SMS reference ID to track or download certificates.',
    image: '/images/step-04-delivery.jpg?v=6',
  },
];

// F. For Village Level Entrepreneurs — Clean Transparent Cutout VLE Testimonials
export const VLE_CAROUSEL_ITEMS = [
  {
    id: 0,
    name: 'Rajeshwar Rao',
    age: 38,
    location: 'Warangal, Telangana',
    testimonial:
      'Farmers now get verified land records and crop insurance right in our village without travelling a full day to town.',
    image: '/images/vle-rajeshwar-cutout.png?v=12',
  },
  {
    id: 1,
    name: 'Gurpreet Singh',
    age: 29,
    location: 'Moga, Punjab',
    testimonial:
      'One unified wallet lets me handle utility bills, FASTag, and banking disbursements with zero delays.',
    image: '/images/vle-gurpreet-cutout.png?v=12',
  },
  {
    id: 2,
    name: 'Sunita Devi',
    age: 31,
    location: 'Chandauli, Uttar Pradesh',
    testimonial:
      'Elderly citizens and widows now withdraw their monthly pensions safely right inside our village centre.',
    image: '/images/vle-sunita-cutout.png?v=12',
  },
  {
    id: 3,
    name: 'Meenakshi Nair',
    age: 34,
    location: 'Palakkad, Kerala',
    testimonial:
      'Rural Micro-ATM services brought banking and statutory certificates under one roof, tripling our footfall.',
    image: '/images/vle-meenakshi-cutout.png?v=12',
  },
  {
    id: 4,
    name: 'Arjun Sharma',
    age: 32,
    location: 'Shimla, Himachal Pradesh',
    testimonial:
      'Remote valley hamlets stay connected to essential certificates, welfare schemes, and confirmed rail travel.',
    image: '/images/vle-tashi-cutout.png?v=12',
  },
];

export const VLE_ECOSYSTEM_PILLARS = [
  {
    code: '01',
    title: 'Multiple Service Opportunities',
    detail: 'Deliver G2C certificates, banking, insurance & utilities from one ID.',
  },
  {
    code: '02',
    title: 'Digital Delivery Tools',
    detail: 'Unified wallet ledger, biometric RD auth & instant citizen receipts.',
  },
  {
    code: '03',
    title: 'Entrepreneurial Growth',
    detail: 'Transparent commission structures & recurring neighborhood footfall.',
  },
  {
    code: '04',
    title: 'Training & Support',
    detail: 'Structured TEC, IIBF Banking & IRDAI RAP certification modules.',
  },
  {
    code: '05',
    title: 'Nationwide CSC Network',
    detail: 'District manager field assistance & dedicated 14599 technical helpdesk.',
  },
];

// G. Latest Updates & Announcements
export const PORTAL_UPDATES = [
  {
    id: 'u1',
    date: '05 Nov 2026',
    category: 'New Service Launch',
    type: 'services',
    tagColor: 'text-[#ff7733] bg-[#ff7733]/10 border-[#ff7733]/25',
    title: 'Direct DigiLocker Document Verification in e-District Workflows',
    summary:
      'Operators can now pull citizen-consented DigiLocker documents directly into state certificate forms, reducing scan uploads.',
    affects: 'All State Portal & e-District VLEs',
    action: 'Enable DigiLocker API in Operator Settings',
    badge: 'LIVE UPDATE',
    circularNo: 'CSC/IT/2026/ED-441',
  },
  {
    id: 'u2',
    date: '29 Oct 2026',
    category: 'Operational Notice',
    type: 'operations',
    tagColor: 'text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/25',
    title: 'Mandatory UIDAI L1 Registered Device (RD) Driver Upgrade',
    summary:
      'All centres performing Aadhaar e-KYC and DigiPay AEPS must upgrade to L1-compliant biometric device firmware before 30 November.',
    affects: 'UCL Centres & DigiPay Banking Correspondents',
    action: 'Download Certified L1 Drivers from Helpdesk',
    badge: 'CRITICAL',
    circularNo: 'UIDAI/OPS/2026/RD-L1-92',
  },
  {
    id: 'u3',
    date: '18 Oct 2026',
    category: 'Training & Certification',
    type: 'training',
    tagColor: 'text-[#34d399] bg-[#34d399]/10 border-[#34d399]/25',
    title: 'New Assessment Windows for TEC & IIBF Banking Correspondents',
    summary:
      'Prospective VLEs and existing operators applying for Banking Correspondent authorization can book November examination slots online.',
    affects: 'Prospective & Uncertified VLE Candidates',
    action: 'Book Examination Slot on CSC Academy',
    badge: 'SLOTS OPEN',
    circularNo: 'CSC/TRG/2026/BC-108',
  },
  {
    id: 'u4',
    date: '12 Oct 2026',
    category: 'New Service Launch',
    type: 'services',
    tagColor: 'text-[#ff7733] bg-[#ff7733]/10 border-[#ff7733]/25',
    title: 'Kisan Credit Card (KCC) Digital Loan Onboarding on Single Ledger',
    summary:
      'Instant digitized loan sanctioning for small and marginal farmers directly through NABARD-integrated CSC wallet counters.',
    affects: 'Rural Agricultural Banking Outlets',
    action: 'View KCC Verification Guidelines',
    badge: 'NEW',
    circularNo: 'NABARD/CSC/2026/AG-19',
  },
  {
    id: 'u5',
    date: '09 Oct 2026',
    category: 'Portal Maintenance',
    type: 'operations',
    tagColor: 'text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/25',
    title: 'Nightly Wallet Reconciliation & BBPS Settlement Window',
    summary:
      'Scheduled ledger maintenance runs between 01:00 AM and 02:30 AM IST on Sundays; daytime counter operations remain unaffected.',
    affects: 'All Active Wallet & Utility Desks',
    action: 'Plan High-Volume Batches Prior to 01:00 AM',
    badge: 'SCHEDULED',
    circularNo: 'CSC/FIN/2026/REC-08',
  },
  {
    id: 'u6',
    date: '02 Oct 2026',
    category: 'Regulatory & Policy',
    type: 'policy',
    tagColor: 'text-[#f472b6] bg-[#f472b6]/10 border-[#f472b6]/25',
    title: 'Standardized Citizen Service Charges Advisory across All States',
    summary:
      'Transparent rate cards must be physically displayed outside every kiosk counter. Zero cash surcharge policy strictly enforced.',
    affects: 'All 5,50,000+ Functional CSC Counters',
    action: 'Download Official Multilingual Rate Card PDF',
    badge: 'MANDATORY',
    circularNo: 'MeitY/CSC/2026/FEE-77',
  },
];

// H. Trust, Safety & Support — Official Channels & Citizen/VLE Assistance
export const SUPPORT_ITEMS = [
  {
    code: '01',
    title: 'Official Helpline & Helpdesk',
    description:
      'Toll-free 14599 technical support for portal access, biometric drivers, and transaction inquiries across India.',
    action: 'Call 14599',
  },
  {
    code: '02',
    title: 'Security & Fraud Awareness',
    description:
      'Always verify official @csc.gov.in communication. CSC never asks for OTPs, passwords, or upfront personal payments.',
    action: 'Security Guide',
  },
  {
    code: '03',
    title: 'Grievance Redressal Mechanism',
    description:
      'Formal escalation channel for citizens and VLEs to report unresolved transaction disputes or service discrepancies.',
    action: 'File Grievance',
  },
  {
    code: '04',
    title: 'VLE Registration & Application Assistance',
    description:
      'Direct guidance for prospective entrepreneurs on eligibility, TEC certification, and district verification.',
    action: 'Track Application',
  },
];

export const FAQ_LIST = [
  {
    q: 'How can citizens access government and business services at a CSC?',
    a: 'Citizens can simply walk into any authorized Common Service Centre. The local Village Level Entrepreneur assists in filling out forms, submitting required documents, and completing verified biometric transactions.',
  },
  {
    q: 'What does it take to become a Village Level Entrepreneur (VLE)?',
    a: 'Applicants must be at least 18 years old, possess a valid Aadhaar and PAN card, complete the Telecentre Entrepreneur Course (TEC) certification, and have a designated centre with a computer, printer, biometric scanner, and internet connectivity.',
  },
  {
    q: 'Are all G2C and B2C services available across all centres?',
    a: 'While the Digital Seva platform hosts 400+ services, local availability depends on state portal integrations, regional government guidelines, and specific certifications such as Banking Correspondent or IRDAI approvals.',
  },
  {
    q: 'How does CSC ensure safety and secure transactions for citizens?',
    a: 'All transactions use official Aadhaar-based biometric or OTP consent, encrypted central server gateways, and generate instant system-printed receipts with unique reference IDs for end-to-end auditability.',
  },
];
