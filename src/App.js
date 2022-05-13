import React from 'react';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import SongPage from './SongPage';
import SongDetail from './SongDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Top 50 Spotify Hits in 2021</h1>
          <>
            <NavLink exact className="active-link" to="/">
              Home
            </NavLink>
          </>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <SongPage />
            </Route>
            <Route exact path="/songs/:id">
              <SongDetail />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
