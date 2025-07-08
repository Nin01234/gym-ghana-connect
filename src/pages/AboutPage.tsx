import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Heart, Users, Award, CheckCircle, Star } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";
import groupFitness from "@/assets/group-fitness.jpg";

export const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from equipment to service"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive fitness community across Ghana"
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Welcoming fitness enthusiasts of all levels and backgrounds"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing technology to enhance your fitness experience"
    }
  ];

  const achievements = [
    "Ghana's fastest-growing fitness network",
    "Over 500 certified trainers nationwide",
    "20+ modern gym locations",
    "Award-winning mobile app",
    "1000+ success transformations"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Ghana's
              <span className="text-primary"> Fitness Revolution</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2020, GymGhana Connect began with a simple mission: 
              to make fitness accessible, enjoyable, and effective for everyone in Ghana. 
              Today, we're the country's premier fitness network, connecting thousands 
              of fitness enthusiasts with world-class facilities and expert trainers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize fitness in Ghana by providing accessible, high-quality 
                    fitness facilities and expert guidance that empowers individuals to 
                    achieve their health and wellness goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become Africa's leading fitness ecosystem, fostering a culture 
                    of health and wellness that transforms communities and improves 
                    quality of life across the continent.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={gymInterior} 
                alt="Modern gym interior"
                className="rounded-lg shadow-hero w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience 
              we create for our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={groupFitness} 
                alt="Group fitness class"
                className="rounded-lg shadow-hero w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
            <div>
              <Badge variant="outline" className="mb-4">
                Our Achievements
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proud Milestones on Our Journey
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Since our inception, we've achieved remarkable milestones that 
                reflect our commitment to excellence and our members' success.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero"
                  onClick={() => navigate('/signup')}
                >
                  Join Our Community
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/trainers')}
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "GymGhana Connect transformed not just my body, but my entire lifestyle. 
              The community, the trainers, and the facilities are world-class. 
              I've never felt more motivated and supported in my fitness journey."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Kwame Asante</div>
                <div className="text-white/80">Member since 2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Ghanaians who have made fitness a priority 
            and transformed their lives with us.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/signup')}
            className="px-8 py-6 text-lg"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </div>
  );
};