import React, { Fragment } from 'react'
import { Grid, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'
//Files
import About from 'Components/About/About'
import Resources from 'Components/Resources/Resources'
import Services from 'Components/Services/Services'

function Profile() {
  const ActiveItem = route => {
    return route === useLocation().pathname
  }

  return (
    <Fragment>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Profile</Header.Content>
      </Header>
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
            <Switch>
              <Route exact path="/profile/about">
                <About />
              </Route>
              <Route exact path="/profile/resources">
                <Resources />
              </Route>
              <Route exact path="/profile/services">
                <Services />
              </Route>
            </Switch>
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

export default Profile
