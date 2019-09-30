import React from "react"

import Project from "./Project"

export default () => <div>
  <h1>Projects</h1>
  <Project name="Declare QA" link="https://github.com/jaredloomis/declare"
           timespan="">
    <p>
      Declare QA is a cloud-based platform for automated web testing.
      Declare makes it easy for anyone to create robust web automation without code!
      Declare's powerful visual interface handles the details of creating dependable tests,
      so you can focus on testing the functionality of your product. Instead of
      writing detailed Selenium scripts, managing resources and
      coordinating test suites in code, with Declare, all the details are
      handled for you, and presented in a usable UI.
    </p>
    <b>Declare QA Implementation Slideshow</b>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRUer9pohwaQR3285uv_C2NCNTL-WpFCjr8HfcVX3iznJAu49FUT4opMU_XE1NySCxa1Ac_ybS1cg-4/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </Project>
</div>
