import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(37,99,235,0.1),rgba(255,255,255,0))]" />
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Writer & Builder <br />
            <span className="text-primary">AI Explorer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            我是 Yim，一名热衷于探索 AI 边界的产品经理。
            <br className="hidden md:block" />
            在这里记录我的产品思考、AI 实践经验以及构建有趣事物的过程。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/articles">阅读文章</Button>
            <Button size="lg" variant="outline" href="/projects">查看作品</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
