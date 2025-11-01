import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine, Label
} from "recharts";

interface FilterState {
  grade: string;
  riskLevel: string;
  timeRange: string;
  gender: string;
}

interface EventsTimelineProps {
  filters: FilterState;
}

const EventsTimeline = ({ filters }: EventsTimelineProps) => {
  // Events data with corresponding mental health impact
  const events = [
    { 
      date: 'Aug 28', 
      name: 'School Year Begins', 
      type: 'academic',
      impact: 'moderate',
      description: 'Initial adjustment period'
    },
    { 
      date: 'Sep 15', 
      name: 'First Major Exams', 
      type: 'academic',
      impact: 'high',
      description: 'Increased stress and anxiety'
    },
    { 
      date: 'Oct 31', 
      name: 'Halloween Event', 
      type: 'social',
      impact: 'positive',
      description: 'Social bonding activities'
    },
    { 
      date: 'Nov 10', 
      name: 'Midterm Exams', 
      type: 'academic',
      impact: 'high',
      description: 'Peak academic stress period'
    },
    { 
      date: 'Dec 20', 
      name: 'Winter Break', 
      type: 'break',
      impact: 'positive',
      description: 'Stress relief and recovery'
    },
    { 
      date: 'Jan 8', 
      name: 'Return to School', 
      type: 'academic',
      impact: 'moderate',
      description: 'Post-holiday adjustment'
    },
  ];

  // Mental health trend data aligned with events
  const trendData = [
    { date: 'Aug 21', anxiety: 35, depression: 22, stress: 28, social: 10, total: 95, event: null, eventDesc: null },
    { date: 'Aug 28', anxiety: 42, depression: 25, stress: 31, social: 12, total: 110, event: 'School Year Begins', eventDesc: 'Initial adjustment period' },
    { date: 'Sep 4', anxiety: 48, depression: 28, stress: 32, social: 14, total: 122, event: null, eventDesc: null },
    { date: 'Sep 15', anxiety: 65, depression: 32, stress: 45, social: 8, total: 150, event: 'First Major Exams', eventDesc: 'Increased stress and anxiety' },
    { date: 'Sep 22', anxiety: 52, depression: 28, stress: 35, social: 11, total: 126, event: null, eventDesc: null },
    { date: 'Oct 1', anxiety: 48, depression: 26, stress: 34, social: 13, total: 121, event: null, eventDesc: null },
    { date: 'Oct 15', anxiety: 45, depression: 25, stress: 32, social: 15, total: 117, event: null, eventDesc: null },
    { date: 'Oct 31', anxiety: 38, depression: 20, stress: 30, social: 18, total: 106, event: 'Halloween Event', eventDesc: 'Social bonding activities' },
    { date: 'Nov 10', anxiety: 72, depression: 38, stress: 52, social: 7, total: 169, event: 'Midterm Exams', eventDesc: 'Peak academic stress period' },
    { date: 'Nov 20', anxiety: 58, depression: 32, stress: 38, social: 10, total: 138, event: null, eventDesc: null },
    { date: 'Dec 1', anxiety: 62, depression: 35, stress: 42, social: 9, total: 148, event: null, eventDesc: null },
    { date: 'Dec 20', anxiety: 32, depression: 18, stress: 25, social: 16, total: 91, event: 'Winter Break', eventDesc: 'Stress relief and recovery' },
    { date: 'Jan 8', anxiety: 55, depression: 28, stress: 35, social: 11, total: 129, event: 'Return to School', eventDesc: 'Post-holiday adjustment' },
    { date: 'Jan 20', anxiety: 48, depression: 26, stress: 34, social: 13, total: 121, event: null, eventDesc: null },
  ];

  // Intervention strategies based on patterns
  const interventionStrategies = [
    { 
      trigger: 'Major Exams', 
      strategy: 'Pre-exam wellness workshops',
      effectiveness: 78,
      status: 'implemented'
    },
    { 
      trigger: 'Post-Break Return', 
      strategy: 'Transition support groups',
      effectiveness: 65,
      status: 'implemented'
    },
    { 
      trigger: 'Midterm Period', 
      strategy: 'Extended counselor hours',
      effectiveness: 82,
      status: 'implemented'
    },
    { 
      trigger: 'Social Events', 
      strategy: 'Inclusive activity planning',
      effectiveness: 71,
      status: 'recommended'
    },
  ];

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-chart-blue text-white';
      case 'social': return 'bg-chart-purple text-white';
      case 'break': return 'bg-success text-white';
      default: return 'bg-muted text-foreground';
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'high': return <AlertCircle className="h-4 w-4 text-critical" />;
      case 'moderate': return <TrendingUp className="h-4 w-4 text-warning" />;
      case 'positive': return <CheckCircle className="h-4 w-4 text-success" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Concise Summary */}
      <Card className="bg-primary/5 border border-primary/20 p-3">
        <ul className="text-xs text-foreground space-y-1">
          <li>• <strong>Stress</strong> peaks at 52 cases during midterms, <strong>anxiety</strong> reaches 72 cases</li>
          <li>• <strong>Depression</strong> rises 73% during high-stress periods (38 cases at peak)</li>
          <li>• <strong>Social concerns</strong> drop to 7-8 during exams, increase to 16-18 during positive events</li>
          <li>• Winter break reduces <strong>all concerns by 40-50%</strong></li>
        </ul>
      </Card>

      {/* Mental Health Trend with Event Markers */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Mental Health Trends & School Events
          </h3>
        </div>
        
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 11 }}
            />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                      <p className="font-semibold text-foreground mb-2">{data.date}</p>
                      {data.event && (
                        <>
                          <p className="text-xs text-primary mb-1 font-medium">📅 {data.event}</p>
                          <p className="text-xs text-muted-foreground mb-2">{data.eventDesc}</p>
                        </>
                      )}
                      <p className="text-sm font-semibold mb-1">Total Cases: <strong>{data.total}</strong></p>
                      <div className="space-y-0.5 text-xs">
                        <p>Anxiety: <strong className="text-warning">{data.anxiety}</strong></p>
                        <p>Depression: <strong className="text-critical">{data.depression}</strong></p>
                        <p>Stress: <strong className="text-chart-purple">{data.stress}</strong></p>
                        <p>Social: <strong className="text-chart-blue">{data.social}</strong></p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            
            {/* Event markers */}
            {events.map((event, index) => (
              <ReferenceLine
                key={index}
                x={event.date}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="5 5"
                strokeWidth={1}
              >
                <Label 
                  value={event.name.substring(0, 15)}
                  position="top"
                  fill="hsl(var(--muted-foreground))"
                  fontSize={10}
                />
              </ReferenceLine>
            ))}
            
            <Area 
              type="monotone" 
              dataKey="anxiety" 
              stroke="hsl(var(--warning))" 
              fill="hsl(var(--warning))"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="depression" 
              stroke="hsl(var(--critical))" 
              fill="hsl(var(--critical))"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="stress" 
              stroke="hsl(var(--chart-purple))" 
              fill="hsl(var(--chart-purple))"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="social" 
              stroke="hsl(var(--chart-blue))" 
              fill="hsl(var(--chart-blue))"
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
        
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warning rounded"></div>
            <span className="text-muted-foreground">Anxiety</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-critical rounded"></div>
            <span className="text-muted-foreground">Depression</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-chart-purple rounded"></div>
            <span className="text-muted-foreground">Stress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-chart-blue rounded"></div>
            <span className="text-muted-foreground">Social Issues</span>
          </div>
        </div>
      </Card>

      {/* Proactive Intervention Strategies with Effectiveness */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">Proactive Intervention Strategies</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Evidence-based interventions showing measured improvements in student wellness outcomes
        </p>
        
        {/* Summary */}
        <Card className="bg-primary/5 border border-primary/20 p-3 mb-4">
          <ul className="text-xs text-foreground space-y-1">
            <li>• Extended counselor hours show <strong>82% effectiveness</strong>, resource utilization at <strong>82%</strong></li>
            <li>• Crisis response team <strong>92% ready</strong>, intervention capacity at <strong>45%</strong></li>
            <li>• Current risk level at <strong>68%</strong>, pre-exam workshops reduce anxiety by <strong>28%</strong></li>
          </ul>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interventionStrategies.map((item, index) => (
            <div key={index} className="bg-card-secondary border border-card-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{item.strategy}</span>
                    {item.status === 'implemented' ? (
                      <Badge className="bg-success text-white text-xs">Active</Badge>
                    ) : (
                      <Badge className="bg-chart-blue text-white text-xs">Recommended</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">Trigger: {item.trigger}</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Effectiveness</span>
                  <span className="font-mono font-bold text-primary">{item.effectiveness}%</span>
                </div>
                <div className="flex-1 bg-border rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.effectiveness}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* System Health Indicators */}
        <div className="mt-6 pt-6 border-t border-card-border">
          <h4 className="text-sm font-semibold text-foreground mb-3">System Health Indicators</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center bg-card-secondary rounded-lg p-3">
              <div className="text-2xl font-mono font-bold text-warning">68%</div>
              <p className="text-xs text-muted-foreground mt-1">Current Risk</p>
            </div>
            <div className="text-center bg-card-secondary rounded-lg p-3">
              <div className="text-2xl font-mono font-bold text-chart-blue">45%</div>
              <p className="text-xs text-muted-foreground mt-1">Capacity</p>
            </div>
            <div className="text-center bg-card-secondary rounded-lg p-3">
              <div className="text-2xl font-mono font-bold text-success">82%</div>
              <p className="text-xs text-muted-foreground mt-1">Resources</p>
            </div>
            <div className="text-center bg-card-secondary rounded-lg p-3">
              <div className="text-2xl font-mono font-bold text-primary">92%</div>
              <p className="text-xs text-muted-foreground mt-1">Crisis Ready</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Insights */}
      <Card className="bg-gradient-to-br from-primary/10 to-chart-blue/10 border border-primary/20 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Key Pattern Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-critical" />
              <span className="font-semibold text-foreground">High-Risk Triggers</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1 ml-7">
              <li>• Major exams increase anxiety by 45-60%</li>
              <li>• Post-break adjustment periods show 25% spike</li>
              <li>• Academic deadline clusters drive stress levels</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-semibold text-foreground">Protective Factors</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1 ml-7">
              <li>• Social events reduce concerns by 15-20%</li>
              <li>• Extended breaks show 30% improvement</li>
              <li>• Early intervention reduces recovery time 40%</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventsTimeline;
