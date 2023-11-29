import HiddenStats from "./HiddenStats";
import "./Stats.css";
import WindowSize from "./WindowSize";
import React, { useCallback } from "react";

/**
 * A "ribbon" component that displays diagnostics/statistics.
 *
 * @return {ReactElement} React Component
 */
export default function Stats(): JSX.Element {
  const [showResults, setShowResults] = React.useState(true);
  const onClick = useCallback(() => {
    setShowResults(!showResults);
  }, [showResults, setShowResults]);

  if (showResults) {
    return (
      <div
        className="Stats Stats-Visual Stats-Container"
        data-testid="stats-ribbon"
        onClick={onClick}
      >
        <div
          className="Stats"
          style={{
            width: "10%",
          }}
        >
          <WindowSize />
        </div>
      </div>
    );
  } else {
    return <HiddenStats onClick={onClick} />;
  }
}
