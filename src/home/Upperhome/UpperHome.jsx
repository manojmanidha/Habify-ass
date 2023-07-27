import React from 'react'
import './style.scss';
import star from '../../assets/star.png';

const UpperHome = () => {
  return (
    <div className='container2'>
        <div className='heding'>
            <img className='starim' src={star} alt="" />
            <h4>Emotional <br /> First Aid <br />Academy</h4>
        </div><br />
        <div className='heding1'>
            <p>Create a Emotional First Aid-Enabler Account</p><br />
            <span className="span">By singin up you can start posting, replaying to topics, earn badges, <br />
            favorite, vote topics and many more.</span><br />
        </div>
    </div>
  )
}

export default UpperHome