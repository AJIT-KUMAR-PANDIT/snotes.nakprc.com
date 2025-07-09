import React from 'react';
import { MessageCircle, Star, Archive, Settings } from 'lucide-react';

const SideNav = ({ activeTab, setActiveTab }) => (
  <div className="hidden md:flex md:w-16 lg:w-64 bg-gray-50 border-r border-gray-200 flex-col">
    <div className="p-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800 lg:block hidden">sNotes</h1>
      <h1 className="text-xl font-semibold text-gray-800 lg:hidden block text-center">sN</h1>
    </div>
    <div className="flex-1 py-4">
      <div className="space-y-2 px-2">
        <button
          onClick={() => setActiveTab('notes')}
          className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'notes' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <MessageCircle size={20} />
          <span className="ml-3 lg:block hidden">All Notes</span>
        </button>
        <button
          onClick={() => setActiveTab('starred')}
          className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'starred' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Star size={20} />
          <span className="ml-3 lg:block hidden">Starred</span>
        </button>
        <button
          onClick={() => setActiveTab('archived')}
          className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'archived' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Archive size={20} />
          <span className="ml-3 lg:block hidden">Archived</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
            activeTab === 'settings' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Settings size={20} />
          <span className="ml-3 lg:block hidden">Settings</span>
        </button>
      </div>
    </div>
  </div>
);

export default SideNav;
