import { ChevronDown, Menu, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onMenuToggle: () => void;
  sidebarCollapsed: boolean;
}

export function ChatHeader({ onMenuToggle, sidebarCollapsed }: ChatHeaderProps) {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          <Menu className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <Button variant="ghost" className="text-base font-medium px-2">
            ChatGPT
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="sm"
          className="bg-premium-gradient text-white hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4 mr-2" />
          Get Plus
        </Button>
      </div>
    </header>
  );
}