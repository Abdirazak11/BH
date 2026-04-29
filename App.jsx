import { useState } from "react";

// ── TRANSLATIONS ─────────────────────────────────────────────
const t = {
  en: {
    nav: { whatsapp: "WhatsApp Us" },
    hero: {
      badge: "🇸🇴 Borama, Somaliland",
      title: "Find Property in Borama Easily",
      subtitle: "Buy, sell, or rent houses and land — all in one place.",
      locationPlaceholder: "Location (e.g. City Center)",
      pricePlaceholder: "Max price (e.g. $50,000)",
      searchBtn: "Search",
      searchingBtn: "Searching...",
      postBtn: "Post Property",
      stat1Label: "Listings", stat2Label: "Sellers",
      stat3Label: "Free", stat3Sub: "To Browse",
    },
    listings: {
      eyebrow: "Fresh picks", title: "Featured Listings", viewAll: "View all →",
      beds: "beds", baths: "baths", contactBtn: "Contact on WhatsApp",
      waMsg: "Hi, I'm interested in your property", at: "at",
    },
    propertyTypes: {
      "House for Sale": "House for Sale", "Land for Sale": "Land for Sale",
      "Apartment for Rent": "Apartment for Rent", "Shop for Rent": "Shop for Rent",
    },
    categories: {
      eyebrow: "Browse by type", title: "Property Categories",
      items: [
        { label: "Houses", count: "124 listings" }, { label: "Land", count: "89 listings" },
        { label: "Apartments", count: "56 listings" }, { label: "Shops", count: "37 listings" },
      ],
    },
    trust: {
      eyebrow: "Why choose us", title: "Built on Trust",
      items: [
        { title: "Verified Listings", desc: "Every property is manually reviewed before going live on the platform." },
        { title: "Direct Contact", desc: "Reach sellers and landlords directly — no forms, no waiting." },
        { title: "No Middleman", desc: "Deal directly with property owners and save on unnecessary fees." },
      ],
    },
    cta: {
      eyebrow: "For sellers & landlords", title: "Are you selling property?",
      subtitle: "List your property for free and connect with thousands of buyers in Borama.",
      btn: "Post Your Property", note: "100% free · No commission · Instant listing",
      waMsg: "Hi, I'd like to post my property on BoramaHomes.",
    },
    footer: {
      tagline: "The easiest way to buy, sell, and rent property in Borama, Somaliland.",
      contactTitle: "Contact Us", address: "Borama, Awdal, Somaliland",
      email: "info@boramahomes.so",
      copyright: "BoramaHomes. All rights reserved. Made with ❤️ in Somaliland.",
    },
  },
  so: {
    nav: { whatsapp: "WhatsApp Nagala Soo Xiriir" },
    hero: {
      badge: "🇸🇴 Boorama, Somaliland",
      title: "Ka Hel Guryaha Boorama Si Fudud",
      subtitle: "Iibso, iib, ama kiro guryaha iyo dhulka — meel walba.",
      locationPlaceholder: "Goob (tusaale. Xaafadda Dhexe)",
      pricePlaceholder: "Qiimaha ugu badan (tusaale. $50,000)",
      searchBtn: "Raadi", searchingBtn: "La Raadiyaa...",
      postBtn: "Geli Hanti",
      stat1Label: "Liis", stat2Label: "Iibiyeyaasha",
      stat3Label: "Bilaash", stat3Sub: "Eeg",
    },
    listings: {
      eyebrow: "Cusub", title: "Hantida La Soo Xushay", viewAll: "Dhammaan →",
      beds: "qol", baths: "musqul", contactBtn: "WhatsApp ku Xiriir",
      waMsg: "Assalamu Calaykum, waxaan xiisaynayaa hantidaada", at: "ee",
    },
    propertyTypes: {
      "House for Sale": "Guri Iibka", "Land for Sale": "Dhul Iibka",
      "Apartment for Rent": "Apartamaan Kiro", "Shop for Rent": "Dukaan Kiro",
    },
    categories: {
      eyebrow: "Nooca ka eeg", title: "Noocyada Hantida",
      items: [
        { label: "Guryaha", count: "124 liis" }, { label: "Dhulka", count: "89 liis" },
        { label: "Apartamaanada", count: "56 liis" }, { label: "Dukaammada", count: "37 liis" },
      ],
    },
    trust: {
      eyebrow: "Maxaa naga dooranaya", title: "Aamin ayaan ku dhisnay",
      items: [
        { title: "Liisaska La Xaqiijiyay", desc: "Hanti kasta si gacanta ah ayaa loo hubiyaa kahor inta aan la daabicin." },
        { title: "Xiriir Toos ah", desc: "Si toos ah ula xiriir iibiyeyaasha — foom ma jiro, sugitaan ma jiro." },
        { title: "Dhexdhexaad Ma Jiro", desc: "Si toos ah ula macaamilow mulkiilaha hantida oo badbaadi lacagta kharashka." },
      ],
    },
    cta: {
      eyebrow: "Iibiyeyaasha & mulkiilayaasha", title: "Ma iibinaysaa hanti?",
      subtitle: "Hantidaada bilaash ku liistee oo la xiriir kumanaan iibsade oo Boorama ah.",
      btn: "Geli Hantidaada", note: "Bilaash %100 · Komishan la'aan · Isla markiiba",
      waMsg: "Assalamu Calaykum, waxaan rabaa inaan hantidayda galo BoramaHomes.",
    },
    footer: {
      tagline: "Hab ugu fudud ee lagu iibsado, iibo, ama kiro hanti Boorama.",
      contactTitle: "Nagala Soo Xiriir", address: "Boorama, Awdal, Somaliland",
      email: "info@boramahomes.so",
      copyright: "BoramaHomes. Dhammaan xuquuqda way dhowrantahay. ❤️ Somaliland.",
    },
  },
};

// ── DATA ──────────────────────────────────────────────────────
const properties = [
  { id: 1, image: "https://placehold.co/600x400/fde8d8/b45309?text=Villa+Borama",  price: "$45,000", typeKey: "House for Sale",     location: "Borama City Center",  beds: 4, baths: 2, area: "220 m²", phone: "252634000001" },
  { id: 2, image: "https://placehold.co/600x400/d1fae5/065f46?text=Land+Plot",      price: "$12,000", typeKey: "Land for Sale",       location: "Borama East District", beds: null, baths: null, area: "500 m²", phone: "252634000002" },
  { id: 3, image: "https://placehold.co/600x400/dbeafe/1e40af?text=Apartment",      price: "$800/mo", typeKey: "Apartment for Rent",  location: "Borama Market Area",  beds: 2, baths: 1, area: "90 m²",  phone: "252634000003" },
  { id: 4, image: "https://placehold.co/600x400/fef9c3/92400e?text=Shop+Space",     price: "$400/mo", typeKey: "Shop for Rent",       location: "Main Street, Borama",  beds: null, baths: null, area: "60 m²",  phone: "252634000004" },
];

const categoryIcons = ["🏠", "🌿", "🏢", "🏪"];
const featureIcons  = ["✅", "📞", "🤝"];

// badge colors per property type
const typeBadgeColors = {
  "House for Sale":    "bg-amber-100 text-amber-800",
  "Land for Sale":     "bg-green-100 text-green-800",
  "Apartment for Rent":"bg-blue-100 text-blue-800",
  "Shop for Rent":     "bg-yellow-100 text-yellow-800",
};

const WaIcon = ({ cls }) => (
  <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ── APP ───────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang]           = useState("en");
  const [location, setLocation]   = useState("");
  const [price, setPrice]         = useState("");
  const [searchDone, setSearchDone] = useState(false);

  const tx = t[lang];

  const handleSearch = () => {
    setSearchDone(true);
    setTimeout(() => setSearchDone(false), 2000);
  };

  return (
    // Warm off-white base — easier on eyes than pure white
    <div className="min-h-screen bg-stone-50 text-stone-800" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── NAV ───────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏡</span>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-orange-600">Borama</span>
              <span className="text-stone-700">Homes</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "so" : "en")}
              className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border-2 border-orange-300 text-orange-700 bg-orange-50 hover:bg-orange-100 transition-colors"
            >
              <span>{lang === "en" ? "🇸🇴" : "🇬🇧"}</span>
              <span>{lang === "en" ? "Somali" : "English"}</span>
            </button>
            <a
              href="https://wa.me/252634000000"
              target="_blank" rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <span>📱</span> {tx.nav.whatsapp}
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      {/* Warm amber-to-orange gradient — softer than pure orange */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #c2410c 0%, #ea580c 45%, #f59e0b 100%)" }}>
        {/* soft overlays */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%)" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 10% 90%, #fff 0%, transparent 50%)" }} />

        <div className="relative max-w-6xl mx-auto px-5 py-16 sm:py-24 text-center">
          <span className="inline-block bg-white/20 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            {tx.hero.badge}
          </span>
          {/* Large, high-contrast heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-sm">
            {tx.hero.title}
          </h1>
          {/* Subtitle — cream color, easier to read on orange */}
          <p className="text-amber-100 text-base sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            {tx.hero.subtitle}
          </p>

          {/* Search card — pure white for max contrast */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-lg">📍</span>
                <input
                  type="text"
                  placeholder={tx.hero.locationPlaceholder}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-3 py-3.5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors"
                />
              </div>
              <div className="flex-1 relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-lg">💰</span>
                <input
                  type="text"
                  placeholder={tx.hero.pricePlaceholder}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full pl-10 pr-3 py-3.5 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <button
                onClick={handleSearch}
                className="flex-1 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold py-3.5 rounded-2xl transition-all text-sm shadow-md flex items-center justify-center gap-2"
              >
                🔍 {searchDone ? tx.hero.searchingBtn : tx.hero.searchBtn}
              </button>
              <a
                href="#post"
                className="flex-1 text-center bg-stone-800 hover:bg-stone-900 active:scale-[0.98] text-white font-bold py-3.5 rounded-2xl transition-all text-sm flex items-center justify-center gap-2"
              >
                ＋ {tx.hero.postBtn}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 sm:gap-12 mt-10 text-sm text-amber-100">
            <div className="text-center"><p className="font-extrabold text-white text-2xl">300+</p><p>{tx.hero.stat1Label}</p></div>
            <div className="w-px bg-white/20" />
            <div className="text-center"><p className="font-extrabold text-white text-2xl">50+</p><p>{tx.hero.stat2Label}</p></div>
            <div className="w-px bg-white/20" />
            <div className="text-center"><p className="font-extrabold text-white text-2xl">{tx.hero.stat3Label}</p><p>{tx.hero.stat3Sub}</p></div>
          </div>
        </div>
      </section>

      {/* ── FEATURED LISTINGS ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-1">{tx.listings.eyebrow}</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-800">{tx.listings.title}</h2>
          </div>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold hidden sm:block">
            {tx.listings.viewAll}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {properties.map((p) => {
            const typeLabel = tx.propertyTypes[p.typeKey];
            const badgeColor = typeBadgeColors[p.typeKey];
            return (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="relative overflow-hidden h-44 bg-stone-100 flex-shrink-0">
                  <img src={p.image} alt={typeLabel} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Soft readable badge */}
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg ${badgeColor}`}>
                    {typeLabel}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  {/* Price — large and prominent */}
                  <p className="text-2xl font-extrabold text-orange-600 mb-1">{p.price}</p>
                  <p className="text-sm text-stone-500 flex items-center gap-1 mb-3">
                    <span>📍</span> <span className="leading-snug">{p.location}</span>
                  </p>
                  {/* Property details */}
                  {(p.beds || p.baths) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.beds  && <span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-lg">🛏 {p.beds} {tx.listings.beds}</span>}
                      {p.baths && <span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-lg">🚿 {p.baths} {tx.listings.baths}</span>}
                    </div>
                  )}
                  <span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-lg inline-block mb-4 w-fit">📐 {p.area}</span>
                  <div className="mt-auto">
                    <a
                      href={`https://wa.me/${p.phone}?text=${encodeURIComponent(`${tx.listings.waMsg}: ${typeLabel} ${tx.listings.at} ${p.location}`)}`}
                      target="_blank" rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white text-sm font-bold py-3 rounded-xl transition-all shadow-sm"
                    >
                      <WaIcon cls="w-4 h-4 flex-shrink-0" />
                      {tx.listings.contactBtn}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────── */}
      {/* Light warm section break */}
      <section className="bg-amber-50 border-y border-amber-100 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-1">{tx.categories.eyebrow}</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-800">{tx.categories.title}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tx.categories.items.map((cat, i) => (
              <button
                key={cat.label}
                className="bg-white hover:bg-orange-500 group rounded-2xl p-7 text-center border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 active:scale-[0.97]"
              >
                <div className="text-4xl mb-3">{categoryIcons[i]}</div>
                <p className="font-bold text-stone-700 group-hover:text-white transition-colors text-base">{cat.label}</p>
                <p className="text-xs text-stone-400 group-hover:text-orange-100 mt-1 transition-colors">{cat.count}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-1">{tx.trust.eyebrow}</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-800">{tx.trust.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tx.trust.items.map((f, i) => (
            <div key={f.title} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-5">{featureIcons[i]}</div>
              {/* Strong heading, comfortable body text */}
              <h3 className="font-bold text-lg text-stone-800 mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      {/* Deep warm brown instead of harsh dark gray */}
      <section id="post" className="py-20" style={{ background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)" }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-4">{tx.cta.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">{tx.cta.title}</h2>
          {/* Comfortable muted body text — stone-300 reads better on dark */}
          <p className="text-stone-300 mb-10 text-base leading-relaxed max-w-md mx-auto">{tx.cta.subtitle}</p>
          <a
            href={`https://wa.me/252634000000?text=${encodeURIComponent(tx.cta.waMsg)}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 active:scale-[0.98] text-white font-bold text-base px-8 py-4 rounded-2xl transition-all shadow-lg"
          >
            <WaIcon cls="w-5 h-5 flex-shrink-0" />
            {tx.cta.btn}
          </a>
          {/* Very muted note */}
          <p className="text-stone-500 text-xs mt-5">{tx.cta.note}</p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row justify-between gap-8 pb-8 border-b border-stone-700">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏡</span>
                <span className="font-bold text-xl text-white tracking-tight">
                  <span className="text-orange-400">Borama</span>Homes
                </span>
              </div>
              {/* Footer body — stone-400 is comfortably readable on stone-900 */}
              <p className="text-sm text-stone-400 leading-relaxed">{tx.footer.tagline}</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-white font-semibold text-base mb-1">{tx.footer.contactTitle}</p>
              <p className="flex items-center gap-2 text-stone-400"><span>📍</span> {tx.footer.address}</p>
              <a
                href="https://wa.me/252634000000"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold"
              >
                <WaIcon cls="w-4 h-4" /> +252 63 400 0000
              </a>
              <p className="flex items-center gap-2 text-stone-400"><span>✉️</span> {tx.footer.email}</p>
            </div>
          </div>
          <p className="text-center text-xs text-stone-600 mt-6">
            © {new Date().getFullYear()} {tx.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
