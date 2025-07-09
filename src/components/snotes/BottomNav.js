import React from 'react';
import { MessageCircle, Star, Archive, Settings } from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }) => (
  <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
    <div className="flex justify-around">
      <button
        onClick={() => setActiveTab('notes')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
          activeTab === 'notes' ? 'text-emerald-600' : 'text-gray-500'
        }`}
      >
        <MessageCircle size={20} />
        <span className="text-xs mt-1">Notes</span>
      </button>
      <button
        onClick={() => setActiveTab('starred')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
          activeTab === 'starred' ? 'text-emerald-600' : 'text-gray-500'
        }`}
      >
        <Star size={20} />
        <span className="text-xs mt-1">Starred</span>
      </button>
      <button
        onClick={() => setActiveTab('archived')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
          activeTab === 'archived' ? 'text-emerald-600' : 'text-gray-500'
        }`}
      >
        <Archive size={20} />
        <span className="text-xs mt-1">Archived</span>
      </button>
      <button
        onClick={() => setActiveTab('settings')}
        className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
          activeTab === 'settings' ? 'text-emerald-600' : 'text-gray-500'
        }`}
      >
        <Settings size={20} />
        <span className="text-xs mt-1">Settings</span>
      </button>
    </div>
  </div>
);

export default BottomNav;
