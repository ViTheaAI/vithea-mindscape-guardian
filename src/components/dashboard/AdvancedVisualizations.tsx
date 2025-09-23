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
    { x: 85, y: 12, z: 45, grade: 'Grade 9' },
    { x: 78, y: 18, z: 62, grade: 'Grade 10' },
    { x: 92, y: 8, z: 28, grade: 'Grade 11' },
    { x: 88, y: 15, z: 53, grade: 'Grade 12' },
    { x: 76, y: 22, z: 71, grade: 'Grade 8' },
    { x: 82, y: 14, z: 39, grade: 'Grade 7' },
  ];

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
    { name: 'Non-Binary', anxiety: 48, depression: 41, behavioral: 35 },
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
      {/* Multi-line Trend Analysis */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
          Mental Health Trends Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Line type="monotone" dataKey="anxiety" stroke="hsl(var(--warning))" strokeWidth={3} />
            <Line type="monotone" dataKey="depression" stroke="hsl(var(--critical))" strokeWidth={3} />
            <Line type="monotone" dataKey="behavioral" stroke="hsl(var(--chart-blue))" strokeWidth={3} />
            <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" strokeWidth={3} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Grid Layout for Multiple Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart - Risk Profile */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
            <Brain className="h-5 w-5 mr-2 text-primary" />
            Mental Health Risk Profile
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <PolarRadiusAxis tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <Radar
                name="Risk Level"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Bubble Chart - Grade vs Performance vs Risk */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-primary" />
            Academic Performance vs Risk
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <ScatterChart data={bubbleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="x" 
                name="Academic Performance" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Academic Performance (%)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                dataKey="y" 
                name="Risk Level" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Risk Level', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-semibold">{data.grade}</p>
                        <p>Academic: {data.x}%</p>
                        <p>Risk Level: {data.y}</p>
                        <p>Students: {data.z}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter dataKey="z" fill="hsl(var(--primary))" />
            </ScatterChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Second Row - More Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Treemap - Mental Health Categories */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-primary" />
            Issue Distribution
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <Treemap
              data={treemapData}
              dataKey="size"
              aspectRatio={4/3}
            />
          </ResponsiveContainer>
        </Card>

        {/* Gender Comparison Bar Chart */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Gender Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={genderComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip />
              <Bar dataKey="anxiety" fill="hsl(var(--warning))" />
              <Bar dataKey="depression" fill="hsl(var(--critical))" />
              <Bar dataKey="behavioral" fill="hsl(var(--chart-blue))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Word Cloud Style Concerns */}
        <Card className="bg-card border border-card-border shadow-medium p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Top Concerns</h3>
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

      {/* Progress Gauges Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {riskTrendGauges.map((gauge, index) => (
          <Card key={gauge.title} className="bg-card border border-card-border shadow-soft p-4">
            <div className="text-center">
              <h4 className="text-sm font-medium text-foreground mb-3">{gauge.title}</h4>
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="hsl(var(--border))"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke={`hsl(var(--${gauge.color}))`}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(gauge.value / gauge.max) * 188.5} 188.5`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">{gauge.value}%</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Intervention Effectiveness */}
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
          Intervention Effectiveness Analysis
        </h3>
        <div className="space-y-4">
          {interventionEffectiveness.map((item, index) => (
            <div key={item.intervention} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{item.intervention}</span>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">{item.success}%</span>
                  <span className="text-sm text-muted-foreground ml-2">({item.cases} cases)</span>
                </div>
              </div>
              <Progress value={item.success} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdvancedVisualizations;