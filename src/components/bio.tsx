import * as React from "react"
import * as styles from "./bio.css"

const Bio = () => (
  <div className={styles.container}>
    <p>
      Hi, I'm <b>Aleksey</b>!
    </p>
    <p>
      I'm a <span className={styles.glowingText}>Senior Software Engineer</span>{" "}
      with a focus on distributed and high-load systems. I work with <b>С#</b>,{" "}
      <b>Go</b> and <b>Kotlin</b>. Check out my{" "}
      <a href="https://www.linkedin.com/in/dev-alexey-maltsev/">LinkedIn</a> for
      my latest experience and my{" "}
      <a href="https://github.com/AxelUser">GitHub</a> for projects.
    </p>
  </div>
)

export default Bio
