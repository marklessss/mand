import { ChevronDown, Menu, Plus, PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ChatHeaderProps {
  onMenuToggle: () => void;
  sidebarCollapsed: boolean;
}
export function ChatHeader({
  onMenuToggle,
  sidebarCollapsed
}: ChatHeaderProps) {
  return <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onMenuToggle} className="hover:bg-accent/10 transition-all duration-200 hover:scale-105">
          {sidebarCollapsed ? <PanelLeftOpen className="w-4 h-4 text-accent" /> : <PanelLeftClose className="w-4 h-4" />}
        </Button>
        
        
      </div>

      <div className="flex items-center gap-3">
        
      </div>
    </header>;
}