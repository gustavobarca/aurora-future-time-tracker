import React, { useState } from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';
import { PulseLoader } from "react-spinners";

export default function Dropdown({ items, selected, onChange, loading }) {
  const [visible, setVisible] = useState(false);

  function handleOnProjectClick(index) {
    setVisible(false);
    
    if (onChange) onChange(index);
  }

  function toggle() {
    setVisible(prev => !prev);
  }

  function renderDropdownButton() {
    if (loading) {
      return (
        <>
          <PulseLoader color="#FFF" loading={loading} size={5} />
          <FontAwesomePro
            className={visible ? 'dropdown-chevron-up' : 'dropdown-chevron-down'}
            icon="caret-down"
            color="white"
            type="solid"
          />
        </>
      )
    }

    return (
      <>
        <p className="dropdown-text">{items.length ? items[selected].name : ''}</p>
        <FontAwesomePro
          className={visible ? 'dropdown-chevron-up' : 'dropdown-chevron-down'}
          icon="caret-down"
          color="white"
          type="solid"
        />
      </>
    );
  }

  return (
    <div>
      <div className="dropdown-container" onClick={loading ? null : toggle}>
        {renderDropdownButton()}
      </div>
      <div className={`dropdown ${visible ? 'dropdown-visible' : 'dropdown-hidden'}`}>
        <ul className="dropdown-ul">
          {items.map(({ name, value }, index) => (
            <li
              onClick={() => handleOnProjectClick(index)}
              className="dropdown-item"
              key={value}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}