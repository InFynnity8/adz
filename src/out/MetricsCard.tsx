
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ 
  title, 
  value, 
  change, 
  icon = <TrendingUp className="h-5 w-5" />,
  className 
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 bg-slate-50">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="bg-white p-2 rounded-md">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <div className="flex items-center mt-1">
            {isPositive && <ArrowUp className="h-4 w-4 text-green-500 mr-1" />}
            {isNegative && <ArrowDown className="h-4 w-4 text-red-500 mr-1" />}
            <span 
              className={cn(
                "text-sm",
                isPositive && "text-green-500",
                isNegative && "text-red-500",
                !isPositive && !isNegative && "text-slate-500"
              )}
            >
              {isPositive ? '+' : ''}{change}% from previous period
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
