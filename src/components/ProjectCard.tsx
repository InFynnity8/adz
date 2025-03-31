import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Clock, Settings } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    name: string;
    status: string;
    performance: string;
    budget: string;
    lastUpdated: string;
    channels: string[];
    progress: number;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  // Helper functions for styling based on status and performance
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-amber-100 text-amber-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceIndicator = (performance: string) => {
    switch (performance) {
      case 'good':
        return 'bg-green-500';
      case 'average':
        return 'bg-amber-500';
      case 'needs attention':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.name}</CardTitle>
          <Badge className={getStatusColor(project.status)}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Performance</span>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${getPerformanceIndicator(project.performance)}`}></span>
              <span className="text-sm font-medium">
                {project.performance.charAt(0).toUpperCase() + project.performance.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Budget</span>
            <span className="text-sm font-medium">{project.budget}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>Updated {project.lastUpdated}</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">{project.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-adzconnect-purple"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <span className="text-sm text-muted-foreground block mb-2">Channels</span>
            <div className="flex flex-wrap gap-2">
              {project.channels.map((channel, index) => (
                <Badge key={index} variant="outline" className="bg-adzconnect-purple-light text-adzconnect-purple border-none">
                  {channel}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <BarChart3 size={16} className="mr-2" />
          View Reports
        </Button>
        <Button variant="ghost" size="sm">
          <Settings size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;