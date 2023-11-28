import Counter from "../component/widget/count/Counter";
import GuestBook from "../component/widget/guestBook/GuestBook";
import React from "react";

/**
 * This component holds widgets with which I'm experimenting with React.
 *
 * @return {ReactElement}
 */
export default function AppWidgets() {
  return (
    <div
      style={{
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Counter />
      </div>
      <div
        style={{
          width: "100%",
          flex: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GuestBook />
      </div>
    </div>
  );
}
