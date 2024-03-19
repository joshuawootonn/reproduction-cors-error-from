"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Different Origin</h1>
      <button
        onClick={() => {
          fetch("https://test-to-gules.vercel.app/api");
        }}
      >
        to deployed
      </button>
      <button
        onClick={() => {
          fetch("http://localhost:3000/api");
        }}
      >
        to local 3000
      </button>
      <button
        onClick={() => {
          fetch("http://localhost:3001/api");
        }}
      >
        to local 3001
      </button>
    </main>
  );
}
