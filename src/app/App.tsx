import "./App.css";
import AppAcknowledgements from "./AppAcknowledgements";
import AppLinks from "./AppLinks";
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
        <AppLinks />
        <AppAcknowledgements />
      </header>
    </div>
  );
}

export default App;
