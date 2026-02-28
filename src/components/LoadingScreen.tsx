import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tips = [
  "Breaking blocks...",
  "Generating terrain...",
  "Planting trees...",
  "Spawning creepers...",
  "Loading chunks...",
  "Building the revolution...",
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setTipIndex((i) => (i + 1) % tips.length);
    }, 1200);
    return () => clearInterval(tipInterval);
  }, []);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-mc-bedrock"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-12 text-center"
          >
            <h1 className="font-pixel text-xl text-primary mb-2">MINECRAFT</h1>
            <p className="font-pixel text-[10px] text-muted-foreground">REVOLUTION</p>
          </motion.div>

          {/* Minecraft-style loading bar */}
          <div className="w-80 mb-6">
            <div className="mc-loading-bar">
              <motion.div
                className="mc-loading-fill"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          <p className="font-pixel text-[8px] text-muted-foreground">
            {tips[tipIndex]}
          </p>

          <p className="font-mono text-xs text-muted-foreground mt-4">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
