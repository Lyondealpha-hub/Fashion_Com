import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/register';
import AllItems from './components/allItems';
import Update from './components/update';
import Dashboard from './components/Dashboard';
import Navbar from './components/includes/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Navbar action={'Dashboard'} />
            <Dashboard />
          </Route>
          <Route exact path='/search'>
            
              <AllItems />

            
          </Route>

          <Route exact path='/RegisterUser'>
            <div className='fullpage'>
              
              <Register />
            </div>
          </Route>

          <Route exact path='/Update/:id'>
            <Update />
          </Route>
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
