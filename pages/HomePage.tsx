
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Briefcase, Globe, Megaphone, PenTool, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { testimonials, caseStudies, blogPosts, services } from '../data/mock';

const HomePage: React.FC = () => {
  const clientLogos = [
    'https://via.placeholder.com/150x60/E0E1DD/0D1B2A?text=Client+A',
    'https://via.placeholder.com/150x60/E0E1DD/0D1B2A?text=Client+B',
    'https://via.placeholder.com/150x60/E0E1DD/0D1B2A?text=Client+C',
    'https://via.placeholder.com/150x60/E0E1DD/0D1B2A?text=Client+D',
    'https://via.placeholder.com/150x60/E0E1DD/0D1B2A?text=Client+E',
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="absolute inset-0 bg-brand-primary opacity-70"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">Global Reach, Local Impact</h1>
          <p className="text-xl md:text-2xl text-brand-super-light max-w-3xl mx-auto mb-8">We are a worldclass digital marketing agency dedicated to scaling brands in international markets.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">Get a Proposal</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary">View Services</Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-sm font-semibold text-brand-light uppercase tracking-wider mb-8">Trusted by industry leaders worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client logo ${index + 1}`} className="h-8 md:h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Our Expertise</h2>
            <p className="mt-4 text-lg text-brand-accent">We provide a full suite of digital marketing services to help you achieve your global growth objectives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map(service => (
              <Card key={service.id}>
                <div className="p-8">
                  <service.icon className="w-12 h-12 text-brand-accent mb-4" />
                  <h3 className="text-2xl font-bold font-serif text-brand-primary mb-2">{service.title}</h3>
                  <p className="text-brand-accent mb-4">{service.shortDescription}</p>
                  <Link to="/services" className="font-semibold text-brand-primary hover:text-brand-accent transition-colors flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Teaser */}
      <section className="py-20 bg-brand-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Globe className="mx-auto w-16 h-16 mb-4 text-brand-super-light" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Destinations We Serve</h2>
          <p className="mt-4 text-lg text-brand-light max-w-2xl mx-auto mb-8">From North America to Southeast Asia, we have the local expertise to make your brand resonate.</p>
          <Button as={Link} to="/destinations" size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-primary">Explore Our Markets</Button>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Proven Results</h2>
            <p className="mt-4 text-lg text-brand-accent">Discover how we've helped businesses like yours succeed on the global stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.slice(0,3).map(study => (
              <Card key={study.id}>
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-accent uppercase">{study.service}</p>
                  <h3 className="text-xl font-bold font-serif text-brand-primary mt-2 mb-4">{study.title}</h3>
                  <div className="flex space-x-4">
                    {study.results.map(res => (
                      <div key={res.metric}>
                        <p className="text-2xl font-bold text-brand-primary">{res.value}</p>
                        <p className="text-sm text-brand-light">{res.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Users className="mx-auto w-16 h-16 mb-4 text-brand-accent" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">What Our Clients Say</h2>
            <div className="mt-8">
                <blockquote className="text-xl italic text-brand-accent">"{testimonials[0].quote}"</blockquote>
                <div className="mt-6 flex items-center justify-center">
                    <img src={testimonials[0].image} alt={testimonials[0].author} className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <p className="font-bold text-brand-primary">{testimonials[0].author}</p>
                        <p className="text-brand-light">{testimonials[0].company}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Our Insights</h2>
            <p className="mt-4 text-lg text-brand-accent">Stay ahead of the curve with the latest trends and strategies in international marketing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0,3).map(post => (
              <Card key={post.id}>
                 <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
                 <div className="p-6">
                    <p className="text-sm text-brand-light">{post.date} &bull; {post.readTime} min read</p>
                    <h3 className="text-xl font-bold font-serif text-brand-primary mt-2 mb-3">{post.title}</h3>
                    <p className="text-brand-accent text-sm mb-4">{post.excerpt}</p>
                    <Link to="/blog" className="font-semibold text-brand-primary hover:text-brand-accent transition-colors flex items-center">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                 </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-brand-accent">
          <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl font-serif font-bold">Ready to Go Global?</h2>
              <p className="mt-4 text-xl max-w-2xl mx-auto mb-8">Let's discuss how we can help your business expand into new markets and achieve unprecedented growth.</p>
              <Button as={Link} to="/contact" size="lg" variant="primary" className="bg-white text-brand-primary hover:bg-brand-super-light">
                Let's Talk
              </Button>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
