import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Users, 
  Award, 
  Calendar,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";

export const TrainersPage = () => {
  const trainers = [
    {
      id: 1,
      name: "Kwame Asante",
      title: "Strength & Conditioning Specialist",
      image: "/placeholder.svg",
      rating: 4.9,
      experience: "8 years",
      location: "Accra",
      specialties: ["Strength Training", "HIIT", "Olympic Lifting"],
      clients: 150,
      bio: "Certified strength coach with expertise in building lean muscle and athletic performance. Specializes in compound movements and functional training.",
      price: "₵80/session",
      languages: ["English", "Twi"]
    },
    {
      id: 2,
      name: "Ama Osei",
      title: "Yoga & Wellness Instructor",
      image: "/placeholder.svg",
      rating: 4.8,
      experience: "6 years",
      location: "Kumasi",
      specialties: ["Yoga", "Pilates", "Meditation"],
      clients: 120,
      bio: "Holistic wellness expert focused on mind-body connection. Helps clients achieve balance through yoga, breathwork, and mindfulness practices.",
      price: "₵60/session",
      languages: ["English", "Twi", "Fante"]
    },
    {
      id: 3,
      name: "Kofi Mensah",
      title: "Boxing & Cardio Coach",
      image: "/placeholder.svg",
      rating: 4.7,
      experience: "10 years",
      location: "Tema",
      specialties: ["Boxing", "Cardio", "Weight Loss"],
      clients: 200,
      bio: "Former professional boxer turned coach. Passionate about helping clients build confidence and achieve their fitness goals through boxing.",
      price: "₵90/session",
      languages: ["English", "Ga"]
    },
    {
      id: 4,
      name: "Abena Appiah",
      title: "Functional Movement Expert",
      image: "/placeholder.svg",
      rating: 4.9,
      experience: "7 years",
      location: "Accra",
      specialties: ["Functional Training", "Rehabilitation", "Mobility"],
      clients: 100,
      bio: "Movement specialist with background in physiotherapy. Focuses on corrective exercise and injury prevention for active lifestyles.",
      price: "₵85/session",
      languages: ["English", "Twi"]
    },
    {
      id: 5,
      name: "Samuel Darko",
      title: "Bodybuilding & Nutrition Coach",
      image: "/placeholder.svg",
      rating: 4.8,
      experience: "9 years",
      location: "Takoradi",
      specialties: ["Bodybuilding", "Nutrition", "Contest Prep"],
      clients: 75,
      bio: "Competitive bodybuilder and certified nutritionist. Specializes in muscle building, fat loss, and competition preparation.",
      price: "₵100/session",
      languages: ["English"]
    },
    {
      id: 6,
      name: "Efua Boateng",
      title: "Dance Fitness Instructor",
      image: "/placeholder.svg",
      rating: 4.6,
      experience: "5 years",
      location: "Accra",
      specialties: ["Dance Fitness", "Zumba", "Aerobics"],
      clients: 180,
      bio: "Energetic dance instructor who makes fitness fun! Combines traditional African dance with modern fitness techniques.",
      price: "₵50/session",
      languages: ["English", "Twi", "Ewe"]
    }
  ];

  const getSpecialtyColor = (specialty: string) => {
    const colors = {
      "Strength Training": "bg-primary/10 text-primary border-primary/20",
      "HIIT": "bg-destructive/10 text-destructive border-destructive/20",
      "Yoga": "bg-success/10 text-success border-success/20",
      "Boxing": "bg-warning/10 text-warning border-warning/20",
      "Cardio": "bg-accent/10 text-accent border-accent/20",
      "Pilates": "bg-secondary/10 text-secondary-foreground border-secondary/20",
    };
    return colors[specialty as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Expert Trainers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Your
            <span className="text-primary"> Perfect Match</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with certified fitness professionals across Ghana. 
            Find the perfect trainer to guide your fitness journey.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Certified Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Specialties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="group hover:shadow-hero transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={trainer.image} alt={trainer.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {trainer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{trainer.title}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{trainer.rating}</span>
                      </div>
                      <div className="flex items-center ml-3">
                        <MapPin className="w-3 h-3 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">{trainer.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {trainer.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.slice(0, 3).map((specialty) => (
                    <Badge key={specialty} variant="outline" className={getSpecialtyColor(specialty)}>
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{trainer.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{trainer.clients}</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-primary">{trainer.price}</div>
                  <div className="text-sm text-muted-foreground">
                    {trainer.languages.join(', ')}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-hero rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Become a Trainer?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our network of certified fitness professionals and help others achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Award className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};