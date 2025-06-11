// src/components/ui/Card.js
import React from 'react';

export default function Card({ children }) {
  return (
    <div className="max-w-2xl mx-auto text-left bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 mt-8 border-4 border-rose-300 animate-fade-in">
      {children}
    </div>
  );
}
