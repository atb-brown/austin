import PortfolioLink from "../component/portfoliolink/PortfolioLink";
import React from "react";

/**
 * The primary list of links that I want prominently displayed on my site.
 *
 * @return {ReactElement}
 */
export default function AppLinks(): JSX.Element {
  const linksHdr = "Links";

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <h1>{linksHdr}</h1>
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
  );
}
