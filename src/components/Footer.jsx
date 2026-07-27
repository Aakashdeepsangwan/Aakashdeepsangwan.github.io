import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
