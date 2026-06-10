import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <OurStory/>
    <WhyChooseUs/>
    </div>
  );
}