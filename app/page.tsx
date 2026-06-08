import Banner from "@/components/Banner";
import CtaSection from "@/components/Ctasection";
import ExploreToolsSection from "@/components/ExploreTools";
import InsurancePlansSection from "@/components/InsurancePlansSection";
import InsuranceSection from "@/components/InsuranceSection";
import InsuranceSections from "@/components/InsuranceSections";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import TransindiaFooter from "@/components/Transindiafooter";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <InsuranceSection/>
      <InsurancePlansSection/>
      <ExploreToolsSection/>
      <InsuranceSections/>
      <TestimonialsSection/>
      <CtaSection/>
      
      <TransindiaFooter/>

    </div>
  );
}
