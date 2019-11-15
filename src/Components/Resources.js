import React from 'react'
import NavBar from './NavBar'

const Resources = () => (
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
       <div className="mainContent">
         <p><a href="https://www.irs.gov">Internal Revenue Service</a></p>
         <p><a href="https://www.ftb.ca.gov">California Franchise Tax Board</a></p>
         <p><a href="https://www.edd.ca.gov">California Employment Development Department</a></p>
         <p><a href="https://www.edd.ca.gov/pdf_pub_ctr/de44.pdf">California Employers' Guide (DE44)</a></p>
       </div>
      </div>
     <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
  </div>
 </div>
</>
)

export default Resources