import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-2 bg-mc-bedrock">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, hsl(122, 39%, 49%), hsl(145, 63%, 42%), hsl(197, 71%, 52%))",
          boxShadow: "0 0 12px hsl(122, 39%, 49%, 0.6)",
        }}
      />
      {/* XP label */}
      <motion.div
        className="absolute top-2 font-pixel text-[8px] text-primary"
        style={{ left: scrollYProgress as any, x: "-50%" }}
      >
      </motion.div>
    </div>
  );
};

export default ScrollProgress;
