
import React from 'react';
import Header from '@/components/Header';

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <div className="adzooma-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Campaigns</h1>
            <p className="text-slate-500 mt-1">Manage your advertising campaigns across all platforms.</p>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-slate-700 mb-3">Your Campaign Management Center</h2>
              <p className="text-slate-500 max-w-md mx-auto mb-6">
                View and optimize all your advertising campaigns in one place.
                Connect your accounts to get started.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Campaigns;
