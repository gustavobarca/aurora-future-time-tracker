import React from 'react';
import './styles.css';
import icon from '../../assets/icon.png';

const electron = window.require('electron');

export default function TitleBar() {
  function close() {
    electron.remote.getCurrentWindow().close();
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
        <button className="titlebar-button" onClick={minimize}>-</button>
        <button className="titlebar-button" onClick={close} id="titlebar-close">X</button>
      </div>
    </div>
  );
}