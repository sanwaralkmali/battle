import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 text-center bg-background border-t">
      <p className="text-sm text-gray-500">
        Educational Game {new Date().getFullYear()} | Created for Educational purposes By{' '}
        <a 
          href="https://sanwaralkmali.github.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-game-purple hover:text-game-orange transition-colors"
        >
          Salah Alkmali
        </a>
      </p>
    </footer>
  );
};

export default Footer; 