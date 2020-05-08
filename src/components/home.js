import { Link } from "gatsby"
import React from "react"
import styles from "./home.module.css"

const Home = () => (
  <div className={styles.wrapper}>
    <Link to="/tech" className={`${styles.item}`}>
      <div className={styles.tech}></div>
      <div className={styles.wording}>Tech</div>
    </Link>
    <Link to="/life" className={`${styles.item}`}>
      <div className={styles.life}></div>
      <div className={styles.wording}>Life</div>
    </Link>
    <Link to="/music" className={`${styles.item}`}>
      <div className={styles.music}></div>
      <div className={styles.wording}>Music</div>
    </Link>
    <Link to="/thinking" className={`${styles.item}`}>
      <div className={styles.thinking}></div>
      <div className={styles.wording}>Thinking</div>
    </Link>
  </div>
)

export default Home
