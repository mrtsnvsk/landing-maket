import React, { useState } from 'react';
import NavMenu from '../nav-menu/nav-menu';
import ScrollDown from '../scroll-down/scroll-down';
import './main.scss';
import MainContent from '../main-content/main-content';

const Main = () => {
  const [scrollText] = useState('KEEP SCROLLING, THERE IS STILL MORE TO COME.');
  const [scrollTextColor] = useState('grey');
  const [menuTextColor] = useState('grey');
  const [menuLineColor] = useState('grey');
  const [lineClass] = useState('nav-menu-line-main');

  return (
    <div className='main-container'>
      <div className='main-container-navbar'>
        <NavMenu
          menuTextColor={menuTextColor}
          menuLineColor={menuLineColor}
          lineClass={lineClass}
        />
      </div>
      <MainContent />
      <ScrollDown scrollTextColor={scrollTextColor} scrollText={scrollText} />
    </div>
  );
};

export default Main;
