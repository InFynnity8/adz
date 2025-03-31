
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check, Lightbulb, Heart, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className='px-5 xl:px-20 bg-slate-50'>
      {/* Hero Section */}
      <section className="pt-36 pb-20 text-blue-950 ">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AdzConnect
            </h1>
            <p className="text-xl mb-6 text-blue-950">
              We're on a mission to simplify advertising management and help businesses achieve better results from their marketing efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AdzConnect was founded in 2020 by a team of digital marketing experts who were frustrated with the fragmented nature of advertising tools. We saw firsthand how marketers and agencies struggled to manage campaigns across multiple platforms, wasting time switching between tools and missing opportunities to optimize performance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We set out to build a solution that would unify the advertising landscape—a platform where marketers could manage all their campaigns in one place, gain valuable insights, and leverage automation to improve results.
              </p>
              <p className="text-lg text-gray-600">
                Today, AdzConnect helps thousands of businesses and agencies worldwide to streamline their advertising workflows and maximize their return on ad spend. We're constantly innovating and expanding our platform to meet the evolving needs of modern marketers.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="Team working together" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The guiding principles that drive everything we do at AdzConnect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly pushing the boundaries of what's possible in advertising technology. We invest heavily in R&D to ensure our platform stays ahead of industry trends.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to providing exceptional support and ensuring that our customers achieve their advertising goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparency, honesty, and ethical business practices. We're committed to building long-term relationships based on trust and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              The passionate people behind AdzConnect who drive our vision forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt="Michael Thompson"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Thompson</h3>
              <p className="text-adzconnect-purple font-medium mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600">
                Former Google Ads executive with 15+ years of experience in digital marketing and ad tech.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jennifer Chen"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jennifer Chen</h3>
              <p className="text-adzconnect-purple font-medium mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600">
                Technology innovator with a background in AI and machine learning from MIT.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="David Rodriguez"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Rodriguez</h3>
              <p className="text-adzconnect-purple font-medium mb-4">COO</p>
              <p className="text-gray-600">
                Operations expert who previously scaled three successful SaaS companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950 text-white xl:-mx-20 -mx-5 px-5 xl:px-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">5K+</p>
              <p className="text-xl text-gray-300">Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">$2B+</p>
              <p className="text-xl text-gray-300">Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
              <p className="text-xl text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">35+</p>
              <p className="text-xl text-gray-300">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="Team meeting" 
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose AdzConnect
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're more than just another advertising tool. We're a partner in your success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="text-adzconnect-purple w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">All-in-one platform</p>
                    <p className="text-gray-600">Manage all your advertising in one place, saving time and reducing complexity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="text-adzconnect-purple w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Data-driven insights</p>
                    <p className="text-gray-600">Make informed decisions with comprehensive analytics and reporting.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="text-adzconnect-purple w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">AI-powered optimization</p>
                    <p className="text-gray-600">Improve results with intelligent recommendations and automation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="text-adzconnect-purple w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Exceptional support</p>
                    <p className="text-gray-600">Get help when you need it from our team of advertising experts.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="xl:-mx-20 -mx-5 px-5 xl:px-20 py-20 bg-slate-950 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the AdzConnect Community
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Experience the difference of an advertising platform built by marketers, for marketers. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:text-white hover:bg-primary px-8 py-6 text-lg">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent hover:text-white border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
