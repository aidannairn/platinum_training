import React from 'react'
import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const ActiveItem = route => {
    return route === useLocation().pathname
  }

  return (
    <Menu stackable id="menu" fluid>
      <Container text>
        <Link to="/">
          <Menu.Item active={ActiveItem('/')}>Home</Menu.Item>
        </Link>
        <Link to="/profile/about">
          <Menu.Item active={ActiveItem('/profile/about')}>Profile</Menu.Item>
        </Link>
      </Container>
    </Menu>
  )
}

export default Header
