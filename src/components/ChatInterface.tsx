import { useState } from 'react';
import { ArrowUp, Mic, Paperclip, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
export function ChatInterface() {
  const [message, setMessage] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      console.log('Sending message:', message);
      setMessage('');
    }
  };
  return <div className="flex-1 flex flex-col h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl text-foreground mb-8">Ready when you are.</h1>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-background">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative bg-background border border-border rounded-2xl shadow-chat-sm overflow-hidden">
              <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask anything" className="resize-none border-0 bg-transparent px-4 py-3 pr-20 min-h-[52px] max-h-32 text-base focus:ring-0 focus-visible:ring-0" onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }} />
              
              {/* Input Controls */}
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <Button type="button" variant="ghost" size="sm" className="w-8 h-8 p-0 text-muted-foreground hover:text-foreground">
                  <Paperclip className="w-4 h-4" />
                </Button>
                
                <div className="w-px h-6 bg-border mx-1"></div>
                
                <Button type="button" variant="ghost" size="sm" className="w-8 h-8 p-0 text-muted-foreground hover:text-foreground">
                  <Mic className="w-4 h-4" />
                </Button>
                
                
                
                <Button type="submit" disabled={!message.trim()} className="w-8 h-8 p-0 bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground rounded-lg">
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>
          
          {/* Footer Text */}
          <div className="text-center mt-2">
            <p className="text-xs text-muted-foreground">
              ChatGPT can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>;
}