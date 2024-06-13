import * as React from "react"
import * as styles from "./bio.css"

const Bio = () => (
  <div className={styles.container}>
    <p>Hi!</p>
    <p>
      My name is <b>Aleksey</b> and I'm a{" "}
      <span className={styles.glowingText}>Senior Software Engineer</span>.
    </p>
    <p>
      I'm specialized mostly in developing distributed and highload systems.
      Working with <b>С#</b>, <b>Go</b> and <b>Kotlin</b>. My recent work
      experience is on{" "}
      <a href="https://www.linkedin.com/in/dev-alexey-maltsev/">LinkedIn</a> and
      my projects are available on{" "}
      <a href="https://github.com/AxelUser">GitHub</a>.
    </p>
  </div>
)

export default Bio
