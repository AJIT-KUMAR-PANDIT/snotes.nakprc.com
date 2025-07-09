import React from 'react';
import { Bot } from 'lucide-react';


const ChatList = ({ noteChats, onChatClick }) => (
  <div className="flex-1 overflow-y-auto">
    {noteChats.map((chat) => (
      <div
        key={chat.id}
        className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 active:bg-gray-100 group"
        onClick={() => onChatClick && onChatClick(chat)}
      >
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg mr-3 relative">
          {chat.avatar}
          {chat.hasAI && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-2 h-2 text-white" />
            </div>
          )}
        </div>
        {/* Chat Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-medium text-gray-900 truncate group-hover:underline">{chat.title}</h3>
            <span className="text-xs text-gray-500 flex-shrink-0">{chat.timestamp}</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 truncate flex-1">{chat.lastMessage}</p>
            {chat.unread > 0 && (
              <div className="ml-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                {chat.unread}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ChatList;
