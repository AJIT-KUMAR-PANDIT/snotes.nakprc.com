import React from 'react';
import { Search, MoreVertical } from 'lucide-react';

const Header = () => (
  <div className="backdrop-blur-lg bg-[rgba(34,197,94,0.7)] dark:bg-[rgba(16,185,129,0.4)] text-white p-4 shadow-2xl rounded-b-2xl border-b border-[rgba(34,197,94,0.2)] dark:border-[rgba(16,185,129,0.2)]">
    <div className="flex items-center justify-between mb-2">
      <h1 className="text-2xl font-bold tracking-tight text-shadow">sNotes</h1>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 opacity-80" />
        <MoreVertical className="w-5 h-5 opacity-80" />
      </div>
    </div>
    <p className="text-xs text-green-100/80 dark:text-green-200/80 font-medium">AI-powered note taking</p>
  </div>
);

export default Header;
