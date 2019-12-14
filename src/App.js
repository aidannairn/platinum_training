import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
//Files
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Resources from './Components/Resources/Resources'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Services from './Components/Services/Services'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        {/* <header className="App-header">APP COMPONENT</header> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/profile/about" component={About} />
          <Route exact path="/profile/resources" component={Resources} />
          <Route exact path="/profile/services" component={Services} />
        </Switch>
      </Fragment>
    </div>
  )
}

export default App
