
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bell, HelpCircle, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={cn("w-full py-4 bg-white border-b border-slate-200 sticky top-0 z-10", className)}>
      <div className="adzooma-container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-adzooma-blue mr-8">
            adzooma<span className="text-adzooma-darkblue">connect</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={cn(
                "hover:text-adzooma-blue", 
                currentPath === "/" ? "text-slate-700 font-medium" : "text-slate-500"
              )}
            >
              Dashboard
            </Link>
            <Link 
              to="/campaigns" 
              className={cn(
                "hover:text-adzooma-blue", 
                currentPath === "/campaigns" ? "text-slate-700 font-medium" : "text-slate-500"
              )}
            >
              Campaigns
            </Link>
            <Link 
              to="/accounts" 
              className={cn(
                "hover:text-adzooma-blue", 
                currentPath === "/accounts" ? "text-slate-700 font-medium" : "text-slate-500"
              )}
            >
              Accounts
            </Link>
            <Link 
              to="/reports" 
              className={cn(
                "hover:text-adzooma-blue", 
                currentPath === "/reports" ? "text-slate-700 font-medium" : "text-slate-500"
              )}
            >
              Reports
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "hover:text-adzooma-blue", 
                currentPath === "/about" ? "text-slate-700 font-medium" : "text-slate-500"
              )}
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/about">
              <HelpCircle className="h-5 w-5 text-slate-500" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/notifications">
              <Bell className="h-5 w-5 text-slate-500" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/profile">
              <User className="h-5 w-5 text-slate-500" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
