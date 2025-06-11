import Image from "next/image";
import styles from "./ExploreMore.module.css";
import { FC } from "react";

const ExploreMoreCard: FC<{
  item: {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
  };
}> = ({ item }) => {
  return (
    <div className={styles.exploreMoreCard}>
      <Image
        src={item.image}
        alt={item.title}
        width={301}
        height={165}
        className={styles.exploreImage}
      />
      <div className={styles.exploreMoreCardDetails}>
        <div className={styles.cardTitleContainer}>
          <h2 className={styles.cardTitleText}>{item.title}</h2>
          <span className={styles.cardLines}>|</span>
          <p className={styles.postDate}>{item.date}</p>
        </div>
        <h3 className={styles.cardDescriptionText}>{item.description}</h3>
      </div>
    </div>
  );
};

export const ExploreMore = () => {
  const data = [
    {
      id: 1,
      title: "Culinary",
      date: "13 Jun 2022",
      image: "/images/blog1.png",
      description: "Two women in local stand are chatting during morning..",
    },
    {
      id: 2,
      title: "Travel",
      date: "22 Jul 2022",
      image: "/images/blog1.png",
      description: "Enjoying the sunset on Padar island together",
    },
    {
      id: 3,
      title: "Travel",
      date: "22 Jul 2022",
      image: "/images/blog2.png",
      description: "The lush green surroundings of the campgrounds create a..",
    },
  ];

  return (
    <div className={styles.exploreMore}>
      <h1 className={styles.exploreMoreTitle}>Explore More</h1>
      {data.map((item, idx) => (
        <ExploreMoreCard key={idx} item={item} />
      ))}
    </div>
  );
};
