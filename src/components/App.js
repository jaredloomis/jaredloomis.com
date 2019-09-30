import React       from "react"
import {HashRouter as Router, Route, Link} from "react-router-dom"

import Header        from "./Header"
import About         from "./About"
import JobExperience from "./JobExperience"
import SkillsSummary from "./SkillsSummary"
import ProjectList   from "./ProjectList"
import Footer        from "./Footer"
import Project       from "./Project"
import Blog          from "./Blog"

import style       from "../../style/index.css"
import navStyle    from "../../style/navbar.css"
import contStyle   from "../../style/container.css"

export default ({projects}) => {
  const ProjectListPath = props =>
    <ProjectList projects={projects} {...props}/>

  const ProjectPath = props =>
    <Project {...projects[props.match.params.id]}/>

  return <div className={style.content}>
    <Header/>
    <About/>
    <SkillsSummary/>
    <JobExperience/>
    <ProjectList/>
    <Footer/>
  </div>
/*
  return <Router>
    <div>
      <div className={navStyle.wrapper}>
        <div className={navStyle["navbar"] + " " + contStyle.container}>
          <div className={navStyle["navbar-home"]}>
            <Link to="/">
              <h3>Jared Loomis</h3>
            </Link>
          </div>
          <div className={navStyle["navbar-list"]}>
            <div className={navStyle["navbar-item"]}>
              <Link to="/projects">
                <h3>Projects</h3>
              </Link>
            </div>
            <div className={navStyle["navbar-item"]}>
              <Link to="/blog">
                <h3>Blog</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div className={contStyle.container}>
        <Route path="/"            component={About}/>
        <Route path="/projects"    component={ProjectListPath}/>
        <Route path="/blog"        component={Blog}/>
        <Route path="/project/:id" component={ProjectPath}/>
      </div>
    </div>
  </Router>
  */
}
