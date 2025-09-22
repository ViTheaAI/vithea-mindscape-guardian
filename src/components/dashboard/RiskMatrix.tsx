import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const RiskMatrix = () => {
  const riskData = [
    { level: "严重", count: 15, percentage: 2.2, color: "critical", bgColor: "bg-critical-light" },
    { level: "高风险", count: 42, percentage: 6.1, color: "chart-red", bgColor: "bg-red-100" },
    { level: "中风险", count: 127, percentage: 18.5, color: "warning", bgColor: "bg-warning-light" },
    { level: "低风险", count: 301, percentage: 43.8, color: "chart-blue", bgColor: "bg-blue-100" },
    { level: "极低", count: 200, percentage: 29.4, color: "success", bgColor: "bg-success-light" },
  ];

  return (
    <Card className="bg-card border border-card-border shadow-medium p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">风险分布矩阵</h3>
        <p className="text-sm text-muted-foreground">学生心理健康风险评估概览</p>
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

      <div className="mt-6 pt-4 border-t border-card-border">
        <div className="text-center">
          <span className="text-3xl font-mono font-bold text-primary">685</span>
          <p className="text-sm text-muted-foreground">监测学生总数</p>
        </div>
      </div>
    </Card>
  );
};

export default RiskMatrix;