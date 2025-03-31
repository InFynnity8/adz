
import React from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
