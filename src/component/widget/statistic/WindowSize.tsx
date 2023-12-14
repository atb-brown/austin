import useWindowDimensions from "../../../hook/dimension/useWindowDimensions";
import React from "react";

/**
 * This component displays the width and height of the window.
 *
 * @return {ReactElement} React Component
 */
export default function WindowSize(): JSX.Element {
  const { width, height } = useWindowDimensions();
  const title = "Window Size";
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "40%" }}>
      <div>{title}</div>
      <div>{width + " x " + height}</div>
    </div>
  );
}
