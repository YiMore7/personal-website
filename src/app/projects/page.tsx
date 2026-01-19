import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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
  {
    title: "Minimalist Pomodoro",
    description: "极简主义番茄钟应用，专注于提供无干扰的工作体验。",
    tags: ["Vue", "Electron", "Pinia"],
    status: "Archived",
    demoUrl: "#",
    repoUrl: "#",
    slug: "minimalist-pomodoro",
  },
];

export const metadata = {
  title: "作品 - Writer & Builder",
  description: "构建的一些有趣项目，包含开源工具和实验性产品。",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">作品</h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              这里展示了我作为 Builder 构建的一些项目。包含业余时间的实验、开源贡献以及一些有趣的工具。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.slug} className="flex flex-col h-full p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary">
                    {/* Placeholder Icon */}
                    <div className="w-6 h-6 rounded bg-primary/20" />
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.repoUrl} 
                      className="text-slate-400 hover:text-slate-900 transition-colors p-1 hover:bg-slate-50 rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demoUrl} 
                      className="text-slate-400 hover:text-primary transition-colors p-1 hover:bg-slate-50 rounded-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md font-medium border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                    <span className={cn(
                      "w-2 h-2 rounded-full",
                      project.status === 'Active' ? "bg-green-500" :
                      project.status === 'Completed' ? "bg-blue-500" : "bg-slate-400"
                    )} />
                    <span className="text-xs text-slate-500 font-medium">{project.status}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
