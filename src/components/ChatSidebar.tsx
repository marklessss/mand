import { useState } from 'react';
import { ChevronDown, MessageSquare, Plus, Search, Settings, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatItem {
  id: string;
  title: string;
  timestamp?: string;
}

const chatItems: ChatItem[] = [
  { id: '1', title: 'Daqeeq.ai Advisor' },
  { id: '2', title: '100% Human Writing With...' },
  { id: '3', title: 'N8N Assistant (By Nskha)' },
  { id: '4', title: 'Minimal page entrance rewrite' },
  { id: '5', title: 'Rewrite code for production' },
  { id: '6', title: 'Code cleanup and planning' },
  { id: '7', title: 'AI voice agent instructions' },
  { id: '8', title: 'Rewrite note clarification' },
  { id: '9', title: 'تنسيق المعلومات' },
  { id: '10', title: 'Retell AI Arabic Support' },
  { id: '11', title: 'Color change request' },
  { id: '12', title: 'Upload app to GitHub' },
  { id: '13', title: 'Rewrite prompt for UI design' },
];

interface ChatSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function ChatSidebar({ collapsed, onToggle }: ChatSidebarProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className={`${collapsed ? 'w-16' : 'w-80'} transition-all duration-300 ease-in-out bg-sidebar-gradient border-r border-sidebar-border flex flex-col h-full overflow-hidden relative shadow-lg`}>
      {/* Header with New Chat Button */}
      <div className="p-4 border-b border-sidebar-border/50">
        <Button
          variant="outline"
          className={`${collapsed ? 'w-8 h-8 p-0' : 'w-full'} justify-center ${collapsed ? '' : 'justify-start gap-3'} text-sm font-medium bg-sidebar-accent/80 text-sidebar-foreground border-sidebar-border/50 hover:bg-sidebar-accent hover:scale-[1.02] transition-all duration-300 shadow-sm backdrop-blur-sm`}
          aria-label={collapsed ? "New chat" : undefined}
        >
          <Plus className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span className="animate-fade-in font-medium">New chat</span>}
        </Button>
      </div>

      {/* Search Section */}
      {!collapsed && (
        <div className="p-4 border-b border-sidebar-border/50 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-foreground/60" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 bg-sidebar-accent/50 border-sidebar-border/50 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50 focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 backdrop-blur-sm"
              aria-label="Search conversations"
            />
          </div>
        </div>
      )}
      
      {/* Search icon only when collapsed */}
      {collapsed && (
        <div className="p-3 border-b border-sidebar-border/50 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 hover:bg-sidebar-accent/80 hover:scale-110 transition-all duration-300 rounded-lg"
            aria-label="Search conversations"
          >
            <Search className="w-4 h-4 text-sidebar-foreground/60" />
          </Button>
        </div>
      )}

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sidebar-border scrollbar-track-transparent">
        <div className="p-2">
          {!collapsed && (
            <div className="text-xs font-semibold text-sidebar-foreground/70 px-3 py-3 uppercase tracking-wider animate-fade-in">
              Recent Conversations
            </div>
          )}
          <div className="space-y-1">
            {chatItems.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`w-full text-left ${collapsed ? 'px-2 py-3' : 'px-3 py-3'} rounded-xl text-sm transition-all duration-300 hover:bg-chat-hover hover:scale-[1.02] hover:shadow-sm group relative ${
                  selectedChat === chat.id ? 'bg-chat-active shadow-md ring-1 ring-accent/20' : ''
                }`}
                title={collapsed ? chat.title : undefined}
                aria-label={collapsed ? chat.title : undefined}
              >
                <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
                  <MessageSquare className={`w-4 h-4 text-sidebar-foreground/60 flex-shrink-0 transition-all duration-300 ${selectedChat === chat.id ? 'text-accent' : 'group-hover:text-sidebar-foreground'}`} />
                  {!collapsed && (
                    <span className="truncate text-sidebar-foreground animate-fade-in font-medium group-hover:text-sidebar-foreground transition-colors duration-300">
                      {chat.title}
                    </span>
                  )}
                </div>
                {/* Active indicator */}
                {selectedChat === chat.id && !collapsed && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button - Positioned inside sidebar on the right */}
      <div className="absolute top-4 -right-3 z-10">
        <Button
          onClick={onToggle}
          variant="outline"
          size="sm"
          className="w-6 h-6 p-0 bg-background border-sidebar-border shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 rounded-full"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-3 h-3 text-foreground" />
          ) : (
            <ChevronLeft className="w-3 h-3 text-foreground" />
          )}
        </Button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border/50 bg-sidebar-accent/20 backdrop-blur-sm">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-3 rounded-xl hover:bg-chat-hover hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}>
          <div className="w-8 h-8 bg-premium-gradient rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ring-2 ring-accent/20">
            <User className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0 animate-fade-in">
                <div className="text-sm font-semibold text-sidebar-foreground">Mohd Diab</div>
                <div className="text-xs text-sidebar-foreground/60 font-medium">Free Plan</div>
              </div>
              <ChevronDown className="w-4 h-4 text-sidebar-foreground/60 transition-all duration-300 group-hover:rotate-180 group-hover:text-accent" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}