import "../../../common.css";
import React, { useCallback } from "react";

/**
 * This button is counts the number of times the user clicks it.
 *
 * @return {ReactElement}
 */
export default function Counter(): JSX.Element {
  const [count, setCount] = React.useState(0);
  const onClick: () => void = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <div
      className="disable-text-selection"
      data-testid="counter"
      onClick={onClick}
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
      title="This component counts the number of times it has been clicked. It's an exercise in handling clicks and component state!"
    >
      {count}
    </div>
  );
}
