import React, { useState } from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';

export default function IconButton({icon, color, size, animated, onClick}) {
  const [animating, setAnimating] = useState(false);

  function handleOnClick(){
    if (animated) {
      setAnimating(prev => !prev)
    }

    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleOnClick}
      className= {`icon-button ${animating ? 'icon-button-animating' : ''}`}
      
    >
      <FontAwesomePro
        icon={icon}
        color={color}
        size={size}
      />
    </button>
  )
}