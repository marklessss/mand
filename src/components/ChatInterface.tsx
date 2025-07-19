import { useState, useRef, useEffect } from 'react';
import { ArrowUp, Mic, Paperclip, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxChars = 4000;

  // Auto-resize textarea functionality
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      setIsLoading(true);
      // Simulate API call
      console.log('Sending message:', message);
      
      // Simulate loading delay
      setTimeout(() => {
        setMessage('');
        setCharCount(0);
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setMessage(value);
      setCharCount(value.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-background to-background/95">
      {/* Main Chat Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            How can I help you today?
          </h1>
          <p className="text-lg text-muted-foreground">
            Ask me anything, and I'll do my best to provide helpful, accurate responses.
          </p>
        </div>
      </div>

      {/* Enhanced Input Area */}
      <div className="p-6 border-t border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative bg-background border-2 border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 focus-within:border-accent/50 focus-within:shadow-xl overflow-hidden">
              {/* Textarea */}
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Message ChatGPT..."
                className="resize-none border-0 bg-transparent px-6 py-4 pr-24 min-h-[60px] max-h-[200px] text-base focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground/70 leading-relaxed"
                disabled={isLoading}
                aria-label="Chat message input"
                rows={1}
              />
              
              {/* Character Counter */}
              {charCount > maxChars * 0.8 && (
                <div className="absolute bottom-2 left-4 text-xs text-muted-foreground">
                  {charCount}/{maxChars}
                </div>
              )}
              
              {/* Input Controls */}
              <div className="absolute right-3 bottom-3 flex items-center gap-2">
                {/* Attachment Button */}
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  className="w-8 h-8 p-0 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-300 rounded-lg"
                  disabled={isLoading}
                  aria-label="Attach file"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                
                {/* Voice Input Button */}
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  className="w-8 h-8 p-0 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-300 rounded-lg"
                  disabled={isLoading}
                  aria-label="Voice input"
                >
                  <Mic className="w-4 h-4" />
                </Button>
                
                {/* Divider */}
                <div className="w-px h-6 bg-border/50 mx-1"></div>
                
                {/* Send/Stop Button */}
                <Button 
                  type={isLoading ? "button" : "submit"}
                  disabled={(!message.trim() && !isLoading) || charCount > maxChars}
                  onClick={isLoading ? () => setIsLoading(false) : undefined}
                  className={`w-8 h-8 p-0 rounded-lg transition-all duration-300 ${
                    isLoading 
                      ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' 
                      : 'bg-foreground text-background hover:bg-foreground/90 disabled:bg-muted disabled:text-muted-foreground'
                  } ${
                    message.trim() && !isLoading ? 'hover:scale-105 shadow-md' : ''
                  }`}
                  aria-label={isLoading ? "Stop generation" : "Send message"}
                >
                  {isLoading ? (
                    <Square className="w-4 h-4" />
                  ) : (
                    <ArrowUp className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </form>
          
          {/* Footer Text */}
          <div className="text-center mt-4">
            <p className="text-xs text-muted-foreground">
              ChatGPT can make mistakes. Check important info. 
              <span className="mx-2">•</span>
              <button className="hover:text-foreground transition-colors duration-300 underline underline-offset-2">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}