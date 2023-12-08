import useGuestBookInfo from "../useGuestBookInfo";
import React from "react";

/**
 * This component is intended for test use only. It's just used to test the
 * useGuestBookInfo hook.
 *
 * @return {ReactElement}
 */
export default function TestComponentUseWindowDimension(): JSX.Element {
  const { guests } = useGuestBookInfo();

  return (
    <div data-testid="test-component">
      <div>{"guestCount: " + guests.length}</div>
      <div>{"all guests: " + JSON.stringify(guests)}</div>
      <div>{"name: " + guests[0]?.name}</div>
      <div>{"message: " + guests[0]?.message}</div>
      <div>{"visitDate: " + guests[0]?.visitDate}</div>
      <div>{"website: " + guests[0]?.website}</div>
    </div>
  );
}
