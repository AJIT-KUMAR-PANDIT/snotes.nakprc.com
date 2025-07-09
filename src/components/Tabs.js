import React from 'react';

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => (
  <div className="flex space-x-8 bg-green-600 px-4">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setSelectedTab(tab.id)}
        className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
          selectedTab === tab.id 
            ? 'border-white text-white' 
            : 'border-transparent text-green-200'
        }`}
      >
        <tab.icon className="w-4 h-4" />
        <span className="text-sm font-medium">{tab.label}</span>
      </button>
    ))}
  </div>
);

export default Tabs;
