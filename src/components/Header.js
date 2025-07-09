import React from 'react';
import { Camera, Search, MoreVertical } from 'lucide-react';

const Header = () => (
  <div className="bg-green-600 text-white p-4 shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-xl font-semibold">sNotes</h1>
      <div className="flex items-center space-x-4">
        <Camera className="w-5 h-5" />
        <Search className="w-5 h-5" />
        <MoreVertical className="w-5 h-5" />
      </div>
    </div>
  </div>
);

export default Header;
