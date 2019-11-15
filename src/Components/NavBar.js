import React from 'react'
import { Link, } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <>
       <div className="buttonBox">
          <Link className="btn1 button" to='/'>Our Firm</Link>
        
          <Link className="btn2 button" to='/practice'>Practice Areas</Link>
        
          <Link className="btn3 button" to='/contact'>Contact Info</Link>
     
         <Link className="btn4 button" to='/resources'>Resources</Link>
        
      </div>
    </>
    )
  }
}
export default Navbar