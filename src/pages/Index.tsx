import { useState } from 'react';
import { ChatSidebar } from '@/components/ChatSidebar';
import { ChatHeader } from '@/components/ChatHeader';
import { ChatInterface } from '@/components/ChatInterface';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <ChatSidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <ChatHeader onMenuToggle={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
