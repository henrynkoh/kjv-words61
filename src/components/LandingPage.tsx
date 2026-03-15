"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { TopicCategory } from "@/lib/verses";
import {
  BookOpen,
  ChevronRight,
  Github,
  Sparkles,
  Layers,
  Globe,
  Heart,
  Quote,
  Home,
  Info,
  FolderOpen,
  Zap,
  FileText,
} from "lucide-react";

const FIXED_NAV = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "features", label: "Features & Functions", icon: Zap },
  { id: "verse-sample", label: "Verse sample", icon: FileText },
  { id: "footer", label: "Footer", icon: FileText },
];

const FEATURES = [
  {
    icon: Layers,
    title: "24 topics",
    desc: "From Bible inspiration to understanding the Word. One place for all.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10 dark:bg-violet-500/20",
    href: "#topics",
    ariaLabel: "Go to Topics & Categories — all 24 topics with Bible verses",
  },
  {
    icon: Globe,
    title: "KJV + Korean",
    desc: "Each verse has a theme and Korean or English summary for sharing.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/20",
    href: "#verse-sample",
    ariaLabel: "Go to Verse sample — see KJV with Korean summary and full text",
  },
  {
    icon: Sparkles,
    title: "Right verse, right moment",
    desc: "Pick by audience, situation, and level of Bible knowledge.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10 dark:bg-amber-500/20",
    href: "#topics",
    ariaLabel: "Go to Topics — pick verses by audience, situation, and knowledge level",
  },
  {
    icon: Heart,
    title: "Free & simple",
    desc: "No sign-up. Use for study, teaching, or sharing truth.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10 dark:bg-rose-500/20",
    href: "#hero",
    ariaLabel: "Go to Home — key verse 2 Timothy 2:15 and getting started",
  },
];

const GITHUB_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GITHUB_URL
    ? process.env.NEXT_PUBLIC_GITHUB_URL
    : "https://github.com/henrynkoh/kjv-words";

const TOPIC_GRADIENTS = [
  "from-blue-500/20 to-indigo-600/20 dark:from-blue-500/15 dark:to-indigo-600/15 border-blue-400/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10",
  "from-emerald-500/20 to-teal-600/20 dark:from-emerald-500/15 dark:to-teal-600/15 border-emerald-400/30 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10",
  "from-violet-500/20 to-purple-600/20 dark:from-violet-500/15 dark:to-purple-600/15 border-violet-400/30 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/10",
  "from-amber-500/20 to-orange-600/20 dark:from-amber-500/15 dark:to-orange-600/15 border-amber-400/30 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/10",
  "from-rose-500/20 to-pink-600/20 dark:from-rose-500/15 dark:to-pink-600/15 border-rose-400/30 hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-500/10",
  "from-cyan-500/20 to-sky-600/20 dark:from-cyan-500/15 dark:to-sky-600/15 border-cyan-400/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10",
  "from-lime-500/20 to-green-600/20 dark:from-lime-500/15 dark:to-green-600/15 border-lime-400/30 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-500/10",
  "from-fuchsia-500/20 to-purple-600/20 dark:from-fuchsia-500/15 dark:to-purple-600/15 border-fuchsia-400/30 hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-500/10",
];

function sidebarTopicLabel(title: string, max = 52) {
  if (title.length <= max) return title;
  return title.slice(0, max).trim() + "…";
}

interface Props {
  topics: TopicCategory[];
}

export default function LandingPage({ topics }: Props) {
  const [activeId, setActiveId] = useState<string>("hero");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [topics]);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const navSections = [
    ...FIXED_NAV.slice(0, 2),
    { id: "topics", label: "Topics", icon: FolderOpen },
    ...topics.map((t) => ({ id: t.id, label: sidebarTopicLabel(t.title), fullLabel: t.title })),
    ...FIXED_NAV.slice(2),
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Left sidebar - scrollable, sticky */}
      <aside
        className="sticky top-0 h-screen w-60 sm:w-72 shrink-0 flex flex-col border-r border-foreground/10 bg-background/95 dark:bg-background/90 backdrop-blur-xl shadow-[4px_0_24px_-8px_rgba(0,0,0,0.06)] dark:shadow-[4px_0_24px_-8px_rgba(0,0,0,0.25)]"
        aria-label="Page navigation"
      >
        <div className="p-4 border-b border-foreground/10 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-foreground hover:opacity-90 transition-opacity"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-md">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="text-lg">KJV Words</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 scrollbar-thin min-h-0">
          <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
            Navigate
          </p>
          <ul className="space-y-0.5">
            {navSections.map((item) => {
              const isTopic = topics.some((t) => t.id === item.id);
              const isActive = activeId === item.id;
              const label = "fullLabel" in item ? item.label : item.label;
              const titleAttr = "fullLabel" in item ? item.fullLabel : undefined;
              const Icon = "icon" in item && item.icon ? item.icon : null;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    title={titleAttr}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--accent)]/20 text-[var(--accent)] font-semibold shadow-sm"
                        : "text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                    } ${isTopic ? "pl-4" : ""}`}
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0 opacity-70" />}
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main content - scrollable, all sections visible */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        {/* Hero */}
        <section
          id="hero"
          ref={setRef("hero")}
          className="relative px-6 sm:px-10 lg:px-14 py-24 sm:py-32 overflow-hidden scroll-mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-purple-400/10 dark:bg-purple-400/5 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Rightly Dividing the{" "}
              <span className="bg-gradient-to-r from-[var(--gradient-from)] via-purple-500 to-[var(--gradient-to)] bg-clip-text text-transparent">
                Word of Truth
              </span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-foreground/90 italic">
              &ldquo;Study to shew thyself approved unto God, a workman that needeth not to be
              ashamed, rightly dividing the word of truth.&rdquo;
            </p>
            <p className="mt-2 text-sm text-foreground/60">— 2 Timothy 2:15 KJV</p>
            <p className="mt-8 text-foreground/85 max-w-2xl leading-relaxed text-base sm:text-lg">
              KJV verses in 24 topics with Korean summaries. Share the right verse for the right
              person and moment — by audience, situation, and level of Bible knowledge.
            </p>
            <Link
              href="#topics"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Browse 24 topics
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          ref={setRef("about")}
          className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 bg-foreground/[0.03] dark:bg-foreground/[0.06] scroll-mt-6"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
                <BookOpen className="h-5 w-5" />
              </span>
              About KJV Words
            </h2>
            <p className="mt-5 text-foreground/85 leading-relaxed text-base sm:text-lg">
              A simple, free resource that organizes King James Version (KJV) Bible verses into 24
              topics. Each verse includes a theme and Korean or English summary so you can discuss
              and spread words of truth in a way that fits your audience, situation, and their
              level of Bible knowledge.
            </p>
          </div>
        </section>

        {/* Topics intro */}
        <section
          id="topics"
          ref={setRef("topics")}
          className="px-6 sm:px-10 lg:px-14 pt-16 pb-6 scroll-mt-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Topics &amp; Categories
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Click any topic to see all verses with KJV text and Korean summaries. Use the left
            sidebar to jump to a section.
          </p>
        </section>

        {/* Topic cards - all visible */}
        {topics.map((topic, i) => (
          <section
            key={topic.id}
            id={topic.id}
            ref={setRef(topic.id)}
            className="px-6 sm:px-10 lg:px-14 py-8 scroll-mt-24"
          >
            <div
              className={`rounded-2xl border-2 bg-gradient-to-br ${TOPIC_GRADIENTS[i % TOPIC_GRADIENTS.length]} p-6 sm:p-8 transition-all duration-300`}
            >
              <Link href={`/topic/${topic.id}`} className="group block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:underline decoration-2 underline-offset-2">
                      {topic.title}
                    </h3>
                    {topic.description && (
                      <p className="mt-2 text-sm text-foreground/75 line-clamp-2">
                        {topic.description}
                      </p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/60">
                      {topic.verses.length} verse{topic.verses.length !== 1 ? "s" : ""}
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <span className="shrink-0 rounded-xl bg-background/80 dark:bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 group-hover:bg-background border border-foreground/10">
                    View all
                  </span>
                </div>
              </Link>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {topic.verses.slice(0, 2).map((verse) => (
                  <div
                    key={verse.id}
                    className="rounded-xl border border-foreground/10 bg-background/70 dark:bg-background/50 p-4 hover:border-foreground/20 transition-colors"
                  >
                    <p className="text-xs font-semibold text-foreground/75">{verse.theme}</p>
                    <p className="mt-1 text-sm text-foreground/85" lang="ko">
                      {verse.korean}
                    </p>
                    <p className="mt-1 text-xs font-mono text-foreground/55">{verse.ref}</p>
                    <blockquote className="mt-2 pl-3 border-l-2 border-foreground/20 text-foreground/90 text-sm italic line-clamp-2">
                      &ldquo;{verse.text}&rdquo;
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Features & Functions - bottom section, prominent */}
        <section
          id="features"
          ref={setRef("features")}
          className="px-6 sm:px-10 lg:px-14 py-20 sm:py-24 bg-gradient-to-b from-foreground/[0.04] to-foreground/[0.08] dark:from-foreground/[0.06] dark:to-foreground/[0.12] scroll-mt-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Features &amp; Functions
          </h2>
          <p className="text-foreground/70 mb-10 max-w-2xl">
            Everything you need to share the right verse for the right moment.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 max-w-5xl">
            {FEATURES.map((f) => (
              <a
                key={f.title}
                href={f.href}
                aria-label={f.ariaLabel}
                className={`flex gap-4 rounded-2xl border border-foreground/10 bg-background p-6 ${f.bg} hover:border-foreground/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2`}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg`}
                >
                  <f.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{f.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Verse sample */}
        <section
          id="verse-sample"
          ref={setRef("verse-sample")}
          className="px-6 sm:px-10 lg:px-14 py-16 scroll-mt-24"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Quote className="h-7 w-7 text-[var(--accent)]" />
            Verse sample
          </h2>
          <p className="text-foreground/70 mb-6">
            Each topic contains verses like this — theme, Korean/English summary, reference, and
            full KJV text.
          </p>
          <div className="max-w-2xl rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent-soft)]/50 dark:bg-[var(--accent)]/10 p-6 shadow-inner">
            <p className="text-sm font-semibold text-foreground/90">Seventy weeks determined</p>
            <p className="mt-1 text-foreground/75 text-sm" lang="ko">
              Daniel 9:24 — thy people and Jerusalem
            </p>
            <p className="mt-2 text-xs font-mono text-foreground/60">Daniel 9:24</p>
            <blockquote className="mt-3 pl-4 border-l-2 border-[var(--accent)] text-foreground italic">
              &ldquo;Seventy weeks are determined upon thy people and upon thy holy city, to finish
              the transgression, and to make an end of sins…&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <section
          id="footer"
          ref={setRef("footer")}
          className="px-6 sm:px-10 lg:px-14 py-12 border-t border-foreground/10 scroll-mt-24"
        >
          <div className="max-w-3xl text-sm text-foreground/70">
            <p>
              &copy; {new Date().getFullYear()} KJV Words. Built for spreading words of truth.
            </p>
            <p className="mt-1">KJV Bible &middot; 2 Timothy 2:15</p>
          </div>
        </section>
      </div>

      {/* Bottom-right: GitHub - fixed, clickable, prominent */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-foreground text-background px-5 py-3.5 text-sm font-semibold shadow-2xl hover:scale-105 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.3)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)] transition-all duration-200 border border-foreground/20"
        aria-label="View on GitHub"
      >
        <Github className="h-5 w-5" />
        View on GitHub
      </a>
    </div>
  );
}
