import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./AddRating.module.css";
import BedIcon from "@/assets/svg/bed.svg";
import AverageIcon from "@/assets/svg/average.svg";
import NormalIcon from "@/assets/svg/normal.svg";
import NiceIcon from "@/assets/svg/nice.svg";
import GoodIcon from "@/assets/svg/good.svg";

interface RatingItem {
  emoji: string;
  label: string;
  value: number;
  icon: React.ReactNode;
  fill: string;
}

export const AddRating: FC<{
  setRating: Dispatch<SetStateAction<number | null>>;
}> = ({ setRating }) => {
  const [selectedRating, setSelectedRating] = React.useState<RatingItem | null>(
    null
  );

  const handleRatingClick = (value: RatingItem) => {
    setSelectedRating(value);
    setRating(value.value);
  };

  const rating = [
    {
      emoji: "/images/bed.svg",
      label: "Bed",
      value: 1,
      icon: BedIcon,
      fill: "#FF0412",
    },
    {
      emoji: "/images/average.svg",
      label: "Average",
      value: 2,
      icon: AverageIcon,
      fill: "#FF6700",
    },
    {
      emoji: "/images/normal.svg",
      label: "Normal",
      value: 3,
      icon: NormalIcon,
      fill: "#FFB416",
    },
    {
      emoji: "/images/nice.svg",
      label: "Nice",
      value: 4,
      icon: NiceIcon,
      fill: "#1C9AF4",
    },
    {
      emoji: "/images/good.svg",
      label: "Good",
      value: 5,
      icon: GoodIcon,
      fill: "#00BA5C",
    },
  ];

  const colorMap: Record<string, string> = {
    Bed: styles.redColor,
    Average: styles.orangeColor,
    Normal: styles.yellowColor,
    Nice: styles.blueColor,
    Good: styles.greenColor,
  };

  return (
    <div className={styles.ratingContainer}>
      {rating.map((Item) => {
        const colorClass =
          (selectedRating && colorMap[selectedRating?.label]) || "";

        return selectedRating?.value === Item.value ? (
          <button
            onClick={() => handleRatingClick(Item)}
            type="button"
            key={Item.value}
            className={`${styles.ratingItem} ${colorClass}`}
          >
            {/* <span key={Item.value}>{Item.icon}</span> */}
            <Item.icon className={styles.emoji} fill="white" />
            <span className={styles.label}>{Item.label}</span>
          </button>
        ) : (
          <Item.icon
            className={styles.emoji}
            fill={Item.fill}
            key={Item.value}
            onClick={() => handleRatingClick(Item)}
          />
        );
      })}
    </div>
  );
};
