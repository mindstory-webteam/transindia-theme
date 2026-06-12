import ClaimHero from "@/components/claims/ClaimHero";
import Navbar from "@/components/Navbar";
import TransindiaFooter from "@/components/Transindiafooter";


export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Navbar/>
      <ClaimHero/>
      <TransindiaFooter/>
    </div>
  );
}