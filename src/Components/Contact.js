import React from 'react'
import NavBar from './NavBar'

const Contact = () => (
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
        <p>Email Address: <a href="mailto:info.sandpcpa.com">info.sandpcpa.com</a></p>
        <p>Phone: <a href="tel:+1-805-278-1888">(805) 278-1888</a></p>
        <p>Fax: <a href="fax:+1-805-278-9888">(805) 278-9998</a></p>
        <p>Mailing Address:<br/> 300 E. Esplanade Drive, Suite 1740 Oxnard, CA 93036</p>
       </div>
     </div>
     <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
    </div>
 </div>
</>
)

export default Contact