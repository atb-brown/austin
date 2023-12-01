import { GuestEntryProps } from "./GuestEntryProps";
import React from "react";

export const guestEntryGap = 3;

/**
 * This component is a single entry for a single guest. Multiple entries will make up a guest book.
 *
 * @param {GuestEntryProps} guestEntry The properties/data of a single guest.
 * @return {GuestEntry}
 */
export default function GuestEntry(guestEntry: GuestEntryProps) {
  const bgColor = "SteelBlue";
  const bRadius = 15;
  const { name, website, message, visitDate } = guestEntry;

  // TODO: Create a CSS class for the common style options.
  return (
    <div
      style={{
        display: "flex",
        height: "85px",
        width: "95%",
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          borderBottomLeftRadius: bRadius,
          borderTopLeftRadius: bRadius,
          display: "flex",
          flex: 2,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            fontSize: "75%",
            justifyContent: "center",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "50%",
            justifyContent: "center",
          }}
        >
          {website}
        </div>
      </div>
      <div
        style={{
          backgroundColor: bgColor,
          display: "flex",
          flex: 7,
          justifyContent: "center",
          marginLeft: guestEntryGap,
          marginRight: guestEntryGap,
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: "75%",
            height: "100%",
            width: "98%",
          }}
        >
          {message}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          backgroundColor: bgColor,
          borderBottomRightRadius: bRadius,
          borderTopRightRadius: bRadius,
          display: "flex",
          flex: 1,
          fontSize: "60%",
          justifyContent: "center",
        }}
      >
        {visitDate}
      </div>
    </div>
  );
}
