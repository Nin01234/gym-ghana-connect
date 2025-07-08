import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Play, Search, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type TrainingSection = Tables<"training_sections">;

export const ClassesPage = () => {
  const [trainingSections, setTrainingSections] = useState<TrainingSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");

  useEffect(() => {
    fetchTrainingSections();
  }, []);

  const fetchTrainingSections = async () => {
    try {
      const { data, error } = await supabase
        .from("training_sections")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTrainingSections(data || []);
    } catch (error) {
      console.error("Error fetching training sections:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSections = trainingSections.filter((section) => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         section.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || section.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || section.difficulty_level === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const categories = [...new Set(trainingSections.map(s => s.category).filter(Boolean))];
  const difficulties = [...new Set(trainingSections.map(s => s.difficulty_level).filter(Boolean))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-success/10 text-success border-success/20";
      case "intermediate": return "bg-warning/10 text-warning border-warning/20";
      case "advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading classes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Workout Classes
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Train with the 
            <span className="text-primary"> Best</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our diverse selection of workout classes led by certified trainers. 
            From beginner-friendly sessions to advanced challenges.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search classes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Levels</SelectItem>
              {difficulties.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Classes Grid */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No classes found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSections.map((section) => (
              <Card key={section.id} className="group hover:shadow-hero transition-all duration-300 overflow-hidden">
                {section.thumbnail_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={section.thumbnail_url}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getDifficultyColor(section.difficulty_level || "")}>
                        {section.difficulty_level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                        <Clock className="w-3 h-3 mr-1" />
                        {section.duration}min
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{section.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {section.description}
                  </p>
                  
                  <Button 
                    className="w-full" 
                    variant="default"
                    onClick={() => section.video_url && window.open(section.video_url, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Workout
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};