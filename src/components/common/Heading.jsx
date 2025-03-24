import React from 'react'

function Heading({heading, headingClass}) {
  return (
    <h2 className={`text-white text-[26px] font-semibold ${headingClass}`}>{heading}</h2>
  )
}

export default Heading