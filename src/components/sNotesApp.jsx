import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Search, MoreVertical, ArrowLeft, Paperclip, Smile, Mic } from 'lucide-react';

const sNotesApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to sNotes! Start typing your notes here...",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isAIMode, setIsAIMode] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAI: false
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      if (isAIMode) {
        setTimeout(() => {
          const aiResponse = {
            id: messages.length + 2,
            text: "I've processed your note. Here are some suggestions: organize by topics, add tags, or create a summary?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isAI: true
          };
          setMessages(prev => [...prev, aiResponse]);
        }, 1000);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-transparent relative" style={{ background: 'var(--color-background)', color: 'var(--color-foreground)' }}>
      {/* Header */}
      <div className="backdrop-blur-lg bg-[rgba(34,197,94,0.7)] dark:bg-[rgba(16,185,129,0.4)] text-white p-4 flex items-center justify-between shadow-2xl rounded-b-2xl border-b border-[rgba(34,197,94,0.2)] dark:border-[rgba(16,185,129,0.2)]">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6 opacity-80" />
          <div className="w-10 h-10 bg-[rgba(34,197,94,0.8)] dark:bg-[rgba(16,185,129,0.7)] rounded-full flex items-center justify-center font-bold text-lg shadow-md">
            sN
          </div>
          <div>
            <h1 className="font-semibold text-lg text-shadow">sNotes</h1>
            <p className="text-xs text-green-100/80 dark:text-green-200/80">AI-powered note taking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 opacity-80" />
          <MoreVertical className="w-5 h-5 opacity-80" />
        </div>
      </div>
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-lg backdrop-blur-md border ${
                message.isAI
                  ? 'bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(30,41,59,0.5)] text-gray-800 dark:text-gray-100 border-gray-200/40 dark:border-slate-700/40 rounded-bl-none'
                  : 'bg-[rgba(34,197,94,0.7)] dark:bg-[rgba(16,185,129,0.5)] text-white border-green-200/30 dark:border-green-900/30 rounded-br-none'
              }`}
              style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)' }}
            >
              <p className="text-sm whitespace-pre-wrap drop-shadow-sm">{message.text}</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className={`text-xs ${message.isAI ? 'text-gray-500 dark:text-gray-300' : 'text-green-100 dark:text-green-200'}`}> 
                  {message.timestamp}
                </span>
                {!message.isAI && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-green-100 dark:bg-green-200 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-100 dark:bg-green-200 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Area */}
      <div className="backdrop-blur-lg bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(30,41,59,0.7)] p-4 border-t border-gray-200/40 dark:border-slate-700/40 shadow-2xl">
        <div className="flex items-end space-x-2">
          <div className="flex-1 bg-[rgba(243,244,246,0.7)] dark:bg-[rgba(51,65,85,0.7)] rounded-full px-4 py-2 min-h-[40px] flex items-center border border-gray-200/40 dark:border-slate-700/40 shadow-inner">
            <Paperclip className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" />
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your note..."
              className="flex-1 bg-transparent outline-none resize-none text-sm max-h-24 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400"
              rows="1"
            />
            <Smile className="w-5 h-5 text-gray-500 dark:text-gray-300 ml-2" />
          </div>
          {/* AI Toggle Button */}
          <button
            onClick={() => setIsAIMode(!isAIMode)}
            className={`p-2 rounded-full transition-all duration-200 shadow-lg ${
              isAIMode 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600'
            }`}
            title={isAIMode ? 'AI Mode: ON' : 'AI Mode: OFF'}
          >
            <Bot className="w-5 h-5" />
          </button>
          {/* Send Button */}
          {inputText.trim() ? (
            <button
              onClick={handleSendMessage}
              className="bg-green-500 dark:bg-green-600 text-white p-2 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          ) : (
            <button className="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-200 p-2 rounded-full shadow-md">
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>
        {/* AI Mode Indicator */}
        {isAIMode && (
          <div className="mt-2 flex items-center justify-center">
            <div className="bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs flex items-center space-x-1 shadow">
              <Bot className="w-3 h-3" />
              <span>AI Assistant Active</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default sNotesApp;
