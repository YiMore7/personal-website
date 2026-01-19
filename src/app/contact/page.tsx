import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, MessageSquare, Twitter } from "lucide-react";

export const metadata = {
  title: "联系我 - Writer & Builder",
  description: "建立联系，探讨合作。",
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-surface min-h-screen">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">联系我</h1>
            <p className="text-xl text-slate-600">
              无论是关于 AI 的探讨、产品交流，还是潜在的合作机会，我都非常乐意交流。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             <Card className="p-6 text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                 <Mail size={24} />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Email</h3>
               <p className="text-slate-600 mb-4 text-sm">最可靠的联系方式</p>
               <a href="mailto:hello@example.com" className="text-primary hover:underline">hello@example.com</a>
             </Card>
             
             <Card className="p-6 text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                 <Twitter size={24} />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Twitter</h3>
               <p className="text-slate-600 mb-4 text-sm">关注我的日常思考</p>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@yim_builder</a>
             </Card>
          </div>

          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">发送留言</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="你的名字"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="想聊些什么？"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">内容</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="详细描述你的想法..."
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">发送消息</Button>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}
