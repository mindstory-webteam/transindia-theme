import ClaimHero from "@/components/claims/ClaimHero";
import InsuranceClaimsSection from "@/components/claims/InsuranceClaimSection";
import Navbar from "@/components/Navbar";
import TransindiaFooter from "@/components/Transindiafooter";


export default function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Navbar/>
      <ClaimHero/>
      <InsuranceClaimsSection/>
      <TransindiaFooter/>
    </div>
  );
}