// ============================================================================
// CSC DIGITAL SEVA PORTAL — CURATED LOW-COGNITIVE-LOAD STORYTELLING DATA
// Authentic Indian documentary imagery + concise, human-first copy
// ============================================================================

export const HERO_SEQUENCE = [
  {
    step: '01',
    moment: 'Arrival',
    title: 'A citizen arrives with an everyday need',
    subtitle: 'Walking into a neighbourhood Common Service Centre in rural Maharashtra.',
    // Authentic Indian village/community imagery
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85',
  },
  {
    step: '02',
    moment: 'Welcome',
    title: 'A familiar face who speaks their language',
    subtitle: 'The local VLE listens and explains the process clearly, person to person.',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1800&q=85',
  },
  {
    step: '03',
    moment: 'Assistance',
    title: 'Guided digital service at the counter',
    subtitle: 'Biometric verification and document filing completed in minutes.',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1800&q=85',
  },
  {
    step: '04',
    moment: 'Clarity',
    title: 'Leaving with certainty and a verified receipt',
    subtitle: 'No middlemen, no repeat trips to distant district offices.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1800&q=85',
  },
  {
    step: '05',
    moment: 'Network',
    title: 'One local centre, part of a nationwide network',
    subtitle: 'Over 5.8 lakh centres connecting every corner of India.',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1800&q=85',
  },
];

export const IMPACT_METRICS = [
  {
    value: '5.84 Lakh+',
    label: 'Total Functional CSCs',
    sub: 'Operating across urban and rural India',
  },
  {
    value: '4.62 Lakh+',
    label: 'Gram Panchayat Centres',
    sub: 'Serving citizens inside their own village',
  },
  {
    value: '36 States & UTs',
    label: 'Nationwide Reach',
    sub: 'Connected across 760+ districts',
  },
  {
    value: '400+ Services',
    label: 'Essential Digital Services',
    sub: 'Governance, banking, health & education',
  },
];

export const STATE_HIGHLIGHTS = [
  { id: 'all', name: 'All India', centres: '5,84,000+ Centres', focus: 'Unified G2C, Banking & Healthcare Network' },
  { id: 'up', name: 'Uttar Pradesh', centres: '1,18,000+ Centres', focus: 'e-District, PM-KISAN & Women VLE Hubs' },
  { id: 'mh', name: 'Maharashtra', centres: '64,900+ Centres', focus: 'Citizen Facilitation & Land Records' },
  { id: 'rj', name: 'Rajasthan', centres: '58,400+ Centres', focus: 'Rural Banking & Crop Insurance' },
  { id: 'od', name: 'Odisha', centres: '34,800+ Centres', focus: 'Tribal Hinterland & Coastal Inclusion' },
  { id: 'jk', name: 'Jammu & Kashmir', centres: '14,200+ Centres', focus: 'DIGI-Pay Sakhi Doorstep Banking' },
  { id: 'as', name: 'Assam & NE', centres: '26,500+ Centres', focus: 'River Island Tele-Health & Digital Literacy' },
];

// 05A: For Aspiring VLEs
export const VLE_STAGES = [
  {
    step: '01',
    label: 'Explore',
    title: 'Understand the VLE role in your community',
    desc: 'Establish a trusted local centre that helps neighbours access government, banking, and business services.',
    prepare: 'Identify an accessible ground-floor shop or kiosk space in your locality.',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    step: '02',
    label: 'Check eligibility',
    title: 'Review minimum qualifications & TEC',
    desc: 'Applicants must be 18+ years old with a Class 10th pass certificate, basic computer skills, and a TEC certificate.',
    prepare: 'Keep your Aadhaar, PAN card, and educational qualification ready.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  },
  {
    step: '03',
    label: 'Register',
    title: 'Apply online on the official CSC portal',
    desc: 'Submit your TEC certificate number, verify mobile via OTP, and upload geo-tagged photographs of your centre.',
    prepare: 'Cancelled cheque / passbook copy and inside/outside centre photos.',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    step: '04',
    label: 'Verification',
    title: 'District review & physical inspection',
    desc: 'District teams verify your documents and centre readiness before activating your official CSC ID.',
    prepare: 'Track your application online using your official reference number.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85',
  },
  {
    step: '05',
    label: 'Get started',
    title: 'Open your doors and begin serving citizens',
    desc: 'Log in to Digital Seva, connect your biometric scanner, display your official rate chart, and start delivering services.',
    prepare: 'Complete onboarding for e-District, DigiPay, and citizen support.',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=85',
  },
];

// 05B: For Citizens
export const CITIZEN_NEEDS = [
  {
    id: 'cert',
    label: 'Applying for a certificate',
    title: 'Birth, income, caste & domicile certificates near home',
    desc: 'Visit your local CSC instead of travelling to distant tehsil offices. Your VLE verifies documents and submits your request.',
    docs: 'Aadhaar card, address proof, and self-declaration',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bill',
    label: 'Paying an everyday bill',
    title: 'Electricity, gas, water & utility payments with instant receipts',
    desc: 'Pay bills in cash or digital mode through Bharat BillPay and walk away with a printed confirmation.',
    docs: 'Consumer number / previous bill copy',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bank',
    label: 'Accessing a banking service',
    title: 'Withdraw cash, check pensions & transfer funds via DigiPay',
    desc: 'Use Aadhaar-enabled biometric authentication to access your bank account right in your village.',
    docs: 'Aadhaar linked to your bank account',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'health',
    label: 'Healthcare & insurance',
    title: 'Ayushman Bharat cards, tele-medicine & crop insurance',
    desc: 'Enrol for ₹5 Lakh family health cover, consult doctors online, or secure your farm harvest.',
    docs: 'Aadhaar card and family ration card / land record',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=85',
  },
];

// 06: Services — Start with a Need
export const SERVICE_ITEMS = [
  {
    id: '1',
    name: 'Income, Caste & Domicile Certificates',
    type: 'G2C',
    need: 'Certificates',
    desc: 'Official state e-District certificates for education, scholarships, and government schemes.',
    prereq: 'Aadhaar & local address proof',
  },
  {
    id: '2',
    name: 'Aadhaar Demographic Update',
    type: 'G2C',
    need: 'Certificates',
    desc: 'Update address, mobile number, or download e-Aadhaar at authorized centres.',
    prereq: 'Original Proof of Identity / Address',
  },
  {
    id: '3',
    name: 'PAN Card Application & Correction',
    type: 'G2C',
    need: 'Certificates',
    desc: 'New PAN allotment or correction through NSDL and UTIITSL assisted channels.',
    prereq: 'Aadhaar with linked mobile number',
  },
  {
    id: '4',
    name: 'DigiPay Cash Withdrawal & Balance',
    type: 'B2C',
    need: 'Banking',
    desc: 'Aadhaar-enabled micro-ATM cash withdrawal, balance check, and pension disbursal.',
    prereq: 'Aadhaar linked to bank account',
  },
  {
    id: '5',
    name: 'Electricity, Gas & Water Bill Payment',
    type: 'B2C',
    need: 'Bill payments',
    desc: 'Instant utility bill payments across state boards via Bharat BillPay (BBPS).',
    prereq: 'Consumer ID / Bill number',
  },
  {
    id: '6',
    name: 'Ayushman Bharat (PM-JAY) Card',
    type: 'G2C',
    need: 'Insurance',
    desc: 'Eligibility check and e-KYC for ₹5 Lakh cashless family health insurance.',
    prereq: 'Aadhaar & Ration Card / Family ID',
  },
  {
    id: '7',
    name: 'PM Fasal Bima & Micro-Insurance',
    type: 'B2C',
    need: 'Insurance',
    desc: 'Crop insurance for farmers along with affordable life, motor, and health cover.',
    prereq: 'Land record, bank passbook & Aadhaar',
  },
  {
    id: '8',
    name: 'IRCTC Train & Bus Ticketing',
    type: 'B2C',
    need: 'Bill payments',
    desc: 'Authorized railway reservation and state transport bus ticket booking.',
    prereq: 'Valid passenger ID proof',
  },
];

// 07A: Benefits Folder-Tab Cards (Exact Match to Reference Image 1 Bottom)
export const BENEFIT_CARDS_CLEAN = [
  {
    number: '01',
    title: 'Simple and easy to deliver',
    description: 'One unified Digital Seva portal connecting 400+ government and business services.',
    outerBg: 'bg-[#070624]',
    sheetColor: '#030330',
    textColor: 'text-white',
    subColor: 'text-indigo-200/75',
    variant: 'cobalt',
  },
  {
    number: '02',
    title: 'Sustainable local enterprise',
    description: 'Transparent service commissions, instant wallet ledger, and training through CSC Academy.',
    outerBg: 'bg-[#d0d8e4]',
    sheetColor: '#e4e9f2',
    textColor: 'text-[#11141c]',
    subColor: 'text-slate-600',
    variant: 'chrome2',
  },
  {
    number: '03',
    title: 'Built on community trust',
    description: 'Dedicated support, official certification, and a respected role serving citizens every day.',
    outerBg: 'bg-[#080b10]',
    sheetColor: '#0c1117',
    textColor: 'text-white',
    subColor: 'text-slate-400',
    variant: 'obsidian',
  },
];

// 07B: A Day at a CSC — Scroll-Expanding Pill Gallery (Exact Match to Reference Image 2)
export const DAY_AT_CSC_PILLS = [
  {
    id: '01',
    title: 'Opening the Centre',
    subtitle: '08:30 AM — Welcoming the morning in the village marketplace and preparing for the first visitors.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: '02',
    title: 'Preparing the Workspace',
    subtitle: '09:00 AM — Powering up the computer, biometric scanner, printer, and Digital Seva terminal.',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: '03',
    title: 'First Visitor Arrives',
    subtitle: '10:30 AM — Understanding a citizen’s everyday need and reviewing their documents with care.',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: '04',
    title: 'Completing the Service',
    subtitle: '02:00 PM — Biometric verification and instant receipt generation across banking and G2C portals.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: '05',
    title: 'Serving the Community',
    subtitle: '05:30 PM — Wrapping up the day’s transactions and expanding digital access across rural India.',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=85',
  },
];

// 08: Customer / VLE Stories — Exact 5-Card Fanned Carousel (Reference Image 1 Top)
export const STORIES_FAN_CLEAN = [
  {
    id: 0,
    title: 'Rukhsana Bano · Shopian, J&K',
    subtitle: 'Delivering doorstep DigiPay banking across snow-bound villages',
    headline: 'When winter closes the roads, our micro-ATM becomes the village bank.',
    quote: '"Elderly pensioners no longer walk miles in the cold to withdraw their money."',
    story:
      'Operating as a DIGI-Pay Sakhi in Shopian, Rukhsana brings Aadhaar-enabled banking and bill payments directly to orchard families and senior citizens.',
    image:
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 1,
    title: 'Mahendra Rathore · Rajasthan',
    subtitle: 'Turning a small panchayat kiosk into a trusted citizen hub',
    headline: 'From unstable income to an essential village institution.',
    quote: '"People used to lose a full day’s wage just to travel to the tehsil office."',
    story:
      'Mahendra’s centre serves 12 neighbouring villages with e-District certificates, crop insurance enrollment, and tele-consultations.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    title: 'Subhashree Majhi · Odisha',
    subtitle: 'Bringing digital India into tribal hinterlands of Odisha',
    headline: 'My CSC journey started with a simple idea.',
    quote: '"Nobody in our forest block should miss a scholarship or pension because of a form."',
    story:
      'In Mayurbhanj, Subhashree guides tribal artisans, students, and elders in Odia and Santali, bridging the digital divide with patience and dignity.',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    title: 'Priya Verma · Uttar Pradesh',
    subtitle: 'Empowering rural women through digital literacy & Tele-Law',
    headline: 'A safe, welcoming space for every mother and daughter in the block.',
    quote: '"When a woman runs a CSC, women from every household step forward with confidence."',
    story:
      'Priya combines citizen services with afternoon CSC Academy classes, having trained over 500 rural students and self-help group members.',
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    title: 'Bikramjit Kalita · Majuli, Assam',
    subtitle: 'Connecting river islands to specialist doctors and banking',
    headline: 'Bridging the Brahmaputra with solar power and BharatNet.',
    quote: '"What once required a ferry ride and an overnight stay now happens in ten minutes."',
    story:
      'Bikramjit runs a solar-backed CSC connecting island residents to tele-medicine doctors, Ayushman cards, and instant banking.',
    image:
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85',
  },
];

// 10: News & Updates
export const CLEAN_NEWS = [
  {
    id: 'n1',
    tag: 'New Initiative',
    date: 'Nov 2026',
    title: 'Instant DigiLocker Verification at CSC Counters',
    changed: 'Direct DigiLocker document fetch integrated into e-District workflows.',
    affects: 'Citizens applying for certificates & VLE operators.',
    next: 'Use Aadhaar consent at the counter for paperless verification.',
  },
  {
    id: 'n2',
    tag: 'VLE Training',
    date: 'Oct 2026',
    title: 'New TEC & Banking Correspondent Assessment Slots',
    changed: 'Additional regional-language online assessment windows are now open.',
    affects: 'Prospective VLEs & existing VLEs applying for BC banking.',
    next: 'Schedule your slot through the official CSC Academy portal.',
  },
  {
    id: 'n3',
    tag: 'Citizen Drive',
    date: 'Oct 2026',
    title: 'Ayushman Vaya Vandana (70+ Senior Citizens) Enrolment',
    changed: 'Dedicated biometric e-KYC workflow enabled for all citizens aged 70+.',
    affects: 'Senior citizens and families across all states.',
    next: 'Visit your nearest CSC with your Aadhaar card.',
  },
];
