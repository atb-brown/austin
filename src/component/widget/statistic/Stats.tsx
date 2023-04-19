import WindowSize from "./WindowSize";
import React, { useCallback } from "react";

/**
 * A "ribbon" component that displays diagnostics/statistics.
 *
 * @return {ReactElement} React Component
 */
export default function Stats() {
  const [showResults, setShowResults] = React.useState(true);
  const onClick = useCallback(() => {
    setShowResults(!showResults);
  }, [showResults, setShowResults]);
  const widthPrcnt = "97%";

  if (showResults) {
    return (
      <div
        data-testid="stats-ribbon"
        onClick={onClick}
        style={{
          height: "5vh",
          display: "flex",
          width: widthPrcnt,
          alignItems: "center",
          flexDirection: "row-reverse",
          backgroundColor: "rebeccapurple",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "10%",
            alignItems: "center",
          }}
        >
          <WindowSize />
        </div>
      </div>
    );
  } else {
    const leftArrow = "◀";
    // TODO: Put the hidden stats ribbon in its own component file.
    return (
      <div
        style={{
          display: "flex",
          width: "96%",
          height: "5vh",
          borderRadius: 10,
          flexDirection: "row-reverse",
        }}
      >
        <div
          data-testid="stats-ribbon-hidden"
          onClick={onClick}
          style={{
            display: "flex",
            aspectRatio: 1,
            height: "100%",
            flexDirection: "row-reverse",
            backgroundColor: "rebeccapurple",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          {leftArrow}
        </div>
      </div>
    );
  }
}
