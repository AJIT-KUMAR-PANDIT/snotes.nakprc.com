import React from 'react';
import { Bot, Star } from 'lucide-react';

const NotesList = ({ filteredNotes, setSelectedNote }) => (
  <div className="flex-1 overflow-y-auto bg-white">
    {filteredNotes.map((note) => (
      <div
        key={note.id}
        onClick={() => setSelectedNote(note)}
        className="flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 truncate flex items-center">
              {note.title}
              {note.aiSuggestion && (
                <Bot size={16} className="ml-2 text-blue-500 flex-shrink-0" />
              )}
              {note.starred && (
                <Star size={14} className="ml-2 text-yellow-500 flex-shrink-0 fill-current" />
              )}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {note.timestamp}
              </span>
              {note.unread > 0 && (
                <span className="bg-emerald-500 text-white text-xs rounded-full px-2 py-1 min-w-5 h-5 flex items-center justify-center">
                  {note.unread}
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600 truncate">{note.lastMessage}</p>
        </div>
      </div>
    ))}
  </div>
);

export default NotesList;
