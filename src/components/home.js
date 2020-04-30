import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./home.module.css"

const Home = ({}) => (
  <div className={styles.wrapper}>
    <Link to="/tech" className={styles.item}>
      <div>Tech</div>
    </Link>
    <Link to="/life" className={styles.item}>
      <div>Life</div>
    </Link>
    <Link to="/music" className={styles.item}>
      <div>Music</div>
    </Link>
    <Link to="/thinking" className={styles.item}>
      <div>Thinking</div>
    </Link>
  </div>
)

export default Home
