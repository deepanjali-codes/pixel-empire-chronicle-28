import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover3D?: boolean;
}

const GlassCard = ({ children, className = "", delay = 0, hover3D = false }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover3D ? {
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      } : { scale: 1.01 }}
      className={`glass-card p-6 ${className}`}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
