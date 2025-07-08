import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Play, 
  MapPin, 
  Users, 
  Award, 
  Calendar,
  Dumbbell,
  Target,
  Heart,
  Zap
} from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import groupFitness from "@/assets/group-fitness.jpg";
import trainer1 from "@/assets/trainer-1.jpg";

export const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Dumbbell,
      title: "Professional Equipment",
      description: "State-of-the-art fitness equipment maintained to the highest standards",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified trainers to guide you on your fitness journey",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book classes that fit your busy lifestyle, 24/7",
      color: "text-success"
    },
    {
      icon: Target,
      title: "Personalized Goals",
      description: "Custom workout plans tailored to your fitness objectives",
      color: "text-warning"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "50+", label: "Expert Trainers", icon: Award },
    { number: "20+", label: "Gym Locations", icon: MapPin },
    { number: "1000+", label: "Success Stories", icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroGym})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30 mb-4">
              Ghana's Premier Fitness Network
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Join Ghana's most innovative fitness community. Find gyms, book classes, 
              and train with certified professionals across the country.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-6 min-w-[200px]"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => navigate('/find-gym')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <div className="flex space-x-8 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            {stats.slice(0, 3).map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="flex items-center justify-center mb-1">
                    <Icon className="h-4 w-4 mr-1 text-primary-glow" />
                    <span className="text-2xl font-bold">{stat.number}</span>
                  </div>
                  <span className="text-sm text-gray-300">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why Choose GymGhana
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need for 
              <span className="text-primary"> Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From beginner to elite athlete, we provide the tools, 
              guidance, and community to help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-hero transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${gymInterior})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <CardContent className="relative z-10 p-8 text-white min-h-[300px] flex flex-col justify-end">
                <MapPin className="h-8 w-8 text-primary-glow mb-4" />
                <h3 className="text-2xl font-bold mb-2">Find a Gym</h3>
                <p className="text-gray-200 mb-4">
                  Discover gyms near you with our interactive map and GPS feature.
                </p>
                <Button 
                  variant="hero" 
                  className="w-fit"
                  onClick={() => navigate('/find-gym')}
                >
                  Explore Locations
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-hero transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${groupFitness})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <CardContent className="relative z-10 p-8 text-white min-h-[300px] flex flex-col justify-end">
                <Calendar className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-2">Book Classes</h3>
                <p className="text-gray-200 mb-4">
                  Join group fitness classes and personal training sessions.
                </p>
                <Button 
                  variant="cta" 
                  className="w-fit"
                  onClick={() => navigate('/classes')}
                >
                  View Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group cursor-pointer hover:shadow-hero transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${trainer1})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <CardContent className="relative z-10 p-8 text-white min-h-[300px] flex flex-col justify-end">
                <Users className="h-8 w-8 text-success mb-4" />
                <h3 className="text-2xl font-bold mb-2">Meet Trainers</h3>
                <p className="text-gray-200 mb-4">
                  Connect with certified trainers who'll guide your fitness journey.
                </p>
                <Button 
                  variant="success" 
                  className="w-fit"
                  onClick={() => navigate('/trainers')}
                >
                  Find Your Trainer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Be part of Ghana's fitness revolution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-lg text-secondary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of Ghanaians who have already started their fitness journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-6"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/premium')}
              >
                View Premium Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};