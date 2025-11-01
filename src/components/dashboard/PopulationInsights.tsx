import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Calendar, BarChart3 } from "lucide-react";

interface PopulationInsightsProps {
  filters: {
    grade: string;
    riskLevel: string;
    timeRange: string;
    gender: string;
  };
}

const PopulationInsights = ({ filters }: PopulationInsightsProps) => {
  const gradeData = [
    { grade: "Grade 6", total: 52, risk: 12, percentage: 23.1 },
    { grade: "Grade 7", total: 48, risk: 15, percentage: 31.3 },
    { grade: "Grade 8", total: 45, risk: 13, percentage: 28.9 },
    { grade: "Grade 9", total: 92, risk: 28, percentage: 30.4 },
    { grade: "Grade 10", total: 88, risk: 27, percentage: 30.7 },
    { grade: "Grade 11", total: 85, risk: 22, percentage: 25.9 },
    { grade: "Grade 12", total: 75, risk: 20, percentage: 26.7 },
  ];

  const timelineData = [
    { month: "Sep", anxiety: 15, depression: 8, stress: 12, social: 10 },
    { month: "Oct", anxiety: 22, depression: 12, stress: 18, social: 14 },
    { month: "Nov", anxiety: 28, depression: 15, stress: 22, social: 16 },
    { month: "Dec", anxiety: 35, depression: 18, stress: 28, social: 20 },
    { month: "Jan", anxiety: 42, depression: 25, stress: 35, social: 24 },
    { month: "Feb", anxiety: 38, depression: 22, stress: 30, social: 22 },
  ];

  return (
    <div className="space-y-4">
      {/* Concise Summary */}
      <Card className="bg-primary/5 border border-primary/20 p-3">
        <ul className="text-xs text-foreground space-y-1">
          <li>• Risk increases with grade level (peaks at <strong>30.6%</strong> in Grades 9-10)</li>
          <li>• Anxiety cases up <strong>180%</strong> from Sep to Jan</li>
        </ul>
      </Card>
      
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
            <TabsList className="grid w-full grid-cols-4 bg-card-secondary">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="anxiety" className="text-xs">Anxiety</TabsTrigger>
            <TabsTrigger value="depression" className="text-xs">Depression</TabsTrigger>
            <TabsTrigger value="stress" className="text-xs">Stress</TabsTrigger>
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
                          animationDelay: `${index * 0.1 + 0.03}s`
                        }}
                      ></div>
                      <div 
                        className="bg-chart-purple rounded-sm transition-all duration-500" 
                        style={{ 
                          width: `${(month.stress / 50) * 100}%`, 
                          minWidth: '2px',
                          animationDelay: `${index * 0.1 + 0.06}s`
                        }}
                      ></div>
                      <div 
                        className="bg-chart-blue rounded-sm transition-all duration-500" 
                        style={{ 
                          width: `${(month.social / 50) * 100}%`, 
                          minWidth: '2px',
                          animationDelay: `${index * 0.1 + 0.09}s`
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-foreground w-8">
                    {month.anxiety + month.depression + month.stress + month.social}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
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
                <span className="text-muted-foreground">Stress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chart-blue rounded"></div>
                <span className="text-muted-foreground">Social Skills</span>
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
          
          <TabsContent value="depression" className="mt-4">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-chart-amber">25</div>
                <p className="text-sm text-muted-foreground">Current Depression Cases</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-xl font-mono text-warning">+14%</div>
                  <p className="text-muted-foreground">vs Last Month</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-mono text-chart-blue">5.2%</div>
                  <p className="text-muted-foreground">% of Total Students</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="stress" className="mt-4">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-mono font-bold text-chart-purple">35</div>
                <p className="text-sm text-muted-foreground">Academic Stress Cases</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-xl font-mono text-critical">+22%</div>
                  <p className="text-muted-foreground">vs Last Month</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-mono text-primary">7.3%</div>
                  <p className="text-muted-foreground">% of Total Students</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
      </div>
    </div>
  );
};

export default PopulationInsights;