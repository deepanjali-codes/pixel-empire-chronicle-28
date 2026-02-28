import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const platformData = [
  { platform: "Java", sales: 40 },
  { platform: "Bedrock", sales: 120 },
  { platform: "Console", sales: 80 },
  { platform: "Mobile", sales: 60 },
];

const achievements = [
  { icon: "🌍", label: "Available in 150+ countries" },
  { icon: "🎮", label: "9 major platforms" },
  { icon: "🗣️", label: "30+ languages" },
  { icon: "🏆", label: "Best-selling game ever" },
];

const GlobalExplosionSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="From Indie to Global Icon" subtitle="A game that transcended every border and platform" slideNumber={2} />

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <AnimatedCounter end={300} suffix="M+" label="Copies Sold" />
          <AnimatedCounter end={150} suffix="+" label="Countries" />
          <AnimatedCounter end={9} label="Platforms" />
          <AnimatedCounter end={30} suffix="+" label="Languages" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Platform chart */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Sales by Platform (Millions)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,18%)" />
                  <XAxis dataKey="platform" stroke="hsl(220,10%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                  <YAxis stroke="hsl(220,10%,55%)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(220,18%,12%,0.9)",
                      border: "1px solid hsl(220,15%,22%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="sales" fill="hsl(122,39%,49%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </GlassCard>

          {/* Achievement badges */}
          <GlassCard delay={0.4}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Achievements Unlocked</h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card p-4 text-center glow-green"
                >
                  <div className="text-3xl mb-2">{a.icon}</div>
                  <p className="font-display text-xs text-foreground">{a.label}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default GlobalExplosionSlide;
