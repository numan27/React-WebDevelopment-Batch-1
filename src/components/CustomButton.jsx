import React from 'react'

const CustomButton = ({text, background, textColor, padding, border}) => {

  const buttonStyles = {
    backgroundColor: background || "#fff",
    color: textColor || "#000",
    padding: padding || "10px 20px",
    borderColor: border || "#000",
  }
  return (
    <div>
        <button style={buttonStyles}>
            {text}
        </button>
    </div>
  )
}

export default CustomButton