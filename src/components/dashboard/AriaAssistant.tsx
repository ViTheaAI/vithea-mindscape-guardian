import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic, Bot, Sparkles } from "lucide-react";

const AriaAssistant = () => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      content: "ARIA online. How may I assist with student mental health monitoring today?",
      timestamp: "09:15"
    }
  ]);

  const quickActions = [
    "Show critical risk students",
    "Generate board report",
    "Check resource allocation",
    "Crisis protocol status"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, {
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }]);
    
    // Simulate ARIA response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "assistant", 
        content: `Processing request: "${message}". I've identified 3 critical risk students requiring immediate attention. Would you like me to display their profiles and recommended interventions?`,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <Card className="bg-holographic border-primary shadow-glow p-6 relative overflow-hidden">
      {/* Holographic Background Effect */}
      <div className="absolute inset-0 bg-neon-glow opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-scan-line"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="relative">
            <Bot className="h-8 w-8 text-primary animate-float" />
            <Sparkles className="h-4 w-4 text-primary-glow absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">ARIA Assistant</h3>
            <p className="text-sm text-primary">AI Risk Intelligence • Online</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Quick Commands:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="bg-card-secondary/50 border-primary/30 text-xs hover:bg-primary/20 hover:border-primary"
                onClick={() => setMessage(action)}
              >
                {action}
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-4 mb-4 max-h-40 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                msg.type === 'user' 
                  ? 'bg-primary/20 border border-primary/30 text-foreground' 
                  : 'bg-card-secondary/50 border border-card-border text-foreground'
              }`}>
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask ARIA about student mental health..."
            className="bg-card-secondary/50 border-primary/30 text-foreground"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            size="sm"
            className={`p-2 ${isListening ? 'bg-critical shadow-critical-glow' : 'bg-primary shadow-glow'}`}
            onClick={() => setIsListening(!isListening)}
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            onClick={handleSendMessage}
            className="bg-primary shadow-glow hover:shadow-glow-strong"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AriaAssistant;