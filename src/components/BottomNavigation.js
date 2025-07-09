import React from 'react';
import { MessageCircle, Bot, Bookmark, Settings } from 'lucide-react';

const BottomNavigation = () => (
  <div className="bg-white border-t border-gray-200 p-4">
    <div className="flex justify-around">
      <button className="flex flex-col items-center space-y-1 text-green-600">
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs">Notes</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-gray-400">
        <Bot className="w-5 h-5" />
        <span className="text-xs">AI</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-gray-400">
        <Bookmark className="w-5 h-5" />
        <span className="text-xs">Saved</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-gray-400">
        <Settings className="w-5 h-5" />
        <span className="text-xs">Settings</span>
      </button>
    </div>
  </div>
);

export default BottomNavigation;
