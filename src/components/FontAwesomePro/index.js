import React from 'react';
import './styles.css';

export default function FontAwesomePro({ icon, color, style = 'solid' }) {
    return <i className={`fontawesome-${style}`} style={{color}}>{icon}</i>;
}


