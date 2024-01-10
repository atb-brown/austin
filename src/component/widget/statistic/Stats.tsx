import Browser from "./Browser";
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
  const onClick: () => void = useCallback(() => {
    setShowResults(!showResults);
  }, [showResults, setShowResults]);

  if (showResults) {
    return (
      <div
        className="Stats Stats-Visual Stats-Container clickable"
        data-testid="stats-ribbon"
        onClick={onClick}
      >
        <div
          className="Stats"
          style={{
            width: "10%",
          }}
        >
          {separate()}
          <Browser />
          {separate()}
          <WindowSize />
        </div>
      </div>
    );
  } else {
    return <HiddenStats onClick={onClick} />;
  }
}

/**
 * A horizontal separator component to put some spacing between two other
 * components.
 *
 * @return {JSX.Element}
 */
function separate(): JSX.Element {
  return <div>{"\u00A0|\u00A0"}</div>;
}
