import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ContactForm from '../components/home/ContactForm';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Services />
      <ContactForm />
    </div>
  );
}

export default Home; 