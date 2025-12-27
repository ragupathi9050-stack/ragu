import React from 'react';
// FIX: Imported the 'Globe' icon from lucide-react to resolve a reference error.
import { Eye, Target, Users, Zap, Globe } from 'lucide-react';
import { teamMembers } from '../data/mock';

const AboutPage: React.FC = () => {
    const values = [
        { icon: Target, title: "Client-Centric", description: "Our clients' success is our ultimate metric. We are partners in their growth." },
        { icon: Globe, title: "Global Mindset", description: "We embrace cultural nuances to create strategies that resonate locally." },
        { icon: Zap, title: "Data-Driven", description: "Every decision is backed by data, ensuring optimal performance and ROI." },
        { icon: Users, title: "Radical Collaboration", description: "We believe the best results come from teamwork and open communication." }
    ];
    
    const timeline = [
        { year: "2015", event: "Founded in a small office with a big vision." },
        { year: "2017", event: "Expanded services to include performance marketing." },
        { year: "2019", event: "Opened our first international office in London." },
        { year: "2021", event: "Named 'Fastest Growing Agency' by Marketing Weekly." },
        { year: "2023", event: "Reached 100+ team members across 5 continents." }
    ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-brand-secondary text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">We are worldclass</h1>
          <p className="mt-4 text-xl text-brand-light max-w-3xl mx-auto">
            A collective of passionate marketers, strategists, and creatives connecting brands with global audiences.
          </p>
        </div>
      </section>

      {/* Story, Mission, Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/800/600?random=1" alt="Agency team collaborating" className="rounded-lg shadow-xl" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-primary flex items-center"><Target className="mr-3 w-8 h-8 text-brand-accent"/> Our Mission</h2>
              <p className="mt-2 text-brand-accent text-lg">To empower businesses to transcend borders and achieve sustainable international growth through innovative and data-driven digital marketing.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-primary flex items-center"><Eye className="mr-3 w-8 h-8 text-brand-accent"/> Our Vision</h2>
              <p className="mt-2 text-brand-accent text-lg">To be the world's most trusted partner for brands seeking to make a meaningful impact on the global stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Our Core Values</h2>
            <p className="mt-4 text-lg text-brand-accent">The principles that guide our work, our partnerships, and our culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
                <div key={value.title} className="text-center p-6">
                    <value.icon className="w-12 h-12 text-brand-accent mx-auto mb-4"/>
                    <h3 className="text-xl font-bold font-serif text-brand-primary">{value.title}</h3>
                    <p className="mt-2 text-brand-accent">{value.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Meet the Leadership</h2>
            <p className="mt-4 text-lg text-brand-accent">The minds behind our global strategies and success stories.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(member => (
                <div key={member.name} className="text-center">
                    <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"/>
                    <h3 className="text-xl font-bold font-serif text-brand-primary">{member.name}</h3>
                    <p className="text-brand-accent">{member.role}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary">Our Journey</h2>
                <p className="mt-4 text-lg text-brand-accent">A brief history of our growth and milestones.</p>
            </div>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-1/2 w-0.5 h-full bg-brand-light transform -translate-x-1/2"></div>
                {timeline.map((item, index) => (
                    <div key={item.year} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <p className="text-2xl font-bold font-serif text-brand-primary">{item.year}</p>
                            <p className="text-brand-accent">{item.event}</p>
                        </div>
                        <div className="absolute left-1/2 w-4 h-4 bg-brand-primary rounded-full transform -translate-x-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
