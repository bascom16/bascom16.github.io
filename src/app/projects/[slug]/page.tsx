import { getMarkdownContent, getMarkdownFilesInDirectory } from '@/lib/markdown';
import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = getMarkdownFilesInDirectory('projects');
  return files.map((file) => ({
    slug: file.replace('projects/', '').replace('.md', ''),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getMarkdownContent(`projects/${slug}.md`);
  const { github, demo } = project.frontmatter as {
    github?: string;
    demo?: string;
  };

  return (
    <ArticleLayout
      title={project.frontmatter.title}
      date={project.frontmatter.date}
      description={project.frontmatter.description}
      tags={project.frontmatter.tags}
      htmlContent={project.htmlContent}
    >
      {(github || demo) && (
        <section className="flex gap-4 mt-4">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 transition-colors"
            >
              View on GitHub
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Live Demo
            </Link>
          )}
        </section>
      )}
    </ArticleLayout>
  );
}
