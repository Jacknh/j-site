import { Link } from "gatsby"
import React from "react"
import styles from "./home.module.css"

const Home = () => (
  <div className={styles.wrapper}>
    <Link to="/tech" className={`${styles.item} ${styles.tech}`}>
      <div className={styles.wording}>Tech</div>
    </Link>
    <Link to="/life" className={`${styles.item} ${styles.life}`}>
      <div className={styles.wording}>Life</div>
    </Link>
    <Link to="/music" className={`${styles.item} ${styles.music}`}>
      <div className={styles.wording}>Music</div>
    </Link>
    <Link to="/thinking" className={`${styles.item} ${styles.thinking}`}>
      <div className={styles.wording}>Thinking</div>
    </Link>
  </div>
)

export default Home
