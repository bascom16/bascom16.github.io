import { getMarkdownContent } from '@/lib/markdown';

export default async function Home() {
  const testContent = await getMarkdownContent('test.md');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-16 px-8 bg-white dark:bg-black">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {testContent.frontmatter.title}
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {testContent.frontmatter.date}
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            {testContent.frontmatter.description}
          </p>
        </header>

        <article
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: testContent.htmlContent }}
        />

        <footer className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Framework test successful - markdown parsing is working.
          </p>
        </footer>
      </main>
    </div>
  );
}
