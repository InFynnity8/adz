
import React from 'react';
import ProjectsList from '@/components/ProjectList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Projects = () => {
  return (
    <div className="container-custom pb-16 pt-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-xl md:text-2xl font-medium mb-2">Your Projects</h1>
          <p className="text-muted-foreground text-lg">Manage and track all your marketing campaigns in one place</p>
        </div>
        <Button className="mt-4 md:mt-0" size="lg">
          <Plus size={18} />
          New Project
        </Button>
      </div>
      
      <ProjectsList />
    </div>
  );
};

export default Projects;