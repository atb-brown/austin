import React from "react";
import Link from "../component/Link";

/**
 * Acknowledgements for individuals and projects that made this app possible.
 *
 * @return {ReactElement}
 */
export default function AppAcknowledgements() {
  const period = ".";

  return (
    <div>
      <div className="App-soft-text" style={{ fontSize: 20, paddingLeft: 50 }}>
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
        {"This website is deployed by borrowing the incredible efforts of the "}
        <Link
          description="react-gh-pages contributors"
          url="https://github.com/gitname/react-gh-pages/graphs/contributors"
        />
        {period}
      </div>
    </div>
  );
}
