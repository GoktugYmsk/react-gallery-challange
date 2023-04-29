import React from 'react'

import { RiSteering2Line } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { GiScrewdriver, GiReceiveMoney } from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';
import { RiPictureInPictureExitLine } from 'react-icons/ri';

import './index.css'

function RightBar() {
  return (
    <div>
      <div className='rightBar'>
        <div className='rightBarIcons'>
          <RiSteering2Line style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Test Sürüşü</span>
        </div>
        <div className='rightBarIcons'>
          <AiFillCar style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Hyundai Kredi</span>
        </div>
        <div className='rightBarIcons'>
          <GiScrewdriver style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Servis Randevusu</span>
        </div>
        <div className='rightBarIcons'>
          <MdDesignServices style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Hyundai'nizi Oluşturun</span>
        </div>
        <div className='rightBarIcons'>
          <GiReceiveMoney style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Fiyat Listesi</span>
        </div>
        <div className='rightBarIcons'>
          <RiPictureInPictureExitLine style={{ background: ' rgb(31, 126, 186)' }} />
          <span className='iconText'>Online Showroom</span>
        </div>
      </div>
    </div>
  )
}

export default RightBar
