"use client";
import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  errors?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  errors,
  onChange,
}) => {
  return (
    <div className={styles.inputFieldContainer}>
      <label htmlFor={name} className={styles.label}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
      {errors && <p className={styles.error}>{errors}</p>}
    </div>
  );
};
