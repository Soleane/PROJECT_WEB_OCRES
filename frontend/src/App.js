import React from 'react';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Aside from './component/Aside';
import Titre from './component/Titre';

import './App.css';

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