import React from "react"

export default ({name, link, description}) => <div>
  <h1>{name}</h1>
  <p>{description}</p>
  <a href={link.url}>{link.text}</a>
</div>
