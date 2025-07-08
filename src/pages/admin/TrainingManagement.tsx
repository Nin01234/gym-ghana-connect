import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Edit, Trash2, Plus, Clock, Target, BarChart } from "lucide-react";

export const TrainingManagement = () => {
  const trainingSections = [
    {
      id: 1,
      title: "Beginner Strength Training",
      category: "Strength",
      difficulty: "Beginner",
      duration: 45,
      enrollments: 156,
      rating: 4.8,
      status: "Active"
    },
    {
      id: 2,
      title: "Advanced HIIT Cardio",
      category: "Cardio",
      difficulty: "Advanced",
      duration: 30,
      enrollments: 89,
      rating: 4.9,
      status: "Active"
    },
    {
      id: 3,
      title: "Yoga for Flexibility",
      category: "Flexibility",
      difficulty: "Intermediate",
      duration: 60,
      enrollments: 234,
      rating: 4.7,
      status: "Active"
    },
    {
      id: 4,
      title: "Powerlifting Fundamentals",
      category: "Strength",
      difficulty: "Intermediate",
      duration: 90,
      enrollments: 67,
      rating: 4.6,
      status: "Draft"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Training Management</h1>
          <p className="text-muted-foreground">Manage training sections and programs</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Training Section
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Total Programs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Play className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-sm text-muted-foreground">Active Programs</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Enrollments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">4.7</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Sections List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trainingSections.map((section) => (
          <Card key={section.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <Badge variant={section.status === 'Active' ? 'default' : 'secondary'}>
                  {section.status}
                </Badge>
              </div>
              <CardDescription>{section.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getDifficultyColor(section.difficulty)}`} />
                  <span className="text-sm font-medium">{section.difficulty}</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{section.duration} min</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Enrollments</span>
                  <span className="font-medium">{section.enrollments}</span>
                </div>
                <Progress value={(section.enrollments / 300) * 100} className="h-2" />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-muted-foreground">Rating: </span>
                  <span className="font-medium">{section.rating}/5.0</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};