import React from 'react';
import './styles.css';

export default function Tab({ active, name, onClick, position }) {
  return (
    <div className="tab-container" onClick={onClick}>
      <p className={`tab-text ${active ? 'tab-text-fade-in' : 'tab-text-fade-out'}`}>
        {name}
      </p>
      <span
        className={`tab-indicator ${active ? 'tab-fade-in' : 'tab-fade-out'}`}
        style={{
          borderTopRightRadius: position === 'last' ? 20 : 0,
          borderBottomRightRadius: position === 'last' ? 20 : 0,
          borderBottomLeftRadius: position === 'first' ? 20 : 0,
          borderTopLeftRadius: position === 'first' ? 20 : 0,
        }}
      />
    </div>
  )
}