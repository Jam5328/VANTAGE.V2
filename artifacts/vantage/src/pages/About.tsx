import { motion } from "framer-motion";

const sections = [
  {
    label: "Background",
    items: [
      "6 years direct property management experience.",
      "Extensive lettings agency operational exposure.",
      "Deep familiarity with DPS and Property Redress Scheme standards and requirements.",
      "Thousands of inventories, inspections, and check-in/out reports completed.",
      "Maintenance coordination and contractor management.",
      "Landlord-facing communication and dispute resolution.",
    ],
  },
  {
    label: "Strengths",
    items: [
      "Forensic attention to detail in documentation and condition assessment.",
      "Risk-aware approach — built around protecting asset and operator.",
      "Unemotional, factual reporting with no subjective language.",
      "Clear understanding of the end-to-end lifecycle of a tenancy.",
      "Experience in both agency and independent landlord operational contexts.",
    ],
  },
  {
    label: "Working Style",
    items: [
      "Autonomous execution with minimal oversight required.",
      "Systems-driven methodology — process before personality.",
      "Clear, concise communication at all stages.",
      "Punctual, prepared, and professional on-site presence.",
    ],
  },
  {
    label: "Motivation",
    items: [
      "Observed too many disputes lost due to poor or absent documentation.",
      "Recognised a gap between the documentation standard agencies need and what the market provides.",
      "Built VANTAGE to bring operational rigour — not creative flair — to property documentation.",
    ],
  },
];

export default function About() {
  return (
    <div className="w-full">

      {/* Header */}
      <section className="border-b border-white/10 py-24" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">The Operator</p>
            <h1 className="text-4xl md:text-6xl font-serif text-white">Operator Profile</h1>
            <p className="text-lg text-white/55 font-light max-w-2xl leading-relaxed">
              VANTAGE is founded on direct operational experience within the UK lettings and property management sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile sections */}
      <section className="py-16" style={{ backgroundColor: "#16163F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0">
            {sections.map(({ label, items }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-12 gap-8 py-16 border-b border-white/10 last:border-0"
              >
                <div className="md:col-span-3">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-white/40 pt-1">
                    {label}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <ul className="space-y-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-4 text-sm text-white/60 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-white">Ready to standardise your documentation?</h2>
          <p className="text-sm text-white/50 font-light">Contact us to discuss your portfolio requirements.</p>
          <a
            href="/#contact"
            className="inline-flex h-11 items-center justify-center gradient-bg text-white px-8 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
          >
            Make an Enquiry
          </a>
        </div>
      </section>
    </div>
  );
}
