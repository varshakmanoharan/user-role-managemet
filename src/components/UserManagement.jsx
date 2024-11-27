import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: '1', username: 'admin', email: 'admin@example.com', role: 'Super Admin', status: 'Active' },
    { id: '2', username: 'manager', email: 'manager@example.com', role: 'Manager', status: 'Active' }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: '', username: '', email: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    const newUser = { ...currentUser, id: Date.now().toString() };
    setUsers([...users, newUser]);
    setIsDialogOpen(false);
    setCurrentUser({ id: '', username: '', email: '', role: '', status: 'Active' });
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    setCurrentUser(userToEdit);
    setIsDialogOpen(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSaveUser = () => {
    const updatedUsers = users.map(user => (user.id === currentUser.id ? currentUser : user));
    setUsers(updatedUsers);
    setIsDialogOpen(false);
    setCurrentUser({ id: '', username: '', email: '', role: '', status: 'Active' });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">User Management</h2>
          <button
            onClick={() => { setCurrentUser({ id: '', username: '', email: '', role: '', status: 'Active' }); setIsDialogOpen(true); }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 md:mt-0"
          >
            + Add User
          </button>
        </div>
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 text-sm font-medium">Username</th>
                <th className="p-3 text-sm font-medium">Email</th>
                <th className="p-3 text-sm font-medium">Role</th>
                <th className="p-3 text-sm font-medium">Status</th>
                <th className="p-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3 text-sm">{user.username}</td>
                  <td className="p-3 text-sm">{user.email}</td>
                  <td className="p-3 text-sm">{user.role}</td>
                  <td className="p-3 text-sm">
                    <span className={`px-2 py-1 text-xs rounded ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{user.status}</span>
                  </td>
                  <td className="p-3 text-sm">
                    <button 
                      onClick={() => handleEditUser(user.id)} 
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteUser(user.id)} 
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">{currentUser.id ? 'Edit User' : 'Add New User'}</h2>
            <input
              type="text"
              placeholder="Username"
              value={currentUser.username}
              onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={currentUser.email}
              onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <select
              value={currentUser.role}
              onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="">Select Role</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
            <select
              value={currentUser.status}
              onChange={(e) => setCurrentUser({ ...currentUser, status: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsDialogOpen(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Cancel</button>
              <button
                onClick={currentUser.id ? handleSaveUser : handleAddUser}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {currentUser.id ? 'Save Changes' : 'Add User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
