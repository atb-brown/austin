import Link from "../component/Link";
import PortfolioLink from "../component/portfoliolink/PortfolioLink";
import logo from "../logo.svg";
import "./App.css";
import React from "react";

/**
 * The main component for the site application.
 *
 * @return {ReactElement} React Component
 */
function App() {
  const title = "Austin's React Website.";
  const linksHdr = "Links";
  const period = ".";

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
        >
          <img alt="logo" className="App-logo" src={logo} />
          <div>
            {title}
            <br />
            <Link
              description="(see the source code)"
              url="https://github.com/atb-brown/austin"
            />
          </div>
        </div>
        <div>
          <h3>{linksHdr}</h3>
          <PortfolioLink
            description="GitHub"
            url="https://github.com/atb-brown"
            urlId="atb-brown"
          />
          <PortfolioLink
            description="StackOverflow"
            url="https://stackoverflow.com/users/5476186/austin-brown"
            urlId="5476186/austin-brown"
          />
          <PortfolioLink
            description="LinkedIn"
            url="https://www.linkedin.com/in/austin-brown-06382a12a/"
            urlId="austin-brown-06382a12a"
          />
          <PortfolioLink
            description="Scrum Master Certification"
            issuerDescription="Scrum Alliance, Inc."
            issuerUrl="https://www.scrumalliance.org/"
            url="https://bcert.me/sixkczuof"
            urlId="sixkczuof"
          />
          <PortfolioLink
            description="SAFe 5 Scrum Master Certification"
            issuerDescription="Scaled Agile, Inc."
            issuerUrl="https://scaledagile.com/"
            url="https://www.credly.com/badges/18e3c923-956c-4525-b857-5f9c0dfb9713/public_url"
            urlId="18e3c923-956c-4525-b857-5f9c0dfb9713"
          />
        </div>
        <div
          className="App-soft-text"
          style={{ fontSize: 20, paddingLeft: 50 }}
        >
          <Link
            description="Initialized"
            url="https://github.com/atb-brown/austin/commit/5c8514a96194e6271d4e8e7f234499ee4e95ab3d"
          />
          {" using "}
          <Link
            description="create-react-app"
            url="https://create-react-app.dev/"
          />{" "}
        </div>
        <div className="App-soft-text" style={{ fontSize: 20 }}>
          {
            "This website is deployed by borrowing the incredible efforts of the "
          }
          <Link
            description="react-gh-pages contributors"
            url="https://github.com/gitname/react-gh-pages/graphs/contributors"
          />
          {period}
        </div>
      </header>
    </div>
  );
}

export default App;
