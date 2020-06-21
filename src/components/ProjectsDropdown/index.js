import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsDropdown({ title }) {
  return (
    <div className="ProjectsDropdownContainer">
      <h2 className="text">{title}</h2>
      <FontAwesomeIcon icon={faChevronDown} color="#FFFFFF" />
    </div>
  );
}