
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <div className="adzooma-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">About Adzooma Connect</h1>
            <p className="text-slate-500 mt-1">Learn more about our platform and mission.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-adzooma-blue" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Adzooma Connect helps businesses streamline their digital advertising efforts across multiple platforms, 
                  providing powerful tools for campaign management and optimization.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-adzooma-blue" />
                  Who We Serve
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  From small businesses to enterprise organizations, we provide solutions that help marketers 
                  and agencies manage their advertising campaigns more effectively.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-adzooma-blue" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe in transparency, innovation, and customer success. Our platform is built on these 
                  core values to deliver the best possible experience for our users.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-adzooma-blue" />
                  Global Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  With users across the globe, we're committed to providing a platform that helps businesses 
                  succeed in digital advertising, regardless of their location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
