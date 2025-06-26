
import HeroSection from "@/components/sales-faq/HeroSection";
import BenefitsGrid from "@/components/sales-faq/BenefitsGrid";
import FeaturesSection from "@/components/sales-faq/FeaturesSection";
import CustomerSuccessStories from "@/components/sales-faq/CustomerSuccessStories";
import BusinessUseCases from "@/components/sales-faq/BusinessUseCases";
import WorkersComparison from "@/components/sales-faq/WorkersComparison";
import DecisionTree from "@/components/sales-faq/DecisionTree";
import CompetitiveLandscape from "@/components/sales-faq/CompetitiveLandscape";
import FAQSection from "@/components/sales-faq/FAQSection";
import CallToAction from "@/components/sales-faq/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <BenefitsGrid />
        <FeaturesSection />
        <CustomerSuccessStories />
        <BusinessUseCases />
        <WorkersComparison />
        <DecisionTree />
        <CompetitiveLandscape />
        <FAQSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;
