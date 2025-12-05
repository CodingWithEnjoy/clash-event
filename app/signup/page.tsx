"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  if (success) {
    return (
      <div className={styles.successBox}>
        <h1>Registration Successful 🎉</h1>
        <p>We received your signup!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="full_name"
          placeholder="نام کامل"
          required
          className={styles.input}
        />

        <input
          name="game_username"
          placeholder="یوزر نیم"
          required
          className={styles.input}
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          required
          className={styles.fileInput}
        />

        <button type="submit" disabled={loading} className={styles.button}>
          {loading ? "در حال ثبت ..." : "ثبت اطلاعات"}
        </button>
      </form>
    </div>
  );
}
