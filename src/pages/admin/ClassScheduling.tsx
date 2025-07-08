import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, MapPin, Plus } from "lucide-react";

export const ClassScheduling = () => {
  const todayClasses = [
    { id: 1, name: "Morning Yoga", time: "07:00", duration: 60, instructor: "Sarah Johnson", participants: 15, maxCapacity: 20, location: "Studio A" },
    { id: 2, name: "HIIT Training", time: "09:00", duration: 45, instructor: "Mike Wilson", participants: 12, maxCapacity: 15, location: "Main Floor" },
    { id: 3, name: "Strength & Conditioning", time: "11:00", duration: 90, instructor: "John Doe", participants: 8, maxCapacity: 12, location: "Weight Room" },
    { id: 4, name: "Zumba Dance", time: "18:00", duration: 60, instructor: "Maria Garcia", participants: 25, maxCapacity: 30, location: "Studio B" },
  ];

  const upcomingClasses = [
    { date: "Tomorrow", count: 18 },
    { date: "Wed, Dec 11", count: 22 },
    { date: "Thu, Dec 12", count: 19 },
    { date: "Fri, Dec 13", count: 25 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Class Scheduling</h1>
          <p className="text-muted-foreground">Manage fitness class schedules and bookings</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Class
        </Button>
      </div>

      {/* Schedule Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {upcomingClasses.map((day, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">{day.date}</p>
              <p className="text-2xl font-bold">{day.count}</p>
              <p className="text-sm text-muted-foreground">Classes</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Classes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Today's Classes
          </CardTitle>
          <CardDescription>
            {todayClasses.length} classes scheduled for today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayClasses.map((classItem) => (
              <div key={classItem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-lg font-bold">{classItem.time}</p>
                      <p className="text-xs text-muted-foreground">{classItem.duration}min</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{classItem.name}</h3>
                      <p className="text-sm text-muted-foreground">with {classItem.instructor}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          {classItem.location}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-1" />
                          {classItem.participants}/{classItem.maxCapacity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={classItem.participants / classItem.maxCapacity > 0.8 ? "destructive" : "default"}
                  >
                    {Math.round((classItem.participants / classItem.maxCapacity) * 100)}% Full
                  </Badge>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Calendar className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Weekly Schedule</h3>
            <p className="text-sm text-muted-foreground">View and manage the weekly class schedule</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="font-semibold mb-2">Instructor Management</h3>
            <p className="text-sm text-muted-foreground">Assign instructors to classes</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Clock className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h3 className="font-semibold mb-2">Time Slots</h3>
            <p className="text-sm text-muted-foreground">Manage available time slots</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};