import React from 'react';
import {
  Laptop,
  Fingerprint,
  Printer,
  Wifi,
  Headphones,
  BookOpen,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';

const SUPPORT_PILLARS = [
  {
    id: 'dm',
    icon: UserCheck,
    title: 'District Manager (DM) On-Call',
    desc: 'Assigned local government nodal officers to unblock banking credentials and service approvals.',
  },
  {
    id: 'helpdesk',
    icon: Headphones,
    title: 'National Helpdesk: 14599',
    desc: 'Toll-free portal support available in 12 Indian languages, 6 days a week.',
  },
  {
    id: 'lms',
    icon: BookOpen,
    title: 'CSC Academy LMS',
    desc: 'Self-paced video modules, marketing banner toolkits, and compliance checklists updated weekly.',
  },
];

const HARDWARE_ITEMS = [
  {
    id: 'laptop',
    icon: Laptop,
    title: 'PC or Laptop',
    spec: 'Min. 4GB RAM, Windows 10/11 OS with active antivirus.',
  },
  {
    id: 'biometric',
    icon: Fingerprint,
    title: 'Biometric Scanner',
    spec: 'STQC-certified fingerprint or Iris scanner (Mantra/Morpho).',
  },
  {
    id: 'printer',
    icon: Printer,
    title: 'All-in-One Printer',
    spec: 'Color printer with flatbed scanner for Aadhaar printouts.',
  },
  {
    id: 'internet',
    icon: Wifi,
    title: 'Internet Connectivity',
    spec: 'Broadband / 4G dongle with min 5 Mbps speed.',
  },
];

export default function VleSupportAndHardwareSection() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24 px-5 sm:px-8 bg-[#0a1628] text-white border-b border-white/10 overflow-hidden">
      {/* Uniform Brand Navy (#0a1628) Stage with Tactile Grain (Zero Orange, Zero Bright Blue at Bottom) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#0a1628]">
        {/* Subtle Brand Navy Depth Vignette (#071120 -> #0a1628 -> #0d1d35) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, #0f1f38 0%, #0a1628 65%, #071120 100%)',
          }}
        />

        {/* Visible High-Resolution Analog Film Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.32] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='brandGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78  0 0 0 0 0.84  0 0 0 0 0.94  0 0 0 0.16 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23brandGrain)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Subtle Traditional Indian Mandala Corner Art (Bottom-Right) */}
      <img
        src="/images/mandala-grand-white.png"
        alt=""
        aria-hidden="true"
        className="w-[460px] h-[460px] object-contain absolute -bottom-36 -right-36 opacity-[0.14] pointer-events-none select-none z-1"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ================================================================
              LEFT 5 COLS: UNWAVERING SUPPORT
              ================================================================ */}
          <div className="lg:col-span-5">
            {/* Frosted Glass Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.18] to-white/[0.06] backdrop-blur-2xl border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
              <span>UNWAVERING SUPPORT</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-[-0.03em] leading-[1.14] mb-3 drop-shadow-sm">
              You Are Never Alone On Your Entrepreneur Journey.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13.5px] text-[#c5d5ec] leading-relaxed mb-6 font-normal">
              From regulatory assistance to daily technical help, the CSC SPV architecture provides high-touch enablement in your vernacular language.
            </p>

            {/* 3 Frosted Glass Support Pillar Cards */}
            <div className="space-y-3.5">
              {SUPPORT_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-[20px] p-4 sm:p-4.5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.26] hover:via-white/[0.12] hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3.5"
                  >
                    <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[14.5px] font-bold text-white mb-0.5 tracking-tight drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/85 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              RIGHT 7 COLS: RECOMMENDED HARDWARE SETUP (FROSTED GLASS STAGE)
              ================================================================ */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 bg-gradient-to-br from-white/[0.16] via-white/[0.07] to-white/[0.03] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-2xl">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/15">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight drop-shadow-sm">
                    Recommended Hardware Setup
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/80 mt-0.5">
                    Minimum gear needed to operate an authorized Digital Seva Kendra
                  </p>
                </div>

                <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white/[0.22] to-white/[0.08] backdrop-blur-xl border border-white/25 text-white text-xs font-semibold shrink-0 shadow-xs">
                  Readiness Check
                </span>
              </div>

              {/* 2x2 Frosted Glass Hardware Cards (Matches 'Get Started' Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {HARDWARE_ITEMS.map((hw) => {
                  const Icon = hw.icon;
                  return (
                    <div
                      key={hw.id}
                      className="relative overflow-hidden rounded-[20px] p-5 bg-gradient-to-br from-white/[0.22] via-white/[0.10] to-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/20 shadow-md hover:from-white/[0.28] hover:via-white/[0.14] hover:border-white/35 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-br from-white/[0.28] to-white/[0.08] backdrop-blur-md border border-white/25 text-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-white" />
                      </div>

                      <h4 className="relative z-10 text-[15px] font-bold text-white mb-1 tracking-tight drop-shadow-sm">
                        {hw.title}
                      </h4>
                      <div className="relative z-10 text-xs text-white/85 leading-relaxed font-normal">
                        {hw.spec}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Frosted Reassurance Callout */}
              <div className="mt-4 px-4 py-3.5 rounded-[16px] bg-gradient-to-r from-white/[0.18] via-white/[0.10] to-white/[0.05] backdrop-blur-2xl border border-white/20 flex items-center gap-2.5 text-xs sm:text-[13px] text-white/95 font-medium shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Existing equipment can be repurposed. No forced hardware tie-in.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
