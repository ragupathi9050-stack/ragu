
import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/mock';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DestinationsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-secondary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Global Markets, Local Expertise</h1>
          <p className="mt-4 text-xl text-brand-light max-w-3xl mx-auto">
            We combine global insights with deep local knowledge to create marketing strategies that truly connect.
          </p>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Destinations We Serve</h2>
                <p className="mt-4 text-lg text-brand-accent">Explore our capabilities in key markets around the world. We understand the culture, the consumer, and the competition.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map(dest => (
                    <Card key={dest.id} className="group">
                        <div className="relative">
                            <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                                <h3 className="text-3xl font-serif font-bold text-white">{dest.name}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-brand-accent mb-4">{dest.intro}</p>
                            <Link to={`/destinations/${dest.id}`} className="font-semibold text-brand-primary hover:text-brand-accent transition-colors">
                                Learn More &rarr;
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
          <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl font-serif font-bold">Don't See Your Market?</h2>
              <p className="mt-4 text-xl max-w-2xl mx-auto mb-8">Our network is always expanding. Contact us to discuss your specific international growth needs.</p>
              <Button as={Link} to="/contact" size="lg" variant="secondary">
                Inquire Now
              </Button>
          </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
