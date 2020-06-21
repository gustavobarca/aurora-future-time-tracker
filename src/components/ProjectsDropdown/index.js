import React from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';

export default function ProjectsDropdown({ title }) {
  return (
    <div className="ProjectsDropdownContainer">
      <h2 className="text">{title}</h2>
      <FontAwesomePro icon="chevron-down" color="white"/>
    </div>
  );
}