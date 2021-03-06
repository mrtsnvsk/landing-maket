import React, { useState } from 'react';
import NavMenu from '../nav-menu/nav-menu';
import ScrollDown from '../scroll-down/scroll-down';
import './header.scss';

const Header = () => {
  const [scrollText] = useState('SCROLL DOWN TO SEE MORE');
  const [scrollTextColor] = useState('white');
  const [menuTextColor] = useState('white');
  const [menuLineColor] = useState('white');
  const [lineClass] = useState('nav-menu-line-header');

  return (
    <div className='header-container'>
      <NavMenu
        menuTextColor={menuTextColor}
        menuLineColor={menuLineColor}
        lineClass={lineClass}
      />
      <ScrollDown scrollTextColor={scrollTextColor} scrollText={scrollText} />
    </div>
  );
};

export default Header;
