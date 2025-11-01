import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RiskMatrixProps {
  filters: {
    grade: string;
    riskLevel: string;
    timeRange: string;
    gender: string;
  };
}

const RiskMatrix = ({ filters }: RiskMatrixProps) => {
  const riskData = [
    { level: "Critical", count: 15, percentage: 2.2, color: "critical", bgColor: "bg-critical-light" },
    { level: "High Risk", count: 42, percentage: 6.1, color: "chart-red", bgColor: "bg-red-100" },
    { level: "Moderate Risk", count: 127, percentage: 18.5, color: "warning", bgColor: "bg-warning-light" },
    { level: "Low Risk", count: 301, percentage: 43.8, color: "chart-blue", bgColor: "bg-blue-100" },
    { level: "Minimal", count: 200, percentage: 29.4, color: "success", bgColor: "bg-success-light" },
  ];

  return (
    <div className="space-y-4">
      {/* Concise Summary */}
      <Card className="bg-primary/5 border border-primary/20 p-3">
        <ul className="text-xs text-foreground space-y-1">
          <li>• <strong>8.3%</strong> need urgent intervention (Critical + High Risk)</li>
          <li>• <strong>73.2%</strong> are stable (Low + Minimal)</li>
        </ul>
      </Card>
      
      <Card className="bg-card border border-card-border shadow-medium p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Risk Distribution Matrix</h3>
          <p className="text-sm text-muted-foreground">Student Mental Health Risk Assessment Overview</p>
        </div>

      <div className="space-y-4">
        {riskData.map((risk, index) => (
          <div key={risk.level} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-4 h-4 rounded-full ${risk.bgColor} border-2`}
                  style={{ 
                    borderColor: `hsl(var(--${risk.color}))`,
                    backgroundColor: `hsl(var(--${risk.color}) / 0.2)`
                  }}
                ></div>
                <span className="font-medium text-foreground">{risk.level}</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-mono font-bold text-foreground">{risk.count}</span>
                <span className="text-sm text-muted-foreground ml-2">({risk.percentage}%)</span>
              </div>
            </div>
            <Progress 
              value={risk.percentage} 
              className="h-3"
            />
          </div>
        ))}
      </div>

      </Card>
    </div>
  );
};

export default RiskMatrix;