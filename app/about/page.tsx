"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Users,
  Trophy,
  BookOpen,
  Cpu,
  Globe,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Network,
  GraduationCap,
  Lightbulb,
  Rocket,
  Calendar,
  Terminal,
  BrainCircuit,
  Star,
} from "lucide-react";
import Link from "next/link";
import { aboutRoute, applicationRoute } from "@/constants/routes";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────── data ─────────────────────────── */
const PILLARS = [
  {
    icon: Code2,
    accent: "primary",
    title: "Technical Workshops",
    body: "Hands-on sessions in algorithms, system design, AI/ML, web dev, and competitive programming — led by students, for students.",
  },
  {
    icon: Network,
    accent: "secondary",
    title: "Industry Networking",
    body: "Direct access to engineers, recruiters, and researchers through speaker panels, career fairs, and alumni mentorship circles.",
  },
  {
    icon: Trophy,
    accent: "tertiary",
    title: "Competitions & Hackathons",
    body: "From ICPC preparation to internal hackathons, we sharpen problem-solving under pressure and celebrate the builders.",
  },
  {
    icon: BookOpen,
    accent: "primary",
    title: "Research Exposure",
    body: "Bridges between undergrads and faculty research labs. Explore ACM's digital library, case studies, and TechTalks.",
  },
  {
    icon: GraduationCap,
    accent: "secondary",
    title: "Career Development",
    body: "Resume reviews, mock interviews, internship guidance, and a community that has seen the other side of hiring tables.",
  },
  {
    icon: Globe,
    accent: "tertiary",
    title: "Global Community",
    body: "Part of over 680 ACM student chapters worldwide — your local crew with a global passport in computing.",
  },
];

const STATS = [
  { value: "680+", label: "chapters worldwide", icon: Globe },
  { value: "100k+", label: "ACM members", icon: Users },
  { value: "50+", label: "ACM journals", icon: BookOpen },
  { value: "1947", label: "founded", icon: Star },
];

const TIMELINE = [
  {
    icon: Lightbulb,
    label: "Learn",
    desc: "Workshops, talks, and study sessions",
  },
  {
    icon: BrainCircuit,
    label: "Build",
    desc: "Projects, hackathons, open-source",
  },
  { icon: Rocket, label: "Launch", desc: "Internships, research, and careers" },
];

/* ─────────────────────────── accent helper ─────────────────────────── */
const ACCENT_MAP: Record<
  string,
  { border: string; glow: string; text: string; bg: string }
> = {
  primary: {
    border: "border-(--accent-primary-30)",
    glow: "hover:border-(--accent-primary) hover:shadow-[0_0_24px_var(--shadow-accent-primary)",
    text: "text-(--accent-primary)",
    bg: "bg-(--accent-primary-30)",
  },
  secondary: {
    border: "border-(--accent-secondary-30)",
    glow: "hover:border-(--accent-secondary) hover:shadow-[0_0_24px_var(--accent-secondary-30)",
    text: "text-(--accent-secondary)",
    bg: "bg-(--accent-secondary-30)",
  },
  tertiary: {
    border: "border-amber-500/20",
    glow: "hover:border-(--accent-tertiary) hover:shadow-[0_0_24px_rgba(245,158,11,0.2)",
    text: "text-(--accent-tertiary)",
    bg: "bg-amber-500/20",
  },
};

/* ─────────────────────────── sub-components ─────────────────────────── */
function PillarCard({ pillar, i }: { pillar: (typeof PILLARS)[0]; i: number }) {
  const a = ACCENT_MAP[pillar.accent];
  const Icon = pillar.icon;
  return (
    <div
      className={`
        relative rounded-2xl border ${a.border} ${a.glow}
        bg-(--background-secondary) p-6
        transition-all duration-300 cursor-default group
      `}
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div
        className={`w-11 h-11 rounded-xl ${a.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className={`w-5 h-5 ${a.text}`} />
      </div>
      <h3 className="text-(--text-primary) text-base font-semibold mb-2">
        {pillar.title}
      </h3>
      <p className="text-(--text-secondary) text-sm leading-relaxed">
        {pillar.body}
      </p>
    </div>
  );
}

function StatCard({ stat }: { stat: (typeof STATS)[0] }) {
  const Icon = stat.icon;
  return (
    <div className="flex flex-col items-center gap-1 group">
      <Icon className="w-5 h-5 text-(--accent-primary) mb-1 opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="text-3xl font-bold text-(--text-primary) tabular-nums">
        {stat.value}
      </span>
      <span className="text-xs text-(--text-secondary) uppercase tracking-widest">
        {stat.label}
      </span>
    </div>
  );
}

/* ─────────────────────────── page ─────────────────────────── */
export default function ACMPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const el = document.getElementById("view");

  if (!el) return;

  const onScroll = () => {
    setScrollY(el.scrollTop);
  };

  el.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    el.removeEventListener("scroll", onScroll);
  };
}, []);

  const pillarsSection = useInView();
  const statsSection = useInView();
  const timelineSection = useInView();
  const ctaSection = useInView();


  return (
    <main className="flex-1 pr-2">
      {/* ── Grid / noise texture overlay ── */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.15) 40px,rgba(255,255,255,.15) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.15) 40px,rgba(255,255,255,.15) 41px)",
        }}
      />

      {/* ── Radial glow blobs ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-150 h-150 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -right-60 w-125 h-125 rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-100 h-100 rounded-full opacity-6"
          style={{
            background:
              "radial-gradient(circle, var(--accent-tertiary) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section
        ref={heroRef}
        className={`flex flex-col items-center justify-center text-center pb-26`}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {/* ACM badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-(--accent-primary-30) bg-(--accent-primary-30) px-4 py-1.5 mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-(--accent-primary)" />
          <span className="text-xs text-(--accent-primary) tracking-widest uppercase font-medium">
            Association for Computing Machinery
          </span>
        </div>

        {/* headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] max-w-4xl mx-auto mb-6">
          <span className="text-(--text-primary)">Where&nbsp;</span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
            }}
          >
            Builders
          </span>
          <br />
          <span className="text-(--text-primary)">Find Their&nbsp;</span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-tertiary) 100%)",
            }}
          >
            People.
          </span>
        </h1>

        <p className="text-(--text-secondary) text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          ACM Student Chapter is the university's hub for computing culture — a
          place to grow technically, connect professionally, and ship things
          you're proud of.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href={applicationRoute}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95 hover:opacity-90"
            style={{
              background: "var(--button-background-primary)",
              color: "var(--button-text-primary)",
              boxShadow: "0 4px 20px var(--shadow-accent-primary)",
            }}
          >
            Join the Chapter <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={aboutRoute}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border border-(--border-primary) text-(--text-secondary) hover:text-(--text-primary) hover:border-white/20 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" /> About us
          </Link>
        </div>
        {/* scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-[10px] tracking-widest uppercase text-(--text-secondary)">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-(--text-secondary) animate-bounce" />
        </div>
      </section>

      {/* ══════════════ MISSION BAND ══════════════ */}
      <section className="relative border-y border-(--border-primary) backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-(--accent-primary)" />
            <span className="text-xs text-(--accent-primary) uppercase tracking-widest font-medium">
              Our Mission
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-light text-(--text-primary) leading-relaxed">
            To{" "}
            <span className="font-semibold text-(--accent-primary)">
              educate
            </span>
            ,{" "}
            <span className="font-semibold text-(--accent-secondary)">
              connect
            </span>
            , and{" "}
            <span className="font-semibold text-(--accent-tertiary)">
              inspire
            </span>{" "}
            the next generation of computing professionals — fostering
            curiosity, ethical practice, and the skills that shape the future of
            technology.
          </p>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <div
        ref={statsSection.ref}
        className={`max-w-5xl mx-auto py-6 transition-all duration-700 ${statsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 text-center">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>

      {/* ══════════════ WHAT WE OFFER ══════════════ */}
      <section className="pb-24">
        <div
          ref={pillarsSection.ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${pillarsSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-(--accent-secondary)" />
              <span className="text-xs text-(--accent-secondary) uppercase tracking-widest font-medium">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-4">
              Everything you need to{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
                }}
              >
                level up.
              </span>
            </h2>
            <p className="text-(--text-secondary) max-w-xl mx-auto">
              From your first "Hello, World" to landing your first role — we've
              built the ecosystem around you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.title} pillar={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ JOURNEY TIMELINE ══════════════ */}
      <section className="pb-24">
        <div
          ref={timelineSection.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${timelineSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Rocket className="w-4 h-4 text-(--accent-tertiary)" />
              <span className="text-xs text-(--accent-tertiary) uppercase tracking-widest font-medium">
                Your Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary)">
              Three steps.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--accent-tertiary), var(--accent-primary))",
                }}
              >
                Endless possibilities.
              </span>
            </h2>
          </div>

          <div className="relative flex flex-col sm:flex-row items-stretch gap-0">
            {/* connector line */}
            <div className="hidden sm:block absolute top-8 left-[calc(16.66%) right-[calc(16.66%) h-px bg-gradient-to-r from-(--accent-primary-30) via-(--accent-secondary-30) to-amber-500/20" />

            {TIMELINE.map((step, i) => {
              const Icon = step.icon;
              const colors = [
                {
                  text: "text-(--accent-primary)",
                  bg: "bg-(--accent-primary-30)",
                  border: "border-(--accent-primary-30)",
                },
                {
                  text: "text-(--accent-secondary)",
                  bg: "bg-(--accent-secondary-30)",
                  border: "border-(--accent-secondary-30)",
                },
                {
                  text: "text-(--accent-tertiary)",
                  bg: "bg-amber-500/20",
                  border: "border-amber-500/20",
                },
              ][i];
              return (
                <div
                  key={step.label}
                  className="flex-1 flex flex-col items-center text-center pb-4 sm:pb-0"
                >
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <span className={`text-xl font-bold mb-1 ${colors.text}`}>
                    {step.label}
                  </span>
                  <p className="text-sm text-(--text-secondary) leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ WHO WE ARE ══════════════ */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-(--border-primary) bg-(--background-secondary) overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* text */}
              <div className="p-10 sm:p-14 flex flex-col justify-center gap-6">
                <div className="inline-flex items-center gap-2 w-fit">
                  <Users className="w-4 h-4 text-(--accent-primary)" />
                  <span className="text-xs text-(--accent-primary) uppercase tracking-widest font-medium">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) leading-snug">
                  A student org with a global stamp.
                </h2>
                <p className="text-(--text-secondary) leading-relaxed">
                  We're the official student chapter of ACM — the world's
                  largest and most prestigious computing society, founded in
                  1947. That heritage means real resources: a digital library,
                  international contests, speakers, and a network that opens
                  doors.
                </p>
                <p className="text-(--text-secondary) leading-relaxed">
                  Locally, we're a crew of curious, driven students who believe
                  great software comes from great communities. Whether you write
                  code every day or you're still learning what a compiler does —
                  you belong here.
                </p>
                {/* <button
                  className="inline-flex items-center gap-2 w-fit rounded-full py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background: "var(--button-background-primary)",
                    color: "var(--button-text-primary)",
                    boxShadow: "0 4px 20px var(--shadow-accent-primary)",
                  }}
                >
                  Meet the Team <ArrowRight className="w-4 h-4" />
                </button> */}
              </div>

              {/* visual accent panel */}
              <div
                className="hidden md:flex items-center justify-center p-10 relative overflow-hidden min-h-[320px]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-primary-30) 0%, var(--accent-secondary-30) 100%)",
                }}
              >
                {/* floating icon grid */}
                {[
                  Code2,
                  Trophy,
                  Network,
                  Globe,
                  BookOpen,
                  BrainCircuit,
                  Terminal,
                  Cpu,
                  GraduationCap,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="absolute opacity-20 hover:opacity-50 transition-opacity"
                    style={{
                      left: `${10 + (i % 3) * 33}%`,
                      top: `${10 + Math.floor(i / 3) * 30}%`,
                      transform: `rotate(${((i * 13) % 30) - 15}deg)`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-(--text-primary)" />
                  </div>
                ))}
                <div
                  className="relative z-10 w-28 h-28 rounded-3xl flex items-center justify-center border border-white/20"
                  style={{
                    background: "rgba(14,165,233,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Cpu className="w-14 h-14 text-(--accent-primary)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA FOOTER ══════════════ */}
      <section
        ref={ctaSection.ref}
        className={`pb-32 transition-all duration-700 ${ctaSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl border border-(--accent-primary-30) p-12 sm:p-16 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, var(--accent-primary-30) 0%, var(--background-secondary) 70%)",
            }}
          >
            <Sparkles className="w-8 h-8 text-(--accent-primary) mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-4">
              Ready to build something great?
            </h2>
            <p className="text-(--text-secondary) mb-8 max-w-md mx-auto">
              Membership is free and open to every student. Come to one event,
              join a Slack channel, or just show up curious — that's how it
              always starts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={applicationRoute}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--button-background-primary)",
                  color: "var(--button-text-primary)",
                  boxShadow: "0 6px 28px var(--shadow-accent-primary)",
                }}
              >
                <Users className="w-4 h-4" /> Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
