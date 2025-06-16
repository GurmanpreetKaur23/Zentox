
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Leaf, 
  Sparkles, 
  Heart, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface Condition {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  symptoms: string[];
  relatedRecipes: string[];
  tips: string[];
  severity: 'Mild' | 'Moderate' | 'Chronic';
}

const Cures = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const conditions: Condition[] = [
    {
      id: '1',
      name: 'Acne & Skin Issues',
      description: 'Clear your skin naturally with detox waters that help eliminate toxins and reduce inflammation.',
      icon: Sparkles,
      color: 'from-mint to-mint-light',
      symptoms: ['Breakouts', 'Dull skin', 'Inflammation', 'Clogged pores'],
      relatedRecipes: ['1', '3'], // Cucumber Mint, Berry Antioxidant
      tips: [
        'Drink detox water first thing in the morning',
        'Stay consistent for at least 2 weeks to see results',
        'Combine with reduced dairy intake'
      ],
      severity: 'Mild'
    },
    {
      id: '2',
      name: 'Digestive Issues',
      description: 'Soothe your digestive system with gentle, healing detox blends that promote gut health.',
      icon: Heart,
      color: 'from-ocean to-aqua',
      symptoms: ['Bloating', 'Indigestion', 'Constipation', 'Gas'],
      relatedRecipes: ['2', '1'], // Lemon Ginger, Cucumber Mint
      tips: [
        'Drink warm detox water before meals',
        'Avoid drinking large amounts with food',
        'Add probiotic foods to your diet'
      ],
      severity: 'Moderate'
    },
    {
      id: '3',
      name: 'Fatigue & Low Energy',
      description: 'Revitalize your body and boost energy levels with energizing detox water combinations.',
      icon: Zap,
      color: 'from-lime to-sage',
      symptoms: ['Tiredness', 'Mental fog', 'Weakness', 'Poor concentration'],
      relatedRecipes: ['2', '3'], // Lemon Ginger, Berry Antioxidant
      tips: [
        'Drink detox water throughout the day',
        'Ensure adequate sleep alongside hydration',
        'Add natural electrolytes with sea salt'
      ],
      severity: 'Moderate'
    },
    {
      id: '4',
      name: 'Inflammation',
      description: 'Reduce chronic inflammation with anti-inflammatory ingredients and powerful antioxidants.',
      icon: Shield,
      color: 'from-mint to-ocean',
      symptoms: ['Joint pain', 'Swelling', 'Muscle aches', 'Chronic pain'],
      relatedRecipes: ['3', '2'], // Berry Antioxidant, Lemon Ginger
      tips: [
        'Focus on antioxidant-rich ingredients',
        'Maintain consistent daily intake',
        'Combine with anti-inflammatory diet'
      ],
      severity: 'Chronic'
    },
    {
      id: '5',
      name: 'Brain Fog',
      description: 'Enhance mental clarity and cognitive function with brain-boosting detox water recipes.',
      icon: Brain,
      color: 'from-ocean to-mint',
      symptoms: ['Poor focus', 'Memory issues', 'Mental fatigue', 'Confusion'],
      relatedRecipes: ['2', '1'], // Lemon Ginger, Cucumber Mint
      tips: [
        'Hydrate immediately upon waking',
        'Avoid dehydration throughout the day',
        'Include omega-3 rich foods in diet'
      ],
      severity: 'Mild'
    },
    {
      id: '6',
      name: 'Water Retention',
      description: 'Naturally reduce bloating and water retention with diuretic herbs and fruits.',
      icon: Leaf,
      color: 'from-sage to-lime',
      symptoms: ['Bloating', 'Swelling', 'Puffiness', 'Weight fluctuation'],
      relatedRecipes: ['1', '3'], // Cucumber Mint, Berry Antioxidant
      tips: [
        'Reduce sodium intake while increasing detox water',
        'Add natural diuretics like cucumber',
        'Stay active with light exercise'
      ],
      severity: 'Mild'
    }
  ];

  const filteredConditions = conditions.filter(condition =>
    condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    condition.symptoms.some(symptom => 
      symptom.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Mild': return 'bg-mint text-white';
      case 'Moderate': return 'bg-ocean text-white';
      case 'Chronic': return 'bg-lime text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-wellness-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Natural <span className="bg-gradient-to-r from-mint to-ocean bg-clip-text text-transparent">Cures</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover natural remedies for common health conditions using the healing power of detox water. 
            Each condition includes targeted recipes and wellness tips.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conditions or symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Conditions Grid */}
        {filteredConditions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConditions.map((condition) => (
              <Card key={condition.id} className="border-0 wellness-shadow hover:-translate-y-1 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${condition.color} flex items-center justify-center`}>
                      <condition.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={getSeverityColor(condition.severity)}>
                      {condition.severity}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-mint transition-colors">
                    {condition.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Symptoms */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Common Symptoms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {condition.symptoms.map((symptom, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tips Preview */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Quick Tips
                    </h4>
                    <div className="space-y-2">
                      {condition.tips.slice(0, 2).map((tip, index) => (
                        <div key={index} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-mint rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Recipes */}
                  <div>
                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Recommended Recipes
                    </h4>
                    <div className="space-y-2">
                      {condition.relatedRecipes.map((recipeId, index) => (
                        <Link key={index} to={`/recipe/${recipeId}`}>
                          <Button variant="outline" size="sm" className="w-full justify-between text-xs hover:bg-mint hover:text-white hover:border-mint">
                            View Recipe #{recipeId}
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="wellness-gradient w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 opacity-20">
              <Search className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No conditions found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or browse all natural cures.
            </p>
            <Button 
              onClick={() => setSearchTerm('')}
              className="wellness-gradient"
            >
              View All Conditions
            </Button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-card rounded-2xl wellness-shadow">
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-mint flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The information provided here is for educational purposes only and is not intended to replace professional medical advice. 
                Always consult with a healthcare provider before starting any new health regimen, especially if you have existing medical conditions 
                or are taking medications. Detox waters are complementary wellness practices and should not be used as sole treatment for medical conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cures;
