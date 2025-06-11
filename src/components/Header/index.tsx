import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const Header: React.FC<HeaderProps> = ({ title, breadcrumbs = [] }) => {
  return (
    <div className={styles.headerWrapper}>
      {breadcrumbs.length > 0 && (
        <nav className={styles.breadcrumb}>
          {breadcrumbs.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <Link href={item.href}>
                  <span className={styles.link}>{item.label}</span>
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}> / </span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 className={styles.heading}>{title}</h1>
    </div>
  );
};
