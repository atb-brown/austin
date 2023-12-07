import { GuestEntryProps } from "./GuestEntryProps";
import "./Guests.css";
import React from "react";

export const guestEntryBRadius = 15;
export const guestEntryGap = 3;
export const guestEntryHeight = "85px";

/**
 * This component is a single entry for a single guest. Multiple entries will make up a guest book.
 *
 * @param {GuestEntryProps} guestEntry The properties/data of a single guest.
 * @return {GuestEntry}
 */
export default function GuestEntry(guestEntry: GuestEntryProps): JSX.Element {
  const { name, website, message, visitDate, isFirst, isLast } = guestEntry;

  const topRadius = isFirst ? guestEntryBRadius : 0;
  const bottomRadius = isLast ? guestEntryBRadius : 0;

  return (
    <div
      style={{
        borderBottomLeftRadius: bottomRadius,
        borderTopLeftRadius: topRadius,
        borderTopRightRadius: topRadius,
        display: "flex",
        height: guestEntryHeight,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        className="Guests-Visual"
        style={{
          flex: 2,
          flexDirection: "column",
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
        {websiteComponent(website)}
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
        }}
      >
        {visitDate}
      </div>
    </div>
  );
}

/**
 * Create a component to display the website.
 *
 * @param {string} website
 * @return {JSX.Element}
 */
function websiteComponent(website: string): JSX.Element {
  return (
    <div
      className="Guests-Text-container"
      style={{
        fontSize: "50%",
        justifyContent: "center",
      }}
    >
      <a href={website}>{website}</a>
    </div>
  );
}
