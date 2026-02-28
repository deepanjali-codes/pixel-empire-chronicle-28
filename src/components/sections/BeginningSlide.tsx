import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const earlyData = [
  { year: "2009", players: 0.01 },
  { year: "2010", players: 0.5 },
  { year: "2011", players: 4 },
  { year: "2012", players: 15 },
  { year: "2013", players: 33 },
  { year: "2014", players: 54 },
  { year: "2015", players: 70 },
];

const milestones = [
  { year: "May 2009", event: "Cave Game prototype" },
  { year: "Jun 2009", event: "Classic version released" },
  { year: "Dec 2010", event: "Beta launch" },
  { year: "Nov 2011", event: "Full release 1.0" },
  { year: "2012", event: "Xbox 360 Edition" },
];

const BeginningSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="slide-1" className="snap-section flex items-center justify-center py-20 px-6 grid-bg">
      {/* Sunrise gradient overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(30,60%,15%,0.1), transparent 40%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="The Beginning" subtitle="From a one-man experiment to a cultural movement" slideNumber={1} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Timeline */}
          <GlassCard delay={0.1}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Timeline</h3>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 bg-primary rounded-sm glow-green flex-shrink-0" />
                  <div>
                    <span className="font-mono text-xs text-primary">{m.year}</span>
                    <p className="font-display text-sm text-foreground">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Chart */}
          <GlassCard delay={0.3} hover3D>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Early Adoption (Millions)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={earlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,18%)" />
                  <XAxis dataKey="year" stroke="hsl(220,10%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                  <YAxis stroke="hsl(220,10%,55%)" fontSize={11} fontFamily="JetBrains Mono" />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(220,18%,12%,0.9)",
                      border: "1px solid hsl(220,15%,22%)",
                      borderRadius: "8px",
                      fontFamily: "Space Grotesk",
                    }}
                    labelStyle={{ color: "hsl(120,10%,92%)" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="players"
                    stroke="hsl(122,39%,49%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(122,39%,49%)", r: 5 }}
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

export default BeginningSlide;
