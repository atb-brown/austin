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

  const title =
    "This component counts the number of times it has been clicked. It's an" +
    " exercise in handling clicks and component state!";

  return (
    <div
      className="disable-text-selection"
      data-testid="counter"
      onClick={onClick}
      style={{
        alignItems: "center",
        backgroundColor: "steelblue",
        borderRadius: 10,
        display: "flex",
        fontSize: 20,
        height: 60,
        justifyContent: "center",
        width: "25%",
      }}
      title={title}
    >
      {count}
    </div>
  );
}
