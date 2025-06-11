import Image from "next/image";
import styles from "./TourGuides.module.css";
import { FC } from "react";
import { Rating } from "../Rating";

const TourGuideCard: FC<{
  guide: {
    id: number;
    name: string;
    image: string;
    location: string;
    rating: number;
  };
}> = ({ guide }) => {
  return (
    <div className={styles.tourGuideCard}>
      <div className={styles.profile}>
        <Image
          src={guide.image}
          alt={guide.name}
          width={60}
          height={60}
          className={styles.profileImage}
        />
        <div className={styles.guideInfo}>
          <h2 className={styles.guideName}>{guide.name}</h2>
          <div className={styles.guideLocation}>
            <Image
              src="/images/location.png"
              alt="Location Icon"
              width={20}
              height={20}
              className={styles.locationIcon}
            />
            <p className={styles.guideLocation}>{guide.location}</p>
          </div>
        </div>
      </div>
      <Rating rating={guide.rating} />
    </div>
  );
};

export const TourGuides = () => {
  const guides = [
    {
      id: 1,
      name: "Miranda Rachel",
      image: "/images/guide1.png",
      location: "Jombang, Jawa timur",
      rating: 4,
    },
    {
      id: 2,
      name: "Danielle Marsh",
      image: "/images/guide2.png",
      location: "Wonosobo, Jawa ten..",
      rating: 4,
    },
    {
      id: 3,
      name: "Kang Haerin",
      image: "/images/guide3.png",
      location: "Bandung, Jawa barat",
      rating: 5,
    },
  ];

  return (
    <div className={styles.tourGuides}>
      <h2 className={styles.tourGuideTitle}>Tour Guides</h2>
      <div className={styles.guidesList}>
        {guides.map((guide) => (
          <TourGuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};
