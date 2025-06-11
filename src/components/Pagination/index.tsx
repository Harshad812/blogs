import Image from "next/image";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.previousSection}>
        <button className={styles.previousButton}>
          <Image
            src={"/images/left-arrow.svg"}
            alt="Lest Arrow"
            height={16}
            width={16}
          />
          Previous
        </button>
        <span className={styles.pageInfo}>
          5 Tips for Better Cardio Sessions
        </span>
      </div>
      <div className={styles.nextSection}>
        <button className={styles.nextButton}>
          Next
          <Image
            src={"/images/right-arrow.svg"}
            alt="Right Arrow"
            height={16}
            width={16}
          />
        </button>

        <span className={styles.pageInfo}>
          Meal Prep Basics for Gym Enthusiasts
        </span>
      </div>
    </div>
  );
};
