import React, { useState, useMemo } from 'react';
import NewsIllustrationStage from './NewsIllustrationStage';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
} from './SolidIcons';

// ============================================================================
// 1. ALL NEWS & UPDATES DIRECTORY PAGE (/news)
// Lists all circulars, advisories, and network updates in unified cards
// ============================================================================
export function NewsDirectoryPage({
  articles,
  onSelectArticle,
  onBackHome,
  onJoinVle,
  onSubscribeNewsletter,
}) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('date-desc');
  const [catMenuOpen, setCatMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const SORT_OPTIONS = [
    { id: 'date-desc', label: 'Sort: Newest First' },
    { id: 'date-asc', label: 'Sort: Oldest First' },
    { id: 'alpha-asc', label: 'Sort: Title (A – Z)' },
    { id: 'alpha-desc', label: 'Sort: Title (Z – A)' },
    { id: 'trending', label: 'Sort: Trending First' },
  ];

  const activeSortLabel =
    SORT_OPTIONS.find((opt) => opt.id === sortBy)?.label || 'Sort: Newest First';

  const categories = useMemo(() => {
    const unique = Array.from(new Set(articles.map((a) => a.categoryTag)));
    return ['ALL', ...unique];
  }, [articles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = articles.filter((item) => {
      const catMatch =
        selectedCategory === 'ALL' || item.categoryTag === selectedCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        item.cardTitle.toLowerCase().includes(q) ||
        item.cardSummary.toLowerCase().includes(q) ||
        item.categoryTag.toLowerCase().includes(q) ||
        item.refCode.toLowerCase().includes(q)
      );
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'date-desc') {
        return (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0);
      }
      if (sortBy === 'date-asc') {
        return (Date.parse(a.date) || 0) - (Date.parse(b.date) || 0);
      }
      if (sortBy === 'alpha-asc') {
        return a.cardTitle.localeCompare(b.cardTitle);
      }
      if (sortBy === 'alpha-desc') {
        return b.cardTitle.localeCompare(a.cardTitle);
      }
      if (sortBy === 'trending') {
        return Number(Boolean(b.trending)) - Number(Boolean(a.trending));
      }
      return 0;
    });
  }, [articles, query, selectedCategory, sortBy]);

  return (
    <section className="min-h-screen bg-white text-[#0a1628] pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Breadcrumb & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={onBackHome}
              className="hover:text-[#0a1628] font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#0a1628] font-semibold">News &amp; Updates</span>
          </nav>

          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-[#0a1628] text-xs font-semibold text-[#0a1628] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="max-w-2xl mb-8">
          <p className="text-[11px] font-mono-code uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2.5">
            Official Gazette &amp; Network Updates
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.03em] text-[#0a1628] leading-[1.08] mb-3">
            All News, Circulars &amp; Updates
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse official MeitY directives, CSC Academy programmes, banking milestones, and scheme campaigns across the national network.
          </p>
        </div>

        {/* Search + Custom Category Dropdown + Custom Sort Dropdown (No Outer Container) */}
        <div
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setCatMenuOpen(false);
              setSortMenuOpen(false);
            }
          }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-10"
        >
          {/* Search Input */}
          <div className="w-full md:w-80">
            <label htmlFor="news-archive-search" className="sr-only">
              Search news and circulars
            </label>
            <div className="flex items-center bg-white border border-slate-200 focus-within:border-slate-300 rounded-xl px-3.5 py-2.5 shadow-2xs transition-colors">
              <Search className="w-4 h-4 text-slate-500 mr-2.5 shrink-0" />
              <input
                id="news-archive-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search circulars, topics, or ref code..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#0a1628] placeholder:text-slate-400 outline-none focus:outline-none"
              />
            </div>
          </div>

          {/* Custom Dropdown Controls: Category + Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            {/* Custom Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={catMenuOpen}
                aria-haspopup="menu"
                onClick={() => {
                  setCatMenuOpen((prev) => !prev);
                  setSortMenuOpen(false);
                }}
                className="w-full sm:w-56 inline-flex items-center justify-between gap-2 bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#0a1628] shadow-2xs transition-colors cursor-pointer"
              >
                <span className="truncate">
                  {selectedCategory === 'ALL'
                    ? 'Category: All Updates'
                    : selectedCategory}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    catMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {catMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setCatMenuOpen(false)}
                  />
                  <div
                    role="menu"
                    aria-label="Filter updates by category"
                    className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-full sm:w-60 rounded-xl bg-white border border-slate-200 shadow-xl z-40 divide-y divide-slate-100 overflow-hidden text-left"
                  >
                    {categories.map((cat) => {
                      const active = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          role="menuitemradio"
                          aria-checked={active}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCatMenuOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs text-left flex items-center justify-between gap-2 transition-colors cursor-pointer focus:outline-none ${
                            active
                              ? 'bg-[#0a1628] text-white font-semibold'
                              : 'text-[#0a1628] hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate">
                            {cat === 'ALL' ? 'All Updates' : cat}
                          </span>
                          {active && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Custom Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={sortMenuOpen}
                aria-haspopup="menu"
                onClick={() => {
                  setSortMenuOpen((prev) => !prev);
                  setCatMenuOpen(false);
                }}
                className="w-full sm:w-52 inline-flex items-center justify-between gap-2 bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#0a1628] shadow-2xs transition-colors cursor-pointer"
              >
                <span className="truncate">{activeSortLabel}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    sortMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {sortMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setSortMenuOpen(false)}
                  />
                  <div
                    role="menu"
                    aria-label="Sort news and updates"
                    className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-full sm:w-52 rounded-xl bg-white border border-slate-200 shadow-xl z-40 divide-y divide-slate-100 overflow-hidden text-left"
                  >
                    {SORT_OPTIONS.map((opt) => {
                      const active = sortBy === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="menuitemradio"
                          aria-checked={active}
                          onClick={() => {
                            setSortBy(opt.id);
                            setSortMenuOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs text-left flex items-center justify-between gap-2 transition-colors cursor-pointer focus:outline-none ${
                            active
                              ? 'bg-[#0a1628] text-white font-semibold'
                              : 'text-[#0a1628] hover:bg-slate-50'
                          }`}
                        >
                          <span>{opt.label}</span>
                          {active && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* All News Cards Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filtered.map((card) => (
              <article
                key={card.id}
                tabIndex={0}
                role="button"
                aria-label={`${card.cardTitle} — ${card.actionText}`}
                onClick={() => onSelectArticle(card)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectArticle(card);
                  }
                }}
                className="relative h-[460px] sm:h-[485px] bg-[#0c1a2e] rounded-[28px] border-0 shadow-[0_8px_30px_rgba(10,22,40,0.16)] overflow-hidden hover:shadow-[0_16px_44px_rgba(10,22,40,0.28)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
              >
                {/* Visual Stage Container */}
                <div className="absolute top-0 inset-x-0 h-[280px] sm:h-[295px]">
                  <NewsIllustrationStage variant={card.variant} />
                </div>

                {/* Sliding Navy Text Container */}
                <div className="absolute inset-x-0 bottom-0 bg-[#0c1a2e] flex flex-col justify-between h-[180px] sm:h-[190px] group-hover:h-[280px] sm:group-hover:h-[295px] group-focus:h-[280px] transition-all duration-500 ease-out z-10 shadow-[0_-10px_25px_rgba(12,26,46,0.3)]">
                  <div className="p-6 pt-5 pb-2 text-left">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-white/90">
                        {card.categoryTag}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {card.date}
                      </span>
                    </div>

                    <h2 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug line-clamp-2">
                      {card.cardTitle}
                    </h2>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-[12.5px] sm:text-[13px] text-slate-300 leading-relaxed pt-3 line-clamp-3 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform translate-y-3 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-500 ease-out delay-75">
                          {card.cardSummary}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 bg-[#0c1a2e] flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectArticle(card);
                      }}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-bold text-[#0c1a2e] transition-all shadow-xs cursor-pointer active:scale-95"
                    >
                      {card.actionText}
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                      <span className="truncate max-w-[155px] font-medium">
                        {card.statusNote}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-14 text-center rounded-2xl border border-slate-200 bg-slate-50">
            <p className="text-sm text-slate-600 mb-3">
              No news circulars matched &ldquo;{query}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedCategory('ALL');
              }}
              className="text-xs font-semibold text-[#ff5500] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Bottom VLE & Newsletter Prompt */}
        <div className="mt-14 rounded-2xl bg-[#0a1628] text-white p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5">
              Never Miss an Official Circular or Scheme Rollout
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join 5.5 Lakh+ Village Level Entrepreneurs or subscribe to receive official CSC updates in your inbox.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onJoinVle}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Join as VLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onSubscribeNewsletter}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0a1628] hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Subscribe to Newsletter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 2. DETAILED NEWS ARTICLE PAGE (/news/:id)
// Editorial article view with mid-article dual CTAs + right-side Trending 3
// ============================================================================
export function NewsDetailPage({
  article,
  allArticles,
  onSelectArticle,
  onBackToAll,
  onBackHome,
  onJoinVle,
  onSubscribeNewsletter,
}) {
  // Latest 3 trending news cards for the right sidebar (excluding active if possible)
  const trendingCards = useMemo(() => {
    const others = allArticles.filter((a) => a.id !== article.id);
    return others.slice(0, 3);
  }, [allArticles, article.id]);

  const firstHalf = article.paragraphs.slice(0, 2);
  const secondHalf = article.paragraphs.slice(2);

  return (
    <section className="min-h-screen bg-white text-[#0a1628] pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
      <div className="max-w-[1240px] mx-auto w-full">
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={onBackHome}
              className="hover:text-[#0a1628] font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={onBackToAll}
              className="hover:text-[#0a1628] font-medium transition-colors cursor-pointer"
            >
              News &amp; Updates
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-[#0a1628] font-semibold">{article.category}</span>
          </nav>

          <button
            type="button"
            onClick={onBackToAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-[#0a1628] text-xs font-semibold text-[#0a1628] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All News</span>
          </button>
        </div>

        {/* 2-Column Editorial Layout: Left 8 Cols Article + Right 4 Cols Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ================================================================
              LEFT MAIN ARTICLE COLUMN (8 COLS)
              ================================================================ */}
          <article className="lg:col-span-8">
            {/* Category, Reference & Authority */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#0a1628] text-white text-[11px] font-bold tracking-wide uppercase">
                  {article.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 font-mono-code text-[11px] text-slate-700 font-semibold">
                  {article.refCode}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Article Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-[-0.03em] text-[#0a1628] leading-[1.12] mb-4">
              {article.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
              Issued by <strong className="text-[#0a1628]">{article.authority}</strong>
            </p>

            {/* Hero Cover Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Opening Paragraphs */}
            <div className="space-y-5 text-[15px] sm:text-base text-slate-700 leading-[1.75]">
              {firstHalf.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* INLINE MID-ARTICLE DUAL CTA BANNER (Between Paragraphs) */}
            <aside
              aria-label="Take action on CSC Digital Seva"
              className="my-8 sm:my-10 rounded-2xl bg-[#0a1628] text-white p-6 sm:p-7 border border-[#0a1628] shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono-code uppercase tracking-wider text-[#ff884d] font-semibold mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CSC Digital Seva Network</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    Ready to Start or Stay Informed?
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                    Open a Digital Seva Kendra in your village or get official circulars delivered straight to your inbox.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={onJoinVle}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#e04800] text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Join as VLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onSubscribeNewsletter}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#0a1628] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Subscribe to Newsletter</span>
                  </button>
                </div>
              </div>
            </aside>

            {/* Remaining Paragraphs */}
            <div className="space-y-5 text-[15px] sm:text-base text-slate-700 leading-[1.75]">
              {secondHalf.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bottom Circular Footer Actions */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-mono-code font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>STATUS: ACTIVE CIRCULAR</span>
              </span>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:border-[#0a1628] text-xs font-semibold text-[#0a1628] transition-colors cursor-pointer"
                >
                  Print Notice
                </button>
                <button
                  type="button"
                  onClick={onBackToAll}
                  className="px-4 py-2 rounded-xl bg-[#0a1628] hover:bg-[#162844] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  All News &amp; Updates
                </button>
              </div>
            </div>
          </article>

          {/* ================================================================
              RIGHT SIDEBAR (4 COLS): TRENDING LATEST 3 NEWS CARDS + NAV
              ================================================================ */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Trending Latest 3 News Cards (No Outer Box, White BG, Horizontal Separator Kept) */}
            <div className="bg-white">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
                <h2 className="text-sm font-bold text-[#0a1628] uppercase tracking-wider font-sans">
                  Trending &amp; Latest Updates
                </h2>
                <button
                  type="button"
                  onClick={onBackToAll}
                  className="text-xs font-semibold text-[#0a1628] hover:text-[#ff5500] transition-colors cursor-pointer"
                >
                  View all
                </button>
              </div>

              <div className="space-y-3.5">
                {trendingCards.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectArticle(item)}
                    className="w-full text-left p-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-xs transition-all duration-200 group cursor-pointer block"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[#0a1628] text-[10px] font-bold uppercase tracking-wide">
                        {item.categoryTag}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-[13.5px] font-bold text-[#0a1628] leading-snug mb-2 line-clamp-2">
                      {item.cardTitle}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span className="font-medium truncate">{item.statusNote}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#0a1628] shrink-0">
                        <span>Read</span>
                        <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Portal Navigation Card */}
            <div className="rounded-2xl bg-[#0a1628] text-white p-5 sm:p-6">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-sans">
                Quick Navigation
              </h2>
              <div className="space-y-2 text-xs">
                <button
                  type="button"
                  onClick={onBackToAll}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-white/8 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <span>All News &amp; Circulars</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={onJoinVle}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-white/8 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <span>Become a CSC VLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="tel:14599"
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-white/8 hover:bg-white/15 text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Helpline: 14599</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={onBackHome}
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-white/8 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Find CSC Centre</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
