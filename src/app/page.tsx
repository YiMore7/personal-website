import { Hero } from "@/components/sections/Hero";
import { RecentArticles } from "@/components/sections/RecentArticles";
import { SelectedProjects } from "@/components/sections/SelectedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentArticles />
      <SelectedProjects />
    </>
  );
}
