import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useRef } from "react";
import { useInView } from "framer-motion";

const modeData = [
  { name: "Survival", value: 45, color: "hsl(122,39%,49%)" },
  { name: "Creative", value: 30, color: "hsl(197,71%,52%)" },
  { name: "Multiplayer", value: 25, color: "hsl(43,96%,56%)" },
];

const builds = [
  { title: "Hogwarts Castle", desc: "1:1 scale recreation", tag: "Epic" },
  { title: "Working CPU", desc: "Built with redstone", tag: "Insane" },
  { title: "Middle Earth", desc: "Full Tolkien world", tag: "Legendary" },
  { title: "Cyberpunk City", desc: "Neon voxel metropolis", tag: "Stunning" },
];

const CommunitySlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 grid-bg">
      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="Community & Creativity" subtitle="Players didn't just play — they built entire worlds" slideNumber={4} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <AnimatedCounter end={100000} suffix="+" label="Mods Created" />
          <AnimatedCounter end={500000} suffix="+" label="Custom Servers" />
          <AnimatedCounter end={1000000} suffix="+" label="Skins Uploaded" />
          <AnimatedCounter end={50000} suffix="+" label="Resource Packs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Donut chart */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-4">Play Mode Distribution</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={modeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {modeData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(220,18%,12%,0.9)",
                      border: "1px solid hsl(220,15%,22%)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
            <div className="flex justify-center gap-6 mt-2">
              {modeData.map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: m.color }} />
                  <span className="font-display text-xs text-muted-foreground">{m.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Builds gallery */}
          <GlassCard delay={0.4}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-4">Legendary Builds</h3>
            <div className="space-y-3">
              {builds.map((b, i) => (
                <GlassCard key={b.title} delay={0.5 + i * 0.1} className="!p-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm text-foreground font-semibold">{b.title}</p>
                    <p className="font-display text-xs text-muted-foreground">{b.desc}</p>
                  </div>
                  <span className="font-pixel text-[8px] text-mc-gold px-2 py-1 bg-mc-gold/10 rounded">
                    {b.tag}
                  </span>
                </GlassCard>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CommunitySlide;
