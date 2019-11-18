import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <>
       <div className="buttonBox">
        <div className="btn1 button">
         <NavLink 
         exact
         className="button" 
         to='/' 
         activeStyle={styles.active}>Our Firm</NavLink>
        </div>
        <div className="btn2 button">
          <NavLink 
          exact
          className="button" 
          to='/practice' 
          activeStyle={styles.active}>Practice Areas</NavLink>
        </div>
        <div className="btn3 button">
          <NavLink 
          exact
          className="btn3 button" 
          to='/contact'
          activeStyle={styles.active}
          >Contact Info</NavLink>
        </div>
        <div className="btn4 button">
         <NavLink 
          exact
          className="btn4 button"
          to='/resources'
          activeStyle={styles.active}
          >Resources</NavLink>
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