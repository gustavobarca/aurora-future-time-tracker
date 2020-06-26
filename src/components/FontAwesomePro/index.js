import React from 'react';
import './styles.css';

export default function FontAwesomePro({
  icon,
  color,
  type = 'solid',
  size = 14,
  className = '',
  style,
}) {
  return (
    <i
      className={`fontawesome-${type} fa-${icon} ${className}`}
      style={{ color, fontSize: size, ...style }}
    >
      
    </i>
  );
}


