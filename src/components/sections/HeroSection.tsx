import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "How One Sandbox Game Conquered the World";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const el = document.getElementById("slide-1");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="snap-section flex flex-col items-center justify-center relative grid-bg">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(122,39%,49%,0.08), transparent 70%)" }} />
      </div>

      {/* 3D Rotating Cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-10 relative"
      >
        <div className="w-24 h-24 relative animate-rotate-cube" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 border-2 border-primary rounded-lg glow-green"
            style={{ transform: "translateZ(48px)", background: "hsl(122,39%,49%,0.1)" }} />
          <div className="absolute inset-0 border-2 border-primary rounded-lg"
            style={{ transform: "rotateY(90deg) translateZ(48px)", background: "hsl(122,39%,49%,0.05)" }} />
          <div className="absolute inset-0 border-2 border-primary rounded-lg"
            style={{ transform: "rotateX(90deg) translateZ(48px)", background: "hsl(122,39%,49%,0.05)" }} />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-pixel text-2xl md:text-4xl lg:text-5xl text-primary text-glow-green mb-6 text-center px-4"
      >
        Minecraft Revolution
      </motion.h1>

      {/* Typing subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mb-10 h-8"
      >
        <span className="font-display text-lg md:text-xl text-muted-foreground">
          {typedText}
          <span className="animate-blink-caret border-r-2 border-primary ml-1">&nbsp;</span>
        </span>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(122,39%,49%,0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleScroll}
        className="font-pixel text-xs px-8 py-4 bg-primary text-primary-foreground rounded-lg glow-green transition-all"
      >
        Start Exploring
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-pixel text-[8px] text-muted-foreground">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>

      {/* Parallax terrain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg viewBox="0 0 1440 128" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,128 L0,80 L40,80 L40,60 L80,60 L80,70 L120,70 L120,50 L160,50 L160,60 L200,60 L200,40 L240,40 L240,55 L280,55 L280,45 L320,45 L320,65 L360,65 L360,55 L400,55 L400,35 L440,35 L440,50 L480,50 L480,40 L520,40 L520,60 L560,60 L560,50 L600,50 L600,30 L640,30 L640,45 L680,45 L680,55 L720,55 L720,45 L760,45 L760,35 L800,35 L800,50 L840,50 L840,40 L880,40 L880,60 L920,60 L920,50 L960,50 L960,70 L1000,70 L1000,55 L1040,55 L1040,45 L1080,45 L1080,60 L1120,60 L1120,50 L1160,50 L1160,40 L1200,40 L1200,55 L1240,55 L1240,65 L1280,65 L1280,50 L1320,50 L1320,60 L1360,60 L1360,75 L1400,75 L1400,60 L1440,60 L1440,128 Z"
            fill="hsl(122,39%,49%)"
            opacity="0.15"
          />
          <path
            d="M0,128 L0,95 L60,95 L60,85 L120,85 L120,90 L180,90 L180,80 L240,80 L240,88 L300,88 L300,78 L360,78 L360,92 L420,92 L420,82 L480,82 L480,90 L540,90 L540,85 L600,85 L600,75 L660,75 L660,88 L720,88 L720,80 L780,80 L780,90 L840,90 L840,82 L900,82 L900,92 L960,92 L960,85 L1020,85 L1020,78 L1080,78 L1080,88 L1140,88 L1140,82 L1200,82 L1200,90 L1260,90 L1260,80 L1320,80 L1320,92 L1380,92 L1380,85 L1440,85 L1440,128 Z"
            fill="hsl(220,20%,8%)"
            opacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
