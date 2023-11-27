import Stats from "../component/widget/statistic/Stats";
import useWindowDimensions from "../hook/dimension/useWindowDimensions";
import "./App.css";
import AppAcknowledgements from "./AppAcknowledgements";
import AppBody, { AppBodyProviders } from "./AppBody";
import AppTitle from "./AppTitle";
import React from "react";

// TODO: Come up with a more elegant solution for injection.
export type AppProviders = AppBodyProviders; // ... & OtherComponentProviders & AnotherComponentProviders; <- union with other providers, if the need arises.

/**
 * The main component for the site application.
 *
 * @return {ReactElement} React Component
 */
function App({ guestProvider }: AppProviders) {
  const { width, height } = useWindowDimensions();
  return (
    <div
      className="App"
      style={{
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
      }}
    >
      <header className="App-header">
        <Stats />
        <AppTitle />
        <AppBody guestProvider={guestProvider} />
        <AppAcknowledgements />
      </header>
    </div>
  );
}

export default App;
