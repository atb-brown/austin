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
  return (
    <div
      style={{
        display: "flex",
        width: "95%",
        height: "85px",
      }}
    >
      <div
        style={{
          flex: 2,
          flexDirection: "column",
          display: "flex",
          backgroundColor: bgColor,
          borderTopLeftRadius: bRadius,
          borderBottomLeftRadius: bRadius,
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
            justifyContent: "center",
            fontSize: "50%",
          }}
        >
          {website}
        </div>
      </div>
      <div
        style={{
          flex: 7,
          display: "flex",
          justifyContent: "center",
          backgroundColor: bgColor,
          marginLeft: guestEntryGap,
          marginRight: guestEntryGap,
        }}
      >
        <div
          style={{
            fontSize: "75%",
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "98%",
          }}
        >
          {message}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: bgColor,
          fontSize: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: bRadius,
          borderBottomRightRadius: bRadius,
        }}
      >
        {visitDate}
      </div>
    </div>
  );
}
