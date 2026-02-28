import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const viewsData = [
  { year: "2010", views: 2 },
  { year: "2011", views: 8 },
  { year: "2012", views: 25 },
  { year: "2013", views: 45 },
  { year: "2014", views: 60 },
  { year: "2015", views: 80 },
  { year: "2016", views: 100 },
  { year: "2017", views: 120 },
  { year: "2018", views: 110 },
  { year: "2019", views: 150 },
  { year: "2020", views: 200 },
  { year: "2021", views: 180 },
  { year: "2022", views: 170 },
  { year: "2023", views: 190 },
  { year: "2024", views: 210 },
];

const YouTubeEffectSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative redstone-bg">
      {/* Redstone glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(0,72%,51%,0.05), transparent 60%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="The YouTube Effect" subtitle="Minecraft didn't just grow — it exploded on YouTube" slideNumber={3} />

        <GlassCard hover3D className="mb-8">
          <h3 className="font-pixel text-xs text-mc-redstone mb-6 flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ▶
            </motion.span>
            YouTube Views Per Year (Billions)
          </h3>
          {isInView && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,18%)" />
                <XAxis dataKey="year" stroke="hsl(220,10%,55%)" fontSize={10} fontFamily="JetBrains Mono" />
                <YAxis stroke="hsl(220,10%,55%)" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220,18%,12%,0.9)",
                    border: "1px solid hsl(220,15%,22%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="views" fill="hsl(0,72%,51%)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </GlassCard>

        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "1T+", label: "Total YouTube views" },
            { stat: "#1", label: "Most viewed game on YT" },
            { stat: "2019", label: "Renaissance year" },
          ].map((item, i) => (
            <GlassCard key={item.label} delay={0.2 + i * 0.1}>
              <div className="text-center">
                <div className="font-pixel text-lg text-mc-redstone mb-1">{item.stat}</div>
                <div className="font-display text-xs text-muted-foreground">{item.label}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeEffectSlide;
