"use client";
import React from "react";
import styles from "./TextAreaField.module.css";

interface TextAreaFieldProps {
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  errors?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  value,
  placeholder,
  rows = 5,
  errors,
  onChange,
}) => {
  return (
    <div className={styles.textAreaFieldContainer}>
      <label htmlFor={name} className={styles.label}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
        onChange={onChange}
      />
      {errors && <p className={styles.error}>{errors}</p>}
    </div>
  );
};
