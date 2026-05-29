const items = [
  {
    quote: "The cold email campaigns by KortexCore helped us secure consistent demo calls with international clients, something we struggled with before. Within the first quarter, we built a strong pipeline and started having meaningful conversations with decision-makers.",
    name: "Mathew Thomas",
    role: "Founder, Mathew Digital",
  },
  {
    quote: "Their data-driven approach transformed our outreach from generic mass emails to personalized conversations. They helped us to build stronger connections and started meaningful discussions with the right decision-makers.",
    name: "Karthik J",
    role: "Managing Partner, Haaps",
  },
  {
    quote: "After implementing their cold email strategy, we saw a 340% increase in qualified leads. The ROI was immediate and sustained — exactly what our growing company needed.",
    name: "Rujimas Piyamongklchai",
    role: "Business Analyst, TechFlow Solution",
  },
  {
    quote: "We truly appreciate the way KortexCore operates. They are consistent, clear in communication, and we always know what's happening behind the scenes.",
    name: "David Chen",
    role: "Founder, Digital Growth Co.",
  },
  {
    quote: "What we liked the most is how results-driven yet collaborative the process is. We never feel left in the dark, everything is explained with full clarity.",
    name: "Geoff Rich",
    role: "Owner, ICO Systems",
  },
  {
    quote: "The relationship with KortexCore feels more like a partnership than a service. They're proactive, transparent, and always there to guide us whenever we need.",
    name: "Muhammed Habeeb",
    role: "Founder, Cybrox",
  },
  {
    quote: "The strategies KortexCore uses are some of the best I have seen. They focus on building real business relationships instead of just chasing numbers, which has made a huge difference for us.",
    name: "Lional Fo",
    role: "BDM, Vector InfoTech",
  },
];

function TestimonialCard({ t }: { t: (typeof items)[number] }) {
  return (
    <figure className="panel rounded-2xl p-7 relative h-full flex flex-col min-h-[320px]">
      <div className="absolute top-5 right-6 text-5xl text-primary/30 font-display leading-none">"</div>
      <blockquote className="text-base md:text-lg leading-relaxed text-foreground/90 flex-1 break-words pr-8">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-sm font-bold text-primary-foreground shrink-0">
          {t.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  // Duplicate items for seamless infinite loop
  const looped = [...items, ...items];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/40 text-xs font-medium text-muted-foreground mb-4">
            Voices
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            What Our <span className="text-gradient-cyan">Clients</span> Say
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative group">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden scrollbar-none">
          <div
            className="flex gap-5 w-max animate-slide-x group-hover:[animation-play-state:paused]"
          >
            {looped.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[580px]"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
