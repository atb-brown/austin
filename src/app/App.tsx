import PortfolioLink from "../component/PortfolioLink";
import logo from "../logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Austin's React website.
            <br />
            <a className="App-link" href="https://github.com/atb-brown/austin">
              (see the source code)
            </a>
          </p>
        </div>
        <p>
          <h3>Links</h3>
          <PortfolioLink
            description="GitHub"
            link="https://github.com/atb-brown"
            linkId="atb-brown"
          />
          <PortfolioLink
            description="StackOverflow"
            link="https://stackoverflow.com/users/5476186/austin-brown"
            linkId="5476186/austin-brown"
          />
          <PortfolioLink
            description="LinkedIn"
            link="https://www.linkedin.com/in/austin-brown-06382a12a/"
            linkId="austin-brown-06382a12a"
          />
          <PortfolioLink
            description="Scrum Master Certification"
            link="https://bcert.me/sixkczuof"
            linkId="sixkczuof"
            issuerDescription="Scrum Alliance, Inc."
            issuerLink="https://www.scrumalliance.org/"
          />
          <PortfolioLink
            description="SAFe 5 Scrum Master Certification"
            link="https://www.credly.com/badges/18e3c923-956c-4525-b857-5f9c0dfb9713/public_url"
            linkId="18e3c923-956c-4525-b857-5f9c0dfb9713"
            issuerDescription="Scaled Agile, Inc."
            issuerLink="https://scaledagile.com/"
          />
        </p>
      </header>
    </div>
  );
}

export default App;
