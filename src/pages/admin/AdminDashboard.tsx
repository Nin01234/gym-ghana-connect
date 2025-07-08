import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Dumbbell, Calendar, TrendingUp, Activity, AlertTriangle } from "lucide-react";

export const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Active Gyms", value: "23", change: "+2", icon: Dumbbell, color: "text-green-600" },
    { title: "Classes Today", value: "156", change: "+8%", icon: Calendar, color: "text-purple-600" },
    { title: "Revenue", value: "₵45,231", change: "+15%", icon: TrendingUp, color: "text-emerald-600" },
  ];

  const alerts = [
    { type: "warning", message: "Server maintenance scheduled for tonight", time: "2 hours ago" },
    { type: "info", message: "New trainer application pending review", time: "4 hours ago" },
    { type: "success", message: "Monthly backup completed successfully", time: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>System activity from the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>User Registrations</span>
                <span>23</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Class Bookings</span>
                <span>156</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Trainer Sessions</span>
                <span>89</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Important notifications and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                  alert.type === 'warning' ? 'text-yellow-600' :
                  alert.type === 'info' ? 'text-blue-600' : 'text-green-600'
                }`} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Commonly used administrative functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium">Add User</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
              <Dumbbell className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium">New Gym</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
              <Calendar className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium">Schedule Class</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
              <Activity className="h-8 w-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium">View Reports</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};