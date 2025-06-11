import React, { ReactNode } from "react";
import styles from "./BlogContent.module.css";
import Image from "next/image";
import { AuthorQuote } from "../AuthorQuote";

interface BlogContentProps {
  children?: ReactNode;
}

const data = [
  {
    text: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
    type: "paragraph",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    type: "paragraph",
  },
  {
    text: "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    type: "paragraph",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    type: "paragraph",
  },
  {
    text: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    type: "quote",
  },
  {
    text: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    type: "paragraph",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    type: "paragraph",
  },
  {
    text: "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    type: "paragraph",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    type: "paragraph",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
    type: "paragraph",
  },
  {
    text: "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean",
    type: "paragraph",
  },
];

export const BlogContent: React.FC<BlogContentProps> = () => {
  return (
    <div className={styles.blogContent}>
      {/* blog title */}
      <div className={styles.blogTitle}>
        <div className={styles.titleLeftContainer}>
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            height={32}
            width={32}
            className={styles.profileImage}
          />
          <h1 className={styles.authorName}>Alex Carter</h1>
        </div>
        <span className={styles.postDate}>23 January 2025</span>
      </div>
      {/* blog content */}
      <div className={styles.blogTextContainer}>
        {data.map((item, index) => {
          if (item.type === "paragraph") {
            return (
              <p key={index} className={styles.paragraph}>
                {item.text}
              </p>
            );
          } else if (item.type === "quote") {
            return (
              <div className={styles.quoteContainer} key={index}>
                <blockquote className={styles.quoteText}>
                  {item.text}
                </blockquote>
              </div>
            );
          }
          return null;
        })}
      </div>
      {/* author quote */}
      <div className={styles.desktopContainer}>
        <AuthorQuote />
      </div>
    </div>
  );
};
