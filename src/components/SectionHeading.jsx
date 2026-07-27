import { motion } from 'framer-motion';

export default function SectionHeading({ index, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-center gap-4"
    >
      <span className="font-mono text-accent">{index}</span>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </motion.div>
  );
}
