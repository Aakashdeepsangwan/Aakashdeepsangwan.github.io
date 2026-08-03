import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { goals } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Goals() {
  return (
    <section id="goals" className="section-container py-24">
      <SectionHeading index="02" title="Goals" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
      >
        <div className="mb-6 flex items-start gap-4">
          <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
            <Target size={20} />
          </span>
          <p className="text-xl font-semibold sm:text-2xl">
            <span className="text-gradient">{goals.statement}</span>
          </p>
        </div>

        <div className="space-y-4 text-muted">
          {goals.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {goals.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-accent-2"
            >
              {area}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
