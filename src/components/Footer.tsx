import logo from "@/assets/kortex-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="KortexCore" className="h-12 w-auto" />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/kortexcore-marketing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full panel grid place-items-center hover:glow-cyan transition-all hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.5H5.67v7.84h2.67Zm-1.34-9a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9v-4.3c0-2.3-1.23-3.37-2.87-3.37-1.32 0-1.92.73-2.25 1.24V10.5H10.5v7.84h2.72v-4.38c0-.24.02-.48.09-.65.18-.48.62-.97 1.34-.97.95 0 1.33.72 1.33 1.78v4.22h2.72Z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/kortexcore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="h-10 w-10 rounded-full panel grid place-items-center hover:glow-cyan transition-all hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} KortexCore. All rights reserved.
      </div>
    </footer>
  );
}
