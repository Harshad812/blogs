import {
  AddComment,
  BlogContent,
  Comments,
  ExploreMore,
  Header,
  HeroBanner,
  TourGuides,
} from "../components";
import { RelatedArticle } from "../components/RelatedArticle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header
        title="The Ultimate Guide to Full-Body Workouts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles", href: "/articles" },
        ]}
      />
      <HeroBanner />
      <main className={styles.main}>
        <div className={styles.subContainer}>
          <BlogContent />
          <div className={styles.additionalContent}>
            <ExploreMore />
            <TourGuides />
          </div>
        </div>
        <Comments />
        <AddComment />
      </main>
      <RelatedArticle />

      <footer className={styles.footer}></footer>
    </div>
  );
}
