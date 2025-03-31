
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface CampaignCardProps {
  name: string;
  platform: 'google' | 'facebook' | 'microsoft';
  status: 'active' | 'paused' | 'ended';
  budget: string;
  spent: string;
  ctr: number;
  conversions: number;
  performance?: 'up' | 'down' | 'warning';
  className?: string;
}

const platformColors = {
  google: 'text-blue-600',
  facebook: 'text-blue-700',
  microsoft: 'text-blue-500'
};

const statusColors = {
  active: 'bg-green-100 text-green-800',
  paused: 'bg-amber-100 text-amber-800',
  ended: 'bg-slate-100 text-slate-800'
};

const performanceIcons = {
  up: <TrendingUp className="h-5 w-5 text-green-500" />,
  down: <TrendingDown className="h-5 w-5 text-red-500" />,
  warning: <AlertCircle className="h-5 w-5 text-amber-500" />
};

const CampaignCard: React.FC<CampaignCardProps> = ({
  name,
  platform,
  status,
  budget,
  spent,
  ctr,
  conversions,
  performance,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden h-full", className)}>
      <CardContent className="p-0">
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-slate-900 truncate max-w-[70%]">{name}</h3>
            <Badge variant="outline" className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          <div className={cn("text-sm mt-1", platformColors[platform])}>
            {platform.charAt(0).toUpperCase() + platform.slice(1)} Ads
          </div>
        </div>
        
        <div className="p-5 bg-slate-50">
          <div className="flex justify-between mb-4">
            <div>
              <div className="text-sm text-slate-500 mb-1">Daily Budget</div>
              <div className="font-medium flex items-center">
                <CircleDollarSign className="h-4 w-4 mr-1 text-slate-700" />
                {budget}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500 mb-1">Spent Today</div>
              <div className="font-medium text-slate-900">{spent}</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-slate-500 mb-1">CTR</div>
              <div className="font-medium text-slate-900">{ctr}%</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-500 mb-1">Conversions</div>
              <div className="font-medium text-slate-900">{conversions}</div>
            </div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm border border-slate-100">
              {performance && performanceIcons[performance]}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignCard;
