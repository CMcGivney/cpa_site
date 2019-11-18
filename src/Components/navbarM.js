import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

export default class MenuExampleVertical extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="btn1 button" vertical>
       <Link className="btn1 button" to='/'>
         <Menu.Item
           name='Our Firm'
           active={activeItem === 'Our Firm'}
           onClick={this.handleItemClick}
           className="btn1 button"
           >
           Our Firm 
         </Menu.Item>
       </Link>

      </Menu>
    )
  }
}