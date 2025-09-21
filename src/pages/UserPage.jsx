import React, { useState } from "react";
import UserTable from "../Component/Reusable/UI/TABLE.JSX";
import EventModal from "./EventModal";

const UserPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "2024-01-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "inactive",
      lastLogin: "2024-01-08",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Manager",
      status: "active",
      lastLogin: "2024-01-09",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const handleSave = (formData) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id ? [...prev, ...formData] : user
        )
      );
    } else {
      const newUser = { id: Date.now(), ...formData };
      setUsers((prev) => [...prev, newUser]);
    }
    setModalOpen(false);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user?.id !== id));
  };
  return (
    <main>
      <div>
        <button onClick={() => setModalOpen(true)}>Create</button>
        {isModalOpen && (
          <EventModal
            user={editingUser}
            isOpen={isModalOpen}
            isEditing={!!editingUser}
            onSave={handleSave}
            onClose={() => {
              setEditingUser(null);
              setModalOpen(false);
            }}
          />
        )}
        <UserTable
          users={users}
          onDelete={handleDelete}
          onEdit={setEditingUser}
        />
      </div>
    </main>
  );
};

export default UserPage;
