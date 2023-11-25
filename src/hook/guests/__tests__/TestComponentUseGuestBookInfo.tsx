import useGuestBookInfo, { Provider } from "../useGuestBookInfo";
import React from "react";

export const fakeImpl: Provider = jest.fn(
  () =>
    new Promise((resolve) => {
      resolve({
        guests: [
          {
            name: "austin",
            message: "info loaded",
            visitDate: "2023",
            website: "www.example.com",
          },
        ],
      });
    })
);

/**
 * This component is intended for test use only. It's just used to test the useGuestBookInfo hook.
 *
 * @return {ReactElement}
 */
export default function TestComponentUseWindowDimension() {
  // If needed, remove the fakeImpl parameter to test the real implementation.
  const { guests } = useGuestBookInfo(fakeImpl);

  return (
    <div>
      <div>{"guestCount: " + guests.length}</div>
      <div>{"all guests: " + JSON.stringify(guests)}</div>
      <div>{"name: " + guests[0]?.name}</div>
      <div>{"message: " + guests[0]?.message}</div>
      <div>{"visitDate: " + guests[0]?.visitDate}</div>
      <div>{"website: " + guests[0]?.website}</div>
    </div>
  );
}
