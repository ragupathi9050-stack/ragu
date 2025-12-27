
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-super-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-serif font-bold">
              worldclass
            </Link>
            <p className="text-brand-light text-sm">
              Elevating brands across the globe with data-driven digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">SEO & Content</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding & Creative</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-sm text-brand-light mb-4">Get the latest insights in digital marketing delivered to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 text-brand-primary rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-brand-accent px-4 py-2 rounded-r-md hover:bg-brand-light transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-accent pt-8 text-center text-sm text-brand-light">
          <p>&copy; {new Date().getFullYear()} Worldclass Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
