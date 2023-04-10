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
    <div
      style={{ display: "flex", width: "100%", justifyContent: "space-around" }}
    >
      <AppLinks />
      <AppWidgets />
    </div>
  );
}
