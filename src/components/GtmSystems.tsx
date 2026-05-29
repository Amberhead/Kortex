import { useState } from "react";

type Color = "purple" | "blue" | "green" | "gold";

const colorMap: Record<Color, { stroke: string; fill: string; text: string; ring: string }> = {
  purple: { stroke: "hsl(270 90% 70%)", fill: "hsl(270 90% 70% / 0.10)", text: "text-[hsl(270_90%_82%)]", ring: "hsl(270 90% 70% / 0.45)" },
  blue:   { stroke: "hsl(215 100% 65%)", fill: "hsl(215 100% 65% / 0.10)", text: "text-[hsl(215_100%_80%)]", ring: "hsl(215 100% 65% / 0.45)" },
  green:  { stroke: "hsl(145 80% 60%)",  fill: "hsl(145 80% 60% / 0.10)",  text: "text-[hsl(145_80%_75%)]",  ring: "hsl(145 80% 60% / 0.45)" },
  gold:   { stroke: "hsl(35 100% 60%)",  fill: "hsl(35 100% 60% / 0.10)",  text: "text-[hsl(35_100%_75%)]",  ring: "hsl(35 100% 60% / 0.45)" },
};

interface SystemDef {
  num: string;
  title: string;
  subtitle: string;
  color: Color;
  groups: { label?: string; nodes: string[]; columns?: number }[];
  output: string;
  loop?: boolean;
}

const systems: SystemDef[] = [
  {
    num: "01",
    title: "AI Powered Cold Email System",
    subtitle: "Targeted outbound at scale with verified inboxes and tiered intent.",
    color: "purple",
    groups: [
      { label: "Foundation", nodes: ["ICP Definition", "TAM Scoping", "Offer Positioning"] },
      { label: "Targeting", nodes: ["Target Strategy", "Sourcing", "Enrichment & Verification", "Lead Scoring"] },
      { label: "Tiers", nodes: ["Tier 1 — High Intent", "Tier 2 — Signal-Based", "Tier 3 — Volume"], columns: 1 },
      { label: "Execution", nodes: ["Infrastructure (SPF/DKIM/DMARC)", "Warmup", "Copy & Personalization", "Campaign Launch", "Inbox Management", "Optimization Loop"] },
    ],
    output: "Meetings Booked",
  },
  {
    num: "02",
    title: "Multichannel Revenue Pipeline Engine",
    subtitle: "Coordinated outreach across email, LinkedIn, calls, and ads.",
    color: "blue",
    groups: [
      { label: "Foundation", nodes: ["ICP Definition", "Channel Selection", "Offer Mapping"] },
      { label: "Strategy", nodes: ["Account List", "Channel Mapping", "Sequence Orchestration"] },
      { label: "Channels", nodes: ["Email", "LinkedIn", "Other Channels"] },
      { label: "Conversion", nodes: ["Engagement Tracking", "Attribution Layer", "CRM / Pipeline Sync", "Meeting Conversion"] },
    ],
    output: "Qualified Pipeline",
  },
  {
    num: "03",
    title: "Signal-Based Outbound System",
    subtitle: "Trigger-led outreach using hiring, funding, and tech signals.",
    color: "green",
    groups: [
      { label: "Foundation", nodes: ["ICP Definition", "Signal Sources", "Trigger Mapping"] },
      { label: "Intelligence", nodes: ["Signal Collection", "Filtering & Scoring", "ICP Matching"] },
      { label: "Activation", nodes: ["High Intent Accounts", "Angle Generation", "Hyper-Personalized Messaging", "Trigger-Based Outreach", "Response Tracking", "Feedback Loop"] },
    ],
    output: "High-Quality Replies",
  },
  {
    num: "04",
    title: "Full GTM Engine",
    subtitle: "End-to-end engine with a closed-loop optimization layer.",
    color: "gold",
    groups: [
      { label: "Inputs", nodes: ["Signals", "ICP", "Data"] },
      { label: "Intelligence", nodes: ["Account Prioritization", "Decision Engine"] },
      { label: "Execution", nodes: ["Email + Multichannel", "Engagement Layer", "Conversion Layer"] },
      { label: "Learning", nodes: ["Performance Tracking", "Learning System", "Optimization Engine"] },
    ],
    output: "Compounding Pipeline",
    loop: true,
  },
];

function Node({ label, color, gold }: { label: string; color: Color; gold?: boolean }) {
  const c = colorMap[color];
  return (
    <div
      className={`group relative px-2.5 py-2 rounded-lg border text-[10px] md:text-[10.5px] font-medium text-center transition-all duration-300 hover:scale-[1.03] leading-snug box-border w-full min-w-0 whitespace-normal [overflow-wrap:normal] [word-break:keep-all] [hyphens:none] ${
        gold ? "pulse-gold font-semibold text-[11.5px]" : ""
      }`}
      style={{
        background: gold ? "linear-gradient(135deg, hsl(48 100% 60% / 0.18), hsl(35 100% 55% / 0.18))" : c.fill,
        borderColor: gold ? "hsl(45 100% 60%)" : c.stroke,
        color: gold ? "hsl(45 100% 88%)" : "hsl(210 30% 92%)",
        boxShadow: gold ? "0 0 22px hsl(45 100% 55% / 0.45)" : `inset 0 0 18px ${c.fill}`,
      }}
    >
      <span className="relative z-10">{label}</span>
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ boxShadow: `0 0 16px ${c.ring}` }}
      />
    </div>
  );
}

function FlowLine({ color }: { color: Color | "gold" }) {
  const stroke = color === "gold" ? "hsl(45 100% 60%)" : colorMap[color].stroke;
  return (
    <svg height="22" className="w-full my-1" preserveAspectRatio="none">
      <line x1="50%" y1="0" x2="50%" y2="22" stroke={stroke} strokeWidth="1.5" className="flow-dash" opacity="0.7" />
    </svg>
  );
}

function LoopIndicator() {
  return (
    <div className="relative mx-auto my-3 w-full flex items-center justify-center">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(45_100%_60%/0.5)] bg-[hsl(45_100%_60%/0.08)] text-[10px] uppercase tracking-widest text-[hsl(45_100%_75%)]">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(45_100%_60%)] pulse-soft" />
        Continuous feedback loop
      </div>
    </div>
  );
}

function SystemCard({ sys, index }: { sys: SystemDef; index: number }) {
  const c = colorMap[sys.color];
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="panel relative rounded-2xl p-5 flex flex-col transition-all duration-500 animate-fade-in"
      style={{
        animationDelay: `${index * 120}ms`,
        animationFillMode: "both",
        boxShadow: hover ? `0 0 0 1px ${c.stroke}, 0 10px 40px ${c.ring}` : undefined,
      }}
    >
      <div className="flex items-baseline gap-2 mb-1">
        <span className={`font-display font-bold text-2xl ${c.text}`}>{sys.num}</span>
        <h3 className="font-display font-semibold text-base leading-tight">{sys.title}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-5 leading-relaxed min-h-[2.5rem]">{sys.subtitle}</p>

      {sys.groups.map((g, gi) => (
        <div key={gi}>
          {gi > 0 && <FlowLine color={sys.color} />}
          {g.label && (
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-1.5">{g.label}</div>
          )}
          {(() => {
            const maxWordLen = Math.max(...g.nodes.flatMap(n => n.split(/\s+/).map(w => w.length)));
            const cols = g.columns === 1 || maxWordLen >= 13 ? "grid-cols-1" : g.nodes.length >= 4 ? "grid-cols-2" : "grid-cols-2";
            return (
              <div className={`grid gap-1.5 ${cols}`}>
                {g.nodes.map((n) => <Node key={n} label={n} color={sys.color} />)}
              </div>
            );
          })()}
        </div>
      ))}

      {sys.loop && <LoopIndicator />}

      <FlowLine color="gold" />
      <Node label={`→ ${sys.output}`} color={sys.color} gold />
    </div>
  );
}

export default function GtmSystems() {
  return (
    <section id="systems" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14 text-center animate-fade-in">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="text-gradient-cyan">4 Ways We Turn</span>{" "}
          <span className="text-foreground">Growth Into Results</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Each system focuses on a specific part of your pipeline — from targeting to execution to conversion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative">
          <div className="absolute inset-0 grid-bg opacity-20 rounded-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 p-2">
            {systems.map((s, i) => <SystemCard key={s.num} sys={s} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
