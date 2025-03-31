import React from 'react';
import ProjectCard from './ProjectCard';
import { Plus } from 'lucide-react';

// Sample project data
const projectsData = [
  {
    id: 1,
    name: 'E-commerce Campaign',
    status: 'active',
    performance: 'good',
    budget: '$2,500',
    lastUpdated: '2 days ago',
    channels: ['Google Ads', 'Facebook'],
    progress: 78
  },
  {
    id: 2,
    name: 'Brand Awareness',
    status: 'active',
    performance: 'average',
    budget: '$1,800',
    lastUpdated: '5 days ago',
    channels: ['Facebook', 'Instagram'],
    progress: 45
  },
  {
    id: 3,
    name: 'Lead Generation',
    status: 'paused',
    performance: 'needs attention',
    budget: '$3,200',
    lastUpdated: '1 week ago',
    channels: ['Google Ads', 'LinkedIn'],
    progress: 32
  },
  {
    id: 4,
    name: 'Product Launch',
    status: 'scheduled',
    performance: 'not started',
    budget: '$5,000',
    lastUpdated: 'Yesterday',
    channels: ['Google Ads', 'Facebook', 'Email'],
    progress: 10
  }
];

const ProjectsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
      
      {/* Add Project Card */}
      <div className="border border-dashed border-gray-300 rounded-lg flex items-center justify-center p-8 h-80 cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="text-center">
          <div className="w-16 h-16 bg-adzconnect-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="text-adzconnect-purple" size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">Create New Project</h3>
          <p className="text-muted-foreground">Start a new marketing campaign</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;