
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  deliverables: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  image: string;
  service: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featuredImage: string;
  content: string; // Markdown or HTML content
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  intro: string;
  approach: string;
  stats: { label: string; value: string }[];
  caseStudySnippet: { title: string; client: string };
  faqs: { question: string; answer: string }[];
}
