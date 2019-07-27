import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>

      <div className="App" >
      
      <Switch>
              <Route exact path='/' component={Home} />
              
              <Route path='/about' component={About} />
          </Switch>

        </div>
    </Router>
   
  );
}

export default App;
