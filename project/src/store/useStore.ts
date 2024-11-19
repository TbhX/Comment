import create from 'zustand';

interface Store {
  credits: number;
  likes: number;
  comments: Array<{
    id: string;
    text: string;
    likes: number;
    author: string;
    timestamp: Date;
  }>;
  addComment: (text: string) => void;
  addLike: (commentId: string) => void;
}

export const useStore = create<Store>((set) => ({
  credits: 0,
  likes: 0,
  comments: [],
  addComment: (text) =>
    set((state) => ({
      comments: [
        {
          id: Math.random().toString(36).substr(2, 9),
          text,
          likes: 0,
          author: 'Demo User',
          timestamp: new Date(),
        },
        ...state.comments,
      ],
    })),
  addLike: (commentId) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ),
      likes: state.likes + 1,
    })),
}));