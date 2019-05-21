import React from "react"

export default ({projects=[]}) => <div>
  <h1>Projects</h1>
  
  {projects.map(({name}, projectI) =>
    <a href={`#/project/${projectI}`}>{name}</a>
  )}
</div>
