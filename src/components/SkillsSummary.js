import React from "react"

import style from "../../style/SkillsSummary.css"

export default () => <section className={style.container}>
  <h1>Skills Summary</h1>
  <p>
    I have experience with backend and frontend web development, as well as
    3D game development, compiler design, and financial asset analysis.
  </p>
  <ul className={style.skills}>
    <li>
      <div className={`${style.skill} ${style.expert}`}>
        <span className={style.name}>Java</span>
        <span className={style.level}>7 Years</span>
      </div>
      <div className={style.showcases}>
        <b>Java Game Engine</b>
        <p>TODO</p>
      </div>
    </li>
    <li className={`${style.skill} ${style.expert}`}>
      <span className={style.name}>React.js</span>
      <span className={style.level}>6 Years</span>
    </li>
    <li className={`${style.skill} ${style.expert}`}>
      <span className={style.name}>Node.js</span>
      <span className={style.level}>5 Years</span>
    </li>
    <li className={`${style.skill} ${style.expert}`}>
      <span className={style.name}>Haskell</span>
      <span className={style.level}>6 Years</span>
    </li>
    <li className={`${style.skill} ${style.advanced}`}>
      <span className={style.name}>Linux</span>
      <span className={style.level}>5 Years</span>
    </li>
    <li className={`${style.skill} ${style.advanced}`}>
      <span className={style.name}>AWS / DevOps</span>
      <span className={style.level}>3 Years</span>
    </li>
    <li className={`${style.skill} ${style.intermediate}`}>
      <span className={style.name}>C#</span>
      <span className={style.level}>2 Years</span>
    </li>
    <li className={`${style.skill} ${style.intermediate}`}>
      <span className={style.name}>C</span>
      <span className={style.level}>2 Years</span>
    </li>
    <li className={`${style.skill} ${style.beginner}`}>
      <span className={style.name}>C++</span>
      <span className={style.level}>4 Years</span>
    </li>
  </ul>
</section>
