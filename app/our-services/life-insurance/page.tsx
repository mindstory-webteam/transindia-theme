import Navbar from "@/components/Navbar";
import LifeInsuranceHero from "@/components/Services/LifeInsuranceHero";
import TransindiaFooter from "@/components/Transindiafooter";
import ConsultationCTA from "@/components/about/ConsultationCTA";


export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <Navbar />
    <LifeInsuranceHero/>
   
  
    
     <ConsultationCTA/>
     <TransindiaFooter />
    </div>
  );
}