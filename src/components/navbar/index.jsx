import { useState, useEffect, useRef } from 'react';
import './style.css';
import { BsPerson } from 'react-icons/bs';
import { 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoInstagram, 
  IoLogoLinkedin,
  IoLogoWhatsapp, 
  IoSearchOutline, 
  IoHeartOutline, 
  IoBagHandleOutline,
  IoMenuOutline,
  IoHomeOutline,
  IoGridOutline,
  IoCloseOutline,
  IoAddOutline,
  IoRemoveOutline,
  IoCaretBackOutline,
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
                  <IoLogoWhatsapp className='icons'/>
                </a>{" "}                
                <a href='https://api.whatsapp.com/send?phone=62811534892' target='_blank' className='whatsapp-phone-number'>+62 811-534-895</a>
              </li>
            </ul>
            {/* <div className="header-top-actions">
              <select name="currency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">Edpa&ntilde;ol</option>
                <option value="fr">Fran&ccedil;ais</option>
              </select>
            </div> */}
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <a href='/' className='header-logo'>
              <img src={require('../../assets/ANTUM_nobg.png')} alt="logo" style={{height:'100px', width:'100px'}}/>
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
                      <a href='/#' className='auth-dropdown-item'>Accout Setting</a>
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
        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="/#" className="menu-title">Home</a>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">Categories</a>
                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    {/* <li className="panel-list-item">
                      <a href="/#">
                        <img src={require('../../assets/electronics-banner-2.jpg')} alt="headphone collection" style={{height:'119px', width:'250px'}}/>
                      </a>
                    </li> */}
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    {/* <li className="panel-list-item">
                      <a href="/#">
                        <img src={require('../../assets/electronics-banner-2.jpg')} alt="headphone" style={{height:'119px', width:'250px'}}/>
                      </a>
                    </li> */}
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    {/* <li className="panel-list-item">
                      <a href="/#">
                        <img src={require('../../assets/electronics-banner-2.jpg')} alt="headphone" style={{height:'119px', width:'250px'}}/>
                      </a>
                    </li> */}
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    <li className="panel-list-item">
                      <a href="/#">xxxxxxxx</a>
                    </li>
                    {/* <li className="panel-list-item">
                      <a href="/#">
                        <img src={require('../../assets/electronics-banner-2.jpg')} alt="mouse collection" style={{height:'119px', width:'250px'}}/>  
                      </a>
                    </li> */}
                  </ul>
                </div>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="/#">xxxxxxxx</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
              </li>
              <li className="menu-category">
                <a href="/#" className="menu-title">xxxxxxxx</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <IoMenuOutline className='icons'/>
          </button>
          <button className="action-btn">
            <IoBagHandleOutline className='icons'/>
            <span className="count">0</span>
          </button>
          <a href='/' className="action-btn">
            <IoHomeOutline className='icons'/>
          </a>
          <button className="action-btn">
            <IoHeartOutline className='icons'/>
            <span className="count">0</span>
          </button>
          <button className="action-btn" data-mobile-menu-open-btn>
            <IoGridOutline className='icons' />
          </button>
        </div>
        <nav className="mobile-navigation-menu  has-scrollbar d-none" data-mobile-menu>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>
            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <IoCloseOutline className='icons'/>
            </button>
          </div>
          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="/#" className="menu-title">Home</a>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">xxxxxxxx</p>
                <div>
                  <IoAddOutline className="icons add-icon"/>
                  <IoRemoveOutline className="icons remove-icon"/>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">xxxxxxxx</p>
                <div>
                  <IoAddOutline className="icons add-icon"/>
                  <IoRemoveOutline className="icons remove-icon"/>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">xxxxxxxx</p>
                <div>
                  <IoAddOutline className="icons add-icon"/>
                  <IoRemoveOutline className="icons remove-icon"/>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">xxxxxxxx</p>
                <div>
                  <IoAddOutline className="icons add-icon"/>
                  <IoRemoveOutline className="icons remove-icon"/>
                </div>
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
                <li className="submenu-category">
                  <a href="/#" className="submenu-title">xxxxxxxx</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="/#" className="menu-title">xxxxxxxx</a>
            </li>
            <li className="menu-category">
              <a href="/#" className="menu-title">xxxxxxxx</a>
            </li>
          </ul>
          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Language</p>
                  <IoCaretBackOutline className="icons caret-back"/>
                </button>
                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="/#" className="submenu-title">English</a>
                  </li>
                  <li className="submenu-category">
                    <a href="/#" className="submenu-title">Espa&ntilde;ol</a>
                  </li>
                  <li className="submenu-category">
                    <a href="/#" className="submenu-title">Fren&ccedil;</a>
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Currency</p>
                  <IoCaretBackOutline className="icons caret-back"/>
                </button>
                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="/#" className="submenu-title">USD &#36;</a>
                  </li>
                  <li className="submenu-category">
                    <a href="/#" className="submenu-title">EUR &euro;</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="menu-social-container">
              <li>
                <a href="/#" className="social-link">
                  <IoLogoFacebook className='icons'/>
                </a>
              </li>
              <li>
                <a href="/#" className="social-link">
                  <IoLogoTwitter className='icons'/>
                </a>
              </li>
              <li>
                <a href="/#" className="social-link">
                  <IoLogoInstagram className='icons'/>
                </a>
              </li>
              <li>
                <a href="/#" className="social-link">
                  <IoLogoLinkedin className='icons'/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
