import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
//Files
import 'App.css'
import Header from 'Components/Header/Header'
import About from 'Components/About/About'
import Resources from 'Components/Resources/Resources'
import Dashboard from 'Components/Dashboard/Dashboard'
import Profile from 'Components/Profile/Profile'
import Services from 'Components/Services/Services'
import Signup from 'Components/Auth/Signup/Signup'
import Login from 'Components/Auth/Login/Login'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Container style={{ paddingTop: '1em' }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/profile/about" component={About} />
            <Route exact path="/profile/resources" component={Resources} />
            <Route exact path="/profile/services" component={Services} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Fragment>
    </div>
  )
}

export default App
