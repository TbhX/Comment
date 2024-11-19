import React from 'react';
import { useStore } from '../store/useStore';

export default function Header() {
  const { credits, likes } = useStore();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Social Platform</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="font-medium">Credits:</span> {credits}€
          </div>
          <div className="text-sm">
            <span className="font-medium">Daily Likes:</span> {likes}/500
          </div>
          <button className="btn btn-primary">Buy Likes</button>
        </div>
      </div>
    </header>
  );
}