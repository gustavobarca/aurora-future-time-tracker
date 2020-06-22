import React from 'react';
import './styles.css'

export default function Tag({ text, color }) {
  return (
    <span className="tag-container" style={{ backgroundColor: color }}>
      {text}
    </span>
  );
}