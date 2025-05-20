import React from 'react';

function Logo() {
  return (
    <div className="logo-svg">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path d="M10 20L20 10L30 20L20 30L10 20Z" fill="white" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0066cc" />
            <stop offset="1" stopColor="#3399ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Logo; 