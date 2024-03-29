import Stats from "../component/widget/statistic/Stats";
import useWindowDimensions from "../hook/dimension/useWindowDimensions";
import "./App.css";
import AppAcknowledgements from "./AppAcknowledgements";
import AppBody from "./AppBody";
import AppTitle from "./AppTitle";
import React from "react";

/**
 * The main component for the site application.
 *
 * @return {ReactElement} React Component
 */
function App(): JSX.Element {
  const { width, height } = useWindowDimensions();
  return (
    <div
      className="App"
      style={{
        maxHeight: height,
        maxWidth: width,
        minHeight: height,
        minWidth: width,
      }}
    >
      <header className="App-header">
        <Stats />
        <AppTitle />
        <AppBody />
        <AppAcknowledgements />
      </header>
    </div>
  );
}

export default App;
