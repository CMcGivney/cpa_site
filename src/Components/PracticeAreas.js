import React from 'react'
import NavBar from './NavBar'

const Practice = () => (
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
        <hr/>
       </div>
       <div className="mainContent col-bullets">
       <div className="col-1">
         <ul>
           <li>Financial Statement Preparation</li>
           <li>Tax Planning & Preparation</li>
           <li>Small Business Consulting</li>
         </ul>
         </div>
         <div className="col-2">
           <ul>
           <li>CFO/Controller Services</li>
           <li>Government Contractors</li>
           <li>Construction Industry</li>
           </ul>
         </div>
        </div>
     </div>
     <div className="footer">© Schiellack & Associates | All Rights Reserved | <a className="phoneNum" href="tel:+1-805-278-1888">805-278-1888</a></div>
    </div>
 </div>
</>
)

export default Practice