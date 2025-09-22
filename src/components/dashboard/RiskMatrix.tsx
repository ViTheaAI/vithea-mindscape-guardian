import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const RiskMatrix = () => {
  const riskData = [
    { level: "Critical", count: 15, percentage: 2.2, color: "critical", bgGradient: "bg-status-critical" },
    { level: "High", count: 42, percentage: 6.1, color: "chart-red", bgGradient: "bg-red-500/20" },
    { level: "Moderate", count: 127, percentage: 18.5, color: "warning", bgGradient: "bg-status-warning" },
    { level: "Low", count: 301, percentage: 43.8, color: "chart-cyan", bgGradient: "bg-blue-500/20" },
    { level: "Minimal", count: 200, percentage: 29.4, color: "success", bgGradient: "bg-status-success" },
  ];

  return (
    <Card className="bg-holographic border-card-border shadow-holographic p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">Risk Distribution Matrix</h3>
        <p className="text-sm text-muted-foreground">Student mental health risk assessment overview</p>
      </div>

      <div className="space-y-4">
        {riskData.map((risk, index) => (
          <div key={risk.level} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div 
                  className={`w-4 h-4 rounded-full ${risk.bgGradient} shadow-glow`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                ></div>
                <span className="font-medium text-foreground">{risk.level} Risk</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-mono font-bold text-foreground">{risk.count}</span>
                <span className="text-sm text-muted-foreground ml-2">({risk.percentage}%)</span>
              </div>
            </div>
            <Progress 
              value={risk.percentage} 
              className={`h-3 bg-muted/30`}
            />
            <div 
              className={`absolute inset-0 ${risk.bgGradient} opacity-20 animate-holographic-shimmer`}
              style={{ 
                width: `${risk.percentage}%`,
                background: `linear-gradient(90deg, transparent, hsl(var(--${risk.color})) 50%, transparent)`,
                backgroundSize: '200% 100%'
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-card-border">
        <div className="text-center">
          <span className="text-3xl font-mono font-bold text-primary animate-led-flicker">685</span>
          <p className="text-sm text-muted-foreground">Total Students Monitored</p>
        </div>
      </div>
    </Card>
  );
};

export default RiskMatrix;