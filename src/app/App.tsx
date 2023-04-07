import "./App.css";
import React from "react";
import AppTitle from "./AppTitle";
import AppLinks from "./AppLinks";
import AppAcknowledgements from "./AppAcknowledgements";

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
