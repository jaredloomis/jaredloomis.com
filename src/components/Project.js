import React from "react"

import style from "../../style/Project.css"

export default ({name, link, timespan, children}) => <div>
  <h3 className={style.heading}>{name}</h3>
  {timespan && <span className={style.timespan}>
    {timespan}
  </span>}
  {children}
  <a href={link.url}>{link.text}</a>
</div>
