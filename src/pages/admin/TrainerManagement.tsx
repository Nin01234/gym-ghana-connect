import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Users, Calendar, Award, Plus, MessageSquare } from "lucide-react";

export const TrainerManagement = () => {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@gymghana.com",
      specialties: ["Yoga", "Pilates", "Meditation"],
      rating: 4.9,
      clients: 45,
      experience: "5 years",
      certifications: ["RYT-500", "Pilates Certified"],
      status: "Active",
      avatar: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Mike Wilson",
      email: "mike@gymghana.com",
      specialties: ["HIIT", "Strength Training", "CrossFit"],
      rating: 4.8,
      clients: 38,
      experience: "7 years",
      certifications: ["ACSM", "CrossFit Level 2"],
      status: "Active",
      avatar: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@gymghana.com",
      specialties: ["Powerlifting", "Bodybuilding", "Nutrition"],
      rating: 4.7,
      clients: 52,
      experience: "10 years",
      certifications: ["NSCA-CSCS", "Precision Nutrition"],
      status: "Active",
      avatar: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "Maria Garcia",
      email: "maria@gymghana.com",
      specialties: ["Zumba", "Dance Fitness", "Aerobics"],
      rating: 4.9,
      clients: 67,
      experience: "6 years",
      certifications: ["Zumba Instructor", "ACE Certified"],
      status: "On Leave",
      avatar: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Trainer Management</h1>
          <p className="text-muted-foreground">Manage certified trainers and instructors</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Trainer
        </Button>
      </div>

      {/* Trainer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">{trainers.length}</p>
            <p className="text-sm text-muted-foreground">Total Trainers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{trainers.filter(t => t.status === 'Active').length}</p>
            <p className="text-sm text-muted-foreground">Active Trainers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">4.8</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">202</p>
            <p className="text-sm text-muted-foreground">Total Clients</p>
          </CardContent>
        </Card>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={trainer.avatar} alt={trainer.name} />
                  <AvatarFallback>{trainer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{trainer.name}</CardTitle>
                      <CardDescription>{trainer.email}</CardDescription>
                    </div>
                    <Badge variant={trainer.status === 'Active' ? 'default' : 'secondary'}>
                      {trainer.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium ml-1">{trainer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{trainer.clients} clients</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{trainer.experience}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {trainer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Certifications:</p>
                <div className="flex flex-wrap gap-1">
                  {trainer.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Message
                </Button>
                <Button variant="outline" size="sm">
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};