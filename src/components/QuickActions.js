import React from 'react';
import { Archive, Star, Bot } from 'lucide-react';

const QuickActions = () => (
  <div className="p-4 bg-white border-b border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 text-green-600 cursor-pointer hover:underline">
        <Archive className="w-4 h-4" />
        <span className="text-sm">Archived</span>
      </div>
      <div className="flex items-center space-x-2 text-yellow-600 cursor-pointer hover:underline">
        <Star className="w-4 h-4" />
        <span className="text-sm">Starred</span>
      </div>
      <div className="flex items-center space-x-2 text-blue-600 cursor-pointer hover:underline">
        <Bot className="w-4 h-4" />
        <span className="text-sm">AI Summary</span>
      </div>
    </div>
  </div>
);

export default QuickActions;
