import React from "react"

import Project from "./Project"

export default () => <section>
  <h1>Projects</h1>
  <Project name="Declare QA" link="https://github.com/jaredloomis/declare"
           timespan="">
    <p>
      Declare QA is a cloud-based platform for automated web testing, developed as
      a Full-Stack service-oriented web app. The problem it solves is this:
      many companies want to leverage technology to automate their manual
      workflows. But sometimes, due to the details of the company's product and
      processes, it's not worth the resources to bring on an employee with
      expensive software development expertise. Declare takes care of the
      nitty gritty, so employees with minimal technical skills can quickly
      create stable, high quality tests.
    </p>
    <img src="dist/assets/declare-screenshot.png" width="720"/>
    <p>
      Declare achieves a higher level of test stability by leveraging the power
      of abstraction. The abstraction which seems to provide the most bang for your buck
      automation-wise is automatic navigation. Say you are working at Facebook
      and are tasked with providing automated coverage of the profile page.
      Of course, the best way to break down this task is to create a number
      of tests, each of which covers a specific part of the profile page
      functionality. With other web automation tools, you need to explicitly
      tell the system how to do any needed test setup - in this case, logging in,
      and navigating to the profile page. This means every test
      will contain a significant block of duplicated functionality that takes time
      to create and even more to maintain. Declare solves this by handling
      navigation for you. If you escribe how to get from page A to B, and B to C,
      Declare remembers the way and can get you from A to C. The productivity
      gained with automatic navigation is immense, and makes responding to
      app functionality changes a breeze.
    </p>
    <p>
      That's not the only powerful feature Declare packs - it's a fully-featured,
      all around Automation Platform.
    </p>
    <ul>
      <li>
        Element Repo - create and edit saved element selectors. Keeps functionality
        unified and easy to refactor when the app under test changes.
      </li>
      <li>
        Environments - define variables for an unlimited number of environments.
        This makes it easy to adapt to differences in QA/Smoke/Prod, for example
        the site url and database-stored data displayed to the user.
      </li>
      <li>
        Test Runs - group tests together, and execute all with one click, with
        the ability to specify the Environment to use when running the tests.
        Perfect for grouping together regression/smoke tests,
        feature-specific tests.
      </li>
    </ul>
    <b>Declare QA Implementation Slideshow</b>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUer9pohwaQR3285uv_C2NCNTL-WpFCjr8HfcVX3iznJAu49FUT4opMU_XE1NySCxa1Ac_ybS1cg-4/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </Project>
</section>
