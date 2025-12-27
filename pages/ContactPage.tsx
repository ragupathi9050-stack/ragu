
import React from 'react';
import Button from '../components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-secondary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Get In Touch</h1>
          <p className="mt-4 text-xl text-brand-light max-w-3xl mx-auto">
            We're here to answer your questions and help you start your journey to global success. Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-serif font-bold text-brand-primary mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-accent">Full Name</label>
                    <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-accent">Email Address</label>
                    <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brand-accent">Phone Number</label>
                        <input type="tel" id="phone" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-brand-accent">Company</label>
                        <input type="text" id="company" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent" />
                    </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-brand-accent">Budget Range</label>
                  <select id="budget" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent">
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-accent">Message</label>
                  <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-accent focus:border-brand-accent"></textarea>
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full">Submit Inquiry</Button>
                </div>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Contact Information</h3>
                    <div className="space-y-4 text-brand-accent">
                        <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-brand-light"/> hello@worldclass.agency</p>
                        <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-brand-light"/> +1 (555) 123-4567</p>
                        <p className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-brand-light mt-1"/> 123 Global Avenue, New York, NY 10001, USA</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">Our Offices</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-brand-primary">New York (HQ)</p>
                            <p className="text-brand-accent">123 Global Avenue, New York</p>
                        </div>
                        <div>
                            <p className="font-semibold text-brand-primary">London</p>
                            <p className="text-brand-accent">456 International Rd, London</p>
                        </div>
                        <div>
                            <p className="font-semibold text-brand-primary">Singapore</p>
                            <p className="text-brand-accent">789 Market Street, Singapore</p>
                        </div>
                    </div>
                </div>
                {/* Map Placeholder */}
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-brand-accent">Map embed would go here.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
