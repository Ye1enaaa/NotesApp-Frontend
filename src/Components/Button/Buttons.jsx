import React from 'react'

const Buttons = ({onClick, text, className}) => {
  return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
  )
}

export default Buttons