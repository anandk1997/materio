"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 100 ? 0 : prev + 10));
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingBar} style={{ width: `${progress}%` }} />
      </div>
    </>
  );
};

export default ProgressBar;
