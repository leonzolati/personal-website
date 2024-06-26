import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <Contact />
  </React.StrictMode>
);
