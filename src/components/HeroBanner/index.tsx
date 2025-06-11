import Image from "next/image";
import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <div className={styles.responsiveWrapper}>
      <Image
        src="/images/hero.jpg"
        alt="Hero Banner"
        fill
        priority
        className={styles.responsiveImage}
      />
    </div>
  );
};
