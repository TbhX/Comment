import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Post />
        <div className="mt-8">
          <CommentForm />
          <CommentList />
        </div>
      </main>
    </div>
  );
}

export default App;