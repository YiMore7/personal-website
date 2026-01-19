import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, Search } from "lucide-react";

// Mock data - replace with actual MDX fetching later
const articles = [
  {
    title: "AI 时代的非线性工作流",
    description: "探索人工智能如何重塑我们的工作方式，以及如何构建适应未来的非线性工作流。",
    date: "2024-01-15",
    readTime: "5 min",
    category: "AI 实践",
    slug: "ai-nonlinear-workflow",
    tags: ["AI", "Workflow", "Productivity"],
  },
  {
    title: "产品经理的 AI 必修课",
    description: "从大模型原理到实际应用，产品经理需要掌握的 AI 核心知识图谱。",
    date: "2024-01-08",
    readTime: "8 min",
    category: "产品思考",
    slug: "pm-ai-course",
    tags: ["Product Management", "AI", "Learning"],
  },
  {
    title: "构建个人知识库的三个阶段",
    description: "如何利用 AI 工具打造第二大脑，实现知识的高效输入、内化与输出。",
    date: "2023-12-20",
    readTime: "6 min",
    category: "效率工具",
    slug: "personal-knowledge-base",
    tags: ["PKM", "Tools", "Obsidian"],
  },
   {
    title: "从 0 到 1：独立开发者的心路历程",
    description: "分享我在开发第一个独立产品过程中的踩坑经验和心得体会。",
    date: "2023-11-15",
    readTime: "10 min",
    category: "产品思考",
    slug: "indie-hacker-journey",
    tags: ["Indie Hacker", "Startup", "Reflection"],
  },
];

export const metadata = {
  title: "文章 - Writer & Builder",
  description: "分享关于 AI、产品设计和个人成长的深度思考。",
};

export default function ArticlesPage() {
  return (
    <div className="py-20 bg-surface min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">文章</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="搜索文章..."
                className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            </div>
            
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium whitespace-nowrap">
                全部
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 text-sm font-medium whitespace-nowrap transition-colors">
                产品思考
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 text-sm font-medium whitespace-nowrap transition-colors">
                AI 实践
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 text-sm font-medium whitespace-nowrap transition-colors">
                效率工具
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="block group">
                <Card className="p-8 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                     <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center">
                           <Calendar size={14} className="mr-1" />
                           {article.date}
                        </span>
                     </div>
                     <span className="text-slate-400 text-sm flex items-center">
                        <Clock size={14} className="mr-1" />
                        {article.readTime}
                     </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {article.description}
                  </p>
                  
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
