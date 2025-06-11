"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Comment {
  profileImage: string;
  authorName: string;
  rating: number;
  postDate: string;
  commentText: string;
}

interface CommentsContextType {
  comments: Comment[];
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  addComment: (newComment: Comment) => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(
  undefined
);

export const CommentsProvider = ({ children }: { children: ReactNode }) => {
  const defaultComments: Comment[] = [
    {
      profileImage: "/images/guide3.png",
      authorName: "Kang Haerin",
      rating: 5,
      postDate: "22 Jul 2022",
      commentText:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    },
    {
      profileImage: "/images/guide3.png",
      authorName: "Kang Haerin",
      rating: 5,
      postDate: "22 Jul 2022",
      commentText:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    },
  ];

  const [comments, setComments] = useState<Comment[]>(defaultComments);

  const addComment = (newComment: Comment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <CommentsContext.Provider value={{ comments, setComments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error(
      "useCommentsContext must be used within a CommentsProvider"
    );
  }
  return context;
};
