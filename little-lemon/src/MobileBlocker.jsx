import React from 'react';
import './MobileBlocker.css';

const MobileBlocker = () => {
  return (
    <div className="mobile-blocker">
      <div className="mobile-blocker-content">
        <h1>Mobile Access Restricted</h1>
        <p>
          Please use our mobile app or switch to a desktop device to view this site in a modern and stylish way.
        </p>
      </div>
    </div>
  );
};

export default MobileBlocker;
