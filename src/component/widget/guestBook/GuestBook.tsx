import { GuestInfo } from "../../../hook/guests/guestBookInfo";
import useGuestBookInfo, {
  Provider,
} from "../../../hook/guests/useGuestBookInfo";
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

// TODO: Come up with a more elegant solution for injection.
export type GuestBookProviders = {
  readonly guestProvider?: Provider | undefined | null;
};

/**
 * This component is a "guest book" that displays people that have visited my website and have signed the guest book.
 *
 * @return {ReactElement}
 */
export default function GuestBook({ guestProvider }: GuestBookProviders) {
  const { guests } = useGuestBookInfo(guestProvider);

  // TODO: Add a button to "sign my guest book"
  // TODO: Add logic so that only the top row and the bottom row have rounded corners.
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
    >
      {guests?.map((g) => mapComponent(g))}
    </div>
  );
}

GuestBook.defaultProps = {
  guestProvider: null,
};
