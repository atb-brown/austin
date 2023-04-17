import useWindowDimensions from "../useWindowDimensions";
import React from "react";

/**
 * This component is intended for test use only. It just displays the window's width and height.
 *
 * @return {ReactElement}
 */
export default function TestComponentUseWindowDimension() {
  const { height, width } = useWindowDimensions();

  return <div>{"width: " + width + " / height: " + height}</div>;
}
