import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl flex flex-col gap-12 py-16 px-8 bg-white dark:bg-black">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Brian Bascom
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            I'm Brian Bascom, a third-year computer engineering student at BYU.
            As a research assistant in the Multi-agent Coordination and Controls Lab (MAGICC Lab), I have hands-on experience in UAV hardware and software.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/"
            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              About
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Learn more about my background and interests.
            </p>
          </Link>

          <Link
            href="/projects"
            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              Projects
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              View my personal and academic projects.
            </p>
          </Link>

          <Link
            href="/blog"
            className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors sm:col-span-2"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              Blog
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Read my latest posts and updates.
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
}
