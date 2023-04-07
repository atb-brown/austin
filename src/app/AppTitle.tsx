import Link from "../component/Link";
import logo from "../logo.svg";
import React from "react";

/**
 * The title block of the app, complete with logo.
 *
 * @return {ReactElement}
 */
export default function AppTitle() {
  const title = "Austin's React Website.";

  return (
    <div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
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
  );
}
