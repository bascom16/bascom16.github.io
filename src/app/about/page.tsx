import { getMarkdownContent } from '@/lib/markdown';
import Link from 'next/link';
import { Briefcase, MapPin, FileText } from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default async function AboutPage() {
  const about = await getMarkdownContent('about.md');
  const { github, linkedin, role, location } = about.frontmatter as {
    github?: string;
    linkedin?: string;
    role?: string;
    location?: string;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <main className="max-w-4xl mx-auto pt-32 px-6 pb-24">

        {/* Hero */}
        <section className="flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-16">

          {/* Left: text */}
          <div className="space-y-6 flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Brian Bascom
            </h1>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              {role && (
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  {role}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              )}
            </div>

            <div
              className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl"
              dangerouslySetInnerHTML={{ __html: about.htmlContent }}
            />

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="/brian-bascom-resume-digital.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 font-medium rounded-md transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>

              <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-700 pl-6">
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                )}
                {linkedin && (
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right: photo */}
          <div className="shrink-0">
            <img
              src="/brian_bascom_profile.jpeg"
              alt="Brian Bascom"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover object-top shadow-sm"
            />
          </div>
        </section>

        {/* Divider */}
        <hr className="my-14 border-zinc-200 dark:border-zinc-800" />

        {/* Two-column section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

          {/* Research */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Research
            </h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                RustFlight
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Research assistant at the BYU{' '}
                <a
                  href="https://magicc.byu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-900 dark:text-zinc-200 hover:underline"
                >
                  MAGICC Lab
                </a>{' '}
                under Dr. James Usevitch. Contributing to RustFlight, a Rust-based
                port of the ROSflight firmware designed for safety and adaptability
                in UAV flight control.
              </p>
              <Link
                href="/projects/rustflight"
                className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-4"
              >
                Learn more →
              </Link>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Education
            </h2>

            <div className="space-y-1">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                BS Computer Engineering{' '}
                <span className="font-normal text-zinc-500">(2027)</span>
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Minor in Computer Science and Mathematics
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Brigham Young University
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Honors
              </p>
              <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Honors Program</li>
                <li>Russell M. Nelson Presidential Scholar</li>
                <li>National Merit Scholar</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                Skills
              </p>
              <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Languages: </span>
                  Rust, C, C++, Python, Java
                </p>
                <p>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Tools: </span>
                  Git, Linux, Docker, CMake
                </p>
                <p>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">Hardware: </span>
                  Raspberry Pi, STM32, KiCad
                </p>
                <p>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">ML: </span>
                  PyTorch, JAX, ONNX
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
