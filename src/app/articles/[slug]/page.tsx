import React from "react";
import { getArticleBySlug, getArticleSlugs } from "@/lib/mdx";
import { Container } from "@/components/ui/Container";
import { MDXContent } from "@/components/mdx/MDXContent";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  try {
    const { frontmatter } = getArticleBySlug(slug);
    return {
      title: `${frontmatter.title} - Writer & Builder`,
      description: frontmatter.description,
    };
  } catch (e) {
    return {
      title: "Article Not Found",
    };
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  
  let post;
  try {
    post = getArticleBySlug(slug);
  } catch (e) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className="py-20 bg-white min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} className="mr-1" />
            返回文章列表
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded-full">
                {frontmatter.category}
              </span>
              <span className="text-slate-400 text-sm flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {frontmatter.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {frontmatter.description}
            </p>
          </header>

          <article>
            <MDXContent source={content} />
          </article>
          
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex gap-2">
               {frontmatter.tags && frontmatter.tags.map((tag: string) => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    #{tag}
                  </span>
               ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
