
import { Service, Testimonial, CaseStudy, BlogPost, TeamMember, Destination } from '../types';
import { BarChart2, Briefcase, Globe, Megaphone, PenTool, Mail, Search, Users, Bot } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'seo-content',
    title: 'SEO & Content Strategy',
    shortDescription: 'Drive organic growth and authority with data-driven SEO and compelling content.',
    icon: Search,
    overview: 'Our approach to SEO and content is holistic. We combine technical optimization with high-quality, relevant content to build your brand\'s authority and drive sustainable organic traffic in your target markets.',
    deliverables: ['Technical SEO Audit', 'International Keyword Research', 'On-Page & Off-Page Optimization', 'Content Calendar & Creation', 'Link Building Strategy'],
    process: [
      { step: 1, title: 'Discovery & Audit', description: 'Analyze your current SEO performance and competitive landscape.' },
      { step: 2, title: 'Strategy', description: 'Develop a tailored SEO and content roadmap for each target market.' },
      { step: 3, title: 'Execution', description: 'Implement on-page optimizations and create high-value content.' },
      { step: 4, title: 'Outreach & Reporting', description: 'Build authority through outreach and provide transparent performance reports.' },
    ],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Typically, significant results can be seen within 6-12 months, depending on the market competitiveness and starting point.' },
      { question: 'Do you create content in multiple languages?', answer: 'Yes, we have a network of native-speaking content creators for various languages to ensure cultural relevance.' }
    ]
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'Maximize ROI with targeted Google & Meta Ads campaigns across the globe.',
    icon: BarChart2,
    overview: 'We design and manage high-performing paid media campaigns that deliver measurable results. From Google Ads to Meta, we leverage advanced targeting and optimization techniques to reach your ideal customer at the right time.',
    deliverables: ['Paid Search (PPC) Campaigns', 'Social Media Advertising', 'Display & Video Ads', 'Conversion Rate Optimization (CRO)', 'Performance Analytics & Reporting'],
    process: [
      { step: 1, title: 'Audience Research', description: 'Identify and segment your target audience in each market.' },
      { step: 2, title: 'Campaign Setup', description: 'Create compelling ad copy, creatives, and landing pages.' },
      { step: 3, title: 'Launch & Monitor', description: 'Go live and continuously monitor campaign performance.' },
      { step: 4, title: 'Optimize & Scale', description: 'A/B test and optimize for performance, then scale successful campaigns.' },
    ],
    faqs: [
      { question: 'What platforms do you specialize in?', answer: 'We are experts in Google Ads, Meta (Facebook & Instagram) Ads, LinkedIn Ads, and other major international platforms.' },
      { question: 'What is a typical ROAS?', answer: 'Return on Ad Spend (ROAS) varies by industry and market, but our goal is always to maximize your profitability and achieve your specific business objectives.' }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDescription: 'Build and engage your community on the social platforms that matter most.',
    icon: Users,
    overview: 'We create and execute localized social media strategies that build brand awareness, foster community engagement, and drive business results. We manage your presence across relevant platforms, ensuring your brand voice is consistent yet culturally adapted.',
    deliverables: ['Social Media Strategy', 'Content Creation & Curation', 'Community Management', 'Influencer Marketing', 'Social Listening & Reporting'],
    process: [
      { step: 1, title: 'Strategy', description: 'Define objectives, target audience, and platform mix.' },
      { step: 2, title: 'Content Planning', description: 'Develop a content calendar with engaging and relevant posts.' },
      { step: 3, title: 'Execution', description: 'Publish content and actively engage with your community.' },
      { step: 4, title: 'Analysis', description: 'Track key metrics and optimize the strategy for better results.' },
    ],
    faqs: [
        { question: 'Which social media platforms are right for my business?', answer: 'It depends on your industry and target audience. We conduct thorough research to recommend the most effective platforms for your brand, whether it\'s Instagram, LinkedIn, TikTok, or a local platform.' },
        { question: 'How do you handle customer service inquiries on social media?', answer: 'We establish clear guidelines and a response protocol to handle inquiries promptly and professionally, escalating to your team when necessary.' }
    ]
  },
  {
    id: 'branding-creative',
    title: 'Branding & Creative',
    shortDescription: 'Craft a compelling brand identity that resonates with a global audience.',
    icon: PenTool,
    overview: 'Your brand is your story. We help you tell it in a way that is authentic, memorable, and globally understood. From visual identity to brand messaging, we create cohesive brand experiences that connect with customers on an emotional level.',
    deliverables: ['Brand Strategy & Positioning', 'Visual Identity Design (Logo, etc.)', 'Brand Guidelines', 'Campaign Creative', 'Video & Motion Graphics'],
    process: [
      { step: 1, title: 'Discovery', description: 'Deep dive into your brand, audience, and market landscape.' },
      { step:2, title: 'Strategy', description: 'Define your brand essence, positioning, and messaging framework.' },
      { step: 3, title: 'Creative', description: 'Develop visual concepts and design the core brand assets.' },
      { step: 4, title: 'Rollout', description: 'Create comprehensive brand guidelines and support implementation.' },
    ],
    faqs: [
        { question: 'Can you help us rebrand our existing company?', answer: 'Absolutely. We specialize in brand refreshes and complete rebrands for companies looking to update their image or enter new markets.' },
        { question: 'How do you ensure a brand works across different cultures?', answer: 'Our process includes extensive research into cultural symbols, color theory, and linguistic nuances to ensure your brand is perceived positively everywhere.' }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Worldclass transformed our international expansion strategy. Their deep understanding of local markets was a game-changer. We saw a 200% increase in qualified leads from Europe in just six months.",
    author: "Jane Doe",
    company: "CEO, Global Tech Inc.",
    image: "https://picsum.photos/100/100?random=21",
  },
  {
    quote: "The team's creativity and data-driven approach are second to none. They are true partners who are as invested in our success as we are. Highly recommended for any brand looking to scale.",
    author: "John Smith",
    company: "CMO, Finovate",
    image: "https://picsum.photos/100/100?random=22",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: "Launching a SaaS Product in Southeast Asia",
    client: "Innovate SaaS",
    industry: "Technology",
    challenge: "To penetrate the competitive SEA market with a new B2B SaaS product.",
    solution: "A multi-channel strategy involving localized content marketing, targeted LinkedIn campaigns, and partnerships with regional influencers.",
    results: [
      { metric: "Market Penetration", value: "3 New Countries" },
      { metric: "Lead Growth", value: "+300%" },
      { metric: "CAC Reduction", value: "-40%" }
    ],
    image: "https://picsum.photos/600/400?random=31",
    service: "Performance Marketing"
  },
  {
    id: 'cs2',
    title: "E-commerce Growth in the Middle East",
    client: "Luxe Fashion",
    industry: "Retail",
    challenge: "Adapting a Western luxury brand for the Middle Eastern e-commerce market.",
    solution: "An integrated strategy including culturally adapted social media campaigns on Instagram & Snapchat, influencer collaborations, and Arabic SEO.",
    results: [
      { metric: "Online Sales", value: "+150%" },
      { metric: "Engagement", value: "+90%" },
      { metric: "ROAS", value: "8:1" }
    ],
    image: "https://picsum.photos/600/400?random=32",
    service: "Social Media Management"
  },
  {
    id: 'cs3',
    title: "Organic Traffic Surge for a B2B Platform",
    client: "ConnectBiz",
    industry: "B2B Services",
    challenge: "Low organic visibility and authority in the European market.",
    solution: "A comprehensive technical SEO audit followed by a high-quality, multi-language content strategy targeting key decision-makers.",
    results: [
      { metric: "Organic Traffic", value: "+450%" },
      { metric: "Keyword Rankings", value: "+2000" },
      { metric: "Demo Requests", value: "+120%" }
    ],
    image: "https://picsum.photos/600/400?random=33",
    service: "SEO & Content Strategy"
  }
];

export const blogPosts: BlogPost[] = [
    {
        id: 'post1',
        title: "The Ultimate Guide to Marketing in Japan",
        excerpt: "Discover the cultural nuances and digital platforms you need to master to succeed in the unique Japanese market.",
        author: "Akira Tanaka",
        date: "October 26, 2023",
        readTime: 8,
        category: "Destinations",
        tags: ["Japan", "International", "Strategy"],
        featuredImage: "https://picsum.photos/600/400?random=41",
        content: "Full blog post content goes here..."
    },
    {
        id: 'post2',
        title: "5 SEO Trends for Global E-commerce in 2024",
        excerpt: "Stay ahead of the curve with these crucial SEO trends that will define international e-commerce success next year.",
        author: "Maria Garcia",
        date: "October 22, 2023",
        readTime: 6,
        category: "SEO",
        tags: ["SEO", "E-commerce", "Trends 2024"],
        featuredImage: "https://picsum.photos/600/400?random=42",
        content: "Full blog post content goes here..."
    },
    {
        id: 'post3',
        title: "How to Use TikTok for B2B Marketing in Europe",
        excerpt: "It's not just for dancing. Learn how to leverage TikTok to reach a new generation of B2B decision-makers in Europe.",
        author: "Lars Jensen",
        date: "October 18, 2023",
        readTime: 7,
        category: "Social Media",
        tags: ["B2B", "TikTok", "Europe"],
        featuredImage: "https://picsum.photos/600/400?random=43",
        content: "Full blog post content goes here..."
    },
    {
        id: 'post4',
        title: "Cross-Cultural Branding: Avoiding Common Pitfalls",
        excerpt: "A simple translation is not enough. Here’s how to ensure your brand message resonates positively across cultures.",
        author: "Priya Sharma",
        date: "October 15, 2023",
        readTime: 5,
        category: "Branding",
        tags: ["Branding", "International", "Culture"],
        featuredImage: "https://picsum.photos/600/400?random=44",
        content: "Full blog post content goes here..."
    }
];

export const teamMembers: TeamMember[] = [
    { name: 'Olivia Chen', role: 'Founder & CEO', bio: '...', image: 'https://picsum.photos/400/400?random=51' },
    { name: 'Benjamin Carter', role: 'Head of Strategy', bio: '...', image: 'https://picsum.photos/400/400?random=52' },
    { name: 'Sofia Rossi', role: 'Creative Director', bio: '...', image: 'https://picsum.photos/400/400?random=53' },
];

export const destinations: Destination[] = [
    {
        id: 'north-america',
        name: 'North America',
        region: 'Americas',
        image: 'https://picsum.photos/600/800?random=61',
        intro: 'Navigate the diverse and competitive markets of the US and Canada with cutting-edge digital strategies.',
        approach: '...',
        stats: [],
        caseStudySnippet: { title: '...', client: '...' },
        faqs: []
    },
    {
        id: 'europe',
        name: 'Europe',
        region: 'EMEA',
        image: 'https://picsum.photos/600/800?random=62',
        intro: 'From London to Berlin, we provide localized strategies for the multifaceted European landscape.',
        approach: '...',
        stats: [],
        caseStudySnippet: { title: '...', client: '...' },
        faqs: []
    },
    {
        id: 'middle-east',
        name: 'Middle East',
        region: 'EMEA',
        image: 'https://picsum.photos/600/800?random=63',
        intro: 'Connect with a rapidly growing, digitally-savvy audience in the GCC and beyond.',
        approach: '...',
        stats: [],
        caseStudySnippet: { title: '...', client: '...' },
        faqs: []
    },
    {
        id: 'southeast-asia',
        name: 'Southeast Asia',
        region: 'APAC',
        image: 'https://picsum.photos/600/800?random=64',
        intro: 'Tap into the world\'s fastest-growing internet economy with mobile-first marketing.',
        approach: '...',
        stats: [],
        caseStudySnippet: { title: '...', client: '...' },
        faqs: []
    }
];
