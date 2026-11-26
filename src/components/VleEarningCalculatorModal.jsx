import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  IndianRupee,
  X,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RotateCcw,
  CheckCircle2,
} from './SolidIcons';

export default function VleEarningCalculatorModal({ isOpen, onClose, onStartRegistration }) {
  // Configurable sliders with realistic official CSC commission rates
  const [bankingTxns, setBankingTxns] = useState(15); // AEPS cash withdrawals (avg ₹15 commission)
  const [aadhaarTxns, setAadhaarTxns] = useState(8); // Aadhaar updates / biometrics (avg ₹35 commission)
  const [govSchemes, setGovSchemes] = useState(6); // PM-Kisan, Ayushman, e-Shram (avg ₹45 commission)
  const [utilityBills, setUtilityBills] = useState(20); // BBPS bills & recharges (avg ₹10 commission)
  const [insuranceTxns, setInsuranceTxns] = useState(2); // Motor/Health insurance & FASTag (avg ₹150 commission)

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Daily revenue breakdown
  const dailyBanking = bankingTxns * 15;
  const dailyAadhaar = aadhaarTxns * 35;
  const dailyGov = govSchemes * 45;
  const dailyUtility = utilityBills * 10;
  const dailyInsurance = insuranceTxns * 150;

  const totalDaily = dailyBanking + dailyAadhaar + dailyGov + dailyUtility + dailyInsurance;
  const totalMonthly = totalDaily * 30;
  const totalAnnual = totalMonthly * 12;

  const resetDefaults = () => {
    setBankingTxns(15);
    setAadhaarTxns(8);
    setGovSchemes(6);
    setUtilityBills(20);
    setInsuranceTxns(2);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#0a1628]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="calculator-modal-title"
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: 'spring', damping: 24, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white text-[#0a1628] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col"
      >
        {/* Top Header */}
        <div className="relative z-10 px-6 sm:px-7 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ff5500] shrink-0">
              <Calculator className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-100/70 text-[#ff5500] text-[10.5px] font-bold uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                <span>OFFICIAL COMMISSION SLABS</span>
              </div>
              <h3 id="calculator-modal-title" className="text-lg sm:text-xl font-bold text-[#0a1628]">
                VLE Monthly Earning Calculator
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 grid place-items-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Sliders & Breakdown Area */}
        <div className="relative z-10 p-6 sm:p-7 overflow-y-auto space-y-5 flex-1">
          {/* Headline Note */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
            Adjust your estimated daily transactions below to calculate how much you can earn every month operating an authorized CSC Digital Seva Kendra in your village.
          </p>

          {/* Interactive Sliders */}
          <div className="space-y-4">
            {/* 1. Cash Disbursal (AEPS) */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">
                  1. AEPS Cash Withdrawals & Micro-ATM
                </span>
                <span className="font-bold text-[#ff5500]">
                  {bankingTxns} txns/day · ₹{(dailyBanking * 30).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={bankingTxns}
                onChange={(e) => setBankingTxns(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 txns</span>
                <span>Avg. Commission ₹15 per withdrawal</span>
                <span>50 txns</span>
              </div>
            </div>

            {/* 2. Aadhaar Updates & PVC Cards */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">
                  2. Aadhaar Biometric & Demographic Updates
                </span>
                <span className="font-bold text-[#ff5500]">
                  {aadhaarTxns} txns/day · ₹{(dailyAadhaar * 30).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={aadhaarTxns}
                onChange={(e) => setAadhaarTxns(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 txns</span>
                <span>Avg. Commission ₹35 per citizen</span>
                <span>30 txns</span>
              </div>
            </div>

            {/* 3. Government Welfare Schemes */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">
                  3. PM-Kisan, Ayushman Card & E-Shram Registrations
                </span>
                <span className="font-bold text-[#ff5500]">
                  {govSchemes} txns/day · ₹{(dailyGov * 30).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={govSchemes}
                onChange={(e) => setGovSchemes(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 txns</span>
                <span>Avg. Commission ₹45 per application</span>
                <span>25 txns</span>
              </div>
            </div>

            {/* 4. Utility Bill Payments & Recharges (BBPS) */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">
                  4. Electricity, Water, Gas & Mobile Recharges
                </span>
                <span className="font-bold text-[#ff5500]">
                  {utilityBills} txns/day · ₹{(dailyUtility * 30).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="2"
                value={utilityBills}
                onChange={(e) => setUtilityBills(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 txns</span>
                <span>Avg. Commission ₹10 per bill payment</span>
                <span>60 txns</span>
              </div>
            </div>

            {/* 5. Insurance Policies & FASTag */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-900">
                  5. Motor/Cattle Insurance & FASTag Desk
                </span>
                <span className="font-bold text-[#ff5500]">
                  {insuranceTxns} txns/day · ₹{(dailyInsurance * 30).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={insuranceTxns}
                onChange={(e) => setInsuranceTxns(+e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 txns</span>
                <span>Avg. Commission ₹150 per policy</span>
                <span>10 txns</span>
              </div>
            </div>
          </div>

          {/* Real-Time Total Earnings Summary Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#122848] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff884d] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>PROJECTED MONTHLY INCOME</span>
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight flex items-center">
                  <span>₹{totalMonthly.toLocaleString('en-IN')}</span>
                  <span className="text-xs sm:text-sm font-normal text-slate-300 ml-2">/ month</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                  <span>₹{totalDaily.toLocaleString('en-IN')} / day</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold">
                    ₹{totalAnnual.toLocaleString('en-IN')} / year
                  </span>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-white/15 sm:pl-5 shrink-0">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Retained</span>
                </div>
                <p className="text-[10px] text-slate-300 mt-1 max-w-[140px]">
                  Zero royalties. You keep 80-90% direct commission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="relative z-10 px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={resetDefaults}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartRegistration?.();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            <span>Start Registration with These Earnings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
