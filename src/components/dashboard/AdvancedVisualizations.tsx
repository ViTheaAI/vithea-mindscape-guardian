import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  Treemap, Cell, ScatterChart, Scatter, PieChart, Pie
} from "recharts";
import { TrendingUp, TrendingDown, Activity, Brain, Users, AlertTriangle } from "lucide-react";

interface FilterState {
  grade: string;
  riskLevel: string;
  timeRange: string;
  gender: string;
}

interface AdvancedVisualizationsProps {
  filters: FilterState;
}

const AdvancedVisualizations = ({ filters }: AdvancedVisualizationsProps) => {
  // Sample data that would change based on filters
  const trendData = [
    { month: 'Aug', anxiety: 45, depression: 32, behavioral: 28, total: 105 },
    { month: 'Sep', anxiety: 52, depression: 38, behavioral: 34, total: 124 },
    { month: 'Oct', anxiety: 48, depression: 35, behavioral: 31, total: 114 },
    { month: 'Nov', anxiety: 61, depression: 42, behavioral: 38, total: 141 },
    { month: 'Dec', anxiety: 38, depression: 28, behavioral: 22, total: 88 },
    { month: 'Jan', anxiety: 55, depression: 39, behavioral: 33, total: 127 },
  ];

  const radarData = [
    { subject: 'Anxiety', value: 65, fullMark: 100 },
    { subject: 'Depression', value: 42, fullMark: 100 },
    { subject: 'Behavioral', value: 38, fullMark: 100 },
    { subject: 'Academic Stress', value: 78, fullMark: 100 },
    { subject: 'Social Issues', value: 35, fullMark: 100 },
    { subject: 'Family Concerns', value: 28, fullMark: 100 },
  ];

  const bubbleData = [
    { x: 76, y: 22, z: 71, grade: 'Grade 8' },
    { x: 78, y: 18, z: 62, grade: 'Grade 10' },
    { x: 82, y: 14, z: 39, grade: 'Grade 7' },
    { x: 85, y: 12, z: 45, grade: 'Grade 9' },
    { x: 88, y: 15, z: 53, grade: 'Grade 12' },
    { x: 92, y: 8, z: 28, grade: 'Grade 11' },
  ].sort((a, b) => a.x - b.x);

  const treemapData = [
    { name: 'Anxiety Disorders', size: 245, fill: 'hsl(var(--warning))' },
    { name: 'Depression', size: 186, fill: 'hsl(var(--critical))' },
    { name: 'ADHD', size: 142, fill: 'hsl(var(--chart-blue))' },
    { name: 'Eating Disorders', size: 89, fill: 'hsl(var(--chart-purple))' },
    { name: 'Social Anxiety', size: 167, fill: 'hsl(var(--chart-cyan))' },
    { name: 'Behavioral Issues', size: 134, fill: 'hsl(var(--chart-orange))' },
  ];

  const genderComparisonData = [
    { name: 'Male', anxiety: 38, depression: 29, behavioral: 45 },
    { name: 'Female', anxiety: 62, depression: 48, behavioral: 31 },
    { name: 'Others', anxiety: 48, depression: 41, behavioral: 35 },
  ];

  const interventionEffectiveness = [
    { intervention: 'Individual Therapy', success: 78, cases: 145 },
    { intervention: 'Group Therapy', success: 65, cases: 89 },
    { intervention: 'Family Counseling', success: 82, cases: 67 },
    { intervention: 'Medication', success: 71, cases: 92 },
    { intervention: 'Peer Support', success: 58, cases: 156 },
    { intervention: 'Crisis Intervention', success: 85, cases: 34 },
  ];

  const riskTrendGauges = [
    { title: 'Current Risk Level', value: 68, max: 100, color: 'warning' },
    { title: 'Intervention Capacity', value: 45, max: 100, color: 'chart-blue' },
    { title: 'Resource Utilization', value: 82, max: 100, color: 'success' },
    { title: 'Crisis Response Ready', value: 92, max: 100, color: 'primary' },
  ];

  const wordCloudConcerns = [
    { text: 'Academic Pressure', value: 89, color: 'hsl(var(--warning))' },
    { text: 'Social Isolation', value: 76, color: 'hsl(var(--critical))' },
    { text: 'Family Issues', value: 63, color: 'hsl(var(--chart-blue))' },
    { text: 'Peer Relationships', value: 71, color: 'hsl(var(--chart-purple))' },
    { text: 'Future Anxiety', value: 84, color: 'hsl(var(--chart-cyan))' },
    { text: 'Self-Image', value: 68, color: 'hsl(var(--chart-orange))' },
    { text: 'Sleep Issues', value: 55, color: 'hsl(var(--chart-emerald))' },
    { text: 'Eating Habits', value: 42, color: 'hsl(var(--chart-red))' },
  ];

  return (
    <div className="space-y-6">
      {/* Concise Summary */}
      <Card className="bg-primary/5 border border-primary/20 p-3">
        <ul className="text-xs text-foreground space-y-1">
          <li>• Academic stress <strong>highest concern (78%)</strong>, anxiety second <strong>(65%)</strong></li>
          <li>• Lower GPA correlates with <strong>2.5x higher</strong> risk levels</li>
          <li>• Females show <strong>63% higher</strong> anxiety than males</li>
        </ul>
      </Card>
      

      {/* Grid Layout for Multiple Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart - Risk Profile with Baseline */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-2 flex items-center">
            <Brain className="h-5 w-5 mr-2 text-primary" />
            Mental Health Risk Profile
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Current vs baseline comparison showing academic stress and anxiety elevated above historical norms
          </p>
          
          <Card className="bg-primary/5 border border-primary/20 p-2 mb-3">
            <ul className="text-xs text-foreground space-y-1">
              <li>• Academic stress <strong>56% above</strong> baseline</li>
              <li>• Anxiety <strong>30% above</strong> baseline</li>
            </ul>
          </Card>
          
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <PolarRadiusAxis tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <Radar
                name="Baseline"
                dataKey="fullMark"
                stroke="hsl(var(--muted-foreground))"
                fill="hsl(var(--muted-foreground))"
                fillOpacity={0.05}
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <Radar
                name="Current"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
          
          <div className="mt-3 flex justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border-2 border-muted-foreground border-dashed rounded"></div>
              <span className="text-muted-foreground">Baseline (50%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-muted-foreground">Current Level</span>
            </div>
          </div>
        </Card>

        {/* Bubble Chart - Grade vs Performance vs Risk */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-2 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-primary" />
            Academic Performance vs Risk
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Bubble size shows student population - inverse correlation between GPA and risk severity
          </p>
          
          <Card className="bg-primary/5 border border-primary/20 p-2 mb-3">
            <ul className="text-xs text-foreground space-y-1">
              <li>• Students with GPA <strong>&lt;80%</strong> show <strong>2.5x higher</strong> risk</li>
              <li>• Grade 10 highest population <strong>(71 students)</strong></li>
            </ul>
          </Card>
          
          <ResponsiveContainer width="100%" height={250}>
            <ScatterChart data={bubbleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="x" 
                name="Academic Performance" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Academic Performance (%)', position: 'insideBottom', offset: -5, fontSize: 11 }}
              />
              <YAxis 
                dataKey="y" 
                name="Risk Level" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Risk Level', angle: -90, position: 'insideLeft', fontSize: 11 }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-semibold">{data.grade}</p>
                        <p className="text-sm">Academic: {data.x}%</p>
                        <p className="text-sm">Risk Level: {data.y}</p>
                        <p className="text-sm">Students: {data.z}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter 
                dataKey="z" 
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
              >
                {bubbleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} r={entry.z / 3} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Second Row - More Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gender Comparison Bar Chart */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">Gender Analysis</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Mental health concerns by gender - females 63% higher anxiety, males 45% higher behavioral
          </p>
          
          <Card className="bg-primary/5 border border-primary/20 p-2 mb-3">
            <ul className="text-xs text-foreground space-y-1">
              <li>• Female anxiety <strong>63% higher</strong> than male</li>
              <li>• Male behavioral issues <strong>45% higher</strong></li>
            </ul>
          </Card>
          
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={genderComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="anxiety" fill="hsl(var(--warning))" />
              <Bar dataKey="depression" fill="hsl(var(--critical))" />
              <Bar dataKey="behavioral" fill="hsl(var(--chart-blue))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Word Cloud Style Concerns */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">Top Concerns</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Most reported concerns ranked by frequency - larger text indicates higher severity
          </p>
          
          <Card className="bg-primary/5 border border-primary/20 p-2 mb-3">
            <ul className="text-xs text-foreground space-y-1">
              <li>• <strong>Future anxiety (84%)</strong> and <strong>academic pressure (89%)</strong> top concerns</li>
            </ul>
          </Card>
          
          <div className="space-y-3">
            {wordCloudConcerns.map((concern, index) => (
              <div key={concern.text} className="flex items-center justify-between">
                <span 
                  className="font-medium" 
                  style={{ 
                    fontSize: `${Math.max(12, Math.min(16, concern.value / 6))}px`,
                    color: concern.color 
                  }}
                >
                  {concern.text}
                </span>
                <span className="text-sm text-muted-foreground">{concern.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedVisualizations;