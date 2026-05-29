export default function Hero() {
  return (
    <section id="home" className="relative pt-48 md:pt-56 pb-20 overflow-hidden border-[#fcfcfc]">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, hsl(195 100% 55% / 0.25), transparent 70%)" }} />
      <div className="pointer-events-none absolute -top-20 right-0 w-[520px] h-[520px] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, hsl(270 90% 60% / 0.18), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className="animate-fade-in mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Pipeline shouldn't be unpredictable.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From ICP-driven targeting to multi-channel execution, our engine ensures your outreach doesn't just reach — it converts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="https://calendly.com/connect-kortexcore/30min" target="_blank" rel="noopener noreferrer" className="neon-btn px-7 py-4 rounded-full font-semibold text-base inline-flex items-center gap-2">
              Get Your FREE GTM Plan
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { k: "3–5×", v: "Conversion lift" },
              { k: "3+", v: "Channels" },
              { k: "$20k+", v: "Avg monthly savings" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient-cyan">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
