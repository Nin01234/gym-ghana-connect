import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dumbbell, User, Calendar, MapPin, Users, Award, Phone, Home, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Trainers", href: "/trainers", icon: Users },
    { label: "Premium", href: "/premium", icon: Award },
    { label: "Find Gym", href: "/find-gym", icon: MapPin },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-hero">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">GymGhana</span>
              <span className="text-xs text-muted-foreground">Connect</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.user_metadata?.first_name || user.email}
                </span>
                <Button 
                  variant="ghost" 
                  onClick={signOut}
                  className="hover:bg-primary/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/login')}
                  className="hover:bg-primary/10"
                >
                  Login
                </Button>
                <Button 
                  variant="hero" 
                  onClick={() => navigate('/signup')}
                  className="min-w-[100px]"
                >
                  Join Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="bg-gradient-hero p-2 rounded-lg">
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">GymGhana</div>
                    <div className="text-xs text-muted-foreground">Connect</div>
                  </div>
                </div>

                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}

                <div className="pt-4 border-t space-y-3">
                  {user ? (
                    <>
                      <div className="text-sm text-muted-foreground p-3">
                        Welcome, {user.user_metadata?.first_name || user.email}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => {
                          navigate('/login');
                          setIsOpen(false);
                        }}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                      <Button 
                        variant="hero" 
                        className="w-full"
                        onClick={() => {
                          navigate('/signup');
                          setIsOpen(false);
                        }}
                      >
                        Join Now
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};