// StatsDashboard.jsx
import React from 'react';

function StatsDashboard({ user }) {
  return (
    <div className="stats-dashboard">
      <div className="stat">
        <h3>Age</h3>
        <p style={{ color: 'blue' }}>{user.age}</p>
      </div>
      <div className="stat">
        <h3>Location</h3>
        <p style={{ color: 'green' }}>{user.location}</p>
      </div>
      <div className="stat">
        <h3>Experience</h3>
        <p style={{ color: 'orange' }}>5 years</p>
      </div>
    </div>
  );
}

export default StatsDashboard;