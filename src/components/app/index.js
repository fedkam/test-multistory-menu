import React from 'react';
import NavBar from '../navbar';
import { resetCss } from '../styles-constant/resetCss';
import { style } from './style'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const resetStyle = createUseStyles(resetCss);

const App = () => {
  const { app } = createUseStyles(style)();
  resetStyle();
  return (
    <div className={app}>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route path='/'><div>main</div></Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
};



export default App;
