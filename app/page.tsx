// app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Calendar, Code2, Github, Heart, Instagram, Linkedin, Mail, Menu, Radio, Rocket, Sparkles, Target, TrendingUp, Twitter, Users, X, Zap } from 'lucide-react';
import { events, sponsors, stats } from '@/data';
import { useCountUp, useInView } from '@/hooks/useInView';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'About', href: '#about' },
  { label: 'Recruitment 2026', href: '/application' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-5 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          <a href="/" className="group flex items-center" aria-label="IDEAKODE home">
            <img
              src="/ideakode-logo.png"
              alt="IDEAKODE"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-colors rounded-lg hover:bg-white/5 ${
                  l.label === 'Recruitment 2026' 
                    ? 'text-emerald-400 hover:text-emerald-300' 
                    : 'text-ink-300 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="/application"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Apply Now
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] mt-2' : 'max-h-0'
          }`}
        >
          <div className="glass-strong rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-col gap-0.5 sm:gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium rounded-lg transition-colors hover:bg-white/5 ${
                  l.label === 'Recruitment 2026' 
                    ? 'text-emerald-400 hover:text-emerald-300' 
                    : 'text-ink-200 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/application"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-semibold text-ink-950 bg-white rounded-lg text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-emerald-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-gold-600/15 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full glass px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-[float_6s_ease-in-out_infinite]">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400" />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-ink-200">
              A DS Softwares initiative
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-500 hidden sm:block" />
            <span className="text-[10px] sm:text-xs font-medium text-emerald-400">Est. student-led</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] sm:leading-[0.95] tracking-tight text-white">
            Where ideas
            <br />
            <span className="text-gradient-mix">compile</span> into
            <br />
            reality.
          </h1>

          {/* Sub */}
          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-ink-300 leading-relaxed px-0">
            IDEAKODE is a student-led tech organization running India's most
            electrifying hackathons, seminars, and build-sprints — turning
            curiosity into shipped products, one event at a time.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#events"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
            >
              <Zap className="h-4 w-4" fill="currentColor" />
              Explore Our Events
            </a>
            <a
              href="/application"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              <Sparkles className="h-4 w-4" />
              Join 2026 Team
            </a>
          </div>

          {/* Quick proof bar */}
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 text-sm text-ink-400">
            <ProofStat value="9,200+" label="Participants" />
            <Divider />
            <ProofStat value="11 Lakh+" label="Students reached" />
            <Divider />
            <ProofStat value="50+" label="Sponsors" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-500">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-8 sm:h-10 w-px bg-gradient-to-b from-ink-600 to-transparent" />
      </div>
    </section>
  );
}

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5 sm:gap-2">
      <span className="font-display text-lg sm:text-xl font-semibold text-white">{value}</span>
      <span className="text-[10px] sm:text-xs text-ink-400">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:block h-6 sm:h-8 w-px bg-ink-700" />;
}

function formatLakh(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(1)} Lakh+`;
}

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const participants = useCountUp(stats.totalParticipants, inView, 2200);
  const reach = useCountUp(stats.totalReach, inView, 2400);
  const sponsors = useCountUp(stats.totalSponsors, inView, 1800);
  const events = useCountUp(stats.eventsRun, inView, 1200);

  const cards = [
    { icon: Users, value: `${participants.toLocaleString()}+`, label: 'Total participants', accent: 'text-emerald-400' },
    { icon: TrendingUp, value: formatLakh(reach), label: 'Students reached', accent: 'text-gold-400' },
    { icon: Building2, value: `${sponsors}+`, label: 'Sponsors partnered', accent: 'text-emerald-400' },
    { icon: Calendar, value: `${events}`, label: 'Flagship events', accent: 'text-gold-400' },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className={`group relative rounded-xl sm:rounded-2xl glass p-4 sm:p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <span className={`flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-white/5 ${c.accent}`}>
                  <c.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-ink-600">0{i + 1}</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {c.value}
              </div>
              <div className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-ink-400">{c.label}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatReach(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(0)} Lakh+`;
}

function Events() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="events" className="relative py-16 sm:py-24 md:py-32 scroll-mt-20 sm:scroll-mt-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-emerald-700/10 blur-[80px] sm:blur-[100px] md:blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <div className={`max-w-2xl mb-10 sm:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-8 bg-emerald-500" />
            Flagship Events
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Three events. One mission — <span className="text-gradient-emerald">ignite builders.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            From 24-hour hackathons to titan-scale build weekends, every IDEAKODE
            event is engineered to turn first-time coders into shippers.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          {events.map((ev, i) => {
            const isEmerald = ev.accent === 'emerald';
            return (
              <Link
                href={`/events/${ev.slug}`}
                key={ev.id}
                className={`group relative block overflow-hidden rounded-2xl sm:rounded-3xl glass p-5 sm:p-7 md:p-10 transition-all duration-700 hover:bg-white/[0.05] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Accent glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    isEmerald ? 'bg-emerald-600/20' : 'bg-gold-600/20'
                  }`}
                />

                <div className="relative grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* Left: identity */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span
                        className={`flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg sm:rounded-xl ${
                          isEmerald ? 'bg-emerald-500/15 text-emerald-400' : 'bg-gold-500/15 text-gold-400'
                        }`}
                      >
                        <Radio className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-ink-500 uppercase tracking-wider">
                        {ev.year} Edition
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {ev.name}
                    </h3>
                    <p className={`mt-1 text-xs sm:text-sm font-medium ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
                      {ev.tagline}
                    </p>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base text-ink-300 leading-relaxed">{ev.description}</p>

                    {/* Highlights */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                      {ev.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-ink-200"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* View detail link */}
                    <div className={`mt-4 sm:mt-6 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
                      View event details
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Right: metrics */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
                    <MetricCard
                      icon={Users}
                      value={ev.participants.toLocaleString()}
                      label="Participants"
                      isEmerald={isEmerald}
                    />
                    <MetricCard
                      icon={ArrowUpRight}
                      value={formatReach(ev.reach)}
                      label={ev.reachLabel}
                      isEmerald={isEmerald}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
  isEmerald,
}: {
  icon: typeof Users;
  value: string;
  label: string;
  isEmerald: boolean;
}) {
  return (
    <div className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-ink-900/40 p-4 sm:p-5 md:p-6">
      <div className="flex items-center gap-1.5 sm:gap-2 text-ink-400 mb-2 sm:mb-3">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide">Impact</span>
      </div>
      <div className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
        {value}
      </div>
      <div className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-ink-400">{label}</div>
    </div>
  );
}

const tierStyles: Record<string, string> = {
  title: 'text-emerald-400',
  platinum: 'text-white',
  gold: 'text-gold-300',
  partner: 'text-ink-300',
};

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const row = [...sponsors, ...sponsors];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 items-center gap-2.5 sm:gap-4 pr-2.5 sm:pr-4 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {row.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex shrink-0 items-center gap-2 sm:gap-2.5 rounded-lg sm:rounded-2xl glass px-3.5 sm:px-6 py-2.5 sm:py-4 transition-colors hover:bg-white/[0.06]"
          >
            <span className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${s.tier === 'title' ? 'bg-emerald-500' : s.tier === 'platinum' ? 'bg-white' : s.tier === 'gold' ? 'bg-gold-400' : 'bg-ink-600'}`} />
            <span className={`font-display text-sm sm:text-lg font-semibold tracking-tight whitespace-nowrap ${tierStyles[s.tier]}`}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sponsors() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sponsors" className="relative py-16 sm:py-24 md:py-32 scroll-mt-20 sm:scroll-mt-24 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold-400 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-8 bg-gold-500" />
            Backed by the best
            <span className="h-px w-6 sm:w-8 bg-gold-500" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            50+ sponsors. <span className="text-gradient-gold">Countless believers.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-ink-300 leading-relaxed">
            From global tech giants to homegrown developer platforms — the
            industry trusts IDEAKODE to find and fuel the next generation of builders.
          </p>
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {[
            { label: 'Title', dot: 'bg-emerald-500' },
            { label: 'Platinum', dot: 'bg-white' },
            { label: 'Gold', dot: 'bg-gold-400' },
            { label: 'Partner', dot: 'bg-ink-600' },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-ink-400">
              <span className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${t.dot}`} />
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Marquees — full bleed */}
      <div className="relative space-y-3 sm:space-y-4">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 md:w-40 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 md:w-40 bg-gradient-to-l from-ink-950 to-transparent" />
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Rocket,
    title: 'Build-first mindset',
    desc: 'Every event ends with a shipped project, not just a certificate. We push builders to go from idea to demo.',
  },
  {
    icon: Heart,
    title: 'Student-led, always',
    desc: 'Run by students, for students. We understand first-time builders because we were them yesterday.',
  },
  {
    icon: Target,
    title: 'Real industry access',
    desc: 'Judges, mentors, and sponsors from Google, Amazon, and beyond — bridging campus and career.',
  },
];

function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 scroll-mt-20 sm:scroll-mt-24">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-gold-700/10 blur-[80px] sm:blur-[100px] md:blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left: narrative */}
          <div className={`lg:col-span-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-emerald-500" />
              Who we are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              A movement under <span className="text-gradient-emerald">DS Softwares.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-300 leading-relaxed">
              IDEAKODE operates under DS Softwares — a student-driven tech
              collective. We exist to give every curious student a stage to build,
              break, and ship.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-400 leading-relaxed">
              What started as a single hackathon has grown into a community
              reaching over 11 lakh students across India, backed by 50+
              sponsors who believe in what happens when you hand students a
              deadline and a compiler.
            </p>

            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-2xl glass px-4 sm:px-5 py-3 sm:py-4">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
              <span className="text-xs sm:text-sm text-ink-200">
                An initiative of <span className="font-semibold text-white">DS Softwares</span>
              </span>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group rounded-xl sm:rounded-2xl glass p-5 sm:p-7 transition-all duration-700 hover:bg-white/[0.06] hover:-translate-y-1 ${
                  i === 2 ? 'sm:col-span-2' : ''
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-emerald-400 mb-4 sm:mb-5 transition-colors group-hover:from-emerald-500/20 group-hover:to-gold-500/10">
                  <p.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-ink-400 leading-relaxed text-xs sm:text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="join" className="relative py-16 sm:py-24 md:py-32 scroll-mt-20 sm:scroll-mt-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-6 sm:p-10 md:p-16 text-center transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-[300px] sm:h-60 sm:w-[400px] md:h-72 md:w-[600px] rounded-full bg-emerald-600/20 blur-[80px] sm:blur-[100px] md:blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full bg-gold-600/15 blur-[70px] sm:blur-[90px] md:blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 mb-4 sm:mb-5">
              <span className="h-px w-6 sm:w-8 bg-emerald-500" />
              Join the movement
              <span className="h-px w-6 sm:w-8 bg-emerald-500" />
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Build with us. Or <span className="text-gradient-mix">sponsor the next.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-300 max-w-xl mx-auto leading-relaxed">
              Whether you're a student ready to ship your first project or a
              company looking to reach India's brightest builders — there's a
              seat for you at IDEAKODE.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/application"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                <Sparkles className="h-4 w-4" />
                Apply for 2026 Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@ideakode.in"
                className="group inline-flex items-center justify-center gap-2 rounded-xl glass px-5 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Become a sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'About', href: '#about' },
  { label: 'Recruitment 2026', href: '/application' },
  { label: 'Get Involved', href: '#join' },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="mb-4 inline-flex" aria-label="IDEAKODE home">
              <img
                src="/ideakode-logo.png"
                alt="IDEAKODE"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              A student-led tech organization running India's most electrifying
              hackathons. An initiative of DS Softwares.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Navigate</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a 
                    href={n.href} 
                    className={`text-sm transition-colors ${
                      n.label === 'Recruitment 2026' 
                        ? 'text-emerald-400 hover:text-emerald-300 font-medium' 
                        : 'text-ink-300 hover:text-white'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Connect</h4>
            <div className="flex gap-2.5 sm:gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl glass text-ink-300 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
            
            {/* Recruitment CTA */}
            <div className="mt-5 sm:mt-6">
              <a
                href="/application"
                className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Apply for 2026
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/[0.04]">
          <p className="text-[10px] sm:text-xs text-ink-500 text-center">
            © {new Date().getFullYear()} IDEAKODE. An initiative of DS Softwares.
          </p>
          <p className="text-[10px] sm:text-xs text-ink-600 font-mono">
            Where ideas compile into reality.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Events />
        <Sponsors />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}