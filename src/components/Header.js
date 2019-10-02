import React from "react"

import About from "./About"

import style from "../../style/Header.css"

export default () => <section className={style.container}>
  <div className={style.card}>
    <img src="assets/me-cropped.jpg" width="150" height="150" className={style.headshot}/>
    <h2 className={style.name}>Jared Loomis</h2>
    <div className={style.social}>
      <a href="assets/jared_loomis-resume.docx">
        Resume
      </a>
      •
      <a href="https://github.com/jaredloomis/">
        GitHub
        {/*<img src="assets/github.png" width="32" height="32" className={style.icon}/>*/}
      </a>
      •
      <a href="https://linkedin.com/in/jared-loomis/">
      LinkedIn
        {/*<img src="assets/linkedin.png" width="32" height="32" className={style.icon}/>*/}
      </a>
    </div>
  </div>
</section>
