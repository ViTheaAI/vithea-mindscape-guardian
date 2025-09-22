import { Card } from "@/components/ui/card";
import { AlertTriangle, Users, TrendingUp, Shield } from "lucide-react";

const CommandCenter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Critical Risk Counter */}
      <Card className="bg-holographic border-critical shadow-critical-glow p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-status-critical opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="h-8 w-8 text-critical animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">CRITICAL RISK</span>
          </div>
          <div className="text-4xl font-mono font-bold text-critical animate-led-flicker">
            15
          </div>
          <p className="text-sm text-critical/80 mt-2">Immediate Intervention Required</p>
        </div>
      </Card>

      {/* Moderate Risk Counter */}
      <Card className="bg-holographic border-warning shadow-warning-glow p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-status-warning opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-warning animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">MODERATE RISK</span>
          </div>
          <div className="text-4xl font-mono font-bold text-warning animate-led-flicker">
            127
          </div>
          <p className="text-sm text-warning/80 mt-2">Monitoring & Support</p>
        </div>
      </Card>

      {/* Low Risk Counter */}
      <Card className="bg-holographic border-success shadow-success-glow p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-status-success opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Shield className="h-8 w-8 text-success animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">LOW RISK</span>
          </div>
          <div className="text-4xl font-mono font-bold text-success animate-led-flicker">
            543
          </div>
          <p className="text-sm text-success/80 mt-2">Stable & Thriving</p>
        </div>
      </Card>

      {/* Trend Indicator */}
      <Card className="bg-holographic border-card-border shadow-holographic p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-glow opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">7-DAY TREND</span>
          </div>
          <div className="text-4xl font-mono font-bold text-primary animate-led-flicker">
            -8%
          </div>
          <p className="text-sm text-primary/80 mt-2">Risk Reduction This Week</p>
        </div>
      </Card>
    </div>
  );
};

export default CommandCenter;