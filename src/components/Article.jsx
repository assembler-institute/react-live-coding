import React from 'react'
import Author from './Author'

const Article = ({ title, subtitle, paragraph }) => {

  title = 'Me encanta react'
  subtitle = 'Me gusta react'
  paragraph = 'Me gusta mucho react'
  let name = 'Jose Valenzuela'

  return (
    <>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{paragraph}</p>
      <Author name={name} />
    </>
  )
}

export default Article