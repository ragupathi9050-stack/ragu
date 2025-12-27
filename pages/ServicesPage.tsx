
import React, { useState } from 'react';
import { services } from '../data/mock';
import Button from '../components/ui/Button';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button onClick={onClick} className="w-full flex justify-between items-center py-4 text-left font-semibold text-lg">
                <span>{title}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
                <div className="text-brand-accent">{children}</div>
            </div>
        </div>
    );
};


const ServicesPage: React.FC = () => {
    const [openFaqId, setOpenFaqId] = useState<string | null>(null);
    
    const toggleFaq = (id: string) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-secondary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Services</h1>
          <p className="mt-4 text-xl text-brand-light max-w-3xl mx-auto">
            Integrated digital marketing solutions designed for global impact and measurable results.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                <service.icon className="w-16 h-16 text-brand-accent mb-4" />
                <h2 className="text-4xl font-serif font-bold text-brand-primary">{service.title}</h2>
                <p className="mt-4 text-lg text-brand-accent">{service.overview}</p>
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                <img src={`https://picsum.photos/800/600?random=${index + 10}`} alt={service.title} className="rounded-lg shadow-xl" />
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-3 gap-8">
              {/* Deliverables */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-4">Key Deliverables</h3>
                <ul className="space-y-3">
                  {service.deliverables.map(item => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-4">Our Process</h3>
                <ol className="space-y-4">
                  {service.process.map(step => (
                    <li key={step.step}>
                      <p className="font-bold text-brand-primary">{step.step}. {step.title}</p>
                      <p className="text-sm text-brand-accent ml-5">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQ */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-4">FAQs</h3>
                <div>
                    {service.faqs.map(faq => (
                        <AccordionItem 
                            key={faq.question}
                            title={faq.question}
                            isOpen={openFaqId === `${service.id}-${faq.question}`}
                            onClick={() => toggleFaq(`${service.id}-${faq.question}`)}
                        >
                            <p>{faq.answer}</p>
                        </AccordionItem>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent">
          <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-4xl font-serif font-bold">Ready to Elevate Your Brand?</h2>
              <p className="mt-4 text-xl max-w-2xl mx-auto mb-8">Let's build a strategy that drives growth and delivers results in your target markets.</p>
              <Button as={Link} to="/contact" size="lg" variant="primary" className="bg-white text-brand-primary hover:bg-brand-super-light">
                Get Your Free Proposal
              </Button>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;
