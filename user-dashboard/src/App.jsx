// App.jsx
import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  // State for user data
  const [userData, setUserData] = useState({
    name: "Karma Tashi",
    bio: "Web Developer",
    avatar: "profile.jpg",
    age: 25,
    location: "New York"
  });

  // State to track if edit mode is active
  const [isEditing, setIsEditing] = useState(false);

  // Function to update user data
  const updateUserData = (updatedData) => {
    setUserData(updatedData);
    setIsEditing(false); // Exit edit mode after updating
  };

  return (
    <div className="app">
      <Header />
      <ProfileCard user={userData} onEdit={() => setIsEditing(true)} />
      {isEditing && <EditForm user={userData} onUpdate={updateUserData} onCancel={() => setIsEditing(false)} />}
      <StatsDashboard user={userData} />
    </div>
  );
}

export default App;