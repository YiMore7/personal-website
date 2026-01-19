import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Writing Assistant",
    description: "基于 GPT-4 的智能写作助手，支持多语言翻译、润色和续写功能。",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    status: "Active",
    demoUrl: "#",
    repoUrl: "#",
    slug: "ai-writing-assistant",
  },
  {
    title: "Product Roadmap Tool",
    description: "轻量级产品路线图管理工具，帮助团队更好地规划和可视化产品进度。",
    tags: ["React", "TypeScript", "Supabase"],
    status: "Completed",
    demoUrl: "#",
    repoUrl: "#",
    slug: "product-roadmap-tool",
  },
  {
    title: "Personal Knowledge Base",
    description: "基于 MDX 的个人知识库系统，支持双向链接和全文搜索。",
    tags: ["Next.js", "MDX", "Algolia"],
    status: "Active",
    demoUrl: "#",
    repoUrl: "#",
    slug: "personal-knowledge-base",
  },
];

export function SelectedProjects() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">精选作品</h2>
            <p className="text-slate-600 max-w-2xl">
              我在业余时间构建的一些有趣项目，包含开源工具和实验性产品。
            </p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col h-full p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-primary">
                  {/* Placeholder Icon */}
                  <div className="w-6 h-6 rounded bg-primary/20" />
                </div>
                <div className="flex space-x-2">
                  <a href={project.repoUrl} className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demoUrl} className="text-slate-400 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                  {project.title}
                </Link>
              </h3>
              
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
           <Link href="/projects" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
