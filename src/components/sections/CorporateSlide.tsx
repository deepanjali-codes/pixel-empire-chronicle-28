import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const revenueData = [
  { period: "Pre-Acq", revenue: 250 },
  { period: "2015", revenue: 400 },
  { period: "2016", revenue: 500 },
  { period: "2017", revenue: 600 },
  { period: "2018", revenue: 750 },
  { period: "2019", revenue: 900 },
  { period: "2020", revenue: 1200 },
  { period: "2021", revenue: 1500 },
  { period: "2022", revenue: 1700 },
  { period: "2023", revenue: 1900 },
  { period: "2024", revenue: 2100 },
];

const timelineEvents = [
  { date: "Sep 2014", event: "Microsoft announces $2.5B acquisition" },
  { date: "Nov 2014", event: "Deal officially closes" },
  { date: "2015", event: "Windows 10 Edition launches" },
  { date: "2017", event: "Bedrock Edition unifies platforms" },
  { date: "2020", event: "Revenue exceeds $1B annually" },
];

const CorporateSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, hsl(197,71%,52%,0.05), transparent 60%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="Corporate Power Move" subtitle="The most visionary gaming acquisition in history" slideNumber={6} />

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-pixel text-4xl md:text-6xl text-mc-diamond text-glow-diamond">$2.5B</span>
          <p className="font-display text-sm text-muted-foreground mt-2">Microsoft's acquisition price</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Revenue chart */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Revenue Growth ($M)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,18%)" />
                  <XAxis dataKey="period" stroke="hsl(220,10%,55%)" fontSize={9} fontFamily="JetBrains Mono" />
                  <YAxis stroke="hsl(220,10%,55%)" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(220,18%,12%,0.9)",
                      border: "1px solid hsl(220,15%,22%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="revenue" fill="hsl(197,71%,52%)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </GlassCard>

          {/* Timeline */}
          <GlassCard delay={0.4}>
            <h3 className="font-pixel text-xs text-mc-diamond mb-6">Acquisition Timeline</h3>
            <div className="space-y-4">
              {timelineEvents.map((e, i) => (
                <motion.div
                  key={e.date}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-3 h-3 mt-1 bg-mc-diamond rounded-sm glow-diamond flex-shrink-0" />
                  <div>
                    <span className="font-mono text-xs text-mc-diamond">{e.date}</span>
                    <p className="font-display text-sm text-foreground">{e.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <AnimatedCounter end={840} prefix="$" suffix="%" label="ROI Estimate" />
              <AnimatedCounter end={10} suffix="x" label="Revenue Growth" />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default CorporateSlide;
