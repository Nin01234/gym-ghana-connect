import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, Dumbbell, Calendar, DollarSign, Activity, Clock } from "lucide-react";

export const Analytics = () => {
  const metrics = [
    { title: "Monthly Revenue", value: "₵67,845", change: "+12.5%", trend: "up", icon: DollarSign },
    { title: "New Members", value: "234", change: "+8.2%", trend: "up", icon: Users },
    { title: "Class Attendance", value: "89.4%", change: "-2.1%", trend: "down", icon: Calendar },
    { title: "Gym Utilization", value: "76.8%", change: "+5.7%", trend: "up", icon: Activity },
  ];

  const topGyms = [
    { name: "Accra Central Fitness", members: 245, revenue: "₵18,450", utilization: 85 },
    { name: "Kumasi Elite Gym", members: 189, revenue: "₵14,230", utilization: 78 },
    { name: "Tema Fitness Hub", members: 156, revenue: "₵11,890", utilization: 72 },
    { name: "Takoradi Power Gym", members: 134, revenue: "₵9,670", utilization: 68 },
  ];

  const popularClasses = [
    { name: "HIIT Training", bookings: 234, rating: 4.9, category: "Cardio" },
    { name: "Yoga Flow", bookings: 198, rating: 4.8, category: "Flexibility" },
    { name: "Strength Training", bookings: 187, rating: 4.7, category: "Strength" },
    { name: "Zumba Dance", bookings: 156, rating: 4.8, category: "Dance" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs">
                  <TrendIcon className={`h-3 w-3 mr-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                  <span className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Gyms */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Gyms</CardTitle>
            <CardDescription>Based on member count and revenue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topGyms.map((gym, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{gym.name}</h4>
                  <div className="text-sm text-muted-foreground">
                    {gym.members} members • {gym.revenue}
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Utilization</span>
                      <span>{gym.utilization}%</span>
                    </div>
                    <Progress value={gym.utilization} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Popular Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Classes</CardTitle>
            <CardDescription>Ranked by bookings this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularClasses.map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{classItem.name}</h4>
                    <span className="text-sm font-medium">{classItem.bookings} bookings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{classItem.category}</span>
                    <span>•</span>
                    <span>⭐ {classItem.rating}</span>
                  </div>
                  <div className="mt-2">
                    <Progress value={(classItem.bookings / 250) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Time-based Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Peak Hours</CardTitle>
            <CardDescription>Gym usage by hour</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">6:00 - 8:00 AM</span>
              <span className="text-sm font-medium">78%</span>
            </div>
            <Progress value={78} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm">12:00 - 2:00 PM</span>
              <span className="text-sm font-medium">45%</span>
            </div>
            <Progress value={45} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm">6:00 - 8:00 PM</span>
              <span className="text-sm font-medium">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Member Retention</CardTitle>
            <CardDescription>Monthly retention rate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">94.2%</div>
              <p className="text-sm text-muted-foreground">Overall retention rate</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>1-3 months</span>
                <span>89%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>3-6 months</span>
                <span>95%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>6+ months</span>
                <span>98%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Monthly comparison</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">+18.5%</div>
              <p className="text-sm text-muted-foreground">vs last month</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Memberships</span>
                <span>₵45,230</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Personal Training</span>
                <span>₵18,450</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Merchandise</span>
                <span>₵4,165</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};