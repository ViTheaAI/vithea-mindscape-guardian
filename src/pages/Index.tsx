import { useState } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, FileText, Settings, Brain, Shield, AlertTriangle, Menu, X } from "lucide-react";
import CommandCenter from "@/components/dashboard/CommandCenter";
import RiskMatrix from "@/components/dashboard/RiskMatrix";
import PopulationInsights from "@/components/dashboard/PopulationInsights";
import ChatbotSidebar from "@/components/dashboard/ChatbotSidebar";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const menuItems = [
    { title: "指挥中心", icon: BarChart3, id: "dashboard", color: "text-primary" },
    { title: "学生管理", icon: Users, id: "students", color: "text-chart-blue" },
    { title: "风险评估", icon: AlertTriangle, id: "risk", color: "text-warning" },
    { title: "报告中心", icon: FileText, id: "reports", color: "text-chart-emerald" },
    { title: "AI洞察", icon: Brain, id: "insights", color: "text-chart-purple" },
    { title: "安全管理", icon: Shield, id: "security", color: "text-chart-cyan" },
    { title: "系统设置", icon: Settings, id: "settings", color: "text-muted-foreground" },
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-soft sticky top-0 z-30">
        <div className="flex h-16 items-center px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Vithea分析平台</h1>
                <p className="text-xs text-muted-foreground">心理健康指挥中心</p>
              </div>
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-success-light rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">系统在线</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">多伦多学院</p>
              <p className="text-xs text-muted-foreground">陈博士，校长</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Navigation Sidebar */}
        <div className={`fixed lg:relative top-0 left-0 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border shadow-medium z-30 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-4">
            <h2 className="font-semibold text-foreground mb-4">导航菜单</h2>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeView === item.id ? "default" : "ghost"}
                  className={`w-full justify-start ${activeView === item.id ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'}`}
                  onClick={() => {
                    setActiveView(item.id);
                    setSidebarOpen(false); // Close sidebar on mobile after selection
                  }}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${activeView === item.id ? 'text-primary-foreground' : item.color}`} />
                  {item.title}
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className={`flex-1 p-6 bg-background transition-all duration-300 ${sidebarOpen ? 'lg:ml-0' : ''}`}>
          {activeView === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">心理健康指挥中心</h2>
                <p className="text-muted-foreground">实时学生心理健康监测与风险评估系统</p>
              </div>

              {/* Command Center Metrics */}
              <CommandCenter />

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Risk Matrix */}
                <div className="lg:col-span-1">
                  <RiskMatrix />
                </div>
                
                {/* Population Insights - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <PopulationInsights />
                </div>
              </div>

              {/* Emergency Protocols */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card border border-critical/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <AlertTriangle className="h-8 w-8 text-critical mx-auto mb-2" />
                  <h4 className="font-semibold text-critical">危机协议</h4>
                  <p className="text-xs text-muted-foreground mt-1">紧急响应系统</p>
                </div>
                <div className="bg-card border border-warning/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <Users className="h-8 w-8 text-warning mx-auto mb-2" />
                  <h4 className="font-semibold text-warning">人员警报</h4>
                  <p className="text-xs text-muted-foreground mt-1">通知咨询团队</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">生成报告</h4>
                  <p className="text-xs text-muted-foreground mt-1">执行摘要</p>
                </div>
              </div>
            </div>
          )}

          {activeView !== "dashboard" && (
            <div className="text-center py-16 animate-fade-in">
              <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {menuItems.find(item => item.id === activeView)?.title}
              </h3>
              <p className="text-muted-foreground">该部分正在开发中</p>
            </div>
          )}
        </main>
      </div>

      {/* Chatbot Sidebar */}
      <ChatbotSidebar 
        isOpen={chatbotOpen} 
        onToggle={() => setChatbotOpen(!chatbotOpen)} 
      />
    </div>
  );
};

export default Index;