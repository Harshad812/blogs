import Image from "next/image";
import styles from "./RelatedArticle.module.css";
import { FC } from "react";

const RelatedArticleCard: FC<{
  relatedArticles: {
    title: string;
    description: string;
    image: string;
    author: string;
  };
}> = ({ relatedArticles }) => {
  return (
    <div className={styles.card}>
      <Image
        src={relatedArticles.image}
        alt={relatedArticles.title}
        width={228}
        height={228}
        className={styles.image}
      />
      <h2 className={styles.cardTitle}>{relatedArticles.title}</h2>
      <p className={styles.cardDescription}>{relatedArticles.description}</p>
      <span className={styles.authorName}>By {relatedArticles.author}</span>
    </div>
  );
};

export const RelatedArticle = () => {
  const relatedArticles = [
    {
      title: "The Ultimate Guide to Full-Body Workouts",
      description:
        "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
      image: "/images/blog4.jpg",
      author: "Alex Carter",
    },
    {
      title: "5 Tips for Better Cardio Sessions",
      description:
        "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
      image: "/images/blog5.jpg",
      author: "Maya Lee",
    },
    {
      title: "Meal Prep Basics for Gym Enthusiasts",
      description:
        "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
      image: "/images/blog6.jpg",
      author: "Jordan Smith",
    },
    {
      title: "Building Core Strength: Exercises and Benefits",
      description:
        "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
      image: "/images/blog7.jpg",
      author: "Emma Rodriguez",
    },
  ];

  return (
    <div className={styles.relatedArticle}>
      <div className={styles.relatedArticleContainer}>
        <div className={styles.relatedWrapper}>
          <h2 className={styles.title}>Related Articles</h2>
          <div className={styles.cardList}>
            {relatedArticles.map((article, index) => (
              <RelatedArticleCard key={index} relatedArticles={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
