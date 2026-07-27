import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { profile } from '../data/content';
import SectionHeading from './SectionHeading';

const socialIcons = [
  { key: 'github', icon: FaGithub, url: profile.socials.github, label: 'GitHub' },
  { key: 'linkedin', icon: FaLinkedin, url: profile.socials.linkedin, label: 'LinkedIn' },
  { key: 'twitter', icon: FaXTwitter, url: profile.socials.twitter, label: 'Twitter' },
].filter((s) => s.url);

export default function Contact() {
  return (
    <section id="contact" className="section-container py-24 text-center">
      <SectionHeading index="04" title="Get In Touch" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl"
      >
        <p className="mb-8 text-muted">
          I'm currently open to new opportunities and interesting projects. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          <Mail size={18} />
          Say Hello
        </a>

        {socialIcons.length > 0 && (
          <div className="mt-10 flex justify-center gap-6">
            {socialIcons.map(({ key, icon: Icon, url, label }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
