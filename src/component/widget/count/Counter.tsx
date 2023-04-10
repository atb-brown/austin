import React from "react";

/**
 * This button is intended to count the number of times the user clicks it.
 *
 * @return {ReactElement}
 */
export default function Counter() {
  const counterButtonText = "work in progress";

  return (
    <div
      style={{
        display: "flex",
        fontSize: 20,
        backgroundColor: "steelblue",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        height: 60,
        borderRadius: 10,
      }}
      title="This component is a work-in-progress! I'm currently iterating on it."
    >
      {counterButtonText}
    </div>
  );
}
