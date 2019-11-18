import React from 'react'
import NavBar from './NavBar'

const Home = () => (
 <>
  <div className="mainBox">
    <div className="navBox">
     <NavBar/>
    </div>
    <div className="contentBox">
      <div className="showBox">
        <div className="mainHeader">
          <p className="title">Schiellack & Associates</p>
          <p className="certified">Certified Public Accountants</p>
        </div>
        <hr/>
         <div className="homeContent">
          <p>   Schiellack & Associates, Certified Public Accountants, is a full service public accounting firm established in 2002. The firm serves hundreds of business and individual clients throughout Ventura County, California, offering a wide array of business and consulting services.</p>
          <p>We have built our success by focusing primarily on closely held corporations, partnerships, entrepreneurs, construction contractors, government contractors, and high net-worth individuals.</p>
          <p>We are committed to providing superior accounting, tax and business consulting services in a manner that is timely, professional and personal. Our goal is to offer solutions that meet the individual needs of each client and that enhance the effectiveness and success of each company and individual.</p>      
          <p>We are members of the American Institute of Certified Public Accounts and the California Society of Certified Public Accountants.</p>
          <p>Our managing partner, Butch Schiellack, CPA has over 30 years of experience in public accounting and business consulting.  He is a past president of the Ventura County Contractors Association and had served as a Director/Officer for over 20 years.</p>
         </div>
        </div>
      <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
     </div>
  </div>
 </>
)

export default Home