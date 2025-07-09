import React from 'react';
import { MessageCircle, Bot, Bookmark, Settings } from 'lucide-react';

const BottomNavigation = () => (
  <div className="backdrop-blur-lg bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(30,41,59,0.8)] border-t border-gray-200/40 dark:border-slate-700/40 shadow-2xl rounded-t-2xl p-4">
    <div className="flex justify-around">
      <button className="flex flex-col items-center space-y-1 text-green-600 dark:text-green-400">
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs">Notes</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-blue-500 dark:text-blue-400">
        <Bot className="w-5 h-5" />
        <span className="text-xs">AI</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-yellow-600 dark:text-yellow-400">
        <Bookmark className="w-5 h-5" />
        <span className="text-xs">Saved</span>
      </button>
      <button className="flex flex-col items-center space-y-1 text-gray-400 dark:text-gray-300">
        <Settings className="w-5 h-5" />
        <span className="text-xs">Settings</span>
      </button>
    </div>
  </div>
);

export default BottomNavigation;
