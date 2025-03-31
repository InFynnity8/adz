
import React from 'react';
import { cn } from '@/lib/utils';
import MetricsCard from './MetricsCard';
import ConnectionCard from './ConnectionCard';
import CampaignCard from './CampaignCard';
import { LineChart, BarChart, Calendar, DollarSign, MousePointer, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const { toast } = useToast();
  
  const handleConnect = (platform: string) => {
    toast({
      title: "Connection initiated",
      description: `Connecting to ${platform} Ads. This would open an authentication window.`,
    });
  };
  
  return (
    <div className={cn("adzooma-container py-8", className)}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's an overview of your advertising accounts.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricsCard 
          title="Total Spend"
          value="$12,345.67"
          change={5.2}
          icon={<DollarSign className="h-5 w-5 text-adzooma-blue" />}
        />
        <MetricsCard 
          title="Impressions"
          value="1.2M"
          change={-2.8}
          icon={<Users className="h-5 w-5 text-adzooma-darkblue" />}
        />
        <MetricsCard 
          title="Clicks"
          value="45,678"
          change={8.7}
          icon={<MousePointer className="h-5 w-5 text-adzooma-blue" />}
        />
        <MetricsCard 
          title="Conversions"
          value="1,234"
          change={12.3}
          icon={<LineChart className="h-5 w-5 text-adzooma-darkblue" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Connected Accounts</h2>
          <div className="space-y-4">
            <ConnectionCard 
              platform="google" 
              connected={true} 
              lastSynced="Today at 9:30 AM"
              onConnect={() => handleConnect('Google')}
            />
            <ConnectionCard 
              platform="facebook" 
              connected={false}
              onConnect={() => handleConnect('Facebook')}
            />
            <ConnectionCard 
              platform="microsoft" 
              connected={false}
              onConnect={() => handleConnect('Microsoft')}
            />
          </div>
        </div>
        
        <div className="col-span-1 lg:col-span-2">
          <Tabs defaultValue="performance" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-800">Campaign Performance</h2>
              <TabsList>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="performance" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Performance Overview</CardTitle>
                  <CardDescription>Daily clicks and conversions for the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center bg-slate-50">
                  <div className="text-center text-slate-500">
                    <BarChart className="h-10 w-10 mx-auto mb-3 text-adzooma-blue opacity-70" />
                    <p>Performance chart would appear here with real data</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-0">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Analytics Overview</CardTitle>
                  <CardDescription>Conversion rate and cost per acquisition</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center bg-slate-50">
                  <div className="text-center text-slate-500">
                    <LineChart className="h-10 w-10 mx-auto mb-3 text-adzooma-blue opacity-70" />
                    <p>Analytics chart would appear here with real data</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Active Campaigns</h2>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-slate-500">
              <Calendar className="h-4 w-4 inline mr-1" />
              Last 30 days
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CampaignCard
            name="Summer Sale 2023"
            platform="google"
            status="active"
            budget="$50.00"
            spent="$32.45"
            ctr={2.7}
            conversions={15}
            performance="up"
          />
          <CampaignCard
            name="Product Launch - New Widget XYZ"
            platform="facebook"
            status="active"
            budget="$75.00"
            spent="$45.23"
            ctr={1.9}
            conversions={8}
            performance="warning"
          />
          <CampaignCard
            name="Holiday Special Promo"
            platform="google"
            status="paused"
            budget="$100.00"
            spent="$0.00"
            ctr={0}
            conversions={0}
          />
          <CampaignCard
            name="Brand Awareness Campaign"
            platform="microsoft"
            status="active"
            budget="$65.00"
            spent="$42.12"
            ctr={1.5}
            conversions={6}
            performance="down"
          />
          <CampaignCard
            name="Lead Generation - Enterprise"
            platform="google"
            status="active"
            budget="$120.00"
            spent="$87.65"
            ctr={3.2}
            conversions={24}
            performance="up"
          />
          <CampaignCard
            name="Remarketing Campaign Q2"
            platform="facebook"
            status="ended"
            budget="$80.00"
            spent="$80.00"
            ctr={2.5}
            conversions={18}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
