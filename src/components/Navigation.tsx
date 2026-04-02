import Link from 'next/link';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-200 dark:bg-black/80 dark:border-zinc-800">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-8 py-4">
        <Link href="/" className="font-bold text-black dark:text-zinc-50">
          Brian Bascom
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
