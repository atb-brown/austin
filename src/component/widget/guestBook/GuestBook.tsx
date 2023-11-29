import { GuestBookInfo, GuestInfo } from "../../../hook/guests/guestBookInfo";
import useGuestBookInfo from "../../../hook/guests/useGuestBookInfo";
import GuestEntry, { guestEntryGap } from "./GuestEntry";
import React, { ReactNode } from "react";

/**
 * Create a list of GuestEntry components that will be in the GuestBook.
 *
 * @param {GuestInfo[]} guests The information for each guest.
 * @return {ReactNode[]}
 */
function createGuestEntries(guests: GuestInfo[]): ReactNode[] {
  let allGuestEntries: ReactNode[] = [];
  const lastGuestIndex = guests.length - 1;

  for (let guestIndex = 0; guestIndex < guests.length; guestIndex++) {
    const guestInfo = guests[guestIndex];
    allGuestEntries.push(
      <GuestEntry
        key={guestInfo?.name}
        message={guestInfo?.message}
        name={guestInfo?.name}
        visitDate={guestInfo?.visitDate}
        website={guestInfo?.website}
        isFirst={guestIndex === 0}
        isLast={guestIndex === lastGuestIndex}
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
export default function GuestBook() {
  const { guests } = useGuestBookInfo();

  // TODO: Add a button to "sign my guest book"
  return (
    <div
      title="This component displays everyone who has signed my guest book. It's an exercise in HTTP requests and dependency injection!"
      data-testid="guest-book"
      style={{
        display: "flex",
        minHeight: "50%",
        width: "99%",
        flexDirection: "column",
        gap: guestEntryGap,
      }}
    >
      {createGuestEntries(guests)}
    </div>
  );
}

GuestBook.defaultProps = {
  guestProvider: null,
};
