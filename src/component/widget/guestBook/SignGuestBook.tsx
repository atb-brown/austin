import { guestEntryBRadius, guestEntryHeight } from "./GuestEntry";
import React from "react";
import "../../../common.css";

/**
 * This component is a button that guests can click to sign my guest book.
 *
 * @return {SignGuestBook}
 */
export default function SignGuestBook(): JSX.Element {
  const message = "Sign my guest book!";
  return (
    <a
      className="clickable"
      href="https://github.com/atb-brown/guest-book/edit/main/guests.json"
      style={{
        alignItems: "center",
        alignSelf: "flex-end",
        borderBottomLeftRadius: guestEntryBRadius,
        borderBottomRightRadius: guestEntryBRadius,
        borderTopLeftRadius: guestEntryBRadius,
        color: "white",
        display: "flex",
        fontSize: "80%",
        height: guestEntryHeight,
        justifyContent: "center",
        textDecoration: "none",
        width: "15%",
      }}
    >
      {message}
    </a>
  );
}
