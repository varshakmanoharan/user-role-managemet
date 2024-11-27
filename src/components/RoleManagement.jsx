import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: '1', name: 'Super Admin', description: 'Full system access', permissions: ['read', 'write', 'delete', 'manage_users', 'manage_roles'] },
    { id: '2', name: 'Manager', description: 'Limited administrative access', permissions: ['read', 'write', 'manage_users'] }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState({ id: '', name: '', description: '', permissions: [] });

  const PERMISSIONS = [
    { name: 'read', description: 'Read access to resources' },
    { name: 'write', description: 'Write access to resources' },
    { name: 'delete', description: 'Delete access to resources' },
    { name: 'manage_users', description: 'Ability to manage users' },
    { name: 'manage_roles', description: 'Ability to manage roles' },
    { name: 'view_reports', description: 'View reports' },
    { name: 'create_reports', description: 'Create reports' }
  ];

  const togglePermission = (permission) => {
    const currentPermissions = currentRole.permissions || [];
    setCurrentRole({
      ...currentRole,
      permissions: currentPermissions.includes(permission)
        ? currentPermissions.filter(p => p !== permission)
        : [...currentPermissions, permission]
    });
  };

  const handleAddRole = () => {
    const newRole = { ...currentRole, id: Date.now().toString() };
    setRoles([...roles, newRole]);
    setIsDialogOpen(false);
    setCurrentRole({ name: '', description: '', permissions: [] });
  };

  const handleEditRole = (roleId) => {
    const roleToEdit = roles.find(role => role.id === roleId);
    setCurrentRole({ ...roleToEdit });
    setIsDialogOpen(true);
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Role Management</h2>
          <button onClick={() => { setCurrentRole({ name: '', description: '', permissions: [] }); setIsDialogOpen(true); }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">+ Add Role</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Permissions</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id} className="border-b">
                  <td className="p-3 text-sm sm:text-base">{role.name}</td>
                  <td className="p-3 text-sm sm:text-base">{role.description}</td>
                  <td className="p-3 text-sm sm:text-base">{role.permissions.join(', ')}</td>
                  <td className="p-3 text-sm sm:text-base">
                    <button onClick={() => handleEditRole(role.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Edit</button>
                    <button onClick={() => handleDeleteRole(role.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full sm:w-96">
            <h2 className="text-xl mb-4">{currentRole.id ? 'Edit Role' : 'Add New Role'}</h2>
            <input
              type="text"
              placeholder="Role Name"
              value={currentRole.name}
              onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              placeholder="Description"
              value={currentRole.description}
              onChange={(e) => setCurrentRole({ ...currentRole, description: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="mb-4">
              <h3 className="font-semibold">Permissions</h3>
              {PERMISSIONS.map((permission) => (
                <div key={permission.name} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={currentRole.permissions.includes(permission.name)}
                    onChange={() => togglePermission(permission.name)}
                    className="mr-2"
                  />
                  <label className="text-sm sm:text-base">{permission.name} - {permission.description}</label>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsDialogOpen(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Cancel</button>
              <button onClick={currentRole.id ? () => {
                setRoles(roles.map(role => role.id === currentRole.id ? currentRole : role));
                setIsDialogOpen(false);
              } : handleAddRole} className="bg-blue-500 text-white px-4 py-2 rounded">
                {currentRole.id ? 'Save Changes' : 'Add Role'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
