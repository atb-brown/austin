import AppLinks from "./AppLinks";
import AppWidgets from "./AppWidgets";
import React from "react";

/**
 * The primary body of the site that I want prominently displayed on my site.
 *
 * @return {ReactElement}
 */
export default function AppBody() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <AppLinks />
      </div>
      <div style={{ display: "flex", flex: 3 }}>
        <AppWidgets />
      </div>
    </div>
  );
}
