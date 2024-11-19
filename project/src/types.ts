export interface Comment {
  id: string;
  text: string;
  likes: number;
  author: string;
  timestamp: Date;
}

export interface User {
  credits: number;
  dailyLikes: number;
}