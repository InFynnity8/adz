
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

interface ConnectionCardProps {
  platform: 'google' | 'facebook' | 'microsoft';
  connected: boolean;
  lastSynced?: string;
  className?: string;
  onConnect?: () => void;
}

const platformIcons = {
  google: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
      <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
      <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
      <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
    </svg>
  ),
  facebook: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12C22 6.477 17.523 2 12 2Z" fill="#1877F2"/>
      <path d="M15.893 14.89L16.336 12H13.563V10.124C13.563 9.333 13.95 8.562 15.193 8.562H16.453V6.102C16.453 6.102 15.309 5.907 14.215 5.907C11.93 5.907 10.438 7.291 10.438 9.797V12H7.898V14.89H10.438V21.879C11.052 21.959 11.671 22 12.299 22C12.916 22 13.523 21.959 14.125 21.879V14.89H15.893Z" fill="white"/>
    </svg>
  ),
  microsoft: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4 2H2V11.4H11.4V2Z" fill="#F25022"/>
      <path d="M11.4 12.6H2V22H11.4V12.6Z" fill="#00A4EF"/>
      <path d="M22 2H12.6V11.4H22V2Z" fill="#7FBA00"/>
      <path d="M22 12.6H12.6V22H22V12.6Z" fill="#FFB900"/>
    </svg>
  )
};

const platformNames = {
  google: 'Google Ads',
  facebook: 'Facebook Ads',
  microsoft: 'Microsoft Ads'
};

const ConnectionCard: React.FC<ConnectionCardProps> = ({ 
  platform, 
  connected, 
  lastSynced, 
  className,
  onConnect
}) => {
  return (
    <div className={cn("adzooma-card flex flex-col", className)}>
      <div className="flex items-center mb-4">
        <div className="mr-3">
          {platformIcons[platform]}
        </div>
        <div>
          <h3 className="font-medium text-slate-900">{platformNames[platform]}</h3>
          <div className="flex items-center text-sm mt-1">
            {connected ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">Connected</span>
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4 text-slate-400 mr-1" />
                <span className="text-slate-500">Not connected</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {connected && lastSynced && (
        <div className="text-xs text-slate-500 mb-4">Last synced: {lastSynced}</div>
      )}
      
      <div className="mt-auto">
        <Button 
          variant={connected ? "outline" : "default"}
          className={connected ? "w-full" : "w-full bg-adzooma-blue hover:bg-adzooma-darkblue"}
          onClick={onConnect}
        >
          {connected ? "Refresh Connection" : "Connect Account"}
        </Button>
      </div>
    </div>
  );
};

export default ConnectionCard;
