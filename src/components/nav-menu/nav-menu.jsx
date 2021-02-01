import React, { useState } from 'react';
import './nav-menu.scss';

const NavMenu = ({ menuTextColor, menuLineColor, lineClass }) => {
  const [open, setOpen] = useState('');

  return (
    <div className='nav-menu'>
      <nav className={`nav-menu-bar nav-menu-bar-${menuTextColor}`}>
        <li>
          <a href='#?'>HOME</a>
        </li>
        <li>
          <a href='#?'>ABOUT ME</a>
        </li>
        <li>
          <a href='#?'>PORTFOLIO</a>
        </li>
        <li>
          <a href='#?'>CONTACT</a>
        </li>
      </nav>

      {/* nav-menu-line */}
      <div className={`${lineClass} nav-menu-line-${menuLineColor}`}></div>
      {/* Мобильный навбар */}
      <div className='nav-menu-bar-adaptive'>
        <div className='nav-menu-bar-adaptive-desc'>
          <span onClick={() => (!open ? setOpen('nav-bar-open') : setOpen(''))}>
            ∞ MENU
          </span>
        </div>
        <div className={`nav-menu-bar-adaptive-list ${open}`}>
          <div className='nav-menu-bar-adaptive-list-content'>
            <nav className='nav-menu-bar-adaptive'>
              <li>
                <a href='#?'>HOME</a>
              </li>
              <li>
                <a href='#?'>ABOUT ME</a>
              </li>
              <li>
                <a href='#?'>PORTFOLIO</a>
              </li>
              <li>
                <a href='#?'>CONTACT</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
