/**
 * @file index.tsx
 * @description The main index file for the React application.
 * @author Ilia Kamilov <iliakmlv@gmail.com>
 * @date 08/09/2024
 * @license MIT
 * @version 1.0.0
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Get the root element from the HTML document
 * make sure the element with id 'root' exists in the HTML document.
 */
const root = document.getElementById('root');

// Render the App component in the root element
ReactDOM.render(<App />, root);