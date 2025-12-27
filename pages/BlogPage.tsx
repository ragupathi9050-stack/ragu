
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mock';
import Card from '../components/ui/Card';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
       {/* Hero */}
       <section className="bg-brand-secondary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Marketing Insights</h1>
          <p className="mt-4 text-xl text-brand-light max-w-3xl mx-auto">
            Your source for the latest trends, strategies, and expert analysis in global digital marketing.
          </p>
        </div>
      </section>

      {/* Blog Grid & Filters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main content */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                  <Card key={post.id}>
                    <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <p className="text-sm font-semibold text-brand-accent uppercase">{post.category}</p>
                      <h3 className="text-xl font-bold font-serif text-brand-primary mt-2 mb-3 leading-tight">{post.title}</h3>
                      <p className="text-brand-accent text-sm mb-4">{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="font-semibold text-sm text-brand-primary hover:text-brand-accent transition-colors">
                        Read Post &rarr;
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
              {/* Pagination Placeholder */}
              <div className="mt-12 text-center">
                  <p className="text-brand-accent">Pagination controls would go here.</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full md:w-1/3 lg:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-serif mb-4">Search</h3>
                <input type="text" placeholder="Search articles..." className="w-full px-4 py-2 border rounded-md"/>

                <h3 className="text-xl font-bold font-serif mt-8 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-brand-accent hover:text-brand-primary">SEO</a></li>
                  <li><a href="#" className="text-brand-accent hover:text-brand-primary">PPC</a></li>
                  <li><a href="#" className="text-brand-accent hover:text-brand-primary">Social Media</a></li>
                  <li><a href="#" className="text-brand-accent hover:text-brand-primary">Content Marketing</a></li>
                </ul>

                <h3 className="text-xl font-bold font-serif mt-8 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-super-light text-brand-accent text-xs px-2 py-1 rounded-full">B2B</span>
                    <span className="bg-brand-super-light text-brand-accent text-xs px-2 py-1 rounded-full">International</span>
                    <span className="bg-brand-super-light text-brand-accent text-xs px-2 py-1 rounded-full">Strategy</span>
                    <span className="bg-brand-super-light text-brand-accent text-xs px-2 py-1 rounded-full">Trends 2024</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
