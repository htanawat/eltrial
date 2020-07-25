import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="/assets/icon.png" width="40" height="100" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" style={{"color": "#0af"}}>
              Engredient
            </a>
              
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" style={{"background": "#0af"}}>
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="main" className="columns">
        <div className="column">
          <div style={{"margin": "50px"}}>
            <strong>Search</strong>
          </div>
          <div className="column">
            <input className="input" type="text" placeholder="Menu Name" style={{"width": "50%", "margin-top": "0px"}} />
          </div>
          <div className="column">
            <button className="button is-primary" style={{"width": "50%", "background": "#0af"}}>Search</button>
          </div>
          <div className="column" style={{"margin": "50px"}}>
            <strong>Frequently Search</strong>
          </div>
        </div>
        <div className="column">
          <div>
            <strong>Results</strong>
            <div id="result">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
