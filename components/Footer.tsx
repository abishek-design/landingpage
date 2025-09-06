import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-content-dark">
      <div className="container mx-auto px-6 py-4 text-center text-sm text-dark-text">
        &copy; {currentYear} Techwork By Abi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;