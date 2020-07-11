import React from 'react';
import './styles.css';
import NavBarTab from '../NavBarTab';

export default function NavBar ({tabs, activeTab, onChange}) {
  return(
    <div className="navbar-container">
      {tabs.map(({ name }, index) => (
        <NavBarTab
          name={name}
          active={activeTab === index}
          onClick={() => onChange(index)}
          key={name}
        />
      ))} 
    </div>
  )
}
