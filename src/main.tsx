import React from 'react';
import {createRoot} from 'react-dom/client';
import Portfolio from './Portfolio';
import './style.css';
const manage=new URLSearchParams(window.location.search).get('manage')==='1';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Portfolio manage={manage}/></React.StrictMode>);
