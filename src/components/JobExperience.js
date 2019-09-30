import React from "react"

import style from "../../style/JobExperience.css"

export default () => <section className={style.container}>
  <h1>Job Experience</h1>
  <article className={style.job}>
    <img src="assets/airspace-logo.png" width="32" height="32" className={style.logo}/>
    <h3 className={style.heading}>
      <span className={style.company}>Airspace Technologies</span>
      <span> - </span>
      <span className={style.position}>QA Automation Engineer</span>
    </h3>
    <span className={style.timespan}>
      January 2019 - June 2019
    </span>
    <p className={style.description}>
      <ul>
        <li>Implement automation to achieve goal of sub-hour regression tests for critical logistics service.</li>
        <li>Ensure scalability of automation infrastructure through near future.</li>
      </ul>
    </p>
  </article>
  <article className={style.job}>
    <img src="assets/workwell-logo.png" width="32" height="32" className={style.logo}/>
    <h3 className={style.heading}>
      <span className={style.company}>Workwell Technologies</span>
      <span> - </span>
      <span className={style.position}>QA Automation Engineer</span>
    </h3>
    <span className={style.timespan}>
      August 2015 - August 2018
    </span>
    <p className={style.description}>
      Transition company from entirely manual testing practices, to relying heavily on automated tests. Accomplished a >50% reduction in release times for two products.
      Subsequently trained team of entry-level engineers to deliver on automation goals.

      <ul>
        <li>Design and implement an Android and web automation framework using Java, Appium, and Selenium.</li>
        <li>Provide QA-wide access to automation via a web interface. Used Vue.js, MongoDB, and AWS S3.</li>
      </ul>
    </p>
  </article>
</section>
