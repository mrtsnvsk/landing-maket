import React from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
