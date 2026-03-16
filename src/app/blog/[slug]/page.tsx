import { getMarkdownContent, getMarkdownFilesInDirectory } from '@/lib/markdown';
import ArticleLayout from '@/components/ArticleLayout';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = getMarkdownFilesInDirectory('blog');
  return files.map((file) => ({
    slug: file.replace('blog/', '').replace('.md', ''),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getMarkdownContent(`blog/${slug}.md`);

  return (
    <ArticleLayout
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      htmlContent={post.htmlContent}
    />
  );
}
