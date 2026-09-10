import { HomeScrollHero } from "@/components/ui/HomeScrollHero";
import { AboutBanner } from "@/components/sections/AboutBanner";
import { ServicesBanner } from "@/components/sections/ServicesBanner";
import { ScaleStats } from "@/components/sections/ScaleStats";
import { SupplyAssurance } from "@/components/sections/SupplyAssurance";
import { ProductFamily } from "@/components/sections/ProductFamily";
import { ConversionPanel } from "@/components/sections/ConversionPanel";

export default function Home() {
  return (
    <>
      <HomeScrollHero />
      <ScaleStats />
      <SupplyAssurance />
      <ProductFamily />
      <ServicesBanner />
      <AboutBanner />
      <ConversionPanel />
    </>
  );
}