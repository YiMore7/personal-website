import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Frontmatter, ProjectFrontmatter } from '@/types';

const articlesDirectory = path.join(process.cwd(), 'content/articles');
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs.readdirSync(projectsDirectory).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
      // Fallback to .md if .mdx doesn't exist
      const mdPath = path.join(articlesDirectory, `${realSlug}.md`);
      if (!fs.existsSync(mdPath)) {
          throw new Error(`Article not found: ${slug}`);
      }
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);
      return { slug: realSlug, frontmatter: data as Frontmatter, content };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data as Frontmatter, content };
}

export function getAllArticles() {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    // Sort articles by date in descending order
    .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
  return articles;
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  
   if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(projectsDirectory, `${realSlug}.md`);
      if (!fs.existsSync(mdPath)) {
          throw new Error(`Project not found: ${slug}`);
      }
      const fileContents = fs.readFileSync(mdPath, 'utf8');
      const { data, content } = matter(fileContents);
      return { slug: realSlug, frontmatter: data as ProjectFrontmatter, content };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data as ProjectFrontmatter, content };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) => (project1.frontmatter.date > project2.frontmatter.date ? -1 : 1));
  return projects;
}
