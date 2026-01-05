import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FocusAreas from "@/components/home/FocusAreas";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import SDGSection from "@/components/home/SDGSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FocusAreas />
      <ImpactMetrics />
      <SDGSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
