import "../../../common.css";
import "./Stats.css";
import React from "react";

/**
 * A component that is the "hidden" banner, which is basically a button that
 * would, in context, expand back to the full stats ribbon.
 *
 * @return {ReactElement} React Component
 */
export default function Stats({ onClick }: HiddenStatsProps) {
  const leftArrow = "◀";
  return (
    <div className="Stats Stats-Container disable-text-selection">
      <div
        className="Stats Stats-Visual"
        data-testid="stats-ribbon-hidden"
        onClick={onClick}
        style={{
          aspectRatio: 1,
          justifyContent: "center",
        }}
      >
        {leftArrow}
      </div>
    </div>
  );
}

/**
 * Properties for the HiddenStats component.
 */
type HiddenStatsProps = {
  readonly onClick: () => void;
};
