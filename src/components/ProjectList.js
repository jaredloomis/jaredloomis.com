import React from "react"

import Project from "./Project"

export default () => <section>
  <h1>Projects</h1>
  <Project name="Declare QA" link="https://github.com/jaredloomis/declare"
           timespan="">
    <p>
      Cloud platform for no-code automated web testing. It allows users to create more stable tests when compared to similar services.

      Some unique features:
      <ul>
        <li>
          Element Repo - create and edit saved element selectors. Makes it easy for QA testers to update tests when the site changes.
        </li>
        <li>
          Environments - define variables for an unlimited number of environments.
          This allows the same tests to run in different environments (QA/Smoke/Prod). For example
          the site url would be stored in an environment.
        </li>
        <li>
          Test Runs - a group of tests that can be executed with a single click. One-click regression tests.
        </li>
      </ul>
    </p>
    <img src="dist/assets/declare-screenshot.png" width="720"/>
    <b>Declare QA Implementation Slideshow</b>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUer9pohwaQR3285uv_C2NCNTL-WpFCjr8HfcVX3iznJAu49FUT4opMU_XE1NySCxa1Ac_ybS1cg-4/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </Project>
</section>
