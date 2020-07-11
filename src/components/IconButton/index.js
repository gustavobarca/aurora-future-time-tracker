import React, { useState } from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';

export default function IconButton({icon, iconColor, iconSize, iconType, color, size, style, animated, onClick}) {
  const [animating, setAnimating] = useState(false);

  function handleOnClick(){
    if (animated) {
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
      }, 1000);     
    }
    
    if (onClick) onClick()
  }

  return (
    <button
      onClick={animating ? null : handleOnClick}
      className= {`icon-button ${animating ? 'icon-button-animating' : ''} `}
      style= {{backgroundColor: color, width: size, height: size, ...style}}
    >
      <FontAwesomePro
        icon={icon}
        color={iconColor}
        size={iconSize}
        type={iconType}
      />
    </button>
  )
}