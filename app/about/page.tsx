import InsurerPartners from "@/components/about/InsurerPartners";
import OurMembers from "@/components/about/OurMembers";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Breadcrum from "@/components/Breadcrum";
import TransindiaFooter from "@/components/Transindiafooter";
import ConsultationCTA from "@/components/about/ConsultationCTA";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <Navbar />
    <Breadcrum
      crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
    <OurStory/>
    <WhyChooseUs/>
    <OurMembers/>
    <InsurerPartners/>
     <ConsultationCTA/>
     <TransindiaFooter />
    </div>
  );
}