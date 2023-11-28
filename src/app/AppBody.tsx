import AppLinks from "./AppLinks";
import AppWidgets, { AppWidgetsProviders } from "./AppWidgets";
import React from "react";

// TODO: Come up with a more elegant solution for injection.
export type AppBodyProviders = AppWidgetsProviders; // ... & OtherComponentProviders & AnotherComponentProviders; <- union with other providers, if the need arises.

/**
 * The primary body of the site that I want prominently displayed on my site.
 *
 * @return {ReactElement}
 */
export default function AppBody({ guestProvider }: AppBodyProviders) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <AppLinks />
      </div>
      <div style={{ display: "flex", flex: 3 }}>
        <AppWidgets guestProvider={guestProvider} />
      </div>
    </div>
  );
}
