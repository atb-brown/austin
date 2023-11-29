import "../common.css";
import Link from "../component/Link";
import logo from "../logo.svg";
import React from "react";

/**
 * The title block of the app, complete with logo.
 *
 * @return {ReactElement}
 */
export default function AppTitle(): JSX.Element {
  const title = "Austin's React Website";

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <img alt="logo" className="App-logo disable-text-selection" src={logo} />
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
