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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
        <AppBody />
        <AppAcknowledgements />
      </header>
    </div>
  );
}

export default App;
