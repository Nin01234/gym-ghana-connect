import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, BarChart, PieChart, TrendingUp, Filter } from "lucide-react";

export const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "Monthly Membership Report",
      description: "Comprehensive overview of membership statistics and trends",
      type: "Membership",
      lastGenerated: "2024-12-09",
      frequency: "Monthly",
      status: "Ready"
    },
    {
      id: 2,
      name: "Revenue Analysis",
      description: "Detailed revenue breakdown by gym location and service type",
      type: "Financial",
      lastGenerated: "2024-12-08",
      frequency: "Weekly",
      status: "Processing"
    },
    {
      id: 3,
      name: "Class Attendance Report",
      description: "Analysis of class popularity and attendance patterns",
      type: "Operations",
      lastGenerated: "2024-12-09",
      frequency: "Daily",
      status: "Ready"
    },
    {
      id: 4,
      name: "Trainer Performance",
      description: "Individual trainer metrics and client feedback analysis",
      type: "HR",
      lastGenerated: "2024-12-07",
      frequency: "Monthly",
      status: "Ready"
    },
    {
      id: 5,
      name: "Equipment Usage Report",
      description: "Equipment utilization rates and maintenance schedules",
      type: "Operations",
      lastGenerated: "2024-12-06",
      frequency: "Weekly",
      status: "Scheduled"
    },
    {
      id: 6,
      name: "Customer Satisfaction Survey",
      description: "Member feedback and satisfaction scores across all locations",
      type: "Customer",
      lastGenerated: "2024-12-05",
      frequency: "Quarterly",
      status: "Ready"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'default';
      case 'Processing': return 'secondary';
      case 'Scheduled': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Financial': return TrendingUp;
      case 'Membership': return BarChart;
      case 'Operations': return PieChart;
      case 'HR': return BarChart;
      case 'Customer': return BarChart;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate and download comprehensive business reports</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter Reports
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Create Custom Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Total Reports</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Download className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Downloads This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Scheduled Reports</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Reports Processing</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reports.map((report) => {
          const TypeIcon = getTypeIcon(report.type);
          return (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <TypeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.name}</CardTitle>
                      <CardDescription className="text-sm">{report.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{report.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Frequency</p>
                    <p className="font-medium">{report.frequency}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Last Generated</p>
                    <p className="font-medium">{report.lastGenerated}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    disabled={report.status !== 'Ready'}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Report Templates</CardTitle>
          <CardDescription>Generate common reports instantly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <BarChart className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-center">Daily Activity Report</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-center">Weekly Revenue Report</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <PieChart className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-center">Member Demographics</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <FileText className="h-8 w-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-center">Equipment Status</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};