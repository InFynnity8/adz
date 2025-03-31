
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin, Pencil } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { EditProfileForm } from '@/components/EditProfileForm';
import AccountSettings  from '@/components/AccountSettings';
import { toast } from 'sonner';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio?: string;
  avatarUrl?: string;
  avatarFallback: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    location: 'New York, USA',
    avatarFallback: 'JD',
    bio: ''
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = (updatedData: ProfileData) => {
    setProfileData({ ...profileData, ...updatedData });
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="min-h-screen">
      <main>
        <div className="adzooma-container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
            <p className="text-slate-500 mt-1">Manage your account settings and preferences.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={profileData.avatarUrl || "/placeholder.svg"} />
                    <AvatarFallback>{profileData.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{profileData.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{profileData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{profileData.location}</span>
                    </div>
                    {profileData.bio && (
                      <div className="mt-2 text-slate-600">
                        <p>{profileData.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <Button onClick={handleEditProfile}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <AccountSettings 
              accountType="Premium"
              memberSince="January 2023"
              lastLogin="Today"
            />
          </div>
        </div>
      </main>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <EditProfileForm 
            defaultValues={{
              name: profileData.name,
              email: profileData.email,
              phone: profileData.phone,
              location: profileData.location,
              bio: profileData.bio || ''
            }}
            onSubmit={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
