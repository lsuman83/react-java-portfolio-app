import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Artist from './components/Artist'
import Portfolio from './components/Portfolio'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'


function App() {
  return (
    <div className="App">
      <Router>    
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />

            <Route
              exact
              path='/artist'
              component={Artist}
            />

            <Route
              exact
              path='/portfolio'
              component={Portfolio}
            />

            <Route
              exact
              path='/signup'
              component={Signup}
            />

            <Route
              exact
              path='/login'
              component={Login}
            />

            <Route
              exact
              path='/logout'
              component={Logout}
            />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
