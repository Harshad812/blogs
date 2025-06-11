"use client";

import { useState } from "react";
import { AddRating } from "../AddRating";
import { InputField } from "../InputField";
import { TextAreaField } from "../TextAreaField";
import styles from "./AddComment.module.css";
import MessageIcon from "@/assets/svg/message.svg";
import { useCommentsContext } from "@/context/CommentsContext";

export const AddComment = () => {
  const [rating, setRating] = useState<number | null>(null);
  const { addComment } = useCommentsContext();

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", comment: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!form.comment.trim()) {
      newErrors.comment = "Comment cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    const newComment = {
      profileImage: "/images/profile.png",
      authorName: form.name,
      rating: rating || 0,
      postDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      commentText: form.comment,
    };

    addComment(newComment);

    setForm({ name: "", email: "", comment: "" });
    setRating(null);
    setErrors({ name: "", email: "", comment: "" });
  };

  return (
    <div className={styles.addCommentContainer}>
      <h2 className={styles.title}>Add A Comment</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.textFields}>
          <div className={styles.inputFields}>
            <InputField
              name="name"
              onChange={handleChange}
              value={form.name}
              type="text"
              errors={errors.name}
            />

            <InputField
              name="email"
              onChange={handleChange}
              value={form.email}
              type="email"
              errors={errors.email}
            />
          </div>
          <div className={styles.commentField}>
            <TextAreaField
              name="comment"
              onChange={handleChange}
              value={form.comment}
              placeholder="Search anything..."
              errors={errors.comment}
            />
          </div>
        </div>
        <div className={styles.bottomPanelContainer}>
          <div className={styles.bottomPanel}>
            <span className={styles.ratingLabel}>
              Rate the usefulness of the article
            </span>

            <AddRating setRating={setRating} />
          </div>
          <button className={styles.buttonSubmit}>
            <MessageIcon height={16} width={16} />
            <span className={styles.sendOnly}>Send</span>
            <span className={styles.sendComment}>Send Comment</span>
          </button>
        </div>
      </form>
    </div>
  );
};
