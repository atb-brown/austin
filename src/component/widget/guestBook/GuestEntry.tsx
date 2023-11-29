import { GuestEntryProps } from "./GuestEntryProps";
import "./Guests.css";
import React from "react";

export const guestEntryGap = 3;

/**
 * This component is a single entry for a single guest. Multiple entries will make up a guest book.
 *
 * @param {GuestEntryProps} guestEntry The properties/data of a single guest.
 * @return {GuestEntry}
 */
export default function GuestEntry(guestEntry: GuestEntryProps) {
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
        className="Guests-Visual"
        style={{
          flex: 2,
          flexDirection: "column",
          borderTopLeftRadius: bRadius,
          borderBottomLeftRadius: bRadius,
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="Guests-Text-container"
          style={{
            fontSize: "75%",
          }}
        >
          {name}
        </div>
        <div
          className="Guests-Text-container"
          style={{
            fontSize: "50%",
          }}
        >
          {website}
        </div>
      </div>
      <div
        className="Guests-Visual Guests-Text-Container"
        style={{
          flex: 7,
          marginLeft: guestEntryGap,
          marginRight: guestEntryGap,
        }}
      >
        <div
          className="Guests-Text-Container"
          style={{
            fontSize: "75%",
            height: "100%",
            width: "98%",
          }}
        >
          {message}
        </div>
      </div>
      <div
        className="Guests-Visual Guests-Text-Container"
        style={{
          flex: 1,
          fontSize: "60%",
          borderTopRightRadius: bRadius,
          borderBottomRightRadius: bRadius,
        }}
      >
        {visitDate}
      </div>
    </div>
  );
}
