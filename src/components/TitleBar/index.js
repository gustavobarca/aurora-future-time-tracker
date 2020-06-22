import React from 'react';
import './styles.css';
import icon from '../../assets/icon.png';
import FontAwesomePro from '../FontAwesomePro';

const electron = window.require('electron');

export default function TitleBar() {
  function close() {
    electron.remote.getCurrentWindow().hide();
  }

  function minimize() {
    electron.remote.getCurrentWindow().minimize();
  }

  return (
    <div className="titlebar-container">
      <div className="titlebar-title-container">
        <img className="titlebar-img" src={icon} alt="icon" />
        <p className="titlebar-title">Aurora Future</p>
      </div>
      <div className="titlebar-title-container">
        <button className="titlebar-button" onClick={minimize}>
          <FontAwesomePro
            icon="minus"
            color="white"
            type="light"
          />
        </button>
        <button className="titlebar-button" onClick={close} id="titlebar-close">
          <FontAwesomePro
            icon="times"
            color="white"
            type="light"
          />
        </button>
      </div>
    </div>
  );
}