import React from 'react';

const Tabs = ({ tabs, selectedTab, setSelectedTab }) => (
  <div className="flex space-x-8 px-4 py-2 backdrop-blur-md bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(30,41,59,0.5)] rounded-xl shadow border border-gray-200/40 dark:border-slate-700/40">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setSelectedTab(tab.id)}
        className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors font-semibold ${
          selectedTab === tab.id 
            ? 'border-green-500 text-green-700 dark:text-green-300' 
            : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-300'
        }`}
      >
        <tab.icon className="w-4 h-4" />
        <span className="text-sm">{tab.label}</span>
      </button>
    ))}
  </div>
);

export default Tabs;
