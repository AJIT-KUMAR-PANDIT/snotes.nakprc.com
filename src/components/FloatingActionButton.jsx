import React from 'react';
import { Edit } from 'lucide-react';

const FloatingActionButton = () => (
  <div className="">
    <button className="bg-green-500 dark:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center justify-center border-4 border-white dark:border-slate-800 backdrop-blur-xl">
      <Edit className="w-6 h-6" />
    </button>
  </div>
);

export default FloatingActionButton;
