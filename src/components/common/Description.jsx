import React from 'react'

function Description({customDescription, descriptionClass}) {
  return (
    <p className={`text-white leading-[150%] ${descriptionClass}`}>{customDescription}</p>
  )
}

export default Description