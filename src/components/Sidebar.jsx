// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'roles', label: 'Role Management', icon: '🔒' }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">RBAC Admin</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left p-3 rounded mb-2 ${
              activeTab === item.id 
                ? 'bg-gray-700 text-white' 
                : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
