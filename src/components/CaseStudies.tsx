import { useEffect, useState } from "react";

interface CaseStudy {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  flow: string;
  tools: string;
  metrics: { label: string; value: string }[];
  savings: { label: string; value: string }[];
  insight: string;
  accent: string;
}

const studies: CaseStudy[] = [
  {
    industry: "Cybersecurity SaaS",
    title: "Breach Response & Urgent Security Outreach",
    problem: "Security vendors waste resources blasting generic outbound, missing the post-breach window when companies are most vulnerable. Result: low replies, stale pipelines, SDR burnout.",
    solution: "A real-time breach-signal engine triggered on announced incidents. Enriches targets, scores breach severity, and ships AI-personalized multichannel outreach the instant urgency hits.",
    flow: "Breach announcement → Enrichment → Signal scoring → AI personalization → Multi-channel outreach → Automated follow-ups → CRM feedback loop",
    tools: "Clay, n8n, Apollo, Clearbit, BuiltWith, Wappalyzer, Crunchbase, Claude AI, HubSpot",
    metrics: [
      { label: "Reply Rate", value: "6–10%" },
      { label: "Positive Reply", value: "10-15%" },
      { label: "Meetings / mo", value: "20-40" },
      { label: "Pipeline / mo", value: "$120K–$300K" },
    ],
    savings: [
      { label: "SDR replacement", value: "$8k+/mo" },
      { label: "Tool wastage", value: "~$1k/mo" },
      { label: "Failure cost avoided", value: "$10k–$20k" },
      { label: "Total monthly", value: "$20k–$30k" },
    ],
    insight: "Timing > volume. A real-time breach signal eliminates most wasted outbound.",
    accent: "190 100% 60%",
  },
  {
    industry: "Tech SaaS / Infrastructure",
    title: "Legacy Tech Replacement Signal Engine",
    problem: "SaaS teams blast broad audiences without filtering for legacy or competitor stacks. Manual research is slow and imprecise — engagement stays flat.",
    solution: "A technographic targeting engine. Weekly stack scans + hiring/funding triggers identify companies running outdated infrastructure. Enriched, scored, and pitched on upgrade pain.",
    flow: "Tech signal + hiring/funding → Enrichment → Filtering → AI personalization → Outreach → Follow-ups",
    tools: "BuiltWith, Wappalyzer, LinkedIn Jobs API, n8n, Clay, Crunchbase, Apollo, Claude AI",
    metrics: [
      { label: "Reply Rate", value: "4–8%" },
      { label: "Positive Reply", value: "17-25%" },
      { label: "Meetings / mo", value: "10–20" },
      { label: "Pipeline / mo", value: "$80k–$200k" },
    ],
    savings: [
      { label: "SDR replacement", value: "$8k+/mo" },
      { label: "Tool wastage", value: "~$500/mo" },
      { label: "Failure cost avoided", value: "$8k–$15k" },
      { label: "Total monthly", value: "$10k–$15k" },
    ],
    insight: "Better targeting beats better copy — focus on who, not how many.",
    accent: "215 100% 65%",
  },
  {
    industry: "Fintech / Financial SaaS",
    title: "New CFO & Funding Outreach Engine",
    problem: "Finance vendors miss the moment when a company hires a new CFO or raises funding. Generic outreach gets ignored. Valuable leads slip away.",
    solution: "An executive signal engine. Monitors CFO appointments and funding events. AI generates personalized congratulatory outreach tying fresh budget to the solution.",
    flow: "New CFO + funding trigger → Enrichment → Scoring → AI personalization → Multi-channel outreach → Follow-ups",
    tools: "Crunchbase, news APIs, Apollo, LinkedIn, n8n, Clay, Claude AI, HubSpot, Gmail",
    metrics: [
      { label: "Reply Rate", value: "5–10%" },
      { label: "Positive Reply", value: "5-10%" },
      { label: "Meetings / mo", value: "10–25" },
      { label: "Pipeline / mo", value: "$200k–$350k" },
    ],
    savings: [
      { label: "SDR replacement", value: "$8k+/mo" },
      { label: "Tool wastage", value: "~$500/mo" },
      { label: "Failure cost avoided", value: "$12k–$20k" },
      { label: "Total monthly", value: "$12k–$20k" },
    ],
    insight: "New title + fresh budget = ready-to-buy pipeline.",
    accent: "270 90% 70%",
  },
  {
    industry: "Commercial Real Estate",
    title: "Office Expansion & Lease Renewal Targeter",
    problem: "Brokers cold-call without knowing who is about to renew or expand. Outdated lease data and generic outreach cause missed deals.",
    solution: "An expansion signal system ingesting lease expiry data + monitoring news/LinkedIn for office expansions. Personalized outreach references lease timeline and growth.",
    flow: "Lease + expansion signals → Enrichment → Scoring → AI personalization → Outreach → Follow-ups",
    tools: "CoStar/VTS APIs, Google News, LinkedIn, n8n, Clay, Claude AI",
    metrics: [
      { label: "Reply Rate", value: "4–8%" },
      { label: "Positive Reply", value: "1–3%" },
      { label: "Meetings / mo", value: "10–20" },
      { label: "Pipeline / mo", value: "$200k–$500k" },
    ],
    savings: [
      { label: "SDR replacement", value: "$4k+/mo" },
      { label: "Tool wastage", value: "~$500/mo" },
      { label: "Failure cost avoided", value: "$8k–$15k" },
      { label: "Total monthly", value: "$8k–$15k" },
    ],
    insight: "Office moves follow concrete signals — plan ahead of lease cycles.",
    accent: "145 80% 60%",
  },
  {
    industry: "SaaS / B2B Services",
    title: "Inbound Visitor Identification & Nurture",
    problem: "High-intent website visitors skip forms — up to half of engaged prospects never become leads. Manual follow-ups are too slow.",
    solution: "An inbound signal pipeline. On high-engagement visits, the system de-anonymizes the company, enriches contacts, and ships AI-generated content-specific emails within minutes.",
    flow: "Web visit signal → Enrichment → Filtering → AI personalization → Immediate outreach → Nurture",
    tools: "Clearbit Reveal, 6sense, GA4, Apollo, n8n, HubSpot, Claude AI",
    metrics: [
      { label: "Reply Rate", value: "8–15%" },
      { label: "Positive Reply", value: "15-30%" },
      { label: "Meetings / mo", value: "15–40" },
      { label: "Pipeline / mo", value: "$100k–$250k" },
    ],
    savings: [
      { label: "SDR replacement", value: "$4k–$8k+/mo" },
      { label: "Tool wastage", value: "20–30% reduction" },
      { label: "Failure cost avoided", value: "$10k–$20k" },
      { label: "Total monthly", value: "$15k–$30k" },
    ],
    insight: "Speed-to-lead is everything — instant, relevant outreach converts demand.",
    accent: "48 100% 60%",
  },
];

function Modal({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4 bg-background/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        className="relative max-w-3xl w-full max-h-[88vh] overflow-y-auto panel rounded-3xl p-8 md:p-10"
        style={{ boxShadow: `0 0 0 1px hsl(${study.accent} / 0.5), 0 0 60px hsl(${study.accent} / 0.25)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 h-9 w-9 rounded-full grid place-items-center hover:bg-secondary transition-colors" aria-label="Close">×</button>
        <div className="text-xs uppercase tracking-widest mb-2" style={{ color: `hsl(${study.accent})` }}>{study.industry}</div>
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{study.title}</h3>

        <div className="mt-6 space-y-5 text-sm leading-relaxed">
          <div>
            <div className="font-semibold mb-1 text-foreground">Problem</div>
            <p className="text-muted-foreground">{study.problem}</p>
          </div>
          <div>
            <div className="font-semibold mb-1 text-foreground">Solution</div>
            <p className="text-muted-foreground">{study.solution}</p>
          </div>
          <div>
            <div className="font-semibold mb-1 text-foreground">How it works</div>
            <p className="text-muted-foreground">{study.flow}</p>
          </div>
          <div>
            <div className="font-semibold mb-1 text-foreground">Stack</div>
            <p className="text-muted-foreground">{study.tools}</p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border/60 bg-secondary/30 p-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Performance</div>
            <div className="space-y-2">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="font-semibold" style={{ color: `hsl(${study.accent})` }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[hsl(48_100%_60%/0.4)] bg-[hsl(48_100%_60%/0.05)] p-4">
            <div className="text-xs uppercase tracking-widest text-[hsl(48_100%_75%)] mb-3">Cost Savings</div>
            <div className="space-y-2">
              {study.savings.map((m) => (
                <div key={m.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="font-semibold text-gradient-gold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl border-l-2" style={{ borderColor: `hsl(${study.accent})`, background: `hsl(${study.accent} / 0.06)` }}>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Key insight</div>
          <div className="font-display text-base font-semibold">{study.insight}</div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [open, setOpen] = useState<CaseStudy | null>(null);
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/40 text-xs font-medium text-muted-foreground mb-4">
            Case Studies
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Real Results. <span className="text-gradient-cyan">Real Growth.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from companies running the KortexCore GTM engine — driven by signals, executed through systems, and optimized over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studies.map((s) => (
            <button
              key={s.title}
              onClick={() => setOpen(s)}
              className="group text-left panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              style={{ ['--c' as string]: `hsl(${s.accent})` }}
            >
              <div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ background: `radial-gradient(circle, hsl(${s.accent} / 0.5), transparent 70%)` }}
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-widest mb-3" style={{ color: `hsl(${s.accent})` }}>{s.industry}</div>
                <h3 className="font-display text-lg font-semibold leading-snug min-h-[3rem]">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.problem}</p>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {s.metrics.slice(0, 4).map((m) => (
                    <div key={m.label} className="rounded-lg bg-secondary/40 px-3 py-2">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{m.label}</div>
                      <div className="text-sm font-semibold" style={{ color: `hsl(${s.accent})` }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Read case study</span>
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: `hsl(${s.accent})` }}>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && <Modal study={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
