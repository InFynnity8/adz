import { Button } from "@/components/ui/button";
import googleLogo from "../../assets/google2.png";
import metaLogo from "../../assets/meta3.png";
import microsoftLogo from "../../assets/microsoft.webp";
import { Link } from "react-router-dom";
import womanOne from "../../assets/woman.webp";
import { BarChart2, ArrowRight, Target, Settings, Globe, TrendingUp, Rocket } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="">

    <div className="bg-violet-100 min-h-screen items-center pt-35 px-5 xl:px-20 flex lg:items-start xl:items-start flex-col xl:flex-row lg:flex-row justify-between">
      <div className="flex-3 mr-10">
        <h1 className="text-[38px] leading-10 md:text-[35px] lg:text-[42px] xl:text-[48px] font-bold lg:leading-11 xl:leading-13">
          Improve your PPC efficiency and Performance with ease
        </h1>
        <p className=" my-7">
          Stay on top of your Google, Microsoft and Facebook Ads campaigns with
          our easy-to-implement Performance Reports and smart recommendations
          that improve account health and performance.
        </p>
        <Link to="/signup">
          <Button className="rounded-4xl w-28 cursor-pointer">Sign Up</Button>
        </Link>
        {/* sponsors */}
        <div className="flex items-center justify-between w-28  my-7">
          <img src={googleLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={metaLogo} alt="google" className="w-24 h-13 mr-5" />
          <img src={microsoftLogo} alt="google" className="w-24 h-13 mr-5" />
        </div>
      </div>
      {/* image */}
      <div className="flex-2 h-[60vh]">
        <img src={womanOne} alt="woman" className="xl:w-[500px] md:w-[400px] w-[380px]"/>
      </div>
    </div>
      <div className="px-5 xl:px-20 ">
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-gray-600">
              AdzConnect brings together all the tools you need to create, manage, and optimize your advertising campaigns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-purple-light rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="text-adzconnect-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reporting and analytics to measure performance across all your advertising channels.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Custom dashboards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Real-time metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Advanced reporting</span>
                </li>
              </ul>
              <Link to="/features/analytics" className="text-adzconnect-purple hover:text-purple-700 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-blue-light rounded-lg flex items-center justify-center mb-4">
                <Target className="text-adzconnect-blue w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Targeting</h3>
              <p className="text-gray-600 mb-4">
                Reach the right audience with precise targeting options that maximize your ad spend effectiveness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Audience segmentation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Lookalike audiences</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Behavioral targeting</span>
                </li>
              </ul>
              <Link to="/features/targeting" className="text-adzconnect-blue hover:text-blue-600 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-purple-light rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-adzconnect-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation Tools</h3>
              <p className="text-gray-600 mb-4">
                Save time and improve results with powerful automation features for your ad campaigns.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Automated bidding</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Budget optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">A/B testing automation</span>
                </li>
              </ul>
              <Link to="/features/automation" className="text-adzconnect-purple hover:text-purple-700 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-blue-light rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-adzconnect-blue w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Channel Management</h3>
              <p className="text-gray-600 mb-4">
                Centralize your advertising efforts across all major platforms and channels.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Google, Facebook, LinkedIn, TikTok</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Unified dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Cross-platform reporting</span>
                </li>
              </ul>
              <Link to="/features/multi-channel" className="text-adzconnect-blue hover:text-blue-600 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-purple-light rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-adzconnect-purple w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Get AI-powered recommendations to improve your campaign performance and ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">AI-driven insights</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">ROAS optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Performance alerts</span>
                </li>
              </ul>
              <Link to="/features/optimization" className="text-adzconnect-purple hover:text-purple-700 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-adzconnect-blue-light rounded-lg flex items-center justify-center mb-4">
                <Rocket className="text-adzconnect-blue w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campaign Builder</h3>
              <p className="text-gray-600 mb-4">
                Create and launch campaigns quickly with our intuitive drag-and-drop builder.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Drag-and-drop interface</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Pre-built templates</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="h-4 w-4 text-adzconnect-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Quick deployment</span>
                </li>
              </ul>
              <Link to="/features/campaign-builder" className="text-adzconnect-blue hover:text-blue-600 inline-flex items-center font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 xl:-mx-20 -mx-5 px-5 xl:px-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Analytics at Your Fingertips
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Make data-driven decisions with our comprehensive analytics dashboard. Track performance, identify trends, and uncover insights to optimize your campaigns.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg className="h-5 w-5 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Real-time reporting</span>
                    <p className="text-gray-600 mt-1">Get up-to-the-minute data on your campaign performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg className="h-5 w-5 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Custom dashboards</span>
                    <p className="text-gray-600 mt-1">Create tailored views with the metrics that matter most to you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg className="h-5 w-5 text-adzconnect-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Automated insights</span>
                    <p className="text-gray-600 mt-1">AI-powered recommendations to improve campaign performance.</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="bg-blue-950 hover:bg-primary">
                <Link to="/signup">Explore Analytics Features</Link>
              </Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                alt="Analytics Dashboard" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integrations & Compatibility
            </h2>
            <p className="text-lg text-gray-600">
              AdzConnect works seamlessly with all the platforms and tools you already use.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png" alt="Google Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">Google Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-2019-1597680-1350125.png" alt="Facebook Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">Facebook Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-162-498418.png" alt="LinkedIn Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">LinkedIn Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://www.pngplay.com/wp-content/uploads/9/TikTok-Logo-Download-Free-PNG.png" alt="TikTok Ads" className="w-36 h-36 mx-auto mb-3" />
                <p className="font-medium">TikTok Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-241-721979.png" alt="Twitter Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">Twitter Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-1868978-1583142.png" alt="Instagram Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">Instagram Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-bing-1-283043.png" alt="Bing Ads" className="w-16 h-16 mx-auto mb-3" />
                <p className="font-medium">Bing Ads</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/468/non_2x/pinterest-logo-pinterest-transparent-free-png.png" alt="Pinterest Ads" className="w-28 h-28 mx-auto mb-3" />
                <p className="font-medium">Pinterest Ads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black xl:-mx-20 -mx-5 px-5 xl:px-20  text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Advertising?
            </h2>
            <p className="text-xl mb-10 text-gray-300">
              Experience the power of AdzConnect with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:text-white hover:bg-primary px-8 py-6 text-lg">
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg">
                <Link to="/signup">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default LandingPage;
