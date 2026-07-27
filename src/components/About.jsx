import { motion } from 'framer-motion';
import { about, profile } from '../data/content';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeading index="01" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 sm:grid-cols-3"
      >
        <div className="space-y-4 text-muted sm:col-span-2">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="mb-3 text-sm font-semibold text-text">Quick facts</p>
          <ul className="space-y-2 text-sm text-muted">
            {profile.location && (
              <li>
                <span className="text-accent-2">Based in</span> — {profile.location}
              </li>
            )}
            <li>
              <span className="text-accent-2">Role</span> — {profile.title}
            </li>
            <li>
              <span className="text-accent-2">Email</span> —{' '}
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </li>
            {profile.resumeUrl && (
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block rounded-full border border-border px-4 py-1.5 text-xs hover:border-accent hover:text-accent"
                >
                  Download Resume
                </a>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
