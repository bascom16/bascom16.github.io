import { getMarkdownContent } from '@/lib/markdown';
import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default async function AboutPage() {
  const about = await getMarkdownContent('about.md');
  const { github, linkedin, email } = about.frontmatter as {
    github?: string;
    linkedin?: string;
    email?: string;
  };

  return (
    <ArticleLayout
      title={about.frontmatter.title}
      description={about.frontmatter.description}
      htmlContent={about.htmlContent}
    >
      <section className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
          Connect
        </h2>
        <div className="flex gap-4">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              GitHub
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              LinkedIn
            </Link>
          )}
          {email && (
            <Link
              href={`mailto:${email}`}
              className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Email
            </Link>
          )}
        </div>
      </section>
    </ArticleLayout>
  );
}
