# sNotes UI Component Documentation

This documentation describes the modular React components used in the sNotes application UI, located in `src/components/`. Each component is designed for reusability and clarity, following best practices for modern React and Tailwind CSS.

## Component Overview

### 1. Header
- **File:** `src/components/Header.js`
- **Description:**
  - Displays the app title and top action icons (Camera, Search, MoreVertical) in a green header bar.
  - Used at the top of the main layout.

### 2. Tabs
- **File:** `src/components/Tabs.js`
- **Props:**
  - `tabs` (array): Tab definitions (id, label, icon)
  - `selectedTab` (string): Currently selected tab id
  - `setSelectedTab` (function): Tab selection handler
- **Description:**
  - Renders navigation tabs (Notes, Status, Calls) with icons.
  - Highlights the active tab.

### 3. SearchBar
- **File:** `src/components/SearchBar.js`
- **Props:**
  - `value` (string): Search input value
  - `onChange` (function): Input change handler
- **Description:**
  - Provides a search input with a search icon for filtering notes.

### 4. QuickActions
- **File:** `src/components/QuickActions.js`
- **Description:**
  - Shows quick action buttons (Archived, Starred, AI Summary) with colored icons.
  - Placed below the search bar for fast access.

### 5. ChatList
- **File:** `src/components/ChatList.js`
- **Props:**
  - `noteChats` (array): List of chat/note objects
- **Description:**
  - Displays a scrollable list of note chats with avatars, last message, timestamp, unread count, and AI indicator.
  - Each chat is clickable and visually interactive.

### 6. FloatingActionButton
- **File:** `src/components/FloatingActionButton.js`
- **Description:**
  - A fixed-position circular button (bottom-right) for creating a new note (Edit icon).

### 7. BottomNavigation
- **File:** `src/components/BottomNavigation.js`
- **Description:**
  - Renders a bottom navigation bar with icons for Notes, AI, Saved, and Settings.
  - Highlights the active section.

## Main Page Integration
- **File:** `src/app/page.js`
- **Description:**
  - Composes all the above components to form the main sNotes UI.
  - Manages state for selected tab and search input.
  - Filters chat list based on search.

## Styling
- All components use Tailwind CSS utility classes for layout, color, and responsiveness.
- The design is mobile-first, with a max-width container for centered display.

## Customization
- Components are stateless (except where state is required) and accept props for flexibility.
- Icons are from the `lucide-react` library.

---

For further customization or extension, edit or add new components in `src/components/` and update the main page as needed.
