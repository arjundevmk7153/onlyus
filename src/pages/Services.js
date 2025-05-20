import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <div className="page-container services-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🚀</div>
          <h3 className="service-title">IT Consulting</h3>
          <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Add more service cards */}
      </div>
    </div>
  );
}

export default Services; 