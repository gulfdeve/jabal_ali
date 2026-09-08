import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Residences } from "@/components/Residences";
import { Amenities } from "@/components/Amenities";
import { Lifestyle } from "@/components/Lifestyle";
import { Gallery } from "@/components/Gallery";
import { Investment } from "@/components/Investment";
import { Location } from "@/components/Location";
import { RegisterSection } from "@/components/RegisterSection";
import { RegisterPopup } from "@/components/RegisterPopup";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RegisterPopup />
      <Header />
      <main>
        <Hero />
        <Overview />
        <Residences />
        <Amenities />
        <Lifestyle />
        <Gallery />
        <Investment />
        <Location />
        <RegisterSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
