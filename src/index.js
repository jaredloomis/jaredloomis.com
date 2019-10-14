import React    from "react"
import ReactDOM from "react-dom"

import App from "./components/App"

import "normalize.css"

const projects = [
  {
    name: "Declare QA",
    link: {text: "GitHub", url: "https://github.com/jaredloomis/declare"},
    description: "Declare QA is a web app providing a visual interface into website testing. Declare's powerful visual interface handles the details of dependably managing tests, so you can focus on testing the functionality of your product."
  }
]

ReactDOM.render(<App projects={projects}/>, document.getElementById("app"))
