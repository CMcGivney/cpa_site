import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <>
       <div className="buttonBox">
        <div className="button btn1 ">
         <NavLink 
         exact
         className="btn1 button" 
         to='/' 
         activeStyle={styles.active}><div className="txtBtn">Our Firm</div></NavLink>
        </div>
        <div className="btn2 button">
          <NavLink 
          exact
          className="btn2 button" 
          to='/practice' 
          activeStyle={styles.active}><div className="txtBtn">Practice Areas</div></NavLink>
        </div>
        <div className="btn3 button">
          <NavLink 
          exact
          className="btn3 button" 
          to='/contact'
          activeStyle={styles.active}
          ><div className="txtBtn">Contact Info</div></NavLink>
        </div>
        <div className="btn4 button">
         <NavLink 
          exact
          className="btn4 button"
          to='/resources'
          activeStyle={styles.active}
          ><div className="txtBtn">Resources</div></NavLink>
       </div>
      </div>
    </>
    )
  }
}

const styles = {
  active: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#555'
  }
}
export default Navbar