import React from 'react';
import Navbar from "./components/Navbar.js";
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Entdecken from './Pages/Entdecken.js';
import Konto from './Pages/Konto.js';
import Einstellungen from './Pages/Einstellungen.js';
import Info from './Pages/Info.js';
import Support from './Pages/Support.js';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/entdecken' component={Entdecken}/>
          <Route path='/mein-konto' component={Konto}/>
          <Route path='/einstellungen' component={Einstellungen}/>
          <Route path='/info' component={Info}/>
          <Route path='/support' component={Support}/>
        </Switch>

      </Router>
    </div>
  )
}

export default App;
