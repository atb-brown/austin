import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Austin's React website.<br />
          <a className='App-link' href="https://github.com/atb-brown/austin">(see the source code)</a>
        </p>
        <p text-align="right">
          <h3>
            Links
          </h3>
          <div>
            <div>
              GitHub
            </div>
            <div>
              <a className='App-link' href='https://github.com/atb-brown'>atb-brown</a>
            </div>
            <br />
          </div>
          <div>
            <div>
              LinkedIn
            </div>
            <div>
              <a className='App-link' href='https://www.linkedin.com/in/austin-brown-06382a12a/'>austin-brown-06382a12a</a>
            </div>
            <br />
          </div>
          <div>
            <div>
              Agile Alliance Scrum Master Certification
            </div>
            <div>
              <a className='App-link' href='https://bcert.me/sixkczuof'>sixkczuof</a>
            </div>
            <div className='App-soft-text'>
              Issued by: <a className='App-soft-text' href='https://www.scrumalliance.org/'>Scrum Alliance, Inc.</a>
            </div>
            <br />
          </div>
          <div>
            <div>
              SAFe 5 Scrum Master Certification
            </div>
            <div>
              <a className='App-link' href='https://www.credly.com/badges/18e3c923-956c-4525-b857-5f9c0dfb9713/public_url'>18e3c923-956c-4525-b857-5f9c0dfb9713</a>
            </div>
            <div className='App-soft-text'>
              Issued by: <a className='App-soft-text' href='https://scaledagile.com/'>Scrum Alliance, Inc.</a>
            </div>
            <br />
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
