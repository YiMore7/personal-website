import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "关于我 - Writer & Builder",
  description: "Writer & Builder · 产品经理 · AI 探索者",
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">关于我</h1>
          
          <div className="prose prose-slate max-w-none prose-lg">
            <p className="lead text-xl text-slate-600 mb-8">
              Hi，我是 YiM。我现在的身份是 <strong className="text-slate-900">产品经理</strong> 和 <strong className="text-slate-900">AI 探索者</strong>。
            </p>

            <div className="my-12 p-6 bg-surface rounded-xl border border-slate-100 not-prose">
              <h3 className="text-lg font-bold text-slate-900 mb-4">我的三个核心角色</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-primary flex items-center justify-center font-bold text-xs">W</span>
                  <div>
                    <strong className="block text-slate-900">Writer</strong>
                    <span className="text-slate-600 text-sm">记录思考，整理知识。我相信写作是最好的思考方式。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-orange-100 text-secondary flex items-center justify-center font-bold text-xs">B</span>
                  <div>
                    <strong className="block text-slate-900">Builder</strong>
                    <span className="text-slate-600 text-sm">动手创造，解决问题。不仅仅是设计产品，更享受编码的过程。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">E</span>
                  <div>
                    <strong className="block text-slate-900">Explorer</strong>
                    <span className="text-slate-600 text-sm">拥抱变化，探索未知。目前专注于 AI Agent 和大模型应用层。</span>
                  </div>
                </li>
              </ul>
            </div>

            <h2>经历与背景</h2>
            <p>
              我有10年的互联网产品经验，曾就职于 [去哪儿旅行、便利蜂]，负责过 [机票值机、无人货架] 产品。
              目前我正在深入研究AI如何重塑个人工作流，如何在企业中应用。
            </p>
            <p>
              除了工作，我也是一名独立开发者，喜欢用 Next.js、Tailwind CSS 和 Supabase 构建小工具。
            </p>

            <h2>联系我</h2>
            <p>
              如果你对我的文章感兴趣，或者想探讨 AI 产品、合作机会，欢迎通过以下方式联系我：
            </p>
            <ul>
              <li>Email: your.email@example.com</li>
              <li>Twitter: @yourhandle</li>
              <li>GitHub: @yourusername</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
