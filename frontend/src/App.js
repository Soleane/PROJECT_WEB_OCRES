import React from 'react';
import Dashboard from './component/Dashboard';
import Header from './component/Header';

import './App.css';
import Aside from './component/Aside';
import Titre from './component/Titre';


export default function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Titre />
      <Dashboard/>
    </div>
  );
}