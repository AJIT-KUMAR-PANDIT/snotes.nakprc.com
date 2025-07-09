import React, { useState } from 'react';
import { Send, ArrowLeft, Bot, Search, MoreVertical, Plus, Mic, Paperclip, Smile, MessageCircle, Star, Settings, Users, Archive } from 'lucide-react';
import BottomNav from './BottomNav';
import SideNav from './SideNav';
import NotesList from './NotesList';
import MessageView from './MessageView';

const SNotesApp = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('notes');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const notes = [
    {
      id: 1,
      title: "Project Planning",
      lastMessage: "Need to finalize the project timeline and allocate resources...",
      timestamp: "2:30 PM",
      unread: 3,
      aiSuggestion: true,
      starred: true
    },
    {
      id: 2,
      title: "Meeting Notes",
      lastMessage: "Key points from today's client meeting discussed...",
      timestamp: "1:15 PM",
      unread: 0,
      aiSuggestion: false,
      starred: false
    },
    {
      id: 3,
      title: "Ideas & Brainstorming",
      lastMessage: "AI suggested some creative approaches for the new campaign...",
      timestamp: "11:45 AM",
      unread: 1,
      aiSuggestion: true,
      starred: true
    },
    {
      id: 4,
      title: "Daily Journal",
      lastMessage: "Today was productive. Completed most of the pending tasks...",
      timestamp: "9:20 AM",
      unread: 0,
      aiSuggestion: false,
      starred: false
    },
    {
      id: 5,
      title: "Shopping List",
      lastMessage: "Groceries, electronics, and household items needed...",
      timestamp: "Yesterday",
      unread: 0,
      aiSuggestion: false,
      starred: false
    },
    {
      id: 6,
      title: "Travel Planning",
      lastMessage: "AI recommended some great destinations for the summer trip...",
      timestamp: "Yesterday",
      unread: 2,
      aiSuggestion: true,
      starred: true
    }
  ];

  const messages = [
    {
      id: 1,
      text: "Need to finalize the project timeline and allocate resources for the upcoming quarter.",
      isUser: true,
      timestamp: "2:25 PM",
      isAI: false
    },
    {
      id: 2,
      text: "Based on your project scope, I suggest breaking it into 3 phases: Planning (2 weeks), Development (6 weeks), and Testing (2 weeks). Would you like me to create a detailed timeline?",
      isUser: false,
      timestamp: "2:26 PM",
      isAI: true
    },
    {
      id: 3,
      text: "That sounds perfect! Please create the detailed timeline.",
      isUser: true,
      timestamp: "2:27 PM",
      isAI: false
    },
    {
      id: 4,
      text: "Here's your detailed project timeline:\n\n**Phase 1: Planning (Weeks 1-2)**\n- Requirements gathering\n- Team assignments\n- Risk assessment\n\n**Phase 2: Development (Weeks 3-8)**\n- Core development\n- Feature implementation\n- Code reviews\n\n**Phase 3: Testing (Weeks 9-10)**\n- Quality assurance\n- User acceptance testing\n- Deployment preparation",
      isUser: false,
      timestamp: "2:28 PM",
      isAI: true
    },
    {
      id: 5,
      text: "This is exactly what I needed. Can you also suggest team roles?",
      isUser: true,
      timestamp: "2:30 PM",
      isAI: false
    }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'starred') return matchesSearch && note.starred;
    if (activeTab === 'archived') return matchesSearch && note.archived;
    return matchesSearch;
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Desktop Layout
  if (!isMobile) {
    return (
      <div className="h-screen bg-gray-100 flex">
        <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Notes List Panel */}
        <div className="w-full md:w-96 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-emerald-600 text-white px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">
                {activeTab === 'notes' ? 'All Notes' : 
                 activeTab === 'starred' ? 'Starred' : 
                 activeTab === 'archived' ? 'Archived' : 'Settings'}
              </h1>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-emerald-700 rounded">
                  <Search size={20} />
                </button>
                <button className="p-2 hover:bg-emerald-700 rounded">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="bg-emerald-600 px-4 pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
          </div>
          <NotesList filteredNotes={filteredNotes} setSelectedNote={setSelectedNote} />
          {/* Floating Action Button */}
          <button className="absolute bottom-6 left-80 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
            <Plus size={24} />
          </button>
        </div>
        {/* Message Panel */}
        <div className="flex-1 bg-gray-100">
          {selectedNote ? (
            <MessageView
              isMobile={isMobile}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
              messages={messages}
              message={message}
              setMessage={setMessage}
              handleKeyPress={handleKeyPress}
              handleSendMessage={handleSendMessage}
            />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <MessageCircle size={64} className="mx-auto text-gray-400 mb-4" />
                <h2 className="text-xl font-semibold text-gray-600 mb-2">Select a note to start</h2>
                <p className="text-gray-500">Choose from your notes to view the conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Mobile Layout
  if (selectedNote) {
    return (
      <div className="h-screen bg-gray-100 flex flex-col">
        <MessageView
          isMobile={isMobile}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          messages={messages}
          message={message}
          setMessage={setMessage}
          handleKeyPress={handleKeyPress}
          handleSendMessage={handleSendMessage}
        />
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            {activeTab === 'notes' ? 'sNotes' : 
             activeTab === 'starred' ? 'Starred' : 
             activeTab === 'archived' ? 'Archived' : 'Settings'}
          </h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-emerald-700 rounded">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-emerald-700 rounded">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="bg-emerald-600 px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
      </div>
      <NotesList filteredNotes={filteredNotes} setSelectedNote={setSelectedNote} />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
        <Plus size={24} />
      </button>
    </div>
  );
};

export default SNotesApp;
