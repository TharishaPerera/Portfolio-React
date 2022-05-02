import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/tharisha-perera" target='_blank' rel='noreferre'>
          <FaLinkedinIn />
        </a>
      </div>

      <div>
        <a href="https://facebook.com" target='_blank' rel='noreferre'>
          <FaFacebookF />
        </a>
      </div>

      <div>
        <a href="https://www.instagram.com/___t.h.a.r.i.y.a___/" target='_blank' rel='noreferre'>
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;