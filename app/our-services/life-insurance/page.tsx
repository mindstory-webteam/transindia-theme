import Navbar from "@/components/Navbar";
import LifeInsuranceFAQ from "@/components/Services/LifeInsuranceFAQ";
import LifeInsuranceHero from "@/components/Services/LifeInsuranceHero";
import LifeStagesSection from "@/components/Services/LifeStagesSection";
import WhyLifeInsurance from "@/components/Services/WhyLifeInsurance";
import WhyLifeInsuranceBenefits from "@/components/Services/WhyLifeInsuranceBenefits";
import TransindiaFooter from "@/components/Transindiafooter";
import ConsultationCTA from "@/components/about/ConsultationCTA";


export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <Navbar />
    <LifeInsuranceHero/>
    <WhyLifeInsurance/>
    <WhyLifeInsuranceBenefits/>
    <LifeStagesSection/>
    <LifeInsuranceFAQ/>
   
  
    
     <ConsultationCTA/>
     <TransindiaFooter />
    </div>
  );
}