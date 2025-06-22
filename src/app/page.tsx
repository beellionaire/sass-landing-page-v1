import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTIcker";
import { Pricing } from "@/sections/Pricing";
import ProductShowcase from "@/sections/ProductShowcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </div>
  );
}
