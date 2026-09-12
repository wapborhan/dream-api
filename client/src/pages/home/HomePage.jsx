import FAQ from "../../components/FAQ";
import Documentation from "../../components/Documentation";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import ApiSection from "../../components/ApiSection";
import Endpoints from "../../components/Endpoints";
import CTA from "../../components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        {/* ================= HERO ================= */}
        <Hero />

        {/* ================= FEATURES ================= */}
        <Features />

        {/* ================= API SECTION ================= */}
        <ApiSection />

        {/* ================= ENDPOINTS ================= */}
        <Endpoints />

        {/* ================= DOCUMENTATION ================= */}
        <Documentation />

        {/* ================= FAQ ================= */}
        <FAQ />

        {/* ================= FINAL CTA ================= */}
        <CTA />
      </main>
    </div>
  );
}

export default App;
