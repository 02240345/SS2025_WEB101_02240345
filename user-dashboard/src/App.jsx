import React, { useState } from 'react';
import Header from './Header';
import ProfileCard from './ProfileCard';
import EditForm from './EditForm';
import StatsDashboard from './StatsDashboard';
import './App.css';

function App() {
  // State to manage user data
  const [userData, setUserData] = useState({
    name: "Karma Choing Zangmo",
    bio: "Software Student",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIMKSzmSftPMbZXB2Sd_VL6dXl1LiGLTIzA&s",
    location: "Phuentsholing, Bhutan",
    email: "02240345.cst@rub.edu.bt"
  });

  // State to manage edit mode
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