export interface Video {
  createdAt: string;
  desc: string;
  dislikes: string[];
  imgUrl: string;
  likes: string[];
  tags: string[];
  title: string;
  updatedAt: string;
  userId: string;
  videoUrl: string;
  views: string;
  _id: string;
}

export interface User {
  img: string | undefined;
  _id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  subscribedUsers: string[];
  subscribers: number;
}

export interface Comment {
  _id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  videoId: string;
  desc: string;
}
