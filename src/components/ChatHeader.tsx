import { Settings, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onMenuToggle: () => void;
  sidebarCollapsed: boolean;
}

export function ChatHeader({
  onMenuToggle,
  sidebarCollapsed
}: ChatHeaderProps) {
  return (
    <header className="h-16 border-b border-border/50 bg-background/80 backdrop-blur-md flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Logo/Brand Area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-premium-gradient rounded-lg flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-semibold text-foreground hidden sm:block">
            ChatGPT
          </h1>
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="hover:bg-accent/10 transition-all duration-300 hover:scale-105 rounded-lg"
          aria-label="Help"
        >
          <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors duration-300" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="hover:bg-accent/10 transition-all duration-300 hover:scale-105 rounded-lg"
          aria-label="Settings"
        >
          <Settings className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors duration-300" />
        </Button>
      </div>
    </header>
  );
}