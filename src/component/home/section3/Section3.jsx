import React from 'react'

const Section3 = () => {
  return (
    <section>
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        <p>welcome to foundation.</p>
        <h2>OUR APPROACH</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-8">
              <div className="help-man hovering">
                <figure>
                  <img alt="man" className="w-100" src="assets/img/help-img-1.jpg" />
                </figure>
                <h5>Our Approach</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="help-man hoverimg">
                <img alt="man" className="helptwo" src="assets/img/help-img-2.jpg" />
                <figure>
                  <img alt="man" className="w-100 mt-4" src="assets/img/help-img-3.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-xl-5">
          <div className="help-man-data">
            <p>
              Lorem ipsum dolor sit amet, consect etur adipis elit. Aenean egestas magna at porttitor vehicula lam augue lorem ipsum dolor sit amet Lorem ips dolor sit amet, consect etur adipiscing elit.
            </p>
            <ul>
              <li><div className="bol"></div>Creating brands people trust.</li>
              <li><div className="bol"></div>Helping charities and non-profits to do good</li>
              <li><div className="bol"></div>what you do best, changing the world</li>
            </ul>
            <a href="about.html" className="btn"><span>Learn More</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Section3
