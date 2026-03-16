import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownContent {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    [key: string]: unknown;
  };
  content: string;
  htmlContent: string;
}

export async function getMarkdownContent(filename: string): Promise<MarkdownContent> {
  const slug = filename.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const htmlContent = processedContent.toString();

  return {
    slug,
    frontmatter: data as MarkdownContent['frontmatter'],
    content,
    htmlContent,
  };
}

export function getAllMarkdownFiles(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.md'));
}

export async function getAllContent(): Promise<MarkdownContent[]> {
  const files = getAllMarkdownFiles();
  const content = await Promise.all(files.map(getMarkdownContent));
  return content;
}
