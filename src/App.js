import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header';
import aboutView from './pages/about';
import contactView from './pages/contact';
import homeView from "./pages/home";
import projectsView from './pages/projects';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={homeView} />
          <Route exact path='/about' component={aboutView} />
          <Route exact path='/contact' component={contactView} />
          <Route exact path='/projects' component={projectsView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
