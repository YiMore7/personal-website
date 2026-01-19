import React from "react";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { Container } from "@/components/ui/Container";
import { MDXContent } from "@/components/mdx/MDXContent";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  try {
    const { frontmatter } = getProjectBySlug(slug);
    return {
      title: `${frontmatter.title} - Writer & Builder`,
      description: frontmatter.description,
    };
  } catch (e) {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  let project;
  try {
    project = getProjectBySlug(slug);
  } catch (e) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="py-20 bg-white min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} className="mr-1" />
            返回作品列表
          </Link>

          <header className="mb-12 border-b border-slate-100 pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className={cn(
                        "text-xs font-semibold px-2 py-1 rounded-full border",
                        frontmatter.status === 'active' ? "bg-green-50 text-green-700 border-green-200" :
                        frontmatter.status === 'completed' ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-slate-50 text-slate-600 border-slate-200"
                      )}>
                        {frontmatter.status?.toUpperCase()}
                      </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {frontmatter.title}
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                    {frontmatter.description}
                  </p>
               </div>
               
               <div className="flex flex-col gap-3 min-w-[200px]">
                  {frontmatter.demoUrl && (
                    <a 
                      href={frontmatter.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      访问演示
                    </a>
                  )}
                  {frontmatter.repoUrl && (
                    <a 
                      href={frontmatter.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                    >
                      <Github size={18} />
                      查看源码
                    </a>
                  )}
               </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
               {frontmatter.techStack && frontmatter.techStack.map((tech: string) => (
                  <span key={tech} className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                    {tech}
                  </span>
               ))}
            </div>
          </header>

          <article>
            <MDXContent source={content} />
          </article>
        </div>
      </Container>
    </div>
  );
}
