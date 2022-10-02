import { useState, useEffect, useRef } from 'react';
import './style.css';
import { BsPerson } from 'react-icons/bs';
import { MdHeadsetMic } from 'react-icons/md';
import { 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoInstagram, 
  IoLogoLinkedin,
  IoSearchOutline, 
  IoHeartOutline, 
  IoBagHandleOutline,
  IoHomeOutline
} from 'react-icons/io5';

export default function Navigation() {

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

  const [ isOpen, setIsOpen ] = useState(false);
  const ref = useRef();

  useEffect(() => {

    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };

  }, [isOpen]);

  return (
    <>
      <header>
        <div className='header-top'>
          <div className='container'>
            <ul className='header-social-container'>
              <li>
                <a href='/#' className='social-link'>
                  <IoLogoFacebook className='icons'/>
                </a>
              </li>
              <li>
                <a href='/#' className='social-link'>
                  <IoLogoTwitter className='icons'/>
                </a>
              </li>
              <li>
                <a href='/#' className='social-link'>
                  <IoLogoInstagram className='icons'/>
                </a>
              </li>
              <li>
                <a href='/#' className='social-link'>
                  <IoLogoLinkedin className='icons'/>
                </a>
              </li>
            </ul>
            <ul className="header-alert">
              <li>
                <a href="/#" className='whatsapp-container'>
                  <MdHeadsetMic className='icons'/>
                </a>{" "}                
                <a href='https://api.whatsapp.com/send?phone=6289512203595' target='_blank' className='whatsapp-phone-number'>+62 895-1220-3595</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <a href='/' className='header-logo'>
              <img src={require('../../assets/youthstore3.png')} alt="logo" style={{height:'100px', width:'100px'}}/>
            </a>
            <div className="header-search-container">
              <input type='search' name='search' className='search-field' placeholder='Enter your product name...'/>
              <button className='search-btn'>
                <IoSearchOutline className='icons' />
              </button>
            </div>
            <div className="header-user-actions">
              <div className="auth-dropdown" ref={ref}>
                <button className="action-btn" onClick={() => setIsOpen(!isOpen) }><BsPerson className='icons' /></button>
                { isOpen && (
                  <div className="auth-dropdown-content">
                    {localStorage.getItem("access_token") ? (
                    <>
                      <a href='/dashboard' className='auth-dropdown-item'>Dashboard</a>
                      <a href='/#' className='auth-dropdown-item'>Accout Settings</a>
                      <a href='/#' className='auth-dropdown-item' onClick={handleLogout}>Logout</a>
                    </> 
                    ) : (
                    <>
                      <a href='/login' className="auth-dropdown-item">Login</a>
                      <a href='/register' className="auth-dropdown-item">Sign Up</a>
                    </>
                    )}
                  </div>
                )}
              </div>
              <button className='action-btn'>
                <IoHeartOutline className='icons' />
                <span className='count'>0</span>
              </button>
              <button className='action-btn'>
                <IoBagHandleOutline className='icons' />
                <span className='count'>0</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-bottom-navigation">
          <a href='/' className="action-btn">
            <IoHomeOutline className='icons'/>
          </a>
          <button className="action-btn">
            <IoBagHandleOutline className='icons'/>
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <IoHeartOutline className='icons'/>
            <span className="count">0</span>
          </button>
          <a href='/' className="action-btn">
            <BsPerson className='icons'/>
          </a>
        </div>
      </header>
    </>
  );
}
