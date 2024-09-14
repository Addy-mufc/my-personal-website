'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const [name, setName] = useState('');
  const fullName = 'Additya Kiran';
  const typingSpeed = 150;
  const [showContent, setShowContent] = useState(false);
  const [showCreationInfo, setShowCreationInfo] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setName((prev) => prev + fullName.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 500);
        setTimeout(() => setShowCreationInfo(true), 1500);
      }
    }, typingSpeed);
  
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative">
      <h1 className="text-6xl font-bold mb-8">
        <span className="border-r-4 border-gray-300 pr-2 animate-pulse">{name}</span>
      </h1>
      <div className={`space-y-4 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xl">
          Welcome to my digital space.
        </p>
        <div className="flex space-x-4 justify-center">
          <AnimatedButton href="/experience">Experience</AnimatedButton>
          <AnimatedButton href="/projects">Projects</AnimatedButton>
          <AnimatedButton href="/contact">Contact</AnimatedButton>
        </div>
      </div>
      <div className={`absolute bottom-4 text-sm text-gray-500 transition-opacity duration-1000 ${showCreationInfo ? 'opacity-100' : 'opacity-0'}`}>
        <p>Created in just one hour</p>
      </div>
    </div>
  );
}

function AnimatedButton({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a
      href={href}
      className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </a>
  );
}
