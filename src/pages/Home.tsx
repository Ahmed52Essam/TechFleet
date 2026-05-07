import { Hero } from '../components/sections/Hero';
import { Comparison } from '../components/sections/Comparison';
import { Catalog } from '../components/sections/Catalog';
import { Features } from '../components/sections/Features';
import { TrustSection } from '../components/sections/TrustSection';
import { Contact } from '../components/sections/Contact';
import { SITE_SECTIONS } from '../lib/navigation';
import { Section } from '../components/ui/Section';

const Home = () => {
  return (
    <>
      <Hero />
      
      <Section section={SITE_SECTIONS.BENEFITS}>
        <Comparison />
      </Section>

      <Section section={SITE_SECTIONS.HARDWARE} variant="glass">
        <Catalog />
      </Section>

      <Section section={SITE_SECTIONS.HOW_IT_WORKS} variant="alt" containerSize="wide">
        <Features />
      </Section>

      <Section variant="dark">
        <TrustSection />
      </Section>

      <Section section={SITE_SECTIONS.CONTACT} variant="dark">
        <Contact />
      </Section>
    </>
  );
};

export default Home;
