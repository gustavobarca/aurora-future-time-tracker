import React from 'react';
import './styles.css';

export default function Screen({ children }) {
  return (
    <div className="screen-background">
      {children}
    </div>
  )
}