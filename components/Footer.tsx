// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Innopolis University</p>
    </footer>
  );
};

export default Footer;
