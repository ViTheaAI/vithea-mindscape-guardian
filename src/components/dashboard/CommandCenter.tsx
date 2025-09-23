import { Card } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingUp, Shield } from "lucide-react";

const CommandCenter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Critical Risk Counter */}
      <Card className="bg-card border border-card-border shadow-medium p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-critical-light opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="h-8 w-8 text-critical" />
            <span className="text-sm text-muted-foreground font-medium">High Risk</span>
          </div>
          <div className="text-4xl font-mono font-bold text-critical">
            15
          </div>
          <p className="text-sm text-critical/80 mt-2">Immediate Intervention Required</p>
        </div>
      </Card>

      {/* Moderate Risk Counter */}
      <Card className="bg-card border border-card-border shadow-medium p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-warning-light opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-warning" />
            <span className="text-sm text-muted-foreground font-medium">Moderate Risk</span>
          </div>
          <div className="text-4xl font-mono font-bold text-warning">
            127
          </div>
          <p className="text-sm text-warning/80 mt-2">Monitor & Support</p>
        </div>
      </Card>

      {/* Low Risk Counter */}
      <Card className="bg-card border border-card-border shadow-medium p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-success-light opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Shield className="h-8 w-8 text-success" />
            <span className="text-sm text-muted-foreground font-medium">Low Risk</span>
          </div>
          <div className="text-4xl font-mono font-bold text-success">
            543
          </div>
          <p className="text-sm text-success/80 mt-2">Stable & Good</p>
        </div>
      </Card>

      {/* Trend Indicator */}
      <Card className="bg-card border border-card-border shadow-medium p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-light opacity-30"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">7-Day Trend</span>
          </div>
          <div className="text-4xl font-mono font-bold text-primary">
            -8%
          </div>
          <p className="text-sm text-primary/80 mt-2">Risk Decreased This Week</p>
        </div>
      </Card>
    </div>
  );
};

export default CommandCenter;