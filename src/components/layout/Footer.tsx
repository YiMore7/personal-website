import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-slate-100 py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              Writer & Builder
            </Link>
            <p className="mt-4 text-slate-500 text-sm max-w-xs">
              探索 AI、产品与写作的无限可能。记录思考，分享创造。
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">导航</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/articles" className="hover:text-primary transition-colors">文章</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">作品</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">关于</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">社交媒体</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Writer & Builder. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
