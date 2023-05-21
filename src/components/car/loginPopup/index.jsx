import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCloseLoginPopup } from '../../configure/configure';
import './index.scss';

function LoginPopup() {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(setCloseLoginPopup(false));
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 27) { 
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='LoginPopup-container'>
      <div className='loginPopup__video'>
        <iframe
          width='650'
          height='100%'
          src='https://www.youtube.com/embed/WMdtkxThAjU'
          title='YouTube video'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        ></iframe>
        <button className='loginPopup__button' onClick={closePopup}>x</button>
      </div>
    </div>
  );
}

export default LoginPopup;
