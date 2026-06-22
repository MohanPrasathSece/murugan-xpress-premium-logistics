import { useEffect, useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bike,
  Truck,
  Package,
  Phone,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  CircleCheck,
  Boxes,
  FileText,
  Pill,
  UtensilsCrossed,
  Cpu,
  Sofa,
  Building2,
  Home,
  Factory,
  PackageOpen,
  Wine,
  Navigation,
  MessageCircle,
  ArrowUp,
  Star,
  Calendar,
  Wallet,
  Route as RouteIcon,
} from "lucide-react";
import heroFleet from "@/assets/hero-fleet.jpg";
import aboutDriver from "@/assets/about-driver.jpg";
import tnMap from "@/assets/tn-map.jpg";
import { useReveal, useCountUp } from "@/lib/use-reveal";
import Logo from "@/components/Logo";

const PHONE = "9150474919";
const PHONE2 = "7449209677";
const WHATSAPP = "919150474919";
const EMAIL = "muruganxpress6@gmail.com";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Categories />
      <Pricing />
      <WhyUs />
      <Process />
      <Coverage />
      <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
      <ScrollProgress />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass py-2" : "bg-transparent py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center">
          <Logo size={44} variant="nav" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy">{n.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone className="h-4 w-4 text-primary" /> {PHONE}
          </a>
          <a href="#booking" className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-5 mt-2 rounded-2xl border border-border bg-white p-4 shadow-card lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">{n.label}</a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function FloatingBadge({ icon, title, sub, className = "", style }: { icon: ReactNode; title: string; sub: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute glass flex items-center gap-3 rounded-2xl px-3.5 py-2.5 shadow-soft ${className}`} style={style}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10">{icon}</span>
      <div className="leading-tight">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="blob animate-blob h-[420px] w-[420px] -left-32 top-24" style={{ background: "radial-gradient(circle, #fca5a5 0%, #dc2626 60%, transparent 70%)" }} />
      <div className="blob animate-blob h-[360px] w-[360px] right-[-80px] top-10" style={{ animationDelay: "-6s", background: "radial-gradient(circle, #bfdbfe 0%, #1e3a8a 70%, transparent 75%)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Now serving all 38 districts in Tamil Nadu
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Deliver Across <br className="hidden sm:block" />Tamil&nbsp;Nadu,<br />
            <span className="underline-brand">Fast.</span>{" "}
            <span className="underline-brand">Safe.</span>{" "}
            <span className="underline-brand">On Time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tamil Nadu's trusted logistics partner delivering documents, medicines, food, furniture, commercial goods, parcels and heavy cargo safely across all 38&nbsp;districts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#booking" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              Book Shipment <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE}`} className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Insured handling</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24×7 support</div>
            <div className="hidden items-center gap-2 sm:flex"><CircleCheck className="h-4 w-4 text-primary" /> Transparent pricing</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-red-100/60 to-transparent" />
            <img src={heroFleet} alt="Murugan Xpress fleet — bike, auto, tempo, van, lorry" width={1024} height={1024} className="relative h-full w-full object-contain" />
            <FloatingBadge className="left-2 top-10 animate-float" icon={<Bike className="h-4 w-4 text-primary" />} title="Bike Delivery" sub="From ₹60" />
            <FloatingBadge className="right-0 top-1/3 animate-float" style={{ animationDelay: "-2s" }} icon={<Truck className="h-4 w-4 text-primary" />} title="Same-Day Lorry" sub="Up to 3 Ton" />
            <FloatingBadge className="left-4 bottom-6 animate-float" style={{ animationDelay: "-4s" }} icon={<ShieldCheck className="h-4 w-4 text-primary" />} title="Safe Handling" sub="100% insured" />
          </div>
        </div>
      </div>
      <a href="#stats" className="mx-auto mt-12 hidden w-fit flex-col items-center gap-2 text-xs font-medium text-muted-foreground sm:flex">
        <span className="grid h-9 w-6 place-items-start rounded-full border border-muted-foreground/40 p-1">
          <span className="h-2 w-1 rounded-full bg-primary animate-scroll-hint" />
        </span>
        Scroll to Explore
      </a>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const items = [
    { n: 38, suffix: "+", label: "Districts Covered" },
    { n: 6, suffix: "", label: "Vehicle Types" },
    { n: 24, suffix: "/7", label: "Support" },
    { n: 1000, suffix: "+", label: "Happy Customers" },
  ];
  return (
    <section id="stats" className="relative -mt-6 pb-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl shadow-card md:grid-cols-4">
          {items.map((s, i) => <StatBlock key={i} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ n, suffix, label, index }: { n: number; suffix: string; label: string; index: number }) {
  const { ref, val } = useCountUp(n);
  const bg = index % 2 === 0 ? "bg-navy" : "bg-navy-deep";
  return (
    <div className={`${bg} flex flex-col items-center justify-center gap-1 px-6 py-8 md:items-start`}>
      <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        <span ref={ref}>{`${val}${suffix}`}</span>
      </div>
      <div className="mt-1 text-xs font-medium text-blue-200 md:text-sm">{label}</div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const r = useReveal();
  return (
    <section className="section-pad">
      <div ref={r} className="reveal mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img src={aboutDriver} alt="Murugan Xpress driver loading parcels" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden glass rounded-2xl p-4 shadow-soft sm:block">
            <div className="text-2xl font-extrabold text-primary">5★</div>
            <div className="text-xs text-muted-foreground">Avg. customer rating</div>
          </div>
        </div>
        <div>
          <SectionEyebrow>About Murugan Xpress</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Built for Tamil Nadu.<br /><span className="text-gradient-brand">Trusted by thousands.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Murugan Xpress is one of Tamil Nadu's trusted logistics providers offering city-to-city and local delivery services. Whether it's a document or a 3-ton lorry load, we deliver safely and on time.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Door pickup", "Door delivery", "Insured cargo", "Transparent pricing", "24×7 support", "Same-day option"].map((x) => (
              <li key={x} className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-navy" /> {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const SERVICES = [
  { icon: Bike, name: "Bike Delivery", cap: "Up to 20 kg", desc: "Quick documents, parcels & food across the city.", price: "₹60" },
  { icon: Truck, name: "Goods Auto", cap: "Up to 100 kg", desc: "Small loads, shop deliveries & light cargo.", price: "₹120" },
  { icon: Truck, name: "Load Auto", cap: "Up to 500 kg", desc: "Medium loads, appliances & business stock.", price: "₹250" },
  { icon: Truck, name: "Tempo", cap: "Up to 750 kg", desc: "Mid-size furniture, mini moves & commercial.", price: "₹350" },
  { icon: Truck, name: "Mini Van", cap: "Up to 1 Ton", desc: "Household shifting & retail distribution.", price: "₹450" },
  { icon: Truck, name: "Lorry", cap: "Up to 3 Ton", desc: "Heavy cargo, industrial loads & long-haul.", price: "₹900" },
];

function ServiceCard({ icon: Icon, name, cap, desc, price, delay }: { icon: React.ElementType; name: string; cap: string; desc: string; price: string; delay: number }) {
  const r = useReveal();
  return (
    <div ref={r} className="reveal card-soft group relative overflow-hidden p-7" style={{ transitionDelay: `${delay}ms` }}>
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-navy transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">From {price}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold">{name}</h3>
      <div className="mt-1 text-sm font-semibold text-primary">{cap}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <a href="#booking" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-primary">
        Book this vehicle <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Our Services" title={<>Every load, <span className="text-gradient-brand">every vehicle.</span></>} desc="From a single envelope to a 3-ton lorry — pick the right vehicle and we'll handle the rest." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => <ServiceCard key={s.name} {...s} delay={i * 60} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- CATEGORIES ---------- */
const CATS = [
  { icon: FileText, label: "Documents" },
  { icon: Pill, label: "Medicines" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Cpu, label: "Electronics" },
  { icon: Sofa, label: "Furniture" },
  { icon: Building2, label: "Commercial Goods" },
  { icon: Home, label: "Household Goods" },
  { icon: Factory, label: "Industrial Materials" },
  { icon: PackageOpen, label: "Parcels" },
  { icon: Wine, label: "Fragile Items" },
];

function Categories() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="We Deliver" title={<>Anything you need <span className="text-gradient-brand">moved.</span></>} desc="Big or small, fragile or heavy — we've handled it all." />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {CATS.map(({ icon: I, label }, i) => {
            const r = useReveal();
            return (
              <div key={label} ref={r} className="reveal group flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow" style={{ transitionDelay: `${(i % 5) * 50}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <I className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const PRICING = [
  { v: "Bike", cap: "20 kg", min: "₹60", km: "5 KM", extra: "₹9" },
  { v: "Passenger Auto", cap: "100 kg", min: "₹120", km: "5 KM", extra: "₹12" },
  { v: "Load Auto", cap: "500 kg", min: "₹250", km: "8 KM", extra: "₹15" },
  { v: "Tempo", cap: "750 kg", min: "₹350", km: "10 KM", extra: "₹17" },
  { v: "Mini Van", cap: "1000 kg", min: "₹450", km: "12 KM", extra: "₹18" },
  { v: "Lorry", cap: "3000 kg", min: "₹900", km: "20 KM", extra: "₹28" },
];

function Pricing() {
  const r = useReveal();
  return (
    <section id="pricing" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Transparent Pricing" title={<>Honest rates, <span className="text-gradient-brand">no surprises.</span></>} desc="One simple table. The price you see is the price you pay (plus tolls)." />
        <div ref={r} className="reveal mt-10 flex items-center gap-3 rounded-2xl bg-navy px-5 py-4 text-sm font-semibold text-white shadow-glow">
          <ShieldCheck className="h-5 w-5 shrink-0 text-red-300" />
          <p>Rate does not include toll charges. Applicable toll charges will be added to the final fare.</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="sticky top-0 bg-navy text-xs uppercase tracking-wider text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Vehicle</th>
                  <th className="px-6 py-4 font-semibold">Capacity</th>
                  <th className="px-6 py-4 font-semibold">Min. Charge</th>
                  <th className="px-6 py-4 font-semibold">Included KM</th>
                  <th className="px-6 py-4 font-semibold">Extra KM</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((p, i) => (
                  <tr key={p.v} className={`border-t border-border transition-colors hover:bg-red-50 ${i % 2 ? "bg-slate-50/60" : ""}`}>
                    <td className="px-6 py-5 font-bold">{p.v}</td>
                    <td className="px-6 py-5 text-muted-foreground">{p.cap}</td>
                    <td className="px-6 py-5 font-extrabold text-primary">{p.min}</td>
                    <td className="px-6 py-5 text-muted-foreground">{p.km}</td>
                    <td className="px-6 py-5 font-semibold">{p.extra}/km</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#booking" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
            Book Shipment <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const WHY = [
  { icon: Boxes, t: "Large Parcel Delivery", d: "From small envelopes to 3-ton lorry loads — one partner, every size." },
  { icon: Wallet, t: "Affordable Pricing", d: "Honest minimums and clear per-km rates. No hidden surcharges." },
  { icon: Home, t: "Door Pickup & Delivery", d: "We pick up from your doorstep and drop at the receiver's door." },
  { icon: ShieldCheck, t: "Safe Handling", d: "Trained loaders, secure tie-downs and careful packing protocols." },
  { icon: Clock, t: "Same-Day & Next-Day", d: "Choose your urgency. We hit the deadline you book." },
  { icon: Phone, t: "24×7 Support", d: "Real humans on call, every day of the year." },
];

function WhyUs() {
  return (
    <section id="why" className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Why Choose Us" title={<>The details that make <span className="text-gradient-brand">the difference.</span></>} desc="Built around what matters most: speed, safety, and a price you can trust." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: I, t, d }, i) => {
            const r = useReveal();
            const isNavy = i % 2 === 0;
            return (
              <div key={t} ref={r} className="reveal card-soft p-7" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${isNavy ? "bg-navy/10 text-navy" : "bg-primary/10 text-primary"}`}>
                  <I className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: "01", t: "Book", d: "Fill the form or call us. Get instant confirmation." },
  { n: "02", t: "Pickup", d: "Our driver arrives at your door at the booked time." },
  { n: "03", t: "Transport", d: "Goods move safely with trained handling teams." },
  { n: "04", t: "Tracking", d: "Live updates via call & WhatsApp on every leg." },
  { n: "05", t: "Delivered", d: "Safe delivery confirmed to sender & receiver." },
];

function Process() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="How It Works" title={<>Five steps, <span className="text-gradient-brand">zero stress.</span></>} />
        <div className="relative mt-14 grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-navy/50 to-transparent md:block" />
          {STEPS.map((s, i) => {
            const r = useReveal();
            return (
              <div key={s.n} ref={r} className="reveal relative text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-white text-base font-extrabold shadow-soft">{s.n}</div>
                <h3 className="mt-5 text-base font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- COVERAGE ---------- */
function Coverage() {
  const r = useReveal();
  return (
    <section className="section-pad">
      <div ref={r} className="reveal mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <SectionEyebrow>Coverage</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Serving every district <br />across <span className="text-gradient-brand">Tamil Nadu.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From Chennai to Kanyakumari, Coimbatore to Cuddalore — Murugan Xpress moves your goods wherever you need them.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[{ i: Navigation, t: "Fast Local Delivery" }, { i: RouteIcon, t: "City-to-City Delivery" }, { i: Building2, t: "Business Logistics" }, { i: Home, t: "Household Shifting" }].map(({ i: I, t }) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy/10 text-navy"><I className="h-4 w-4" /></span>
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-full bg-red-100/40 blur-3xl" />
          <img src={tnMap} alt="Tamil Nadu coverage map" width={1024} height={1024} loading="lazy" className="mx-auto w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { n: "Priya R.", c: "Chennai", t: "Booked a tempo for office shifting at 8 AM — picked up by 9, delivered before lunch. Zero damage." },
  { n: "Karthik M.", c: "Coimbatore", t: "Most reliable courier for our medical supplies. Same-day delivery, every time. Highly recommend." },
  { n: "Anitha S.", c: "Madurai", t: "Transparent pricing was the biggest win. The fare matched the quote exactly — no surprises." },
];

function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Customer Stories" title={<>Loved across <span className="text-gradient-brand">Tamil Nadu.</span></>} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => {
            const r = useReveal();
            return (
              <div key={t.n} ref={r} className="reveal card-soft p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed">"{t.t}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-navy text-sm font-extrabold text-white">{t.n[0]}</div>
                  <div>
                    <div className="text-sm font-bold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.c}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What areas do you serve?", a: "We cover all 38 districts of Tamil Nadu, including local deliveries and city-to-city routes." },
  { q: "How do I book a shipment?", a: "Fill the booking form on this page, send it via WhatsApp, or call 9150474919 directly." },
  { q: "Do you offer same-day delivery?", a: "Yes — same-day delivery is available for most routes when booked early in the day." },
  { q: "Can I transport furniture or large items?", a: "Absolutely. We have tempos, mini vans and lorries equipped for furniture and bulky goods." },
  { q: "Are toll charges included in the price?", a: "No. Applicable toll charges are added to the final fare on top of the published rates." },
  { q: "Can I track my shipments?", a: "Yes. Our team shares live status updates via WhatsApp and call throughout the journey." },
  { q: "What payment methods are accepted?", a: "We accept cash, UPI, bank transfer and major digital wallets." },
  { q: "What vehicles are available?", a: "Bike, passenger auto, load auto, tempo, mini van and lorry — covering 20 kg to 3 tons." },
];

function FAQ() {
  const r = useReveal();
  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead eyebrow="FAQ" title={<>Questions, <span className="text-gradient-brand">answered.</span></>} />
        <div ref={r} className="reveal mt-10 rounded-3xl border border-border bg-white p-2 shadow-card sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-4 py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- BOOKING ---------- */
function Input({ label, required, className = "", ...props }: { label: string; required?: boolean; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}{required && <span className="text-primary ml-0.5">*</span>}</span>
      <input {...props} required={required} className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10" />
    </label>
  );
}

function Select({ label, required, options, ...props }: { label: string; required?: boolean; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}{required && <span className="text-primary ml-0.5">*</span>}</span>
      <select {...props} required={required} className="w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function BlockTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-navy">
      <span className="grid h-6 w-6 place-items-center rounded-md bg-navy/10">{icon}</span>
      {children}
    </h3>
  );
}

function Booking() {
  const [form, setForm] = useState({ sName: "", sPhone: "", sAddr: "", rName: "", rPhone: "", rAddr: "", goods: "", vehicle: "Bike", weight: "", date: "", time: "", pay: "Cash on Delivery" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildWaMsg = () => encodeURIComponent(`*New Shipment Booking — Murugan Xpress*\n\n*Sender*\nName: ${form.sName}\nPhone: ${form.sPhone}\nAddress: ${form.sAddr}\n\n*Receiver*\nName: ${form.rName}\nPhone: ${form.rPhone}\nAddress: ${form.rAddr}\n\n*Shipment*\nGoods: ${form.goods}\nVehicle: ${form.vehicle}\nWeight: ${form.weight}\nPickup: ${form.date} at ${form.time}\nPayment: ${form.pay}`);
  const onWhats = (e: React.MouseEvent) => { e.preventDefault(); window.open(`https://wa.me/${WHATSAPP}?text=${buildWaMsg()}`, "_blank"); };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Server error");
      setStatus("ok");
      setForm({ sName: "", sPhone: "", sAddr: "", rName: "", rPhone: "", rAddr: "", goods: "", vehicle: "Bike", weight: "", date: "", time: "", pay: "Cash on Delivery" });
    } catch (err: unknown) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const r = useReveal<HTMLFormElement>();
  return (
    <section id="booking" className="section-pad bg-surface">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHead eyebrow="Book Your Shipment" title={<>Send something <span className="text-gradient-brand">today.</span></>} desc="Fill the form and we'll confirm via WhatsApp or call within minutes." />

        {status === "ok" ? (
          <div className="reveal mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-card">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-600">
              <CircleCheck className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-green-800">Booking received!</h3>
            <p className="mt-2 text-sm text-green-700">We've sent a confirmation to our team. Expect a call or WhatsApp shortly.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-700">
              Book another
            </button>
          </div>
        ) : (
          <form ref={r} onSubmit={onSubmit} className="reveal mt-8 rounded-2xl border-t-4 border-t-navy border border-border bg-white p-5 shadow-card sm:p-8">

            {status === "error" && (
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <ShieldCheck className="h-4 w-4 shrink-0 text-red-500" />
                {errMsg} — try WhatsApp below as a fallback.
              </div>
            )}

            {/* Sender + Receiver side by side */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-3">
                <BlockTitle icon={<MapPin className="h-3.5 w-3.5" />}>Sender</BlockTitle>
                <Input label="Name" required value={form.sName} onChange={update("sName")} />
                <Input label="Phone" required type="tel" value={form.sPhone} onChange={update("sPhone")} />
                <Input label="Pickup Address" required value={form.sAddr} onChange={update("sAddr")} />
              </div>
              <div className="space-y-3">
                <BlockTitle icon={<Navigation className="h-3.5 w-3.5" />}>Receiver</BlockTitle>
                <Input label="Name" required value={form.rName} onChange={update("rName")} />
                <Input label="Phone" required type="tel" value={form.rPhone} onChange={update("rPhone")} />
                <Input label="Delivery Address" required value={form.rAddr} onChange={update("rAddr")} />
              </div>
            </div>

            {/* Shipment details */}
            <div className="mt-5 pt-4 border-t border-border">
              <BlockTitle icon={<Package className="h-3.5 w-3.5" />}>Shipment</BlockTitle>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Input label="Goods Type" required placeholder="Documents…" value={form.goods} onChange={update("goods")} />
                <Select label="Vehicle" required value={form.vehicle} onChange={update("vehicle")} options={["Bike", "Passenger Auto", "Load Auto", "Tempo", "Mini Van", "Lorry"]} />
                <Input label="Weight" required placeholder="e.g. 50 kg" value={form.weight} onChange={update("weight")} />
                <Input label="Pickup Date" required type="date" value={form.date} onChange={update("date")} />
                <Input label="Pickup Time" required type="time" value={form.time} onChange={update("time")} />
                <Select label="Payment" value={form.pay} onChange={update("pay")} options={["Cash on Delivery", "UPI", "Bank Transfer", "Card"]} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <button type="submit" disabled={status === "sending"} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "sending" ? (
                  <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Sending…</>
                ) : (
                  <>Submit Booking <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
              <button type="button" onClick={onWhats} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-110">
                <MessageCircle className="h-4 w-4" /> Book via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function ContactCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="card-soft p-6 border-t-4 border-t-navy">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy/10 text-navy">{icon}</span>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">{title}</h3>
      <div className="mt-2 text-base">{children}</div>
    </div>
  );
}

function Contact() {
  const r = useReveal();
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Get In Touch" title={<>Let's move <span className="text-gradient-brand">together.</span></>} desc="Call, message or visit — we're here every day, around the clock." />
        <div ref={r} className="reveal mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={<Phone className="h-5 w-5" />} title="Phone">
            <a href={`tel:${PHONE}`} className="block font-semibold hover:text-primary">{PHONE}</a>
            <a href={`tel:${PHONE2}`} className="block font-semibold hover:text-primary">{PHONE2}</a>
          </ContactCard>
          <ContactCard icon={<Mail className="h-5 w-5" />} title="Email">
            <a href={`mailto:${EMAIL}`} className="break-all font-semibold hover:text-primary">{EMAIL}</a>
          </ContactCard>
          <ContactCard icon={<MapPin className="h-5 w-5" />} title="Office">
            Sidco Nagar, Villivakkam<br />Chennai - 600049
          </ContactCard>
          <ContactCard icon={<MapPin className="h-5 w-5" />} title="Coverage">
            All over Tamil Nadu
          </ContactCard>
        </div>
        <div className="mt-8 grid gap-4 rounded-3xl bg-navy p-8 text-white shadow-glow sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-sm font-semibold text-red-300">Owner</div>
            <div className="text-2xl font-extrabold sm:text-3xl">S. Udhaya Kumar, BBA</div>
            <p className="mt-1 text-sm text-white/80">City to City &amp; Local Delivery Specialist</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="https://maps.google.com/?q=Sidco+Nagar+Villivakkam+Chennai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
              <Navigation className="h-4 w-4" /> Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-red-400" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <Logo size={44} variant="footer" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">Tamil Nadu's trusted logistics partner. Fast, safe, on-time delivery across all 38 districts.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-white/80 hover:text-primary">{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50">Hours</h4>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/80"><Calendar className="h-4 w-4 text-primary" /> Open 24×7, all days</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> {PHONE}</a></li>
            <li><a href={`tel:${PHONE2}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> {PHONE2}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="flex items-start gap-2 break-all hover:text-primary"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> {EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-5 rounded-2xl bg-primary/20 px-5 py-3 text-center text-xs text-red-300 border border-primary/30">
        ⚠ Rate does not include toll charges. Applicable toll charges will be added to the final fare.
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-6 text-xs text-white/50 sm:flex-row">
        <div>© 2026 Murugan Xpress. All Rights Reserved.</div>
        <div className="flex items-center gap-3">
          <span>Made with <span className="text-primary">♥</span> in India</span>
          <span className="text-white/20">|</span>
          <span>Developed by <a href="https://zyradigitals.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-white transition-colors">Zyra Digitals</a></span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */
function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-navy">
      <span className="h-1.5 w-1.5 rounded-full bg-navy" />{children}
    </span>
  );
}

function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: ReactNode; desc?: string }) {
  const r = useReveal();
  return (
    <div ref={r} className="reveal mx-auto max-w-3xl text-center">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full btn-primary transition-all duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}>
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full bg-gradient-to-r from-primary to-red-400 transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}
