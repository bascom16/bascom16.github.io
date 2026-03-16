import Link from 'next/link';
import { getContentByDirectory } from '@/lib/markdown';
import TagList from '@/components/TagList';

export default async function BlogPage() {
  const posts = await getContentByDirectory('blog');

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl flex flex-col gap-8 py-16 px-8 bg-white dark:bg-black">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Thoughts, tutorials, and updates.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {posts.length === 0 ? (
            <p className="text-zinc-500 dark:text-zinc-400">
              No posts yet. Check back soon!
            </p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="pb-8 border-b border-zinc-200 dark:border-zinc-800 last:border-0"
              >
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2 className="text-xl font-semibold text-black dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                    {post.frontmatter.title}
                  </h2>
                </Link>
                {post.frontmatter.date && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    {post.frontmatter.date}
                  </p>
                )}
                {post.frontmatter.description && (
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {post.frontmatter.description}
                  </p>
                )}
                {post.frontmatter.tags && (
                  <TagList tags={post.frontmatter.tags} />
                )}
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
