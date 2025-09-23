import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic, Bot, X, MessageSquare } from "lucide-react";

interface ChatbotSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatbotSidebar = ({ isOpen, onToggle }: ChatbotSidebarProps) => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      content: "ARIA online. How can I assist with student mental health monitoring today?",
      timestamp: "09:15"
    }
  ]);

  const quickActions = [
    "Show high-risk students",
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
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "assistant", 
        content: `Processing request: "${message}". I've identified 3 high-risk students requiring immediate attention. Would you like me to display their profiles and recommended interventions?`,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    }, 1000);
    
    setMessage("");
  };

  return (
    <div className="h-full flex flex-col bg-card">
      <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border bg-card-secondary">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">ARIA Assistant</h3>
                  <p className="text-sm text-muted-foreground">AI Risk Intelligence</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-border">
            <p className="text-sm font-medium text-foreground mb-3">Quick Commands</p>
            <div className="grid grid-cols-1 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="justify-start text-left h-auto py-2 px-3 text-xs bg-card-secondary hover:bg-accent"
                  onClick={() => setMessage(action)}
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card-secondary border border-border text-foreground'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">{msg.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-card-secondary">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask ARIA about student mental health..."
                className="flex-1 text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                size="sm"
                variant={isListening ? "destructive" : "outline"}
                className="p-2"
                onClick={() => setIsListening(!isListening)}
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                onClick={handleSendMessage}
                className="p-2"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ChatbotSidebar;