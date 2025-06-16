
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import { 
  User, 
  Settings, 
  Heart, 
  Target, 
  Award,
  Calendar,
  Droplets,
  Edit,
  Save,
  Camera
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    age: '28',
    weight: '65',
    height: '165',
    goal: '2000',
    joinDate: '2024-01-15'
  });

  const favoriteRecipes = [
    { id: '1', name: 'Cucumber Mint Detox', saves: 45 },
    { id: '2', name: 'Lemon Ginger Boost', saves: 38 },
    { id: '3', name: 'Berry Antioxidant Fusion', saves: 42 }
  ];

  const achievements = [
    { name: '7-Day Streak', description: 'Tracked intake for 7 consecutive days', icon: Target, earned: true },
    { name: 'Goal Crusher', description: 'Reached daily goal 10 times', icon: Award, earned: true },
    { name: 'Recipe Explorer', description: 'Tried 5 different recipes', icon: Heart, earned: true },
    { name: 'Hydration Hero', description: 'Logged 50L total intake', icon: Droplets, earned: false },
    { name: 'Monthly Master', description: 'Perfect month of tracking', icon: Calendar, earned: false }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving user info:', userInfo);
  };

  return (
    <div className="min-h-screen bg-wellness-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Your <span className="bg-gradient-to-r from-mint to-ocean bg-clip-text text-transparent">Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your wellness journey and track your progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="wellness-shadow border-0">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&face" />
                    <AvatarFallback className="text-2xl bg-mint text-white">SC</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <p className="text-muted-foreground">{userInfo.email}</p>
                <Badge className="mt-2 wellness-gradient text-white">
                  Member since {new Date(userInfo.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-mint/10 rounded-lg">
                    <div className="text-2xl font-bold text-mint">47</div>
                    <div className="text-sm text-muted-foreground">Recipes Tried</div>
                  </div>
                  <div className="p-3 bg-ocean/10 rounded-lg">
                    <div className="text-2xl font-bold text-ocean">156L</div>
                    <div className="text-sm text-muted-foreground">Total Intake</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="info" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="info" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Info</span>
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Favorites</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">Achievements</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="info">
                <Card className="wellness-shadow border-0">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    >
                      {isEditing ? (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save
                        </>
                      ) : (
                        <>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            value={userInfo.email}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            value={userInfo.age}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="weight">Weight (kg)</Label>
                          <Input
                            id="weight"
                            value={userInfo.weight}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, weight: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="height">Height (cm)</Label>
                          <Input
                            id="height"
                            value={userInfo.height}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, height: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                        <div>
                          <Label htmlFor="goal">Daily Goal (ml)</Label>
                          <Input
                            id="goal"
                            value={userInfo.goal}
                            onChange={(e) => setUserInfo(prev => ({ ...prev, goal: e.target.value }))}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorite Recipes */}
              <TabsContent value="favorites">
                <Card className="wellness-shadow border-0">
                  <CardHeader>
                    <CardTitle>Favorite Recipes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {favoriteRecipes.map((recipe) => (
                        <div key={recipe.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 wellness-gradient rounded-full flex items-center justify-center">
                              <Heart className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">{recipe.name}</p>
                              <p className="text-sm text-muted-foreground">{recipe.saves} people saved this</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Recipe
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Achievements */}
              <TabsContent value="achievements">
                <Card className="wellness-shadow border-0">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index} 
                          className={`p-4 rounded-lg border-2 transition-all ${
                            achievement.earned 
                              ? 'border-mint bg-mint/10' 
                              : 'border-muted bg-muted/30'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              achievement.earned ? 'wellness-gradient' : 'bg-muted'
                            }`}>
                              <achievement.icon className={`h-5 w-5 ${
                                achievement.earned ? 'text-white' : 'text-muted-foreground'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-medium ${
                                achievement.earned ? 'text-mint' : 'text-muted-foreground'
                              }`}>
                                {achievement.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                              {achievement.earned && (
                                <Badge className="mt-2 bg-mint text-white">Earned</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings */}
              <TabsContent value="settings">
                <Card className="wellness-shadow border-0">
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Daily intake reminders</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Recipe recommendations</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Achievement notifications</span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Share progress with friends</span>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Public profile visibility</span>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-4">Account</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Export Data
                        </Button>
                        <Button variant="destructive" className="w-full justify-start">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
