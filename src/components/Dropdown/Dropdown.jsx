import React, { Component } from 'react';
import '../../index.scss';
import './Dropdown.scss';

function Dropdown(props) {
    return (
        <div className='Dropdown'>
            <h1>{ props.title }</h1>
            <p>{ props.content }</p>
        </div>
    );
}

export default Dropdown;
