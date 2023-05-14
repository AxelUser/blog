import * as React from "react"
import * as styles from "./bio.css"

const Bio = () => (
  <div className={styles.container}>
    <p>Hi!</p>
    <p>My name is Alexey and I'm a software engineer.</p>
    <p>
      I'm specialized mostly in developing distributed and highload systems.
      Working with C#, Golang and Kotlin. My recent work experience is on{" "}
      <a href="https://www.linkedin.com/in/dev-alexey-maltsev/">LinkedIn</a> and
      my projects are available on{" "}
      <a href="https://github.com/AxelUser">GitHub</a>.
    </p>
  </div>
)

export default Bio
