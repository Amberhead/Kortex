export default function CtaBanner({ id = "cta", title, sub }: { id?: string; title: string; sub?: string }) {
  return (
    <section id={id} className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="relative panel rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
               style={{ background: "radial-gradient(circle, hsl(195 100% 55% / 0.35), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              {title}
            </h2>
            {sub && <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{sub}</p>}
            <div className="mt-8">
              <a href="https://calendly.com/connect-kortexcore/30min" target="_blank" rel="noopener noreferrer" className="neon-btn px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2">
                Get Your FREE GTM Plan
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
