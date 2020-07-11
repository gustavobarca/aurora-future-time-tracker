import React from 'react';
import './styles.css';

export default function NavBarTab ({ active, name, onClick }) {

  return (
    <div className={`navbar-tab-container ${active ? 'navbar-tab-container-fade-in' : '' }`} onClick={onClick}>
      <p className={`navbar-tab-text ${active ? 'navbar-tab-text-fade-in' : '' }`}>
        {name}
      </p>
    </div>
  )
}