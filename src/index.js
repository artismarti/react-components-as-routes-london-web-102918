import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import About from './About'
import Login from './Login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'orange',
  textDecoration: 'none',
  color: 'black',
}

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{ background: 'red' }}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{ background: 'red' }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{ background: 'red' }}
      >
        Login
      </NavLink>
    </div>
  )
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
)
