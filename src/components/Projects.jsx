import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-container py-24">
      <SectionHeading index="03" title="Projects" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-muted">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
                    <FaGithub size={18} className="hover:text-accent" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                    <ExternalLink size={18} className="hover:text-accent" />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-6 flex-1 text-sm text-muted">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-surface-2 px-3 py-1 text-xs text-accent-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
