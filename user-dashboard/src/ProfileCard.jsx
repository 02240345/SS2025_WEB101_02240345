// ProfileCard.jsx
import React from 'react';

function ProfileCard({ user, onEdit }) {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

export default ProfileCard;