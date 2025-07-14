import React from 'react';
import Footer from './Footer'; // Optional if you want to include it here too

const Sidebar = () => {
  return (
    <div className="w-1/2 fixed h-full bg-white p-8 flex flex-col justify-between border-r border-gray-200">
      <div>
        <img 
        src={AlexImage} 
        alt="Alex Berry" 
        className="img-fluid rounded-circle mb-3" 
        style={{ maxWidth: '200px' }} 
        />
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="mt-2 text-gray-600">Your tagline or title</p>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
