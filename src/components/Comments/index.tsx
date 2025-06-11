"use client";

import Image from "next/image";
import styles from "./Comments.module.css";
import { Rating } from "../Rating";
import { useCommentsContext } from "@/context/CommentsContext";

export const Comments = () => {
  const { comments } = useCommentsContext();

  return (
    <div className={styles.commentsContainer}>
      <h2 className={styles.title}>Comments</h2>
      <div className={styles.commentList}>
        {comments?.map((comment, index) => (
          <div
            key={index}
            className={`${styles.comment} ${
              index < comments?.length - 1 ? styles.borderBottom : ""
            }`}
          >
            <Image
              src={comment.profileImage}
              alt={`${comment.authorName}'s profile`}
              width={60}
              height={60}
              className={styles.profileImage}
            />
            <div className={styles.commentContent}>
              <div className={styles.titleContainer}>
                <div className={styles.authorDetails}>
                  <h3 className={styles.authorName}>{comment.authorName}</h3>
                  <Rating rating={comment.rating} />
                </div>
                <span className={styles.postDate}>{comment.postDate}</span>
              </div>
              <p className={styles.commentText}>{comment.commentText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
