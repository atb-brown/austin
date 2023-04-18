import WindowSize from "./WindowSize";
import React from "react";

/**
 * A "ribbon" component that displays diagnostics/statistics.
 *
 * @return {ReactElement} React Component
 */
export default function Stats() {
  const widthPrcnt = "97%";
  return (
    <div
      style={{
        width: "99%",
        borderRadius: 10,
        backgroundColor: "rebeccapurple",
      }}
    >
      <div
        style={{
          display: "flex",
          width: widthPrcnt,
          height: "100%",
          flexDirection: "row-reverse",
        }}
      >
        <WindowSize />
      </div>
    </div>
  );
}
