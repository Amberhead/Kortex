const steps = [
  { week: "Week 1", title: "Deep Research", desc: "Market mapping, competitor teardown, opportunity sizing." },
  { week: "Week 1", title: "ICP Definition", desc: "Firmographic + technographic + behavioural triggers." },
  { week: "Week 1", title: "Target Intelligence", desc: "Identify the buying signals worth chasing." },
  { week: "Week 2", title: "System Setup", desc: "Tools, domains, integrations, tracking, and data flow." },
  { week: "Week 2", title: "Pipeline Build", desc: "Data sourcing, enrichment, and qualification." },
  { week: "Week 2", title: "Campaign Build", desc: "Messaging, assets, and sequence design." },
  { week: "Week 2", title: "Launch", desc: "Activate + iterate based on data." },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-secondary/40 text-xs font-medium text-muted-foreground mb-4">
            Process
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            How We Build Your <span className="text-gradient-cyan">Pipeline</span>
            <span className="block text-base md:text-lg font-medium text-muted-foreground mt-3">From research to live campaigns in 14 days.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative panel rounded-2xl p-5 hover:border-primary/60 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-xs font-bold text-primary-foreground glow-cyan">
                    {i + 1}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.week}</span>
                </div>
                <div className="font-display font-semibold text-sm">{s.title}</div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
