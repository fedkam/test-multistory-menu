import React from 'react';
import './app.scss';
import NavBar from '../navbar';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path='/'><div>main</div></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}



export default App;
