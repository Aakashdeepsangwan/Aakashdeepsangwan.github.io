import { motion } from 'framer-motion';
import { skills } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeading index="03" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            {group.items.length > 0 ? (
              <>
                <p className="mb-4 font-mono text-sm text-accent-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <p className="font-mono text-sm text-text">{group.category}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
