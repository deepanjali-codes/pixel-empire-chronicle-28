import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const platformShare = [
  { name: "Mobile", value: 38, color: "hsl(122,39%,49%)" },
  { name: "PC", value: 25, color: "hsl(197,71%,52%)" },
  { name: "Console", value: 27, color: "hsl(43,96%,56%)" },
  { name: "Other", value: 10, color: "hsl(145,63%,42%)" },
];

const activePlayersData = [
  { year: "2016", players: 40 },
  { year: "2017", players: 55 },
  { year: "2018", players: 75 },
  { year: "2019", players: 91 },
  { year: "2020", players: 126 },
  { year: "2021", players: 131 },
  { year: "2022", players: 130 },
  { year: "2023", players: 140 },
  { year: "2024", players: 150 },
  { year: "2025", players: 166 },
];

const NumbersTodaySlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative grid-bg">
      {/* Dramatic lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, hsl(122,39%,49%,0.08), transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="The Empire Now" subtitle="Minecraft's dominance by the numbers — 2025" slideNumber={8} />

        {/* Big KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter end={300} suffix="M+" label="Lifetime Sales" />
          </motion.div>
          <AnimatedCounter end={166} suffix="M" label="Monthly Players" />
          <AnimatedCounter end={2.5} prefix="$" suffix="B" label="Acquisition" decimals={1} />
          <AnimatedCounter end={15} suffix="+" label="Years Running" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Platform pie */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-primary mb-4">Platform Share</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={platformShare}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={50}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {platformShare.map((entry, i) => (
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
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {platformShare.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: p.color }} />
                  <span className="font-display text-xs text-muted-foreground">{p.name} {p.value}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Active players line */}
          <GlassCard hover3D delay={0.4}>
            <h3 className="font-pixel text-xs text-primary mb-4">Monthly Active Players (Millions)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={activePlayersData}>
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
                  <Line
                    type="monotone"
                    dataKey="players"
                    stroke="hsl(122,39%,49%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(122,39%,49%)", r: 4 }}
                    activeDot={{ r: 8, fill: "hsl(145,63%,42%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default NumbersTodaySlide;
