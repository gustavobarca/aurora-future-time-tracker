import React from 'react';
import './styles.css';

export default function Scroller({ children }) {
  return (
    <div className="scroller-container">
      {children}
    </div>
  );
}