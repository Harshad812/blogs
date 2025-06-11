"use client";
import Image from "next/image";
import styles from "./ExploreMore.module.css";
import { FC, useRef } from "react";
import Slider from "react-slick";

interface CardItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

interface ExploreMoreCardProps {
  item: CardItem;
}

const ExploreMoreCard: FC<ExploreMoreCardProps> = ({ item }) => {
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

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.exploreMore}>
      <h1 className={styles.exploreMoreTitle}>Explore More</h1>
      <div className={styles.cardList}>
        {data.map((item, idx) => (
          <ExploreMoreCard key={idx} item={item} />
        ))}
      </div>
      <div className={styles.cardSlider}>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, idx) => (
            <ExploreMoreCard key={idx} item={item} />
          ))}
        </Slider>
        <div className={styles.paginationContainer}>
          <div className={styles.previousSection}>
            <button
              className={styles.previousButton}
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <Image
                src={"/images/left-arrow.svg"}
                alt="Lest Arrow"
                height={16}
                width={16}
              />
              Previous
            </button>
          </div>
          <div className={styles.nextSection}>
            <button
              className={styles.nextButton}
              onClick={() => sliderRef.current?.slickNext()}
            >
              Next
              <Image
                src={"/images/right-arrow.svg"}
                alt="Right Arrow"
                height={16}
                width={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
