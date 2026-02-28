import SectionTitle from "../SectionTitle";
import GlassCard from "../GlassCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const socialData = [
  { year: "2012", mentions: 5 },
  { year: "2013", mentions: 12 },
  { year: "2014", mentions: 18 },
  { year: "2015", mentions: 15 },
  { year: "2016", mentions: 14 },
  { year: "2017", mentions: 16 },
  { year: "2018", mentions: 13 },
  { year: "2019", mentions: 35 },
  { year: "2020", mentions: 42 },
  { year: "2021", mentions: 38 },
  { year: "2022", mentions: 30 },
  { year: "2023", mentions: 45 },
  { year: "2024", mentions: 50 },
];

const memes = [
  { year: "2011", title: "Creeper 'Aww Man'" },
  { year: "2013", title: "Do you even mine?" },
  { year: "2019", title: "Revenge comeback" },
  { year: "2020", title: "Dream SMP era" },
  { year: "2023", title: "Minecraft movie hype" },
];

const CulturalSlide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="snap-section flex items-center justify-center py-20 px-6 relative">
      {/* Emerald glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, hsl(145,63%,42%,0.06), transparent 60%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-20" ref={ref}>
        <SectionTitle title="Cultural Phenomenon" subtitle="Minecraft became more than a game — it became a language" slideNumber={7} />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social mentions chart */}
          <GlassCard hover3D delay={0.2}>
            <h3 className="font-pixel text-xs text-mc-emerald mb-6">Social Media Mentions (Millions/month)</h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={socialData}>
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
                    dataKey="mentions"
                    stroke="hsl(145,63%,42%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(145,63%,42%)", r: 4 }}
                    activeDot={{ r: 7, fill: "hsl(122,39%,49%)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </GlassCard>

          {/* Meme timeline + merch */}
          <div className="space-y-6">
            <GlassCard delay={0.4}>
              <h3 className="font-pixel text-xs text-mc-emerald mb-4">Meme Timeline</h3>
              <div className="space-y-3">
                {memes.map((m, i) => (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="font-mono text-[10px] text-mc-emerald w-10 flex-shrink-0">{m.year}</span>
                    <div className="w-2 h-2 bg-mc-emerald rounded-full glow-emerald flex-shrink-0" />
                    <span className="font-display text-sm text-foreground">{m.title}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.6}>
              <h3 className="font-pixel text-xs text-mc-gold mb-3">Merch Empire</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { val: "$1B+", label: "Merch Revenue" },
                  { val: "50K+", label: "Products" },
                  { val: "200+", label: "Brand Collabs" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-pixel text-sm text-mc-gold">{s.val}</div>
                    <div className="font-display text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSlide;
