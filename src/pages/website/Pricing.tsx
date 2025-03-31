import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };
  
  // Pricing data
  const pricingData = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams just getting started.",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "5 ad accounts",
        "Basic analytics",
        "Campaign management",
        "Email support",
        "Standard reporting",
      ],
      tooltips: {
        "Basic analytics": "View essential metrics for your campaigns",
        "Campaign management": "Create and edit campaigns across platforms",
      },
      cta: "Start Free Trial",
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced marketing needs.",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "15 ad accounts",
        "Advanced analytics",
        "Campaign management",
        "Priority email support",
        "Custom reporting",
        "Ad automation",
        "Performance recommendations"
      ],
      tooltips: {
        "Advanced analytics": "Detailed metrics and custom dashboards",
        "Ad automation": "Schedule and automate campaign adjustments",
        "Performance recommendations": "AI-driven suggestions to improve campaigns",
      },
      cta: "Start Free Trial",
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large teams and agencies managing multiple clients.",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Unlimited ad accounts",
        "Enterprise analytics",
        "Campaign management",
        "24/7 premium support",
        "Custom reporting",
        "Ad automation",
        "Performance recommendations",
        "White labeling",
        "API access",
        "Dedicated account manager"
      ],
      tooltips: {
        "Enterprise analytics": "Deep insights with advanced segmentation",
        "White labeling": "Custom branding for client dashboards",
        "API access": "Integrate with your existing tools and workflows",
      },
      cta: "Contact Sales",
      popular: false,
      color: "blue"
    }
  ];

  return (
<div className='min-h-screen pt-28 px-20 bg-slate-50'>      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-adzconnect-purple-light to-adzconnect-blue-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing Plans for Every Business
            </h1>
            <p className="text-xl mb-10 text-gray-700">
              Choose the plan that works best for your advertising needs. All plans come with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-10">
        <div className="container-custom">
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'font-semibold text-adzconnect-purple' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              onClick={toggleBilling}
              className="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-adzconnect-purple"
            >
              <span
                className={`pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-9' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'font-semibold text-adzconnect-purple' : 'text-gray-500'}`}>
              Annual <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">Save 20%</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => (
              <div key={index} className={`relative rounded-xl bg-white border ${plan.popular ? 'border-adzconnect-purple shadow-lg' : 'border-gray-200'} overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-adzconnect-purple text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">/ month</span>
                    {isAnnual && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </div>
                    )}
                  </div>
                  <Button 
                    asChild 
                    className={`w-full bg-blue-950 ${plan.color === 'purple' ? 'bg-blue-950 hover:bg-primary' : 'bg-blue-950 hover:bg-blue-600'}`}
                  >
                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">{plan.cta}</Link>
                    ) : (
                      <Link to="/signup">{plan.cta}</Link>
                    )}
                  </Button>
                </div>
                <div className="bg-gray-50 p-6">
                  <p className="font-semibold text-gray-800 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">
                          {feature}
                          {plan.tooltips[feature] && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="inline-block ml-1 cursor-help">
                                    <HelpCircle className="w-4 h-4 inline text-gray-400" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs">
                                  <p>{plan.tooltips[feature]}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be applied immediately, and we'll prorate your charges accordingly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also accept bank transfers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">
                No, there are no setup fees for any of our plans. You can start using AdzConnect immediately after signing up.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 14-day money-back guarantee. If you're not satisfied with AdzConnect within the first 14 days, contact us for a full refund.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">What platforms do you support?</h3>
              <p className="text-gray-600">
                AdzConnect supports all major advertising platforms, including Google Ads, Facebook/Instagram Ads, LinkedIn Ads, TikTok Ads, Twitter Ads, and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Is there a contract or commitment?</h3>
              <p className="text-gray-600">
                No, all our plans are subscription-based with no long-term contracts. You can cancel at any time without penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black xl:-mx-20 -mx-5 px-5 xl:px-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-adzconnect-purple to-adzconnect-blue rounded-2xl p-10 text-white text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still have questions?
            </h2>
            <p className="text-xl mb-8">
              Our team is here to help you find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:text-white hover:bg-primary px-8 py-6 text-lg">
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg hover:text-white">
                <Link to="/signup">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;