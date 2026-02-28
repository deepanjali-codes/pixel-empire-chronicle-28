import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  slideNumber?: number;
}

const SectionTitle = ({ title, subtitle, slideNumber }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mb-12 text-center"
  >
    {slideNumber !== undefined && (
      <span className="font-pixel text-[10px] text-mc-diamond tracking-widest uppercase mb-3 block">
        Slide {slideNumber}
      </span>
    )}
    <h2 className="font-pixel text-lg md:text-2xl text-foreground mb-4 text-glow-green leading-relaxed">
      {title}
    </h2>
    {subtitle && (
      <p className="font-display text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
