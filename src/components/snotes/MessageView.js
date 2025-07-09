import React from 'react';
import { ArrowLeft, Search, MoreVertical, Bot, Paperclip, Smile, Mic, Send } from 'lucide-react';

const MessageView = ({
  isMobile,
  selectedNote,
  setSelectedNote,
  messages,
  message,
  setMessage,
  handleKeyPress,
  handleSendMessage
}) => (
  <div className="h-full flex flex-col">
    {/* Header */}
    <div className="bg-emerald-600 text-white px-4 py-3 flex items-center space-x-3">
      {isMobile && (
        <button 
          onClick={() => setSelectedNote(null)}
          className="p-1 hover:bg-emerald-700 rounded"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{selectedNote?.title}</h1>
        <p className="text-emerald-100 text-sm">AI-powered note</p>
      </div>
      <button className="p-2 hover:bg-emerald-700 rounded">
        <Search size={20} />
      </button>
      <button className="p-2 hover:bg-emerald-700 rounded">
        <MoreVertical size={20} />
      </button>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${
              msg.isUser
                ? 'bg-emerald-500 text-white rounded-br-none'
                : msg.isAI
                ? 'bg-blue-100 text-gray-800 rounded-bl-none border-l-4 border-blue-500'
                : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
            }`}
          >
            {msg.isAI && (
              <div className="flex items-center space-x-2 mb-2">
                <Bot size={16} className="text-blue-600" />
                <span className="text-xs font-semibold text-blue-600">AI Assistant</span>
              </div>
            )}
            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            <div className="flex justify-end mt-1">
              <span className={`text-xs ${msg.isUser ? 'text-emerald-100' : 'text-gray-500'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Input Area */}
    <div className="bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex items-end space-x-3">
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <Paperclip size={20} />
        </button>
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            rows="1"
          />
          <button className="absolute right-2 top-2 p-1 text-gray-500 hover:text-gray-700">
            <Smile size={18} />
          </button>
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <Mic size={20} />
        </button>
        <button className="p-2 text-blue-500 hover:text-blue-700">
          <Bot size={20} />
        </button>
        <button
          onClick={handleSendMessage}
          className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  </div>
);

export default MessageView;
