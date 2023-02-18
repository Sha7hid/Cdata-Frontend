import React from "react";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const getStaticProps = async () => {
    const res = await fetch(
      "https://cdata-backend-production-b82b.up.railway.app/api/announcements"
    );
    const data = await res.json();
    return {
      props: { results: data },
    };
  };
export default function Announcements({ results }) {
    return (
        <div className={styles.announce}>
        {results.map((result) => (
          <>
            <h1 className={styles.text1}>👉{result.content}👈</h1>
          </>
        ))}
      </div>
    );
}