
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BottleLogo from './BottleLogo';
import ThemeToggle from './ThemeToggle';
import { 
  BookOpen, 
  Target, 
  Leaf, 
  User,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/recipes', label: 'Recipes', icon: BookOpen },
    { path: '/tracker', label: 'Tracker', icon: Target },
    { path: '/cures', label: 'Natural Cures', icon: Leaf },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-zen-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group hover-lift">
            <BottleLogo size="md" animate={true} />
            <span className="text-2xl font-bold bg-gradient-to-r from-zen-primary to-zen-accent bg-clip-text text-transparent">
              Zentox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  className={`transition-all duration-300 hover-lift ${
                    location.pathname === item.path
                      ? 'zen-gradient text-white'
                      : 'hover:bg-zen-primary/20 hover:text-zen-primary'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-transform duration-200 hover:scale-105"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className={`w-full justify-start transition-all duration-300 hover-lift ${
                      location.pathname === item.path
                        ? 'zen-gradient text-white'
                        : 'hover:bg-zen-primary/20 hover:text-zen-primary'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
