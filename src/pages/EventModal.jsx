import React, { useState, useEffect } from "react";

const EventModal = ({ user, isEditing, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    status: user?.status || "",
    role: user?.role || "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isEditing ? "Edit" : "Create"}</h1>
      {/* <div> */}
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="enter your name"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
      </div>

      <button type="submit">submit</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EventModal;
