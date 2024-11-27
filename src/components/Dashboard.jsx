import React from 'react';
import UserManagement from './UserManagement';  
import RoleManagement from './RoleManagement';  

const Dashboard = () => (
  <div className="p-6 bg-white shadow rounded">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Admin Dashboard</h2>
    
    {/* Key Metrics */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-lg font-medium">Total Users</h3>
        <p className="text-3xl font-bold">24</p>
      </div>
      <div className="bg-green-100 p-4 rounded">
        <h3 className="text-lg font-medium">Total Roles</h3>
        <p className="text-3xl font-bold">5</p>
      </div>
      <div className="bg-purple-100 p-4 rounded">
        <h3 className="text-lg font-medium">Active Sessions</h3>
        <p className="text-3xl font-bold">12</p>
      </div>
    </div>

    {/* User Management Section */}
    <div className="mb-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">User Management</h3>
      <UserManagement />
    </div>

    {/* Role Management Section */}
    <div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Role Management</h3>
      <RoleManagement />
    </div>
  </div>
);

export default Dashboard;
