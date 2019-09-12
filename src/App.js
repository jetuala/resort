import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Resort from './pages/Resort';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Spa from './pages/Spa';
import Dining from './pages/Dining';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resort" component={Resort} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path="/spa" component={Spa} />
      <Route exact path="/dining" component={Dining} />
      <Route component={Error} />
    </Switch>

    </>
  );
}

export default App;
