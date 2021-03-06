import React from "react"

import About from "./About"

import style from "../../style/Header.css"

export default () => <section className={style.container}>
  <div className={style.card}>
    <img src="dist/assets/me.jpg" width="128" height="128" className={style.headshot}/>
    <h1 className={style.name}>Jared Loomis</h1>
    <div className={style.social}>
      <a href="dist/assets/JaredLoomis-Resume.pdf">
        Resume
      </a>
      •
      <a href="https://github.com/jaredloomis/">
        GitHub
      </a>
      •
      <a href="https://linkedin.com/in/jared-loomis/">
      LinkedIn
      </a>
    </div>
  </div>
</section>
