import React from "react"

import style from "../../style/JobExperience.css"

export default () => <section className={style.container}>
  <h1>Professional Experience</h1>
  <article className={style.job}>
    <img src="dist/assets/amazon-logo.png" width="32" height="32" className={style.logo}/>
    <h3 className={style.heading}>
      <span className={style.company}>Amazon</span>
      <span> - </span>
      <span className={style.position}>Software Development Engineer</span>
    </h3>
    <span className={style.timespan}>
      December 2019 - November 2020
    </span>
    <span className={style.description}>
      <ul>
        <li>
          Develop AWS-based cloud services to support a new Amazon product.
        </li>
        <li>
          Manage and monitor infrastructure deployments.
        </li>
        <li>
          Contribute to product design and implementation in the context of a startup-style team.
        </li>
      </ul>
    </span>
    <span class={style.skills}>
      Skills used: Infrastructure-as-code (CDK), Java, React, DynamoDB, AppSync, GraphQL, SQS/SNS, Lambda, CloudWatch, Python, OOD, MVC.
    </span>
  </article>
  <article className={style.job}>
    <img src="dist/assets/airspace-logo.jpg" width="32" height="32" className={style.logo}/>
    <h3 className={style.heading}>
      <span className={style.company}>Airspace Technologies</span>
      <span> - </span>
      <span className={style.position}>Software Engineer in Test</span>
    </h3>
    <span className={style.timespan}>
      January 2019 - June 2019
    </span>
    <span className={style.description}>
      <ul>
        <li>Implement automation to achieve goal of sub-hour regression tests for critical logistics service.</li>
        <li>Develop processes and tools to ensure scalability of automation infrastructure through near future.</li>
      </ul>
    </span>
  </article>
  <article className={style.job}>
    <img src="dist/assets/workwell-logo.png" width="32" height="32" className={style.logo}/>
    <h3 className={style.heading}>
      <span className={style.company}>Workwell Technologies</span>
      <span> - </span>
      <span className={style.position}>Software Engineer in Test</span>
    </h3>
    <span className={style.timespan}>
      August 2015 - August 2018
    </span>
    <span className={style.description}>
      <p>
        Transition company from entirely manual testing practices, to relying heavily on automated tests.
        Accomplished a >50% reduction in release times for two products.
        Subsequently trained team of entry-level engineers to deliver on automation goals.
      </p>
      <ul>
        <li>Design and implement a Java-based Android and web automation framework.</li>
        <li>Provide QA access to automation via a web interface. Used Vue.js, MongoDB, and AWS S3.</li>
      </ul>
    </span>
  </article>
</section>
