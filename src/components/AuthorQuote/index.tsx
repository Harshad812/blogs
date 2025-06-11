"use client";
import Image from "next/image";
import styles from "./AuthorQuote.module.css";
import Slider from "react-slick";
import { useRef } from "react";

export const AuthorQuote = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.authorQuoteContainer}>
      <Slider ref={sliderRef} {...settings}>
        <div className={styles.authorQuote}>
          <div className={styles.authorProfile}>
            <h2 className={styles.authorName}>About Alex Carter</h2>
            <Image
              className={styles.profileImage}
              src={"/images/profile.png"}
              alt="Profile Image"
              height={100}
              width={100}
            />
          </div>
          <blockquote className={styles.quoteText}>
            With over a decade of experience in the fitness industry, Alex
            specializes in strength training and functional fitness. Certified
            by NASM and known for his motivational style, Alex designs workout
            programs that are both challenging and achievable. His passion lies
            in helping clients build strength and confidence through
            personalized training routines. Outside the gym, Alex is an avid
            runner and enjoys outdoor adventures.
          </blockquote>
        </div>
        <div className={styles.authorQuote}>
          <div className={styles.authorProfile}>
            <h2 className={styles.authorName}>About Alex Carter</h2>
            <Image
              className={styles.profileImage}
              src={"/images/profile.png"}
              alt="Profile Image"
              height={100}
              width={100}
            />
          </div>
          <blockquote className={styles.quoteText}>
            With over a decade of experience in the fitness industry, Alex
            specializes in strength training and functional fitness. Certified
            by NASM and known for his motivational style, Alex designs workout
            programs that are both challenging and achievable. His passion lies
            in helping clients build strength and confidence through
            personalized training routines. Outside the gym, Alex is an avid
            runner and enjoys outdoor adventures.
          </blockquote>
        </div>
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
          <span className={styles.pageInfo}>
            5 Tips for Better Cardio Sessions
          </span>
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

          <span className={styles.pageInfo}>
            Meal Prep Basics for Gym Enthusiasts
          </span>
        </div>
      </div>
    </div>
  );
};
