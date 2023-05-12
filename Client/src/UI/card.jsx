import React from 'react'

const card = ({className,children}) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default card