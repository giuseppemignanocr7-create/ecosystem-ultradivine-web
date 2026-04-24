import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CoreMindFlagship } from '@/components/sections/CoreMindFlagship';
import { SuiteGrid } from '@/components/sections/SuiteGrid';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { DemoPreview } from '@/components/sections/DemoPreview';
import { IntegrationLogos } from '@/components/sections/IntegrationLogos';
import { ManifestoQuote } from '@/components/sections/ManifestoQuote';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { FAQ } from '@/components/sections/FAQ';
import { CTABand } from '@/components/sections/CTABand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoreMindFlagship />
      <SuiteGrid />
      <FeatureSplit />
      <DemoPreview />
      <IntegrationLogos />
      <ManifestoQuote />
      <PricingTeaser />
      <FAQ />
      <CTABand />
    </>
  );
}
