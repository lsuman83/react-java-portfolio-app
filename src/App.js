import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App flex min-h-screen">
      <Router>
        <Navbar />

        <div className='flex flex-col w-full'>
          <header className='flex justify-end bg-blue-300 p-2'>
            <form>
              <input className='rounded-lg pl-2 mr-2' type='text' value='' placeholder='Search'/>
              <button className='w-20 px-2 rounded-md bg-yellow-400' type='submit' value='Search'>Search</button>
            </form>
          </header>
                
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
