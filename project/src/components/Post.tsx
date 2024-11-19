import React from 'react';
import { format } from 'date-fns';

export default function Post() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">Daily Discussion</h2>
          <p className="text-gray-600 text-sm">
            {format(new Date(), 'MMMM d, yyyy')}
          </p>
        </div>
      </div>
      <p className="mt-4">
        Share your thoughts and engage with the community! Remember, quality
        comments earn more likes.
      </p>
    </div>
  );
}