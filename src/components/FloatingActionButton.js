import React from 'react';
import { Edit } from 'lucide-react';

const FloatingActionButton = () => (
  <div className="fixed bottom-6 right-6 z-50">
    <button className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center">
      <Edit className="w-6 h-6" />
    </button>
  </div>
);

export default FloatingActionButton;
