import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { LeadCaptureSection } from "@/components/sections/lead-capture-section";
import { AboutCourseSection } from "@/components/sections/about-course-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { BonusSection } from "@/components/sections/bonus-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { GuaranteeSection } from "@/components/sections/guarantee-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  console.log("Rendering main landing page");
  
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemsSection />
      <LeadCaptureSection />
      <AboutCourseSection />
      <BenefitsSection/>
      <BonusSection/>
      <AuthoritySection/>
      <ComparisonSection />  
      <GuaranteeSection/>
      <FinalCtaSection />   
    </main>
  );
}
