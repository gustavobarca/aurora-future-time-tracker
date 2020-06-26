import React, { useState } from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';

export default function ProjectsDropdown({ projects, selected, onChange }) {
  const [visible, setVisible] = useState(false);

  function handleOnProjectClick(index) {
    setVisible(false);
    
    if (onChange) onChange(index);
  }

  function toggle() {
    setVisible(prev => !prev);
  }

  return (
    <div>
      <div className="projects-dropdown-container" onClick={toggle}>
        <h3 className="text">{projects[selected].name}</h3>
        <FontAwesomePro
          className={visible ? 'projects-dropdown-chevron-up' : 'projects-dropdown-chevron-down'}
          icon="caret-down"
          color="white"
          type="solid"
        />
      </div>
      <div className={`projects-dropdown ${visible ? 'projects-dropdown-visible' : 'projects-dropdown-hidden'}`}>
        <ul className="projects-dropdown-ul">
          {projects.map(({ name, value }, index) => (
            <li
              onClick={() => handleOnProjectClick(index)}
              className="projects-dropdown-item"
              key={value}
            >
              <FontAwesomePro
                style={{ marginRight: 10 }}
                icon="folder-open"
                color="rgba(255, 255, 255, 0.3)"
              />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}