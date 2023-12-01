import { GuestInfo } from "../../../hook/guests/guestBookInfo";
import useGuestBookInfo from "../../../hook/guests/useGuestBookInfo";
import GuestEntry, { guestEntryGap } from "./GuestEntry";
import React from "react";

/**
 * Create a single GuestEntry component.
 *
 * @param {GuestInfo} guestInfo The information of a single guest.
 * @return {GuestEntry}
 */
function mapComponent(guestInfo: GuestInfo) {
  return (
    <GuestEntry
      key={guestInfo?.name}
      message={guestInfo?.message}
      name={guestInfo?.name}
      visitDate={guestInfo?.visitDate}
      website={guestInfo?.website}
    />
  );
}

/**
 * This component is a "guest book" that displays people that have visited my website and have signed the guest book.
 *
 * @return {ReactElement}
 */
export default function GuestBook() {
  const { guests } = useGuestBookInfo();

  // TODO: Add a button to "sign my guest book"
  // TODO: Add logic so that only the top row and the bottom row have rounded corners.
  return (
    <div
      data-testid="guest-book"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: guestEntryGap,
        minHeight: "50%",
        width: "99%",
      }}
    >
      {guests?.map((g) => mapComponent(g))}
    </div>
  );
}

GuestBook.defaultProps = {
  guestProvider: null,
};
