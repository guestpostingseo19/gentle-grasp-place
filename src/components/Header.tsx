import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/advertise", label: "Advertise With Us" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-panel shadow-2xl" : "border border-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="RankBridge logo"
              width={36}
              height={36}
              className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              Rank<span className="text-primary">Bridge</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    activeProps={{ className: "text-foreground" }}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  <div
                    className={`absolute left-0 top-full w-72 pt-3 transition-all duration-300 ${
                      servicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="glass-panel overflow-hidden rounded-xl p-2 shadow-2xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                        >
                          <span className="block text-sm font-medium">{s.name}</span>
                          <span className="block text-xs text-muted-foreground">{s.tagline}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110 sm:inline-flex"
            >
              Start a conversation
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg border border-border p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "mt-2 max-h-[70vh]" : "max-h-0"
          }`}
        >
          <div className="glass-panel rounded-2xl p-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
