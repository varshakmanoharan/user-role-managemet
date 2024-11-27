// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserManagement from './components/UserManagement'; // Import UserManagement component
import Dashboard from './components/Dashboard'; // Import Dashboard component (if you have it)


function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default active tab is 'dashboard'

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'dashboard':
        return <UserManagement />;
      
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
