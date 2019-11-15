import React from 'react'

const Home = () => (
 <>
  <div className="mainBox">

   <div className="navBox">
     <div className="buttonBox">
        <div className="btn1">Our Firm</div>
        <div className="btn2">Practice Areas</div>
        <div className="btn3">Contact Info</div>
        <div className="btn4">Resources</div>
       </div>
     </div>

     <div className="contentBox">
       <div className="showBox">
        <div className="mainHeader">
          <p className="title">Schiellack & Associates</p>
          <p className="certified">Certified Public Accountants</p>
        </div>
        <div className="mainContent">
          <p>Schiellack & Associates, Certified Public Accountants, is a full service public accounting firm established in 2002. The firm serves hundreds of business and individual clients throughout Venture County, California, offering a wide array of business and consulting services.</p>
          <p>We have built our success by focusing primarily on closely held corporations, partnerships, entrepreneurs, construction contractors, government contractors, and high net-worth individuals.</p>
          <p>We are committed to providing superior accounting, tax and business consulting services in a manner that is timely, professional and personal. Our goal is to offer solutions that meet the individual needs of each client and that enhance the effectiveness and success of each company and individual.</p>      
          <p>We are members of the American Institute of Certified Public Accounts and the California Society of Certified Public Accountants.</p>
          <p>Our managing partner Butch Schiellack, CPA, has over 25 years of experience in public accounting and business consulting. He is the current President of the Venture County Contractors Association and has served as the Director/Officer since 2000.</p>
        </div>
      </div>
      <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
     </div>
  </div>
 </>
)

export default Home