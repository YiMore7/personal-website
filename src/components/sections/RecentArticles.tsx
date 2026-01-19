import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "AI 时代的非线性工作流",
    description: "探索人工智能如何重塑我们的工作方式，以及如何构建适应未来的非线性工作流。",
    date: "2024-01-15",
    readTime: "5 min",
    category: "AI 实践",
    slug: "ai-nonlinear-workflow",
  },
  {
    title: "产品经理的 AI 必修课",
    description: "从大模型原理到实际应用，产品经理需要掌握的 AI 核心知识图谱。",
    date: "2024-01-08",
    readTime: "8 min",
    category: "产品思考",
    slug: "pm-ai-course",
  },
  {
    title: "构建个人知识库的三个阶段",
    description: "如何利用 AI 工具打造第二大脑，实现知识的高效输入、内化与输出。",
    date: "2023-12-20",
    readTime: "6 min",
    category: "效率工具",
    slug: "personal-knowledge-base",
  },
];

export function RecentArticles() {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">最新文章</h2>
            <p className="text-slate-600 max-w-2xl">
              分享关于 AI、产品设计和个人成长的深度思考。
            </p>
          </div>
          <Link href="/articles" className="hidden md:flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="block group">
              <Card className="h-full p-6 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs">
                    <Clock size={12} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center text-slate-400 text-xs mt-auto">
                  <Calendar size={12} className="mr-1" />
                  {article.date}
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link href="/articles" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
            查看全部 <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
