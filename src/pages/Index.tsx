import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import BeginningSlide from "@/components/sections/BeginningSlide";
import GlobalExplosionSlide from "@/components/sections/GlobalExplosionSlide";
import YouTubeEffectSlide from "@/components/sections/YouTubeEffectSlide";
import CommunitySlide from "@/components/sections/CommunitySlide";
import EducationSlide from "@/components/sections/EducationSlide";
import CorporateSlide from "@/components/sections/CorporateSlide";
import CulturalSlide from "@/components/sections/CulturalSlide";
import NumbersTodaySlide from "@/components/sections/NumbersTodaySlide";
import OutroSection from "@/components/sections/OutroSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {!loading && (
        <>
          <ParticleField />
          <ScrollProgress />
          <main className="snap-container">
            <HeroSection />
            <BeginningSlide />
            <GlobalExplosionSlide />
            <YouTubeEffectSlide />
            <CommunitySlide />
            <EducationSlide />
            <CorporateSlide />
            <CulturalSlide />
            <NumbersTodaySlide />
            <OutroSection />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
