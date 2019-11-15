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
         <p>Internal Revenue Service<br/><a href="https://www.irs.gov">IRS.gov</a></p>
         <p>California Franchise Tax Board<br/><a href="https://www.ftb.ca.gov">ftb.ca.gov</a></p>
         <p>California Employment Development Department<br/><a href="https://www.edd.ca.gov/eddhome.htm">edd.ca.gov/eddhome.htm</a></p>
         <p>California Employers' Guide (DE44)<br/><a href="https://www.edd.ca.gov/pdf_pub_ctr/de44.pdf">edd.ca.gov/pdf_pub_ctr/de44.pdf</a></p>
         <p>CalChamber Store<br/><a href="https://www.calbizcentral.com/store/pages/default.aspx">calbizcentral.com/store/pages/default.aspx</a></p>
       </div>
    
       </div>
     <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
  </div>
 </div>
</>
)

export default Resources