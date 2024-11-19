import React from 'react';
import { useStore } from '../store/useStore';
import { format } from 'date-fns';

export default function CommentList() {
  const { comments, addLike } = useStore();

  return (
    <div className="mt-6 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{comment.author}</p>
              <p className="text-gray-600 text-sm">
                {format(comment.timestamp, 'MMM d, yyyy HH:mm')}
              </p>
            </div>
            <button
              onClick={() => addLike(comment.id)}
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <span>{comment.likes}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}