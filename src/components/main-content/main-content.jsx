import React from 'react';
import photo from '../../img/content-photo.png';
import './main-content.scss';

const MainContent = () => {
  return (
    <div className='content'>
      <div className='content-photo'>
        <img alt='Jason Wood' src={photo} />
      </div>
      <div className='content-data'>
        <div className='content-data-heading'>
          <span>ABOUT ME</span>
        </div>
        <div className='content-data-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptates sunt neque optio, earum consectetur repellendus illo, quam
          quas temporibus veritatis accusantium facere? Rem, ratione sint
          veritatis ullam incidunt repudiandae?
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          reiciendis dolor temporibus perspiciatis! Aperiam adipisci
          reprehenderit vitae unde similique libero quis maiores rerum.
        </div>
        <div className='content-data-name'>
          <span>Jason Wood</span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
