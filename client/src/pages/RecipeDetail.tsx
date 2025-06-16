
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import { sampleRecipes } from '@/data/recipes';
import { 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Share2, 
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Zap
} from 'lucide-react';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = sampleRecipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-wellness-bg">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-muted-foreground mb-8">The recipe you're looking for doesn't exist.</p>
          <Link to="/recipes">
            <Button className="wellness-gradient">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Recipes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-mint text-white';
      case 'Medium': return 'bg-ocean text-white';
      case 'Hard': return 'bg-lime text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-wellness-bg">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/recipes">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </Link>

        {/* Recipe Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img 
              src={`https://images.unsplash.com/${recipe.image}?w=600&h=400&fit=crop`}
              alt={recipe.name}
              className="w-full h-96 object-cover rounded-2xl wellness-shadow"
            />
            <div className="absolute top-4 left-4">
              <Badge className={getDifficultyColor(recipe.difficulty)}>
                {recipe.difficulty}
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{recipe.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{recipe.description}</p>
            </div>

            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{recipe.prepTime} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{recipe.rating}/5</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button className="wellness-gradient flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Save Recipe
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ingredients */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Zap className="mr-2 h-6 w-6 text-mint" />
                  Ingredients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/50">
                      <CheckCircle className="h-5 w-5 text-mint mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">{ingredient.name}</span>
                          <span className="text-sm text-muted-foreground">{ingredient.amount}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{ingredient.benefits}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-mint text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="flex-1 pt-1">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Lightbulb className="mr-2 h-6 w-6 text-ocean" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Health Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-mint mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Facts */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Nutrition Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Calories</span>
                    <span className="font-medium">{recipe.nutritionFacts.calories}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Vitamin C</span>
                    <span className="font-medium">{recipe.nutritionFacts.vitamin_c}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Antioxidants</span>
                    <span className="font-medium">{recipe.nutritionFacts.antioxidants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hydration Level</span>
                    <span className="font-medium">{recipe.nutritionFacts.hydration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="wellness-shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/tracker">
                  <Button variant="outline" className="w-full">
                    Log This Recipe
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Share with Friends
                </Button>
                <Button variant="outline" className="w-full">
                  Print Recipe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
