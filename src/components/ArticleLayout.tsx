import TagList from './TagList';

interface ArticleLayoutProps {
  title: string;
  date?: string;
  description?: string;
  tags?: string[];
  htmlContent: string;
  children?: React.ReactNode;
}

export default function ArticleLayout({
  title,
  date,
  description,
  tags,
  htmlContent,
  children,
}: ArticleLayoutProps) {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl flex flex-col gap-8 py-16 px-8 bg-white dark:bg-black">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            {title}
          </h1>
          {date && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{date}</p>
          )}
          {description && (
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
          )}
          {tags && <TagList tags={tags} />}
        </header>

        <article
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {children}
      </main>
    </div>
  );
}
