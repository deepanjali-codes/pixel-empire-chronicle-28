import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const adoptionData = [
  { year: "2016", schools: 2 },
  { year: "2017", schools: 15 },
  { year: "2018", schools: 50 },
  { year: "2019", schools: 100 },
  { year: "2020", schools: 200 },
  { year: "2021", schools: 350 },
  { year: "2022", schools: 500 },
  { year: "2023", schools: 700 },
  { year: "2024", schools: 1000 },
];

const subjects = [
  { name: "Mathematics", pct: 28 },
  { name: "History", pct: 22 },
  { name: "Computer Science", pct: 35 },
  { name: "Chemistry", pct: 15 },
];

const EducationSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative">
      {/* Chalkboard aesthetic overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom, hsl(145,63%,42%,0.04), transparent 60%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="Educational Impact" subtitle="Minecraft: Education Edition transformed classrooms worldwide" slideNumber={5} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Area chart */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-mc-emerald mb-6">Schools Using Minecraft (Thousands)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={adoptionData}>
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
                  <Area
                    type="monotone"
                    dataKey="schools"
                    stroke="hsl(145,63%,42%)"
                    fill="hsl(145,63%,42%)"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </GlassCard>

          {/* Subjects */}
          <GlassCard delay={0.4}>
            <h3 className="font-pixel text-xs text-mc-emerald mb-6">Subjects Using Minecraft</h3>
            <div className="space-y-5">
              {subjects.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-display text-sm text-foreground">{s.name}</span>
                    <span className="font-mono text-xs text-primary">{s.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, hsl(145,63%,42%), hsl(122,39%,49%))` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <GlassCard className="!p-4 mt-6" delay={0.8}>
              <p className="font-display text-xs text-muted-foreground italic">
                💡 Over 35 million students in 115 countries have used Minecraft: Education Edition
              </p>
            </GlassCard>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default EducationSlide;
