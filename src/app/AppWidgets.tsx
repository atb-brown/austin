import Counter from "../component/widget/count/Counter";
import GuestBook, {
  GuestBookProviders,
} from "../component/widget/guestBook/GuestBook";
import React from "react";

// TODO: Come up with a more elegant solution for injection.
export type AppWidgetsProviders = GuestBookProviders; // ... & OtherComponentProviders & AnotherComponentProviders; <- union with other providers, if the need arises.

/**
 * This component holds widgets with which I'm experimenting with React.
 *
 * @return {ReactElement}
 */
export default function AppWidgets({ guestProvider }: AppWidgetsProviders) {
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
        <GuestBook guestProvider={guestProvider} />
      </div>
    </div>
  );
}
