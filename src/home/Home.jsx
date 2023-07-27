import React from 'react';
import './style.scss';
import emoji from '../assets/emoji.png';
import email from '../assets/email.png';
import pen from '../assets/pen.png';
import {PiPaperPlaneRight} from 'react-icons/pi';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';
import {FiChevronDown} from 'react-icons/fi';

const Home = () => {
  return (
    <div className='container1'>
        <div className='page'>
            <div className="name">
                <div className="first">
                    <span className='span'>First Name</span>
                    <div className='padd'><p>Kishor</p></div> 
                </div>
                <div className="last">
                    <span className='span'>Last Name</span>
                    <div className='padd'><p>K S</p></div> 
                </div>
            </div><br />
            <div className="first">
                    <span className='span'>Username</span>
                    <div className='padd'><p>Kishor-manidha</p></div> 
            </div><br />
            <div className="first">
                    <span className='span'>Email Address</span>
                    <div className='padd'><p>Kishormanidha.062001@gmail.com</p></div> 
            </div><br />
            <div className="first1">
                <div>
                    <span className='span'>Password</span>
                    <div className='padd1 '><p>.........</p></div> 
                </div>
                <div className='butt'>
                    <button className='buttg'>strong</button>
                </div>
            </div><br />
            <div className="first1">
                <div className='privacy'>
                    <span className='span'>Privacy Setting</span>
                    <div className='padd'><p>(OPTIONAL)</p></div> 
                </div>
                <div className='butt'>
                    <img className='image' src={emoji} alt="" />
                </div>
            </div><br />
            <div className='optinalBot'>
                <span className='span'>Who can see my Profile?</span><br />
                <div className='elemetC'>
                    <div className='buttele'>
                        <button></button>
                        <PiPaperPlaneRight/>
                        <span className='span2'>Everyone</span>
                    </div>
                    <div className='buttele'>
                        <button></button>
                        <span className='span2'>Only Friends</span>
                    </div>
                    <div className='buttele'>
                        <button></button>
                        <span className='span2'>Invite Only</span>
                    </div>
                </div>
            </div><br />

            <div className='optinalBot1'>
                <span className='span'>Automatically share my posts and replies on Social Networks</span><br />
                <div className='elemetC'>
                    <div className='buttele'>
                        <button></button>
                        <AiFillFacebook className='icon'/>
                        <span className='span2'>Facebook</span>
                    </div>
                    <div className='buttele'>
                        <button></button>
                        <AiOutlineTwitter className='icon1'/>
                        <span className='span2'>Twitter</span>
                    </div>
                    <div className='buttele'>
                        <button></button>
                        <AiOutlineGooglePlus className='icon2'/>
                        <span className='span2'>Google</span>
                    </div>
                </div><br /><br />
            </div>



            <div className="first1">
                <div className='privacy'>
                    <span className='span'>Small Survey</span>
                    <div className='padd'><p>(OPTIONAL)</p></div> 
                </div>
                <div className='butt'>
                    <img className='image' src={email} alt="" />
                </div>
            </div><br />

            <div className='survey'>
                <div className='survey1'>
                    <div className='survey2'>
                         <span className="span">How old are you?</span>
                         <div className='icon11'>
                         <p>21</p>
                         <FiChevronDown/>
                         </div><br />
                         
                    </div>
                    <div>
                         <span className="span">Who are you?</span>
                         <div className='icon11'>
                            <p>Female</p>
                            <FiChevronDown/>
                        </div><br />
                         
                    </div>
                </div><br />

                <div className='survey3'>
                    <div className='survey2'>
                         <span className="span">Will you be friendly here?</span>
                         <div className='icon11'>
                         <p>Select</p>
                         <FiChevronDown/>
                         </div><br />
                         
                    </div>
                    <div>
                         <span className="span">Where do you heard about us?</span>
                         <div className='icon11'>
                            <p>By Search Engine</p>
                            <FiChevronDown/>
                        </div><br />
                         
                    </div>
                </div><br />
            </div>


            <div className="first1">
                <div className='privacy'>
                    <span className='span'>Link Social Networks</span>
                    <div className='padd'><p>(OPTIONAL)</p></div> 
                </div>
                <div className='butt'>
                    <img className='image' src={pen} alt="" />
                </div>
            </div><br />

            <div className='survey'>
                <div className='survey1'>
                    <div className='survey2'><AiFillFacebook className='icon'/>
                         <span className="span">Facebook URL</span>
                         <div className='icon11'>
                         <p>facebook.com/Azyrus-themes</p>
                         </div><br />
                         
                    </div>
                    <div><AiOutlineTwitter className='icon1'/>
                         <span className="span">Twitter Username</span>
                         <div className='icon11'>
                            <p>themeforest</p>
                        </div><br />
                         
                    </div>
                </div><br />

                <div className='survey3'>
                    <div className='survey2'>
                         <span className="span">Google+ Account ID</span>
                         <div className='icon11'>
                         <p>azyrus_themes</p>
                         </div><br />
                         
                    </div>
                    <div>
                         <span className="span">Where do you heard about us?</span>
                         <div className='icon11'>
                            <p>azyrusthemes</p>
                        </div><br />
                         
                    </div>
                </div><br />
            </div>

            <div className='cat'>
                <div>
                    <p className='ptag'>Interestd Categories (OPTIONAL)</p><br />
                    <span className="span">Categories I'm intrested in</span>
                </div><br />
                <div className='catsec'>
                    <div className='bucat'>
                        <button></button>
                        <p>Select All</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Mental Health</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>MH Tips</p>
                    </div><div className='bucat'>
                        <button></button>
                        <p>Support</p>
                    </div>
                </div><br />

                <div className='catsec'>
                    <div className='bucat'>
                        <button></button>
                        <p>Enable</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Exchange</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Art</p>
                    </div><div className='bucat'>
                        <button></button>
                        <p>Q&As</p>
                    </div>
                </div><br />

                <div className='catsec'>
                    <div className='bucat'>
                        <button></button>
                        <p>Social</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Random</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Music</p>
                    </div><div className='bucat'>
                        <button></button>
                        <p>Science</p>
                    </div>
                </div><br />

                <div className='catsec'>
                    <div className='bucat'>
                        <button></button>
                        <p>Pets</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Educatio</p>
                    </div>
                    <div className='bucat'>
                        <button></button>
                        <p>Video</p>
                    </div>
                </div><br /><br />
            </div>


            <div><br /><br />
            <div className='last11'>
                <div className='terms'>
                    <button></button>
                    <p>I agreed to the Terms & Condition</p>
                </div>
                <div className='terms'>
                    <button></button>
                    <p>Subscribe to newsletter</p>
                </div>
            </div><br /><br />
            <div><button className='buttonCreate'>Create New Account</button></div>
            </div>
            


        </div>
         
    </div>
  )
}

export default Home