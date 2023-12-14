import { browserName } from "react-device-detect";
import React from "react";

/**
 * This component displays the user's browser.
 *
 * @return {ReactElement} React Component
 */
export default function Browser(): JSX.Element {
  const title = "Browser";
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "50%" }}>
      <div>{title}</div>
      <div>{browserName}</div>
    </div>
  );
}
