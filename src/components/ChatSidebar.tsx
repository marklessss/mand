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
    <div className={`${collapsed ? 'w-0' : 'w-64'} transition-all duration-300 bg-chat-sidebar border-r border-border flex flex-col h-full overflow-hidden`}>
      {!collapsed && (
        <>
          {/* Header */}
          <div className="p-4 border-b border-border">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-sm font-medium"
              onClick={onToggle}
            >
              <Plus className="w-4 h-4" />
              New chat
            </Button>
          </div>

          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search chats"
                className="pl-10 bg-background border-border text-sm"
              />
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2 uppercase tracking-wide">
                Chats
              </div>
              <div className="space-y-1">
                {chatItems.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:bg-chat-hover group ${
                      selectedChat === chat.id ? 'bg-chat-active' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate text-foreground">{chat.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-3 border-t border-border">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-chat-hover transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground">Mohd Diab</div>
                <div className="text-xs text-muted-foreground">Free</div>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}