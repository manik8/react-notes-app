import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import { Home, Series, Movies } from './pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/series'>
          <Series />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
