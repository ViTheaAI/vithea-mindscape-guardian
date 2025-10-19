import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, FileText, Settings, Brain, Shield, AlertTriangle, Menu, X } from "lucide-react";
import CommandCenter from "@/components/dashboard/CommandCenter";
import RiskMatrix from "@/components/dashboard/RiskMatrix";
import PopulationInsights from "@/components/dashboard/PopulationInsights";
import ChatbotSidebar from "@/components/dashboard/ChatbotSidebar";
import MasterControls from "@/components/dashboard/MasterControls";
import AdvancedVisualizations from "@/components/dashboard/AdvancedVisualizations";
import EventsTimeline from "@/components/dashboard/EventsTimeline";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  
  // Master control states
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("all");
  const [selectedTimeRange, setSelectedTimeRange] = useState("current-month");
  const [selectedGender, setSelectedGender] = useState("all");

  const handleRefresh = () => {
    // Simulate data refresh
    console.log("Refreshing data with filters:", {
      grade: selectedGrade,
      riskLevel: selectedRiskLevel,
      timeRange: selectedTimeRange,
      gender: selectedGender
    });
  };

  const menuItems = [
    { title: "Command Center", icon: BarChart3, id: "dashboard", color: "text-primary" },
    { title: "Student Management", icon: Users, id: "students", color: "text-chart-blue" },
    { title: "Risk Assessment", icon: AlertTriangle, id: "risk", color: "text-warning" },
    { title: "Reports Center", icon: FileText, id: "reports", color: "text-chart-emerald" },
    { title: "AI Insights", icon: Brain, id: "insights", color: "text-chart-purple" },
    { title: "Security Management", icon: Shield, id: "security", color: "text-chart-cyan" },
    { title: "System Settings", icon: Settings, id: "settings", color: "text-muted-foreground" },
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
                <h1 className="text-xl font-bold text-foreground">Vithea Analytics Platform</h1>
                <p className="text-xs text-muted-foreground">Mental Health Command Center</p>
              </div>
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-success-light rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">System Online</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Toronto Academy</p>
              <p className="text-xs text-muted-foreground">Dr. Chen, Principal</p>
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
            <h2 className="font-semibold text-foreground mb-4">Navigation Menu</h2>
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
                <h2 className="text-3xl font-bold text-foreground mb-2">Mental Health Command Center</h2>
                <p className="text-muted-foreground">Real-time Student Mental Health Monitoring & Risk Assessment System</p>
              </div>

              {/* Master Controls */}
              <MasterControls
                selectedGrade={selectedGrade}
                selectedRiskLevel={selectedRiskLevel}
                selectedTimeRange={selectedTimeRange}
                selectedGender={selectedGender}
                onGradeChange={setSelectedGrade}
                onRiskLevelChange={setSelectedRiskLevel}
                onTimeRangeChange={setSelectedTimeRange}
                onGenderChange={setSelectedGender}
                onRefresh={handleRefresh}
              />

              {/* Command Center Metrics */}
              <CommandCenter filters={{
                grade: selectedGrade,
                riskLevel: selectedRiskLevel,
                timeRange: selectedTimeRange,
                gender: selectedGender
              }} />

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Risk Matrix */}
                <div className="lg:col-span-1">
                  <RiskMatrix filters={{
                    grade: selectedGrade,
                    riskLevel: selectedRiskLevel,
                    timeRange: selectedTimeRange,
                    gender: selectedGender
                  }} />
                </div>
                
                {/* Population Insights - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <PopulationInsights filters={{
                    grade: selectedGrade,
                    riskLevel: selectedRiskLevel,
                    timeRange: selectedTimeRange,
                    gender: selectedGender
                  }} />
                </div>
              </div>

              {/* Events Timeline - New Section */}
              <EventsTimeline filters={{
                grade: selectedGrade,
                riskLevel: selectedRiskLevel,
                timeRange: selectedTimeRange,
                gender: selectedGender
              }} />

              {/* Advanced Visualizations */}
              <AdvancedVisualizations 
                filters={{
                  grade: selectedGrade,
                  riskLevel: selectedRiskLevel,
                  timeRange: selectedTimeRange,
                  gender: selectedGender
                }}
              />

              {/* Emergency Protocols */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card border border-critical/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <AlertTriangle className="h-8 w-8 text-critical mx-auto mb-2" />
                  <h4 className="font-semibold text-critical">Crisis Protocol</h4>
                  <p className="text-xs text-muted-foreground mt-1">Emergency Response System</p>
                </div>
                <div className="bg-card border border-warning/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <Users className="h-8 w-8 text-warning mx-auto mb-2" />
                  <h4 className="font-semibold text-warning">Staff Alert</h4>
                  <p className="text-xs text-muted-foreground mt-1">Notify Counseling Team</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-shadow">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">Generate Report</h4>
                  <p className="text-xs text-muted-foreground mt-1">Executive Summary</p>
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
              <p className="text-muted-foreground">This section is under development</p>
            </div>
          )}
        </main>
      </div>

        {/* Chatbot Sidebar - Right side sliding panel */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border shadow-lg z-30 transform transition-transform duration-300 ${
          chatbotOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ChatbotSidebar 
            isOpen={chatbotOpen} 
            onToggle={() => setChatbotOpen(!chatbotOpen)} 
          />
        </div>

        {/* Chatbot Toggle Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-40 bg-primary hover:bg-primary/90"
        >
          <Brain className="h-6 w-6" />
        </Button>
    </div>
  );
};

export default Index;