import { motion } from "framer-motion";

export default function Pricing() {
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
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">Investment</p>
            <h1 className="text-4xl md:text-6xl font-serif text-white">Pricing</h1>
            <p className="text-lg text-white/55 font-light max-w-2xl leading-relaxed">
              Indicative market positioning for VANTAGE services across the Bristol and BS36 operational area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing content */}
      <section className="py-16" style={{ backgroundColor: "#16163F" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 border-b border-white/10 grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-xs font-medium uppercase tracking-widest text-white/40">Structure</h2>
              </div>
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-xl font-serif text-white">How pricing is determined</h3>
                <p className="text-sm text-white/55 font-light leading-relaxed">
                  Pricing is determined by two primary variables: the physical size of the property and portfolio volume commitments. We do not publish fixed rate cards as requirements scale non-linearly across property types and service combinations.
                </p>
                <p className="text-sm text-white/55 font-light leading-relaxed">
                  All enquiries receive a tailored proposal based on your specific operational requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 border-b border-white/10 grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-xs font-medium uppercase tracking-widest text-white/40">Market Position</h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                <h3 className="text-xl font-serif text-white">Benchmarked against the Bristol market</h3>
                <div className="space-y-5">
                  {[
                    {
                      label: "Inventories & Inspections",
                      desc: "Competitively positioned against established Bristol-area providers. Optimised for documentation accuracy and legal robustness, not speed.",
                    },
                    {
                      label: "360° Property Tours",
                      desc: "Premium-tier service positioned according to spatial complexity, post-processing requirements, and final deliverable quality.",
                    },
                    {
                      label: "Check-In / Check-Out Reports",
                      desc: "Priced per report with rapid turnaround. Volume pricing available for agencies requiring consistent coverage across a portfolio.",
                    },
                  ].map(({ label, desc }, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="gradient-text mt-0.5 shrink-0 text-sm font-medium">—</span>
                      <div className="space-y-1">
                        <span className="text-sm font-medium text-white/80">{label}</span>
                        <p className="text-sm text-white/50 font-light leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-16 grid md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-4">
                <h2 className="text-xs font-medium uppercase tracking-widest text-white/40">Agency Packages</h2>
              </div>
              <div className="md:col-span-8 space-y-5">
                <h3 className="text-xl font-serif text-white">Retained agreements for high-volume operators</h3>
                <p className="text-sm text-white/55 font-light leading-relaxed">
                  Bespoke retained packages are available for letting agencies and high-volume operators requiring continuous portfolio coverage. Retained agreements include SLA guarantees, priority dispatch, and standardised reporting templates across your property portfolio.
                </p>
                <p className="text-sm text-white/55 font-light leading-relaxed">
                  These are structured as rolling agreements with a minimum volume commitment, providing both price certainty and consistent service standards.
                </p>
                <div className="pt-4">
                  <a
                    href="/#contact"
                    className="inline-flex h-11 items-center justify-center gradient-bg text-white px-8 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
                  >
                    Request a Commercial Proposal
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="border-t border-white/10 py-14" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-white/30">Coverage Area</p>
          <p className="text-sm text-white/45 font-light leading-relaxed max-w-lg mx-auto">
            VANTAGE currently operates across Bristol and the BS36 postcode area. Out-of-area engagements considered for retained agency clients. Contact us to discuss coverage.
          </p>
        </div>
      </section>
    </div>
  );
}
