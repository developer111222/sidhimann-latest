import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Theme color */}
      <div className="theme-color">
        <img src="assets/img/sun.png" alt="moon" id="theme-icon" />
      </div>
      {/* Theme color end */}

      <header>
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-slid">
              <div>
                <div className="phone-data">
                  <div className="phone d-flax align-items-center">
                    <i>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M437.15,74.817C388.895,26.571,324.561,0,256,0C187.587,0,123.279,26.65,74.92,75.041
                          C26.559,123.435-0.048,187.766,0,256.184c0.048,68.507,27.005,132.938,75.905,181.425C124.335,485.629,188.219,512,255.997,512
                          c0.677,0,1.357-0.002,2.035-0.008c44.288-0.345,87.858-12.192,126.001-34.262l-15.024-25.967
                          c-33.653,19.472-72.109,29.925-111.21,30.23c-60.48,0.456-117.575-22.858-160.77-65.688C53.847,373.49,30.043,316.616,30,256.163
                          C29.958,195.762,53.447,138.97,96.141,96.247C138.832,53.527,195.605,30,256,30c124.595,0,225.979,101.365,226,225.959
                          c0.008,49.387-15.621,96.298-45.198,135.661c-2.573,3.424-6.37,5.478-10.692,5.784c-4.368,0.308-8.658-1.291-11.756-4.388
                          l-20.406-20.406l9.06-9.06l-70.711-70.711l-28.284,28.284c-58.885-7.935-105.202-54.252-113.137-113.137l28.284-28.284
                          l-70.711-70.711l-39.054,39.054c-3.826,66.249,19.552,133.776,70.167,184.391s118.142,73.993,184.391,70.167l8.782-8.781
                          l20.406,20.406c9.247,9.247,22.033,14.022,35.082,13.1c12.935-0.913,24.803-7.36,32.563-17.688
                          C494.3,365.039,512.01,311.895,512,255.954C511.988,187.393,485.406,123.064,437.15,74.817z"
                        />
                      </svg>
                    </i>
                    <span>Phone:</span>
                    <a className="me-3" href="callto:800-836-4620">
                      800-836-4620
                    </a>
                  </div>
                  <div className="phone">
                    <i>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M0,81v350h512V81H0z M456.952,111L256,286.104L55.047,111H456.952z M30,128.967l134.031,116.789L30,379.787V128.967z
                          M51.213,401l135.489-135.489L256,325.896l69.298-60.384L460.787,401H51.213z M482,379.788L347.969,245.756L482,128.967V379.788z"
                        />
                      </svg>
                    </i>
                    <span>Email:</span>
                    <a href="mailto:information@domain.com">information@domain.com</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="social-media">
                  <ul className="social-media-icon">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f icon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter icon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g icon"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="mx-4 boder"></div>
                  <div className="login">
                    <i className="fa-solid fa-user"></i>
                    <NavLink to="/login">Login and Register</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second-bar">
          <div className="container">
            <div className="logo-menu">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="logo">
                    <NavLink to="/">
                      <img alt="logo" src="assets/img/logo.png" className="white-logo" />
                      {/* <img alt="logo" src="assets/img/logo-w.png" className="black-logo" /> */}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="nav-bar">
                    <nav>
                      <ul>
                        <li>
                          <NavLink to="/">Home</NavLink>
                          
                        </li>
                       
                        {/* <li>
                          <NavLink to="/shop">Shop</NavLink>
                          <ul>
                            <li>
                              <NavLink to="/our-shop">Our Shop</NavLink>
                            </li>
                            <li>
                              <NavLink to="/shop-cart">Shop Cart</NavLink>
                            </li>
                            <li>
                              <NavLink to="/cart-checkout">Cart Checkout</NavLink>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li>
                          <NavLink to="/blog">News</NavLink>
                          <ul>
                            <li>
                              <NavLink to="/blog-details-1">Blog Details 1</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blog-details-2">Blog Details 2</NavLink>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="/why-education">Services</NavLink>
                        <ul>
                      
                        <li>
                          <NavLink to="/why-education">Education</NavLink>
                        </li>   <li>
                          <NavLink to="/healthcare">Healthcare</NavLink>
                        </li>   <li>
                          <NavLink to="/women-empowerment">Women Empowerment</NavLink>
                        </li>  
                        <li>
                          <NavLink to="/social-justice-and-advocacy">Social Justice and Advocacy</NavLink>
                        </li>  
                        <li>
                          <NavLink to="/rural-development">Rural Development</NavLink>
                        </li>  
                        
                        </ul>

                        </li>
                        <li>
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </nav>
                    <div className="extras">
                      {/* <div className="donation">
                        <a href="JavaScript:void(0)" className="pr-cart">
                          <svg
                            id="Shoping-bags"
                            enableBackground="new 0 0 512 512"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"></path>
                            </g>
                          </svg>
                        </a>
                        <div className="cart-popup">
                          <ul>
                            <li className="d-flex align-items-center position-relative">
                              <div className="p-img light-bg">
                                <img src="assets/img/product-1.jpg" alt="Product Image" />
                              </div>
                              <div className="p-data">
                                <h3 className="font-semi-bold">Pastoral Principles Cards</h3>
                                <p className="theme-clr font-semi-bold">1 x $25.00</p>
                              </div>
                              <a href="JavaScript:void(0)" id="crosss"></a>
                            </li>
                            <li className="d-flex align-items-center position-relative">
                              <div className="p-img light-bg">
                                <img src="assets/img/product-2.jpg" alt="Product Image" />
                              </div>
                              <div className="p-data">
                                <h3 className="font-semi-bold">Pastoral Principles Cards</h3>
                                <p className="theme-clr font-semi-bold">1 x $25.00</p>
                              </div>
                              <a href="JavaScript:void(0)" id="cross"></a>
                            </li>
                          </ul>
                          <div className="cart-total d-flex align-items-center justify-content-between">
                            <span className="font-semi-bold">Total:</span>
                            <span className="font-semi-bold">$60.00</span>
                          </div>
                          <div className="cart-btns d-flex align-items-center justify-content-between">
                            <a className="font-bold" href="JavaScript:void">
                              View Cart
                            </a>
                            <a className="font-bold theme-bg-clr text-white checkout" href="JavaScript:void">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div> */}
                      <NavLink className="theme-btn" to="/donation">
                        Donate Now
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive-bar">
          <div className="container">
            <div className="responsive-bar-slider">
              <NavLink to="/">
                <img alt="logo" src="assets/img/logo.png" className="white-logo" />
                <img alt="logo" src="assets/img/logo-w.png" className="black-logo" />
              </NavLink>
              <div className="bar-menu">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-nav hmburger-menu" id="mobile-nav" style={{ display: 'block' }}>
          <div className="res-log">
            <NavLink to="/">
              <img src="assets/img/logo.png" alt="Responsive Logo" className="white-logo" />
              <img alt="logo" src="assets/img/logo-w.png" className="black-logo" />
            </NavLink>
          </div>
          <ul>
            <li className="menu-item-has-children">
              <NavLink to="/">Home</NavLink>
              {/* <ul className="sub-menu">
                <li>
                  <NavLink to="/home1">Home Page 1</NavLink>
                </li>
                <li>
                  <NavLink to="/home2">Home Page 2</NavLink>
                </li>
                <li>
                  <NavLink to="/home3">Home Page 3</NavLink>
                </li>
                <li>
                  <NavLink to="/home4">Home Page 4</NavLink>
                </li>
              </ul> */}
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="menu-item-has-children">
              <NavLink to="">Pages</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to="/cause-details">Cause Details</NavLink>
                </li>
                <li>
                  <NavLink to="/team-details">Team Details</NavLink>
                </li>
                <li>
                  <NavLink to="/event-details">Event Details</NavLink>
                </li>
                <li>
                  <NavLink to="/donation">Donation Page</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/product-details">Product Details</NavLink>
                </li>
                <li>
                  <NavLink to="/404-error">404 Error</NavLink>
                </li> */}
              </ul>
            </li>
            {/* <li className="menu-item-has-children">
              <NavLink to="/shop">Shop</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to="/our-shop">Our Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/shop-cart">Shop Cart</NavLink>
                </li>
                <li>
                  <NavLink to="/cart-checkout">Cart Checkout</NavLink>
                </li>
              </ul>
            </li> */}
            <li className="menu-item-has-children">
              <NavLink to="">News</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/blog-details-2">Blog Details 2</NavLink>
                </li> */}
              </ul>
            </li>
            <li className="menu-item-has-children">
              <NavLink to="gallery">Photo Gallery</NavLink>
              {/* <ul className="sub-menu">
                <li>
                  <NavLink to="/photo-gallery-1">Photo Gallery 1</NavLink>
                </li>
                <li>
                  <NavLink to="/photo-gallery-2">Photo Gallery 2</NavLink>
                </li>
                <li>
                  <NavLink to="/photo-gallery-3">Photo Gallery 3</NavLink>
                </li>
              </ul> */}
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <a href="JavaScript:void(0)" id="res-cross"></a>
        </div>
      </header>
    </>
  );
};

export default Header;