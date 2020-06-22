import React from 'react';
import FontAwesomePro from '../FontAwesomePro';
import './styles.css';

export default function TimerButton({ icon, color, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        `icon-button ${
          active 
            ? 'icon-button-active'
            : 'icon-button-inactive'
          }`
      }
    >
      <FontAwesomePro
        icon={icon}
        color="#FFF"
        size={14}
      />
    </button>
  )
}