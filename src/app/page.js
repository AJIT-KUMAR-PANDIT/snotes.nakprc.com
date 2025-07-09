"use client";
import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Tabs from '../components/Tabs.jsx';
import SearchBar from '../components/SearchBar.jsx';
import QuickActions from '../components/QuickActions.jsx';
import ChatList from '../components/ChatList.jsx';
import SNotesApp from '../components/sNotesApp.jsx';
import FloatingActionButton from '../components/FloatingActionButton.jsx';
import BottomNavigation from '../components/BottomNavigation.jsx';
import { MessageCircle, Users, Phone } from 'lucide-react';

const noteChats = [
  {
    id: 1,
    title: "Project Ideas",
    lastMessage: "AI: I've organized your project ideas into categories...",
    timestamp: "2:30 PM",
    unread: 2,
    hasAI: true,
    avatar: "📝"
  },
  {
    id: 2,
    title: "Meeting Notes",
    lastMessage: "Discussed Q4 goals and team restructuring",
    timestamp: "1:15 PM",
    unread: 0,
    hasAI: false,
    avatar: "🏢"
  },
  {
    id: 3,
    title: "Study Materials",
    lastMessage: "AI: Here's a summary of your physics notes...",
    timestamp: "11:45 AM",
    unread: 1,
    hasAI: true,
    avatar: "📚"
  },
  {
    id: 4,
    title: "Personal Journal",
    lastMessage: "Feeling grateful for today's achievements",
    timestamp: "Yesterday",
    unread: 0,
    hasAI: false,
    avatar: "💭"
  },
  {
    id: 5,
    title: "Recipe Collection",
    lastMessage: "AI: I can suggest modifications for healthier versions...",
    timestamp: "Yesterday",
    unread: 3,
    hasAI: true,
    avatar: "🍳"
  },
  {
    id: 6,
    title: "Travel Plans",
    lastMessage: "Booked flights for summer vacation",
    timestamp: "Monday",
    unread: 0,
    hasAI: false,
    avatar: "✈️"
  },
  {
    id: 7,
    title: "Book Notes",
    lastMessage: "AI: Key insights from 'Atomic Habits' chapter 3...",
    timestamp: "Sunday",
    unread: 1,
    hasAI: true,
    avatar: "📖"
  },
  {
    id: 8,
    title: "Workout Routine",
    lastMessage: "Completed 30 minutes cardio + strength training",
    timestamp: "Saturday",
    unread: 0,
    hasAI: false,
    avatar: "💪"
  }
];

const tabs = [
  { id: 'chats', label: 'Notes', icon: MessageCircle },
  { id: 'status', label: 'Status', icon: Users },
  { id: 'calls', label: 'Calls', icon: Phone }
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('chats');
  const [search, setSearch] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-white max-w-md mx-auto relative">
      {selectedChat ? (
        <SNotesApp />
      ) : (
        <>
          <Header />
          <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
          <QuickActions />
          <ChatList 
            noteChats={noteChats.filter(chat => chat.title.toLowerCase().includes(search.toLowerCase()))}
            onChatClick={setSelectedChat}
          />
          <FloatingActionButton />
          <BottomNavigation />
        </>
      )}
    </div>
  );
}
