import React from 'react';
import './styles.css';

export function CenteredContainer({ style, children }) {
  return (
    <div className="centered-container" style={style}>
      {children}
    </div>
  )
}

export default function Content({ children }) {
  return (
    <div className="screen-content">
      {children}
    </div>
  )
}