import React from 'react';
import './scroll-down.scss';
import whiteScroll from '../../img/double-arrow-white.png';

const ScrollDown = ({ scrollText, scrollTextColor }) => {
  return (
    <div className='scroll-down'>
      <div className={`scroll-down-text scroll-down-text-${scrollTextColor}`}>
        {scrollText}
      </div>
      <div
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        type='button'
        className='scroll-down-image'
      >
        <img alt='scroll' src={whiteScroll} />
      </div>
    </div>
  );
};

export default ScrollDown;
