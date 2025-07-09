import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => (
  <div className="p-4 bg-gray-50 border-b border-gray-200">
    <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
      <Search className="w-4 h-4 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search notes..."
        className="flex-1 outline-none text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchBar;
