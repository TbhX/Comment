import React, { useState } from 'react';
import { useStore } from '../store/useStore';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const addComment = useStore((state) => state.addComment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Add a comment
        </label>
        <textarea
          id="comment"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Post Comment (1€ = 100 likes)
      </button>
    </form>
  );
}