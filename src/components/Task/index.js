import React from 'react';
import './styles.css';
import FontAwesomePro from '../FontAwesomePro';
import Tag from '../Tag';
import TimerButton from '../TimerButton';

export default function Task({ title, column, onStart, started }) {
  return (
    <div className="task-container">
      <div className="task-header">
        <p className="task-title">{title}</p>
        <FontAwesomePro
          icon="external-link"
          color="#FFF"
          size={12}
          type="light"
        />
      </div>
      <div className="task-contents">
        <Tag text={column} color="#8A2FFF" />
        <TimerButton
          icon="stopwatch"
          onClick={onStart}
          active={started}
        />
      </div>
    </div>
  );
}