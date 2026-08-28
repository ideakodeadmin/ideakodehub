// app/page.tsx
'use client';

import { useState, FormEvent, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  User,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  MapPin,
  Link as LinkIcon,
  Github,
  Instagram,
  Linkedin,
  FileText,
  MessageSquare,
  Clock,
  Users,
  Target,
  Briefcase,
  Code2,
  Star,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  ArrowDown,
  Zap,
  Radio,
  TrendingUp,
  Calendar,
  Rocket,
  Heart,
  Twitter
} from 'lucide-react';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// TypeScript Interface
interface ApplicationForm {
  full_name: string;
  email: string;
  phone: string;
  whatsapp_number: string;
  college_name: string;
  course: string;
  branch: string;
  year_of_study: string;
  student_id: string;
  city: string;
  state: string;
  application_type: 'core_team' | 'campus_ambassador';
  first_preference: string;
  second_preference: string;
  third_preference: string;
  skills: string;
  experience: string;
  previous_event_experience: string;
  linkedin_url: string;
  github_url: string;
  portfolio_url: string;
  instagram_url: string;
  why_join: string;
  why_should_we_select_you: string;
  availability: string;
  resume_url: string;
  additional_information: string;
  terms_accepted: boolean;
}

const initialFormState: ApplicationForm = {
  full_name: '',
  email: '',
  phone: '',
  whatsapp_number: '',
  college_name: '',
  course: '',
  branch: '',
  year_of_study: '',
  student_id: '',
  city: '',
  state: '',
  application_type: 'core_team',
  first_preference: '',
  second_preference: '',
  third_preference: '',
  skills: '',
  experience: '',
  previous_event_experience: '',
  linkedin_url: '',
  github_url: '',
  portfolio_url: '',
  instagram_url: '',
  why_join: '',
  why_should_we_select_you: '',
  availability: '',
  resume_url: '',
  additional_information: '',
  terms_accepted: false,
};

const teamPreferences = [
  'Technical Team',
  'Design Team',
  'Marketing Team',
  'Content Team',
  'Social Media Team',
  'Event Management',
  'Sponsorship Team',
  'Logistics Team',
  'Public Relations',
  'Photography & Videography',
];

const yearOptions = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  '5th Year',
  'Post Graduate',
];

// Navigation Links
const links = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/#events' },
  { label: 'Sponsors', href: '/#sponsors' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          <a href="/" className="group flex items-center" aria-label="IDEAKODE home">
            <img
              src="/ideakode-logo.png"
              alt="IDEAKODE"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-ink-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#apply"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Apply Now
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 mt-2' : 'max-h-0'
          }`}
        >
          <div className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-ink-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-3 text-sm font-semibold text-ink-950 bg-white rounded-lg text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/#events' },
    { label: 'Sponsors', href: '/#sponsors' },
    { label: 'About', href: '/#about' },
    { label: 'Apply Now', href: '#apply' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="mb-4 inline-flex" aria-label="IDEAKODE home">
              <img
                src="/ideakode-logo.png"
                alt="IDEAKODE"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              A student-led tech organization running India's most electrifying
              hackathons. An initiative of DS Softwares.
            </p>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Navigate</h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink-300 hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-300 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} IDEAKODE. An initiative of DS Softwares.
          </p>
          <p className="text-xs text-ink-600 font-mono">
            Where ideas compile into reality.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Application Page Component
export default function ApplicationPage() {
  const [formData, setFormData] = useState<ApplicationForm>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [applicationNumber, setApplicationNumber] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone || !formData.college_name) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (!formData.terms_accepted) {
      setError('Please accept the terms and conditions');
      setLoading(false);
      return;
    }

    try {
      const { data, error: supabaseError } = await supabase
        .from('event_applications')
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            whatsapp_number: formData.whatsapp_number || null,
            college_name: formData.college_name,
            course: formData.course || null,
            branch: formData.branch || null,
            year_of_study: formData.year_of_study || null,
            student_id: formData.student_id || null,
            city: formData.city || null,
            state: formData.state || null,
            application_type: formData.application_type,
            first_preference: formData.first_preference || null,
            second_preference: formData.second_preference || null,
            third_preference: formData.third_preference || null,
            skills: formData.skills || null,
            experience: formData.experience || null,
            previous_event_experience: formData.previous_event_experience || null,
            linkedin_url: formData.linkedin_url || null,
            github_url: formData.github_url || null,
            portfolio_url: formData.portfolio_url || null,
            instagram_url: formData.instagram_url || null,
            why_join: formData.why_join || null,
            why_should_we_select_you: formData.why_should_we_select_you || null,
            availability: formData.availability || null,
            resume_url: formData.resume_url || null,
            additional_information: formData.additional_information || null,
            terms_accepted: formData.terms_accepted,
            status: 'pending'
          }
        ])
        .select('application_number')
        .single();

      if (supabaseError) throw supabaseError;

      setApplicationNumber(data.application_number);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 relative pt-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold-600/10 blur-[120px]" />
        
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-12">
          {submitted ? (
            <div className="glass rounded-3xl p-8 text-center max-w-md mx-auto">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Application Submitted!</h1>
              <p className="text-ink-300 mb-2">Thank you for applying to IDEAKODE 2026.</p>
              {applicationNumber && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-ink-400">Your Application Number</p>
                  <p className="text-2xl font-bold text-emerald-400">#{applicationNumber}</p>
                </div>
              )}
              <p className="text-sm text-ink-400 mb-6">
                We will review your application and get back to you soon. Please save your application number for future reference.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData(initialFormState);
                  setApplicationNumber(null);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-12" id="apply">
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-medium text-ink-200">IDEAKODE Recruitment 2026</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                  Join the <span className="text-gradient-emerald">Team 2026</span>
                </h1>
                <p className="text-lg text-ink-300 max-w-2xl mx-auto">
                  Be part of India's most electrifying student-led tech organization.
                  Apply for Core Team or Campus Ambassador positions for 2026.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-400">Applications Open for 2026</span>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Application Type */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-400" />
                    Application Type
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      formData.application_type === 'core_team' 
                        ? 'border-emerald-500 bg-emerald-500/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}>
                      <input
                        type="radio"
                        name="application_type"
                        value="core_team"
                        checked={formData.application_type === 'core_team'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <Code2 className="h-5 w-5 text-emerald-400" />
                        <div>
                          <p className="font-medium text-white">Core Team</p>
                          <p className="text-xs text-ink-400">Work directly with the organizing team</p>
                        </div>
                      </div>
                    </label>
                    <label className={`cursor-pointer rounded-xl border p-4 transition-all ${
                      formData.application_type === 'campus_ambassador' 
                        ? 'border-emerald-500 bg-emerald-500/10' 
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}>
                      <input
                        type="radio"
                        name="application_type"
                        value="campus_ambassador"
                        checked={formData.application_type === 'campus_ambassador'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-gold-400" />
                        <div>
                          <p className="font-medium text-white">Campus Ambassador</p>
                          <p className="text-xs text-ink-400">Represent IDEAKODE at your college</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <User className="h-5 w-5 text-emerald-400" />
                    Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="tel"
                          name="whatsapp_number"
                          value={formData.whatsapp_number}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="WhatsApp number (if different)"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* College Information */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-emerald-400" />
                    College Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        College Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="text"
                          name="college_name"
                          value={formData.college_name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="Enter your college name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Course
                      </label>
                      <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="B.Tech, BCA, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Branch
                      </label>
                      <input
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="CSE, ECE, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Year of Study
                      </label>
                      <select
                        name="year_of_study"
                        value={formData.year_of_study}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      >
                        <option value="" className="bg-ink-900">Select Year</option>
                        {yearOptions.map(year => (
                          <option key={year} value={year} className="bg-ink-900">{year}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Student ID
                      </label>
                      <input
                        type="text"
                        name="student_id"
                        value={formData.student_id}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        placeholder="Your student ID"
                      />
                    </div>
                    <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">
                          City
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink-300 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="State"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Star className="h-5 w-5 text-emerald-400" />
                    Team Preferences
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {['first', 'second', 'third'].map((pref, index) => (
                      <div key={pref}>
                        <label className="block text-sm font-medium text-ink-300 mb-2">
                          {index === 0 ? 'First' : index === 1 ? 'Second' : 'Third'} Preference
                        </label>
                        <select
                          name={`${pref}_preference`}
                          value={formData[`${pref}_preference` as keyof ApplicationForm]}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        >
                          <option value="" className="bg-ink-900">Select Team</option>
                          {teamPreferences.map(team => (
                            <option key={team} value={team} className="bg-ink-900">{team}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills and Experience */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-emerald-400" />
                    Skills & Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Skills
                      </label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        placeholder="List your relevant skills (e.g., React, Python, Design, Marketing, etc.)"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Experience
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        placeholder="Describe your relevant experience"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Previous Event Experience
                      </label>
                      <textarea
                        name="previous_event_experience"
                        value={formData.previous_event_experience}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        placeholder="Any previous experience with events, hackathons, or organizing teams"
                      />
                    </div>
                  </div>
                </div>

                {/* Online Presence */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-emerald-400" />
                    Online Presence
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        LinkedIn URL
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="url"
                          name="linkedin_url"
                          value={formData.linkedin_url}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        GitHub URL
                      </label>
                      <div className="relative">
                        <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="url"
                          name="github_url"
                          value={formData.github_url}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Portfolio URL
                      </label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="url"
                          name="portfolio_url"
                          value={formData.portfolio_url}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Instagram URL
                      </label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-500" />
                        <input
                          type="url"
                          name="instagram_url"
                          value={formData.instagram_url}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="https://instagram.com/username"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Questions */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    Application Questions
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Why do you want to join IDEAKODE 2026?
                      </label>
                      <textarea
                        name="why_join"
                        value={formData.why_join}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        placeholder="Tell us why you're interested in joining IDEAKODE 2026"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Why should we select you?
                      </label>
                      <textarea
                        name="why_should_we_select_you"
                        value={formData.why_should_we_select_you}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                        placeholder="What makes you the ideal candidate?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-300 mb-2">
                        Availability
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-5 w-5 text-ink-500" />
                        <textarea
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          rows={3}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                          placeholder="How many hours per week can you dedicate?"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-400" />
                    Resume
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">
                      Resume URL
                    </label>
                    <input
                      type="url"
                      name="resume_url"
                      value={formData.resume_url}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                    />
                    <p className="mt-2 text-xs text-ink-500">
                      Please provide a shareable link to your resume
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    Additional Information
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-ink-300 mb-2">
                      Anything else you'd like to share?
                    </label>
                    <textarea
                      name="additional_information"
                      value={formData.additional_information}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-ink-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                      placeholder="Any additional information or questions"
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="glass rounded-2xl p-6 sm:p-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="terms_accepted"
                      checked={formData.terms_accepted}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-emerald-500/20"
                    />
                    <span className="text-sm text-ink-300">
                      I confirm that all information provided is accurate and I agree to the terms and conditions of IDEAKODE 2026 recruitment process. <span className="text-red-400">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}