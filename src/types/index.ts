export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  category?: string;
  image?: string;
  slug: string;
}

export interface ProjectFrontmatter extends Frontmatter {
  status?: 'active' | 'completed' | 'archived';
  demoUrl?: string;
  repoUrl?: string;
  techStack?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
