import { useState } from 'react';
import { ChevronDown, MessageSquare, Plus, Search, Settings, User } from 'lucide-react';
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
    <div className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-500 ease-in-out bg-sidebar-gradient border-r border-sidebar-border flex flex-col h-full overflow-hidden`}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <Button
          variant="outline"
          className={`${collapsed ? 'w-8 h-8 p-0' : 'w-full'} justify-center ${collapsed ? '' : 'justify-start gap-3'} text-sm font-medium bg-sidebar-accent text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent/80 hover:scale-105 transition-all duration-300`}
          onClick={onToggle}
        >
          <Plus className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span className="animate-fade-in">New chat</span>}
        </Button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="p-3 border-b border-sidebar-border animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sidebar-foreground/60" />
            <Input
              placeholder="Search chats"
              className="pl-10 bg-sidebar-accent border-sidebar-border text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50"
            />
          </div>
        </div>
      )}
      
      {/* Search icon only when collapsed */}
      {collapsed && (
        <div className="p-3 border-b border-sidebar-border flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 hover:bg-sidebar-accent/80 hover:scale-110 transition-all duration-300"
          >
            <Search className="w-4 h-4 text-sidebar-foreground/60" />
          </Button>
        </div>
      )}

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {!collapsed && (
            <div className="text-xs font-medium text-sidebar-foreground/70 px-3 py-2 uppercase tracking-wide animate-fade-in">
              Chats
            </div>
          )}
          <div className="space-y-1">
            {chatItems.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`w-full text-left ${collapsed ? 'px-2 py-3' : 'px-3 py-2'} rounded-lg text-sm transition-all duration-300 hover:bg-chat-hover hover:scale-105 group ${
                  selectedChat === chat.id ? 'bg-chat-active shadow-md' : ''
                }`}
                title={collapsed ? chat.title : undefined}
              >
                <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
                  <MessageSquare className={`w-4 h-4 text-sidebar-foreground/60 flex-shrink-0 transition-colors duration-300 ${selectedChat === chat.id ? 'text-accent' : ''}`} />
                  {!collapsed && (
                    <span className="truncate text-sidebar-foreground animate-fade-in">{chat.title}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-sidebar-border">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-2 rounded-lg hover:bg-chat-hover hover:scale-105 transition-all duration-300 cursor-pointer group`}>
          <div className="w-8 h-8 bg-premium-gradient rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <User className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0 animate-fade-in">
                <div className="text-sm font-medium text-sidebar-foreground">Mohd Diab</div>
                <div className="text-xs text-sidebar-foreground/60">Free</div>
              </div>
              <ChevronDown className="w-4 h-4 text-sidebar-foreground/60 transition-transform duration-300 group-hover:rotate-180" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}