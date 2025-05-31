import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import whiskey from './Whiskey.js';
import duke from './Duke.js';
import perry from './Perry.js';
import tubby from './Tubby.js';

function Dogs() {
  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        <li>
          <Link to="/dogs/whiskey">Whiskey</Link>
        </li>
        <li>
          <Link to="/dogs/duke">Duke</Link>
        </li>
        <li>
          <Link to="/dogs/perry">Perry</Link>
        </li>
        <li>
          <Link to="/dogs/tubby">Tubby</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dogs;