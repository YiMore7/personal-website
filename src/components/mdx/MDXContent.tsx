import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4 text-slate-700" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-1" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />,
  li: (props: any) => <li className="text-slate-700" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-slate-50 italic text-slate-600" {...props} />
  ),
  a: (props: any) => (
    <a className="text-primary hover:underline font-medium" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-slate-100 text-pink-600 rounded px-1 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
  ),
  Button,
  Card,
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-slate max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
