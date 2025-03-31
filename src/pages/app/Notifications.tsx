
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Clock, MessageSquare, AlertTriangle } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="min-h-screen">
      <main>
        <div className="adzooma-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
            <p className="text-slate-500 mt-1">View and manage your notifications.</p>
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-adzooma-blue" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">Campaign Budget Alert</p>
                      <p className="text-slate-500 text-sm">Your "Summer Sale" campaign is approaching its budget limit.</p>
                      <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> 2 hours ago
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-adzooma-blue mt-1" />
                    <div>
                      <p className="font-medium text-slate-900">New Message</p>
                      <p className="text-slate-500 text-sm">You have a new message regarding your recent campaign optimization.</p>
                      <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> 1 day ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
