import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kortex-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Free  Resources", href: "https://kortexcore.substack.com/", external: true },
  { label: "Case Studies", href: "#case-studies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-28">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="KortexCore logo"
            className="h-24 md:h-32 w-auto drop-shadow-[0_0_22px_hsl(230_100%_62%/0.65)] transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all text-[#f4ebeb]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/connect-kortexcore/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex neon-btn px-5 py-2.5 rounded-full text-sm font-semibold items-center gap-2"
        >
          Get Started
          <span aria-hidden>→</span>
        </a>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-[60] p-2 rounded-lg text-foreground hover:bg-muted/40 transition-colors cursor-pointer pointer-events-auto"
        >
          <span className="relative block w-6 h-6">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://calendly.com/connect-kortexcore/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 neon-btn px-5 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
          >
            Get Started
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
