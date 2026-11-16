import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Receipt,
  Sparkles,
  IndianRupee,
  Fingerprint,
  FileCheck2,
  Users,
} from 'lucide-react';

const FEATURED_SERVICES = [
  {
    id: 'aadhaar',
    name: 'Aadhaar & PAN Update',
    tag: 'Identity & G2C',
    authority: 'UIDAI · Income Tax Dept',
    fee: '₹50 Govt Fee',
    time: '4 mins average',
    icon: Fingerprint,
    color: '#38bdf8',
    summary: 'Biometric update, mobile linking, address correction & instant reprint.',
    requirements: ['Original Aadhaar Number', 'Valid Address Proof', 'Biometric / OTP'],
  },
  {
    id: 'pm-kisan',
    name: 'PM-KISAN e-KYC & DBT',
    tag: 'Agriculture Welfare',
    authority: 'Ministry of Agriculture',
    fee: '₹15 Assisted Fee',
    time: '3 mins average',
    icon: FileCheck2,
    color: '#10b981',
    summary: 'Biometric e-KYC verification for ₹2,000 quarterly farmer installments.',
    requirements: ['Aadhaar Number', 'Bank Passbook / NPCI', 'Land Record (Khatauni)'],
  },
  {
    id: 'micro-atm',
    name: 'Micro-ATM Cash & AePS',
    tag: 'Doorstep Banking',
    authority: 'DigiPay · NPCI / RBI',
    fee: 'Zero Fee for Citizen',
    time: 'Instant Cash Out',
    icon: IndianRupee,
    color: '#ff5500',
    summary: 'Doorstep cash withdrawal, balance enquiry, and DBT transfer via thumbprint.',
    requirements: ['Any Bank Account', 'Aadhaar Biometric', 'No Debit Card Needed'],
  },
  {
    id: 'ayushman',
    name: 'Ayushman Golden Card',
    tag: 'Healthcare Coverage',
    authority: 'National Health Authority',
    fee: '100% Free Scheme',
    time: '5 mins on counter',
    icon: ShieldCheck,
    color: '#f59e0b',
    summary: '₹5,00,000 free annual cashless health insurance for listed families.',
    requirements: ['Ration Card / PM Letter', 'Family Aadhaar Cards', 'e-KYC'],
  },
];

export default function HeroServiceTerminal({ onOpenLocator }) {
  const [selectedServiceId, setSelectedServiceId] = useState('aadhaar');
  const [activeTab, setActiveTab] = useState('citizen'); // 'citizen' | 'vle'

  const currentService =
    FEATURED_SERVICES.find((s) => s.id === selectedServiceId) || FEATURED_SERVICES[0];
  const IconComponent = currentService.icon;

  return (
    <div className="relative w-full max-w-[540px] rounded-3xl bg-gradient-to-b from-[#0c1a2e]/95 to-[#071120]/95 backdrop-blur-2xl border border-white/15 p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-left select-none overflow-hidden">
      {/* Ambient Top Glow Orbs */}
      <div
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ backgroundColor: currentService.color }}
      />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#1d4ed8]/20 blur-3xl pointer-events-none" />

      {/* Header Row: Live Counter Indicator & Citizen / VLE Mode Switcher */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
            5,50,000+ Kave Counters Active
          </span>
        </div>

        {/* Audience Toggle */}
        <div className="inline-flex bg-white/10 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('citizen')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'citizen'
                ? 'bg-white text-[#0a1628] shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            For Citizens
          </button>
          <button
            onClick={() => setActiveTab('vle')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'vle'
                ? 'bg-[#ff5500] text-white shadow-xs'
                : 'text-white/70 hover:text-white'
            }`}
          >
            For VLEs
          </button>
        </div>
      </div>

      {activeTab === 'citizen' ? (
        <div className="relative z-10 space-y-4">
          {/* Service Selector Chips */}
          <div>
            <div className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider mb-2.5">
              Select an Essential Service:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {FEATURED_SERVICES.map((s) => {
                const isSelected = s.id === selectedServiceId;
                const ServiceIcon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-white/35 text-white shadow-sm'
                        : 'bg-white/[0.04] border-white/8 text-slate-300 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <ServiceIcon
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: isSelected ? s.color : '#94a3b8' }}
                    />
                    <span className="truncate">{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-2xl bg-white/[0.06] border border-white/12 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-[#94a3b8] font-medium">
                    {currentService.authority}
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-white tracking-tight mt-0.5">
                    {currentService.name}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold"
                    style={{
                      backgroundColor: `${currentService.color}25`,
                      color: currentService.color,
                      border: `1px solid ${currentService.color}45`,
                    }}
                  >
                    {currentService.fee}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-end gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    <span>{currentService.time}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {currentService.summary}
              </p>

              {/* Verified Checklist */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  What to bring to your nearest centre:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentService.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.08] text-[11px] text-white/90 font-medium"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{req}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Kendra Locator Action */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#1e3a8a]/40 to-[#0f172a]/60 border border-sky-500/25 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#ff5500] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Find Your Nearest Kendra</div>
                <div className="text-[11px] text-slate-300">
                  Over 5,50,000 verified counters across 28 states
                </div>
              </div>
            </div>

            <button
              onClick={onOpenLocator}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0a1628] transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
            >
              Locate Now
            </button>
          </div>
        </div>
      ) : (
        /* VLE Opportunity Card */
        <div className="relative z-10 space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-[#ff5500]/15 to-transparent border border-[#ff5500]/30 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ff5500]/25 text-[#ff7733] border border-[#ff5500]/40 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>COMMUNITY ENTREPRENEUR</span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
              Launch a CSC Digital Seva Kendra in Your Gram Panchayat.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Become the trusted digital government desk for your village. Deliver 400+ G2C &
              banking services, earn reliable monthly commission, and empower local citizens.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="text-base font-bold text-white">₹35,000+</div>
                <div className="text-[10px] text-slate-400">Avg. Monthly Earning</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10">
                <div className="text-base font-bold text-emerald-400">400+</div>
                <div className="text-[10px] text-slate-400">Authorized Services</div>
              </div>
            </div>
          </div>

          <a
            href="#get-started"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Register as a VLE Today</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      )}

      {/* Trust Seal Footer */}
      <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Government Authorized Fee Rates</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Receipt className="w-3.5 h-3.5 text-sky-400" />
          <span>Printed Stamped Receipt</span>
        </div>
      </div>
    </div>
  );
}

