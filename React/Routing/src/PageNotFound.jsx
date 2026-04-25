import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page not found</h1>
      <Link to = "/">Back to Home Page</Link>
    </div>
  )
}

export default PageNotFound
