
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import BottleLogo from '@/components/BottleLogo';
import { 
  BookOpen, 
  Target, 
  Leaf, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Recipe Catalog',
      description: 'Discover hundreds of detox water recipes with detailed benefits and instructions.',
      gradient: 'from-pastel-cucumber to-pastel-mint',
      delay: '0.2s'
    },
    {
      icon: Target,
      title: 'Intake Tracker',
      description: 'Track your daily hydration goals and monitor your wellness journey.',
      gradient: 'from-zen-primary to-zen-accent',
      delay: '0.4s'
    },
    {
      icon: Leaf,
      title: 'Natural Cures',
      description: 'Find natural remedies for common conditions using detox water.',
      gradient: 'from-pastel-peach to-pastel-rose',
      delay: '0.6s'
    }
  ];

  const benefits = [
    'Scientifically-backed detox recipes',
    'Personalized hydration tracking',
    'Natural remedies for common ailments',
    'Progress monitoring and insights',
    'Community support and motivation'
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      text: 'Zentox transformed my hydration habits. I feel more energized and my skin has never looked better!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Marcus Johnson',
      text: 'The natural cures section helped me find the perfect detox blend for my digestive issues.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Elena Rodriguez',
      text: 'Love the intake tracker! It keeps me motivated to reach my daily hydration goals.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-zen-background relative overflow-hidden">
      {/* Floating particles background */}
      <div className="floating-particles fixed inset-0 pointer-events-none"></div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 zen-gradient opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-fade-in">
                  <BottleLogo size="lg" animate={true} />
                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-zen-text-primary">
                    <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Cleanse,</span>
                    <span className="block bg-gradient-to-r from-zen-primary to-zen-accent bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      Hydrate,
                    </span>
                    <span className="block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Heal</span>
                  </h1>
                </div>
                <p className="text-xl text-zen-text-secondary max-w-lg animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Transform your wellness journey with Zentox - your complete guide to detox water recipes, 
                  natural remedies, and mindful hydration tracking.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <Link to="/recipes">
                  <Button size="lg" className="zen-gradient hover:opacity-90 text-lg px-8 text-white border-0 hover-lift">
                    Explore Recipes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/tracker">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-zen-primary text-zen-primary hover:bg-zen-primary hover:text-white transition-all duration-300 hover-lift">
                    Start Tracking
                    <Target className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 zen-veggie-gradient rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative glass-effect rounded-3xl p-8 border border-zen-primary/20 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=600&fit=crop"
                  alt="Detox water with fruits"
                  className="relative rounded-2xl zen-shadow w-full max-w-lg mx-auto"
                />
                <div className="absolute -top-4 -right-4 zen-mint-gradient p-4 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 zen-peach-gradient p-4 rounded-full">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zen-card/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zen-primary to-zen-accent bg-clip-text text-transparent">
              Everything You Need for Wellness
            </h2>
            <p className="text-xl text-zen-text-secondary max-w-2xl mx-auto">
              Zentox combines ancient wisdom with modern tracking to help you achieve optimal hydration and health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group border-0 glass-effect hover-lift transition-all duration-500 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient}`}></div>
                  </div>
                  <div className={`relative w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-zen-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zen-text-secondary leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 zen-gradient opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="text-5xl font-bold mb-6 text-zen-text-primary">
                  Why Choose <span className="bg-gradient-to-r from-zen-primary to-zen-accent bg-clip-text text-transparent">Zentox?</span>
                </h2>
                <p className="text-xl text-zen-text-secondary mb-8">
                  Our platform combines scientific research with traditional wellness practices to deliver proven results.
                </p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 animate-fade-in-up group hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="zen-mint-gradient p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg text-zen-text-primary group-hover:text-zen-primary transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 zen-peach-gradient rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative glass-effect rounded-3xl p-8 hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=600&fit=crop"
                  alt="Healthy lifestyle"
                  className="rounded-2xl zen-shadow"
                />
                <div className="absolute top-4 right-4 bg-zen-accent text-white p-3 rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zen-card/30 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-zen-primary mr-3" />
              <h2 className="text-5xl font-bold bg-gradient-to-r from-zen-primary to-zen-accent bg-clip-text text-transparent">
                What Our Users Say
              </h2>
              <Sparkles className="h-8 w-8 text-zen-accent ml-3" />
            </div>
            <p className="text-xl text-zen-text-secondary">
              Join thousands who have transformed their wellness journey with Zentox
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 glass-effect hover-lift transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-zen-text-primary">{testimonial.name}</p>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-zen-primary text-zen-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-zen-text-secondary italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 zen-veggie-gradient"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white animate-fade-in-up">
            <BottleLogo size="xl" animate={true} className="mx-auto mb-8" />
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join Zentox today and discover the power of mindful hydration and natural healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/recipes">
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white/20 hover:bg-white/30 backdrop-blur-lg border-white/30 text-white hover-lift">
                  Browse Recipes
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/profile">
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300 hover-lift">
                  Create Account
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
