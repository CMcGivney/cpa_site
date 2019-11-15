import React from 'react'
import { Link, } from 'react-router-dom'
import { Menu, } from 'semantic-ui-react'

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Menu style={{backgroundColor: "lightskyblue"}} pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='Our Firm'
              id='home'
              // active={this.props.location.pathname === '/'}
            />
            </Link>
          <Link to='/practice'>
            <Menu.Item
              name='Practice Areas'
              id='skills'
              // active={this.props.location.pathname === '/practice'}
            />
            </Link>
          <Link to='/contact'>
            <Menu.Item
              name='Contact Info'
              id='contact'
              // active={this.props.location.pathname === '/contact'}
            />
            </Link>
          <Link to='/resources'>
            <Menu.Item
              name='Resources'
              id='resources'
              // active={this.props.location.pathname === '/resources'}
            />
          </Link>
        </Menu>
      </>
    )
  }
}
export default Navbar