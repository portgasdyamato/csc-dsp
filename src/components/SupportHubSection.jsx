import React from 'react';
import {
  UserCheck,
  GraduationCap,
  Users,
  ShieldCheck,
  Phone,
  Sparkles,
} from './SolidIcons';

const SUPPORT_ITEMS = [
  {
    id: 'dm',
    title: 'District Manager',
    desc: 'On-call local nodal officers for portal, banking, and centre onboarding help.',
    Icon: UserCheck,
  },
  {
    id: 'academy',
    title: 'CSC Academy',
    desc: 'Free TEC preparation, setup guides, and self-paced skill development.',
    Icon: GraduationCap,
  },
  {
    id: 'community',
    title: 'VLE Community',
    desc: 'Peer guidance and practical daily tips from 5.5 Lakh+ active VLEs.',
    Icon: Users,
  },
  {
    id: 'security',
    title: 'Verified @csc.gov.in',
    desc: 'Official domain communication, fraud prevention, and grievance redressal.',
    Icon: ShieldCheck,
  },
];

export default function SupportHubSection({ onOpenChatbot }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-8 sm:pb-12">
      {/* Left 5 Cols: Editorial Heading & Direct Helpline Actions */}
      <div className="lg:col-span-5">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em] text-[#0a1628] leading-[1.08] mb-3.5">
          Dedicated Support at Every Step.
        </h2>
        <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md mb-7">
          Official helpline assistance, verified @csc.gov.in security, and on-ground district support whenever your centre needs it.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:14599"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a1628] hover:bg-[#162844] text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Toll-Free 14599</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenChatbot?.()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 hover:border-[#0a1628] text-[#0a1628] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ask Sarthi AI</span>
          </button>
        </div>
      </div>

      {/* Right 7 Cols: Clean 2x2 Grid with Inner Horizontal & Vertical Hairline Separators */}
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2">
        {SUPPORT_ITEMS.map(({ id, title, desc, Icon }, idx) => {
          const isTopRow = idx < 2;
          const isLeftCol = idx % 2 === 0;
          return (
            <div
              key={id}
              className={`py-6 sm:p-6 ${
                isTopRow
                  ? 'border-b border-slate-200'
                  : idx === 2
                    ? 'border-b sm:border-b-0 border-slate-200'
                    : ''
              } ${isLeftCol ? 'sm:border-r sm:border-slate-200' : ''}`}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0a1628] text-white flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-[15.5px] font-bold text-[#0a1628] tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed pl-11">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
