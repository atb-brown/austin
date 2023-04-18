import useWindowDimensions from "../../../hook/dimension/useWindowDimensions";
import React from "react";

/**
 * This component displays the width and height of the window.
 *
 * @return {ReactElement} React Component
 */
export default function WindowSize() {
  const { width, height } = useWindowDimensions();
  const title = "Window Size";
  const fontSize = Math.max(10, width / 100);
  return (
    <div
      style={{ fontSize: fontSize, display: "flex", flexDirection: "column" }}
    >
      <div>{title}</div>
      <div>{width + " x " + height}</div>
    </div>
  );
}
