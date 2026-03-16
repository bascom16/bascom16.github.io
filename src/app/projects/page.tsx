import Link from 'next/link';
import { getContentByDirectory } from '@/lib/markdown';
import TagList from '@/components/TagList';

export default async function ProjectsPage() {
  const projects = await getContentByDirectory('projects');

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl flex flex-col gap-8 py-16 px-8 bg-white dark:bg-black">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            A collection of my personal and academic projects.
          </p>
        </header>

        <div className="grid gap-6">
          {projects.length === 0 ? (
            <p className="text-zinc-500 dark:text-zinc-400">
              No projects yet. Check back soon!
            </p>
          ) : (
            projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
                  {project.frontmatter.title}
                </h2>
                {project.frontmatter.description && (
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.frontmatter.description}
                  </p>
                )}
                {project.frontmatter.tags && (
                  <TagList tags={project.frontmatter.tags} />
                )}
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
