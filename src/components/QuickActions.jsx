import React from 'react';
import { Archive, Star, Bot } from 'lucide-react';

const QuickActions = () => (
  <div className="px-4 pb-2">
    <div className="flex items-center space-x-4 bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(30,41,59,0.7)] rounded-xl shadow border border-gray-200/40 dark:border-slate-700/40 px-4 py-2">
      <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 cursor-pointer hover:underline">
        <Archive className="w-4 h-4" />
        <span className="text-sm">Archived</span>
      </div>
      <div className="flex items-center space-x-2 text-yellow-600 dark:text-yellow-400 cursor-pointer hover:underline">
        <Star className="w-4 h-4" />
        <span className="text-sm">Starred</span>
      </div>
      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
        <Bot className="w-4 h-4" />
        <span className="text-sm">AI Summary</span>
      </div>
    </div>
  </div>
);

export default QuickActions;
