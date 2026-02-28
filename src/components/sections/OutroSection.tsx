import { motion } from "framer-motion";

const OutroSection = () => {
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="snap-section flex flex-col items-center justify-center relative px-6">
      {/* Sunset gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(30,40%,10%,0.3), transparent 40%), radial-gradient(ellipse at center bottom, hsl(122,39%,49%,0.06), transparent 60%)"
        }} />

      {/* Final glowing cube */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-12"
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
            boxShadow: [
              "0 0 30px hsl(122,39%,49%,0.3)",
              "0 0 60px hsl(122,39%,49%,0.6)",
              "0 0 30px hsl(122,39%,49%,0.3)",
            ],
          }}
          transition={{ rotateY: { duration: 10, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 3, repeat: Infinity } }}
          className="w-20 h-20 border-2 border-primary rounded-lg bg-primary/10"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-pixel text-sm md:text-lg text-foreground text-center mb-4 leading-relaxed"
      >
        The World Is Still Generating…
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-base md:text-lg text-muted-foreground text-center max-w-xl mb-12 leading-relaxed"
      >
        Minecraft is not just a game. It's a revolution built one block at a time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(122,39%,49%,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReplay}
          className="font-pixel text-[10px] px-6 py-3 bg-primary text-primary-foreground rounded-lg glow-green"
        >
          Replay Experience
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-pixel text-[10px] px-6 py-3 glass-card text-foreground rounded-lg"
        >
          View Code
        </motion.button>
      </motion.div>

      {/* Credits */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 font-display text-xs text-muted-foreground"
      >
        Built with blocks of passion ⛏️
      </motion.p>
    </section>
  );
};

export default OutroSection;
