import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart3, Users, FileText, Settings, Brain, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";
import CommandCenter from "@/components/dashboard/CommandCenter";
import RiskMatrix from "@/components/dashboard/RiskMatrix";
import AriaAssistant from "@/components/dashboard/AriaAssistant";
import PopulationInsights from "@/components/dashboard/PopulationInsights";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const menuItems = [
    { title: "Command Center", icon: BarChart3, id: "dashboard", color: "text-primary" },
    { title: "Students", icon: Users, id: "students", color: "text-chart-cyan" },
    { title: "Risk Assessment", icon: AlertTriangle, id: "risk", color: "text-warning" },
    { title: "Reports", icon: FileText, id: "reports", color: "text-chart-green" },
    { title: "AI Insights", icon: Brain, id: "insights", color: "text-chart-purple" },
    { title: "Security", icon: Shield, id: "security", color: "text-chart-orange" },
    { title: "Settings", icon: Settings, id: "settings", color: "text-muted-foreground" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background">
        {/* Header */}
        <header className="border-b border-card-border bg-card/50 backdrop-blur-sm">
          <div className="flex h-16 items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Vithea Analytics</h1>
                  <p className="text-xs text-muted-foreground">Mental Health Command Center</p>
                </div>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-card-secondary/50 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-success font-medium">System Online</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Toronto Academy</p>
                <p className="text-xs text-muted-foreground">Dr. Sarah Chen, Principal</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Sidebar */}
          <Sidebar className="w-64 bg-card border-r border-card-border">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="text-primary font-semibold">Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          onClick={() => setActiveView(item.id)}
                          className={`w-full justify-start hover:bg-card-secondary/50 ${
                            activeView === item.id ? 'bg-primary/20 border-primary/30' : ''
                          }`}
                        >
                          <item.icon className={`mr-3 h-5 w-5 ${item.color}`} />
                          <span className="text-foreground">{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-background">
            {activeView === "dashboard" && (
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Mental Health Command Center</h2>
                  <p className="text-muted-foreground">Real-time student mental health monitoring and risk assessment</p>
                </div>

                {/* Command Center Metrics */}
                <CommandCenter />

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Risk Matrix */}
                  <div className="lg:col-span-1">
                    <RiskMatrix />
                  </div>
                  
                  {/* ARIA Assistant */}
                  <div className="lg:col-span-2">
                    <AriaAssistant />
                  </div>
                </div>

                {/* Population Insights */}
                <PopulationInsights />

                {/* Emergency Protocols */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-holographic border border-critical/30 rounded-lg p-4 text-center">
                    <AlertTriangle className="h-8 w-8 text-critical mx-auto mb-2 animate-pulse" />
                    <h4 className="font-semibold text-critical">Crisis Protocol</h4>
                    <p className="text-xs text-muted-foreground mt-1">Emergency response system</p>
                  </div>
                  <div className="bg-holographic border border-warning/30 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-warning mx-auto mb-2 animate-pulse-glow" />
                    <h4 className="font-semibold text-warning">Staff Alert</h4>
                    <p className="text-xs text-muted-foreground mt-1">Notify counseling team</p>
                  </div>
                  <div className="bg-holographic border border-primary/30 rounded-lg p-4 text-center">
                    <FileText className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse-glow" />
                    <h4 className="font-semibold text-primary">Generate Report</h4>
                    <p className="text-xs text-muted-foreground mt-1">Executive summary</p>
                  </div>
                </div>
              </div>
            )}

            {activeView !== "dashboard" && (
              <div className="text-center py-16">
                <Brain className="h-16 w-16 text-primary animate-float mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {menuItems.find(item => item.id === activeView)?.title}
                </h3>
                <p className="text-muted-foreground">This section is under development</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;