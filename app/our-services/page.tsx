import Navbar from "@/components/Navbar";
import TransindiaFooter from "@/components/Transindiafooter";
import ConsultationCTA from "@/components/about/ConsultationCTA";
import ContactFormSection from "@/components/contact-us/ContactFormSection";
import FaqSection from "@/components/contact-us/FaqSection";
import ContactHero from "@/components/contact-us/ContactHero";
import ServicesHero from "@/components/Services/ServicesHero";
import PersonalInsuranceServices from "@/components/Services/PersonalInsuranceServices";
import CorporateRiskManagement from "@/components/Services/Corporateriskmanagement";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <Navbar />
   <ServicesHero/>
   <PersonalInsuranceServices/>
   <CorporateRiskManagement/>
  
    
     <ConsultationCTA/>
     <TransindiaFooter />
    </div>
  );
}