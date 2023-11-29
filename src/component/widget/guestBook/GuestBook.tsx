import { GuestInfo } from "../../../hook/guests/guestBookInfo";
import useGuestBookInfo from "../../../hook/guests/useGuestBookInfo";
import GuestEntry, { guestEntryGap } from "./GuestEntry";
import React from "react";

/**
 * Create a list of GuestEntry components that will be in the GuestBook.
 *
 * @param {GuestInfo[]} guests The information for each guest.
 * @return {ReactNode[]}
 */
function createGuestEntries(guests: GuestInfo[]): JSX.Element[] {
  const allGuestEntries: JSX.Element[] = [];
  const lastGuestIndex = guests.length - 1;

  for (let guestIndex = 0; guestIndex < guests.length; guestIndex++) {
    const guestInfo = guests[guestIndex];
    allGuestEntries.push(
      <GuestEntry
        isFirst={guestIndex === 0}
        isLast={guestIndex === lastGuestIndex}
        key={guestInfo?.name}
        message={guestInfo?.message}
        name={guestInfo?.name}
        visitDate={guestInfo?.visitDate}
        website={guestInfo?.website}
      />
    );
  }

  return allGuestEntries;
}

/**
 * This component is a "guest book" that displays people that have visited my website and have signed the guest book.
 *
 * @return {ReactElement}
 */
export default function GuestBook(): JSX.Element {
  const { guests } = useGuestBookInfo();

  // TODO: Add a button to "sign my guest book"
  return (
    <div
      data-testid="guest-book"
      style={{
        display: "flex",
        minHeight: "50%",
        width: "99%",
        flexDirection: "column",
        gap: guestEntryGap,
      }}
      title="This component displays everyone who has signed my guest book. It's an exercise in HTTP requests and dependency injection!"
    >
      {createGuestEntries(guests)}
    </div>
  );
}

GuestBook.defaultProps = {
  guestProvider: null,
};
