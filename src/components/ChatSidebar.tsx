import { useState } from 'react';
import { ChevronDown, MessageSquare, Search, Settings, User, ChevronLeft, ChevronRight, Bot } from 'lucide-react';
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
  { id: '14', title: 'Additional conversation item' },
  { id: '15', title: 'Another test conversation' },
];

interface ChatSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function ChatSidebar({ collapsed, onToggle }: ChatSidebarProps) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Limit to 8 most recent conversations for optimal display
  const displayedChats = chatItems.slice(0, 8);
  const hasMoreChats = chatItems.length > 8;

  return (
    <div 
      className={`${collapsed ? 'w-16' : 'w-80'} transition-all duration-300 ease-in-out bg-sidebar-gradient border-r border-sidebar-border flex flex-col h-full overflow-hidden relative shadow-lg`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Header with Mandaleen Brand */}
      <div className="p-4 border-b border-sidebar-border/50">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} transition-all duration-300`}>
          {/* Robot Icon and Label */}
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} transition-all duration-300`}>
            {collapsed ? (
              /* Collapsed state: Robot icon that transforms to toggle on hover */
              <div className="relative">
                <Button
                  onClick={isHovering ? onToggle : undefined}
                  variant="ghost"
                  className={`w-8 h-8 p-0 rounded-lg transition-all duration-300 ${
                    isHovering 
                      ? 'bg-sidebar-accent hover:bg-sidebar-accent/80 hover:scale-110' 
                      : 'hover:bg-sidebar-accent/50'
                  }`}
                  aria-label={isHovering ? "Expand sidebar" : "Mandaleen AI"}
                >
                  {isHovering ? (
                    <ChevronRight className="w-4 h-4 text-sidebar-foreground transition-all duration-300" />
                  ) : (
                    <Bot className="w-4 h-4 text-accent transition-all duration-300" />
                  )}
                </Button>
              </div>
            ) : (
              /* Expanded state: Robot icon with label */
              <>
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                  <Bot className="w-4 h-4 text-accent" />
                </div>
                <span className="text-lg font-semibold text-sidebar-foreground animate-fade-in">
                  Mandaleen
                </span>
              </>
            )}
          </div>
          
          {/* Toggle Button - Only visible when expanded */}
          {!collapsed && (
            <Button
              onClick={onToggle}
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 hover:bg-sidebar-accent/80 hover:scale-110 transition-all duration-300 rounded-lg"
              aria-label="Collapse sidebar"
            >
              <ChevronLeft className="w-4 h-4 text-sidebar-foreground/60" />
            </Button>
          )}
        </div>
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
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {!collapsed && (
            <div className="text-xs font-semibold text-sidebar-foreground/70 px-4 py-3 uppercase tracking-wider animate-fade-in flex-shrink-0">
              Recent Conversations
              {hasMoreChats && (
                <span className="ml-2 text-sidebar-foreground/50 font-normal normal-case">
                  ({chatItems.length} total)
                </span>
              )}
            </div>
          )}
          
          {/* Scrollable conversation list - only scrolls when more than 8 items */}
          <div className={`flex-1 px-3 ${hasMoreChats ? 'overflow-y-auto' : 'overflow-hidden'} scrollbar-thin scrollbar-thumb-sidebar-border scrollbar-track-transparent`}>
            <div className="space-y-2 pb-2">
              {displayedChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`w-full text-left ${collapsed ? 'px-2 py-4' : 'px-4 py-4'} rounded-xl text-sm transition-all duration-300 hover:bg-chat-hover hover:scale-[1.02] hover:shadow-sm group relative border border-transparent hover:border-sidebar-border/30 ${
                    selectedChat === chat.id ? 'bg-chat-active shadow-md ring-1 ring-accent/20 border-accent/20' : ''
                  }`}
                  title={collapsed ? chat.title : undefined}
                  aria-label={collapsed ? chat.title : undefined}
                >
                  <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
                    <MessageSquare className={`w-5 h-5 text-sidebar-foreground/60 flex-shrink-0 transition-all duration-300 ${selectedChat === chat.id ? 'text-accent' : 'group-hover:text-sidebar-foreground'}`} />
                    {!collapsed && (
                      <span className="truncate text-sidebar-foreground animate-fade-in font-medium group-hover:text-sidebar-foreground transition-colors duration-300 text-base leading-relaxed">
                        {chat.title}
                      </span>
                    )}
                  </div>
                  {/* Active indicator */}
                  {selectedChat === chat.id && !collapsed && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
              
              {/* Show "View More" indicator when there are additional conversations */}
              {hasMoreChats && !collapsed && (
                <div className="px-4 py-2 text-center">
                  <span className="text-xs text-sidebar-foreground/50 font-medium">
                    +{chatItems.length - 8} more conversations
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User Profile - Reduced padding for height optimization */}
      <div className="p-3 border-t border-sidebar-border/50 bg-sidebar-accent/20 backdrop-blur-sm flex-shrink-0">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} p-2 rounded-xl hover:bg-chat-hover hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}>
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