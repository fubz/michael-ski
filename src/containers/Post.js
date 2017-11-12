import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ post: { attributes: {title, text} }}) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
))
