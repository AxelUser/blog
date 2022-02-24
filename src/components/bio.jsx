import * as React from 'react'
import * as blogStyles from '../styles.module.css'

const Bio = () => (
    <div className={blogStyles.bio}>
        <p>Hi!</p>
        <p>My name is Alexey and I'm a software engineer.</p>
        <p>I'm specialized mostly in developing distributed and highload systems. Working with C#, Golang and Kotlin.</p>
    </div>
)

export default Bio;