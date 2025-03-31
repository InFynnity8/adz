
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart, PieChart } from 'lucide-react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <div className="adzooma-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
            <p className="text-slate-500 mt-1">View and generate reports for your advertising accounts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Performance Reports</CardTitle>
                <LineChart className="h-5 w-5 text-adzooma-blue" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">View campaign performance metrics and analytics.</p>
                <button className="mt-4 px-4 py-2 bg-adzooma-blue text-white rounded hover:bg-adzooma-darkblue transition-colors">
                  Generate Report
                </button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Budget Reports</CardTitle>
                <BarChart className="h-5 w-5 text-adzooma-blue" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">Track spending and budget allocation across campaigns.</p>
                <button className="mt-4 px-4 py-2 bg-adzooma-blue text-white rounded hover:bg-adzooma-darkblue transition-colors">
                  Generate Report
                </button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Audience Reports</CardTitle>
                <PieChart className="h-5 w-5 text-adzooma-blue" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-500">Analyze audience demographics and engagement metrics.</p>
                <button className="mt-4 px-4 py-2 bg-adzooma-blue text-white rounded hover:bg-adzooma-darkblue transition-colors">
                  Generate Report
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
