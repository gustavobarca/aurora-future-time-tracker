import React from 'react';
import Tab from '../Tab';
import './styles.css';

export default function Tabs({ tabs, activeTab, onChange }) {
  function getPosition(index) {
    if (index === (tabs.length - 1)) {
      return 'last';
    }

    if (index === 0) return 'first';
  }

  return (
    <div className="tabs-container">
      {tabs.map(({ name }, carlos) => (
        <Tab
          name={name}
          active={activeTab === carlos}
          position={getPosition(carlos)}
          onClick={() => onChange(carlos)}
          key={name}
        />
      ))}
    </div>
  )
}