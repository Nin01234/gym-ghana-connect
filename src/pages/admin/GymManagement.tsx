import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Users, Clock, Plus } from "lucide-react";

export const GymManagement = () => {
  const gyms = [
    {
      id: 1,
      name: "Accra Central Fitness",
      location: "Accra, Greater Accra",
      phone: "+233 24 123 4567",
      members: 245,
      status: "Active",
      operatingHours: "6:00 AM - 11:00 PM",
      features: ["Pool", "Sauna", "Personal Training"]
    },
    {
      id: 2,
      name: "Kumasi Elite Gym",
      location: "Kumasi, Ashanti",
      phone: "+233 24 987 6543",
      members: 189,
      status: "Active",
      operatingHours: "5:00 AM - 10:00 PM",
      features: ["CrossFit", "Yoga Studio", "Nutrition Center"]
    },
    {
      id: 3,
      name: "Tema Fitness Hub",
      location: "Tema, Greater Accra",
      phone: "+233 24 555 7890",
      members: 156,
      status: "Maintenance",
      operatingHours: "7:00 AM - 9:00 PM",
      features: ["Group Classes", "Cardio Zone"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gym Management</h1>
          <p className="text-muted-foreground">Manage gym locations and facilities</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Gym
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {gyms.map((gym) => (
          <Card key={gym.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{gym.name}</CardTitle>
                <Badge variant={gym.status === 'Active' ? 'default' : 'secondary'}>
                  {gym.status}
                </Badge>
              </div>
              <CardDescription className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {gym.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  {gym.phone}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  {gym.members} active members
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  {gym.operatingHours}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Features:</p>
                <div className="flex flex-wrap gap-1">
                  {gym.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};