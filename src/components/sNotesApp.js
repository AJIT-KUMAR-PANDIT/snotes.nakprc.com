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

      // Simulate AI response if in AI mode
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
    <div className="flex flex-col h-screen bg-gray-100 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <ArrowLeft className="w-6 h-6" />
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-lg">
            sN
          </div>
          <div>
            <h1 className="font-semibold text-lg">sNotes</h1>
            <p className="text-xs text-green-100">AI-powered note taking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${
                message.isAI
                  ? 'bg-white text-gray-800 rounded-bl-none'
                  : 'bg-green-500 text-white rounded-br-none'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <div className="flex items-center justify-end mt-1 space-x-1">
                <span className={`text-xs ${message.isAI ? 'text-gray-500' : 'text-green-100'}`}>
                  {message.timestamp}
                </span>
                {!message.isAI && (
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-green-100 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-100 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 min-h-[40px] flex items-center">
            <Paperclip className="w-5 h-5 text-gray-500 mr-2" />
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your note..."
              className="flex-1 bg-transparent outline-none resize-none text-sm max-h-24"
              rows="1"
            />
            <Smile className="w-5 h-5 text-gray-500 ml-2" />
          </div>
          
          {/* AI Toggle Button */}
          <button
            onClick={() => setIsAIMode(!isAIMode)}
            className={`p-2 rounded-full transition-all duration-200 ${
              isAIMode 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            title={isAIMode ? 'AI Mode: ON' : 'AI Mode: OFF'}
          >
            <Bot className="w-5 h-5" />
          </button>

          {/* Send Button */}
          {inputText.trim() ? (
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          ) : (
            <button className="bg-gray-200 text-gray-600 p-2 rounded-full">
              <Mic className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {/* AI Mode Indicator */}
        {isAIMode && (
          <div className="mt-2 flex items-center justify-center">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs flex items-center space-x-1">
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
