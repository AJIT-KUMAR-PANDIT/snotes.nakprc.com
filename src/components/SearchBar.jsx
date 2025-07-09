import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => (
  <div className="px-4 pt-2 pb-1">
    <div className="flex items-center bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(30,41,59,0.7)] rounded-xl px-3 py-2 shadow border border-gray-200/40 dark:border-slate-700/40">
      <Search className="w-4 h-4 text-gray-400 dark:text-gray-300 mr-2" />
      <input
        type="text"
        placeholder="Search notes..."
        className="flex-1 outline-none text-sm bg-transparent text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchBar;
