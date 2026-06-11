import Navbar from "@/components/Navbar";
import TransindiaFooter from "@/components/Transindiafooter";
import ConsultationCTA from "@/components/about/ConsultationCTA";
import ContactFormSection from "@/components/contact-us/ContactFormSection";
import FaqSection from "@/components/contact-us/FaqSection";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <Navbar />
    <ContactFormSection/>
    <FaqSection/>
     <ConsultationCTA/>
     <TransindiaFooter />
    </div>
  );
}