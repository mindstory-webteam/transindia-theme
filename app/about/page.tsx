import InsurerPartners from "@/components/about/InsurerPartners";
import OurMembers from "@/components/about/OurMembers";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import TransindiaFooter from "@/components/Transindiafooter";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <OurStory/>
    <WhyChooseUs/>
    <OurMembers/>
    <InsurerPartners/>
     <TransindiaFooter />
    </div>
  );
}