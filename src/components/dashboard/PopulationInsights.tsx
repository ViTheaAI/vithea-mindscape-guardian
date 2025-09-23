import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Calendar, BarChart3 } from "lucide-react";

const PopulationInsights = () => {
  const gradeData = [
    { grade: "Kindergarten", total: 45, risk: 8, percentage: 17.8 },
    { grade: "Grades 1-3", total: 85, risk: 12, percentage: 14.1 },
    { grade: "Grades 4-6", total: 120, risk: 25, percentage: 20.8 },
    { grade: "Grades 7-8", total: 95, risk: 28, percentage: 29.5 },
    { grade: "Grades 9-10", total: 180, risk: 55, percentage: 30.6 },
    { grade: "Grades 11-12", total: 160, risk: 42, percentage: 26.3 },
  ];

  const timelineData = [
    { month: "Sep", anxiety: 15, depression: 8, behavioral: 12 },
    { month: "Oct", anxiety: 22, depression: 12, behavioral: 18 },
    { month: "Nov", anxiety: 28, depression: 15, behavioral: 22 },
    { month: "Dec", anxiety: 35, depression: 18, behavioral: 28 },
    { month: "Jan", anxiety: 42, depression: 25, behavioral: 35 },
    { month: "Feb", anxiety: 38, depression: 22, behavioral: 30 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Grade Distribution */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Grade Risk Distribution</h3>
        </div>
        
        <div className="space-y-4">
          {gradeData.map((grade, index) => (
            <div key={grade.grade} className="relative">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{grade.grade}</span>
                <div className="text-right">
                  <span className="text-sm text-critical font-mono">{grade.risk}</span>
                  <span className="text-xs text-muted-foreground">/{grade.total}</span>
                </div>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-success via-warning to-critical rounded-full transition-all duration-500"
                  style={{ width: `${grade.percentage}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-muted-foreground mt-1">
                {grade.percentage}% at risk
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline Trends */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-foreground">Mental Health Trends</h3>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card-secondary">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="anxiety" className="text-xs">Anxiety</TabsTrigger>
            <TabsTrigger value="behavioral" className="text-xs">Behavioral</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <div className="space-y-3">
              {timelineData.map((month, index) => (
                <div key={month.month} className="flex items-center space-x-4">
                  <span className="text-sm font-mono w-8 text-muted-foreground">{month.month}</span>
                  <div className="flex-1 relative">
                    <div className="flex space-x-1 h-6">
                      <div 
                        className="bg-chart-red rounded-sm transition-all duration-500" 
                        style={{ 
                          width: `${(month.anxiety / 50) * 100}%`, 
                          minWidth: '2px',
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                      <div 
                        className="bg-chart-amber rounded-sm transition-all duration-500" 
                        style={{ 
                          width: `${(month.depression / 50) * 100}%`, 
                          minWidth: '2px',
                          animationDelay: `${index * 0.1 + 0.05}s`
                        }}
                      ></div>
                      <div 
                        className="bg-chart-purple rounded-sm transition-all duration-500" 
                        style={{ 
                          width: `${(month.behavioral / 50) * 100}%`, 
                          minWidth: '2px',
                          animationDelay: `${index * 0.1 + 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-foreground w-8">
                    {month.anxiety + month.depression + month.behavioral}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex space-x-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chart-red rounded"></div>
                <span className="text-muted-foreground">Anxiety</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chart-amber rounded"></div>
                <span className="text-muted-foreground">Depression</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chart-purple rounded"></div>
                <span className="text-muted-foreground">Behavioral Issues</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="anxiety" className="mt-4">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-chart-red">42</div>
                <p className="text-sm text-muted-foreground">Current Anxiety Cases</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-xl font-mono text-warning">+18%</div>
                  <p className="text-muted-foreground">vs Last Month</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-mono text-chart-blue">23%</div>
                  <p className="text-muted-foreground">Dec Peak</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="behavioral" className="mt-4">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-chart-purple">35</div>
                <p className="text-sm text-muted-foreground">Behavioral Concerns</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-xl font-mono text-success">-12%</div>
                  <p className="text-muted-foreground">vs Last Month</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-mono text-primary">6.2%</div>
                  <p className="text-muted-foreground">% of Total Students</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default PopulationInsights;