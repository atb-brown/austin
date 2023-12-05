import Counter from "../component/widget/count/Counter";
import GuestBook from "../component/widget/guestBook/GuestBook";
import React from "react";

/**
 * This component holds widgets with which I'm experimenting with React.
 *
 * @return {ReactElement}
 */
export default function AppWidgets(): JSX.Element {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Counter />
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flex: 8,
          flexDirection: "column",
          justifyContent: "center",
          width: "95%",
        }}
      >
        <GuestBook />
      </div>
    </div>
  );
}
