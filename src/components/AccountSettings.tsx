
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Settings, Bell, Shield, LogOut } from 'lucide-react';

const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

const notificationSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  accountAlerts: z.boolean()
});

type NotificationFormValues = z.infer<typeof notificationSchema>;

interface AccountSettingsProps {
  accountType: string;
  memberSince: string;
  lastLogin: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ 
  accountType, 
  memberSince, 
  lastLogin 
}) => {
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
  const [isPrivacyDialogOpen, setIsPrivacyDialogOpen] = useState(false);

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  });

  const notificationForm = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      emailNotifications: true,
      marketingEmails: false,
      accountAlerts: true
    }
  });

  const handlePasswordSubmit = (values: PasswordFormValues) => {
    console.log('Password change submitted:', values);
    // Here you would normally call an API to change the password
    toast.success('Password changed successfully');
    setIsPasswordDialogOpen(false);
    passwordForm.reset();
  };

  const handleNotificationsSubmit = (values: NotificationFormValues) => {
    console.log('Notification settings updated:', values);
    // Here you would normally call an API to update notification settings
    toast.success('Notification preferences updated');
    setIsNotificationsDialogOpen(false);
  };

  const handleLogout = () => {
    // Here you would normally call an API to logout
    toast.info('Logged out successfully');
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium text-sm text-slate-700">Account Type</h3>
            <p className="text-sm text-slate-500">{accountType}</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-slate-700">Member Since</h3>
            <p className="text-sm text-slate-500">{memberSince}</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-slate-700">Last Login</h3>
            <p className="text-sm text-slate-500">{lastLogin}</p>
          </div>
          
          <div className="pt-2 space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              onClick={() => setIsPasswordDialogOpen(true)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Change Password
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setIsNotificationsDialogOpen(true)}
            >
              <Bell className="h-4 w-4 mr-2" />
              Notification Preferences
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setIsPrivacyDialogOpen(true)}
            >
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Security
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Change Password Dialog */}
      <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" type="button" onClick={() => setIsPasswordDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Notification Preferences Dialog */}
      <Dialog open={isNotificationsDialogOpen} onOpenChange={setIsNotificationsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notification Preferences</DialogTitle>
          </DialogHeader>
          <Form {...notificationForm}>
            <form onSubmit={notificationForm.handleSubmit(handleNotificationsSubmit)} className="space-y-4">
              <FormField
                control={notificationForm.control}
                name="emailNotifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Email Notifications</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about account activity via email
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={notificationForm.control}
                name="marketingEmails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Marketing Emails</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about new features and offers
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={notificationForm.control}
                name="accountAlerts"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Account Alerts</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Receive important security and account alerts
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" type="button" onClick={() => setIsNotificationsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Preferences</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Privacy & Security Dialog */}
      <Dialog open={isPrivacyDialogOpen} onOpenChange={setIsPrivacyDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Privacy & Security</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account by requiring a verification code in addition to your password.
              </p>
              <Button variant="outline" className="mt-2">
                Enable 2FA
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Session Management</h3>
              <p className="text-sm text-muted-foreground">
                View and manage your active sessions across different devices.
              </p>
              <Button variant="outline" className="mt-2">
                Manage Sessions
              </Button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Data Privacy</h3>
              <p className="text-sm text-muted-foreground">
                Control how your data is used and download a copy of your personal information.
              </p>
              <Button variant="outline" className="mt-2">
                Data Privacy Settings
              </Button>
            </div>
            <div className="flex justify-end pt-2">
              <Button variant="outline" onClick={() => setIsPrivacyDialogOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccountSettings;
