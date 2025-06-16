
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { 
  Droplets, 
  Plus, 
  Target, 
  TrendingUp, 
  Calendar,
  Clock,
  Award,
  Zap
} from 'lucide-react';

interface IntakeEntry {
  id: string;
  amount: number;
  recipe: string;
  time: string;
  date: string;
}

const Tracker = () => {
  const [dailyGoal] = useState(2000); // ml
  const [todayIntake, setTodayIntake] = useState(1200); // ml
  const [newAmount, setNewAmount] = useState('');
  const [newRecipe, setNewRecipe] = useState('');

  const [entries, setEntries] = useState<IntakeEntry[]>([
    {
      id: '1',
      amount: 500,
      recipe: 'Cucumber Mint Detox',
      time: '08:30',
      date: '2024-06-12'
    },
    {
      id: '2',
      amount: 400,
      recipe: 'Lemon Ginger Boost',
      time: '12:15',
      date: '2024-06-12'
    },
    {
      id: '3',
      amount: 300,
      recipe: 'Berry Antioxidant Fusion',
      time: '15:45',
      date: '2024-06-12'
    }
  ]);

  const progressPercentage = (todayIntake / dailyGoal) * 100;
  const remainingIntake = Math.max(0, dailyGoal - todayIntake);

  const handleAddEntry = () => {
    if (newAmount && newRecipe) {
      const amount = parseInt(newAmount);
      const newEntry: IntakeEntry = {
        id: Date.now().toString(),
        amount,
        recipe: newRecipe,
        time: new Date().toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        date: new Date().toISOString().split('T')[0]
      };
      
      setEntries([newEntry, ...entries]);
      setTodayIntake(prev => prev + amount);
      setNewAmount('');
      setNewRecipe('');
    }
  };

  const weeklyData = [
    { day: 'Mon', intake: 1800, goal: 2000 },
    { day: 'Tue', intake: 2200, goal: 2000 },
    { day: 'Wed', intake: 1600, goal: 2000 },
    { day: 'Thu', intake: 2100, goal: 2000 },
    { day: 'Fri', intake: 1900, goal: 2000 },
    { day: 'Sat', intake: 2300, goal: 2000 },
    { day: 'Today', intake: todayIntake, goal: 2000 }
  ];

  return (
    <div className="min-h-screen bg-wellness-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hydration <span className="bg-gradient-to-r from-mint to-ocean bg-clip-text text-transparent">Tracker</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your daily detox water intake and track your wellness journey with detailed insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tracking Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Progress */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="mr-2 h-6 w-6 text-mint" />
                  Today's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Progress Circle */}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full wellness-gradient p-1">
                        <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{Math.round(progressPercentage)}%</div>
                            <div className="text-sm text-muted-foreground">Complete</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg">
                        <span className="font-bold text-mint">{todayIntake}ml</span> of{' '}
                        <span className="font-bold">{dailyGoal}ml</span>
                      </p>
                      <p className="text-muted-foreground">
                        {remainingIntake > 0 ? `${remainingIntake}ml remaining` : 'Goal achieved! 🎉'}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{todayIntake}ml / {dailyGoal}ml</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add New Entry */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Plus className="mr-2 h-5 w-5 text-ocean" />
                  Log Intake
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Amount (ml)"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    type="number"
                  />
                  <Input
                    placeholder="Recipe name"
                    value={newRecipe}
                    onChange={(e) => setNewRecipe(e.target.value)}
                  />
                  <Button 
                    onClick={handleAddEntry}
                    className="wellness-gradient"
                    disabled={!newAmount || !newRecipe}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Entry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Today's Entries */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-lime" />
                  Today's Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {entries.length > 0 ? (
                    entries.map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 wellness-gradient rounded-full flex items-center justify-center">
                            <Droplets className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{entry.recipe}</p>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {entry.time}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-mint font-medium">
                          {entry.amount}ml
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Droplets className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No entries logged yet today.</p>
                      <p className="text-sm">Start tracking your detox water intake!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Overview */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-ocean" />
                  Week Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyData.map((day, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className={day.day === 'Today' ? 'font-medium text-mint' : ''}>
                          {day.day}
                        </span>
                        <span className="text-muted-foreground">
                          {day.intake}ml
                        </span>
                      </div>
                      <Progress 
                        value={(day.intake / day.goal) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Award className="mr-2 h-5 w-5 text-lime" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-mint/10 rounded-lg">
                  <div className="text-2xl font-bold text-mint">7</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-ocean/10 rounded-lg">
                    <div className="text-lg font-bold text-ocean">14.2L</div>
                    <div className="text-xs text-muted-foreground">This Week</div>
                  </div>
                  <div className="text-center p-3 bg-lime/10 rounded-lg">
                    <div className="text-lg font-bold text-lime">95%</div>
                    <div className="text-xs text-muted-foreground">Avg Goal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-mint" />
                  Quick Add
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    setNewAmount('250');
                    setNewRecipe('Plain Water');
                  }}
                >
                  <Droplets className="mr-2 h-4 w-4" />
                  250ml Plain Water
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    setNewAmount('500');
                    setNewRecipe('Lemon Water');
                  }}
                >
                  <Droplets className="mr-2 h-4 w-4" />
                  500ml Lemon Water
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    setNewAmount('350');
                    setNewRecipe('Detox Blend');
                  }}
                >
                  <Droplets className="mr-2 h-4 w-4" />
                  350ml Detox Blend
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
