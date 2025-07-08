import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapboxMap } from "@/components/MapboxMap";
import { 
  MapPin, 
  Search, 
  Filter,
  Star,
  Clock,
  Phone,
  Navigation,
  Users,
  Dumbbell
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const FindGymPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const regions = [
    "Greater Accra", "Ashanti", "Western", "Central", "Eastern", 
    "Northern", "Upper East", "Upper West", "Volta", "Brong-Ahafo"
  ];

  const gymTypes = ["Commercial Gym", "CrossFit Box", "Yoga Studio", "Boxing Gym", "Swimming Pool"];

  const featuredGyms = [
    {
      name: "Elite Fitness Accra",
      region: "Greater Accra",
      type: "Commercial Gym",
      rating: 4.8,
      members: 1200,
      image: "/placeholder.svg",
      features: ["Pool", "Sauna", "Personal Training", "Group Classes"],
      hours: "5:00 AM - 11:00 PM",
      phone: "+233 302 123 456"
    },
    {
      name: "CrossFit Kumasi",
      region: "Ashanti",
      type: "CrossFit Box",
      rating: 4.9,
      members: 350,
      image: "/placeholder.svg",
      features: ["Olympic Lifting", "Conditioning", "Nutrition Coaching"],
      hours: "6:00 AM - 9:00 PM",
      phone: "+233 322 234 567"
    },
    {
      name: "Zen Yoga Cape Coast",
      region: "Central",
      type: "Yoga Studio",
      rating: 4.7,
      members: 180,
      image: "/placeholder.svg",
      features: ["Hatha Yoga", "Vinyasa", "Meditation", "Workshops"],
      hours: "7:00 AM - 7:00 PM",
      phone: "+233 332 345 678"
    },
    {
      name: "Champions Boxing Gym",
      region: "Greater Accra",
      type: "Boxing Gym",
      rating: 4.6,
      members: 250,
      image: "/placeholder.svg",
      features: ["Boxing Classes", "MMA", "Cardio Kickboxing"],
      hours: "6:00 AM - 10:00 PM",
      phone: "+233 302 456 789"
    }
  ];

  const filteredGyms = featuredGyms.filter((gym) => {
    const matchesSearch = gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gym.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = !selectedRegion || gym.region === selectedRegion;
    const matchesType = !selectedType || gym.type === selectedType;
    
    return matchesSearch && matchesRegion && matchesType;
  });

  const quickFilters = [
    { label: "Near Me", icon: Navigation },
    { label: "24/7 Access", icon: Clock },
    { label: "Swimming Pool", icon: Users },
    { label: "Personal Training", icon: Dumbbell },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Find Your Gym
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Gyms
            <span className="text-primary"> Across Ghana</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect fitness facility near you. From modern gyms in Accra 
            to specialized studios across all regions of Ghana.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search gyms or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                {gymTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter, index) => (
              <Button key={index} variant="outline" size="sm">
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <MapboxMap />
        </div>

        {/* Featured Gyms Slider */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Gyms</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12"
          >
            {featuredGyms.map((gym, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full hover:shadow-hero transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={gym.image}
                      alt={gym.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge>{gym.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {gym.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{gym.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{gym.region}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {gym.members} members
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {gym.hours}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {gym.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gym List */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Gyms ({filteredGyms.length})</h2>
          </div>
          
          {filteredGyms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No gyms found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGyms.map((gym, index) => (
                <Card key={index} className="hover:shadow-hero transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={gym.image}
                      alt={gym.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge>{gym.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {gym.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg">{gym.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{gym.region}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {gym.members} members
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        Open
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {gym.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't See Your Gym Listed?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Help us build the most comprehensive directory of fitness facilities in Ghana. 
            Submit your gym details and join our growing network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <MapPin className="w-4 h-4 mr-2" />
              Add Your Gym
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};