import React from 'react'
import './style.scss';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'><br /><br />  
        <div>
            <p>Terms</p>
        </div>
        <div>
            <p>Privacy</p>
        </div>
        <div>
            <p>Send Feedback</p>
        </div>
        <div className='iconsfo'>
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <AiOutlineGooglePlus/>
        </div>
    </div>
  )
}

export default Footer