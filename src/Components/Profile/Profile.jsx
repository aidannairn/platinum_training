import React, { Fragment } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

function Profile() {
  const ActiveItem = route => {
    return route === useLocation().pathname
  }

  return (
    <Fragment>
      <h1>Profile</h1>
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Link to="/profile/about">
              <Menu.Item name="About" active={ActiveItem('/profile/about')} />
            </Link>
            <Link to="/profile/resources">
              <Menu.Item
                name="Resources"
                active={ActiveItem('/profile/resources')}
              />
            </Link>
            <Link to="/profile/services">
              <Menu.Item
                name="Services"
                active={ActiveItem('/profile/services')}
              />
            </Link>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

export default Profile
