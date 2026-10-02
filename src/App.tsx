// Server Component : seules les parties interactives (effets de scroll, navbar,
// thème, cartes projets, titre animé) sont envoyées au navigateur en JavaScript
import { Divider, FadeInView, ScrollProgressBar, Section } from "./components/ScrollEffects";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import TechStack  from "./components/Techstack";
import Work       from "./components/Work";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-400 light:bg-slate-50 light:text-slate-600 antialiased">
      <ScrollProgressBar />
      <Navbar />

      <main>
        {/* Hero — no scroll animation, it's above the fold */}
        <Hero />

        <Divider />
        <Section><About /></Section>

        <Divider />
        <Section><TechStack /></Section>

        <Divider />
        <Section><Work /></Section>

        <Divider />
        <Section><Experience /></Section>

        <Divider />
        <Section><Contact /></Section>
      </main>

      <FadeInView>
        <Footer />
      </FadeInView>
    </div>
  );
}
