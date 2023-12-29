import { GuestBookInfo } from "./guestBookInfo";
import retrieveGuestBookInfo from "./retrieveGuestBookInfo";
import { useState, useEffect } from "react";

/**
 * This hook will allow components to access information from the guest book.
 *
 * @return {GuestBookInfo}
 */
const useGuestBookInfo: () => GuestBookInfo = (): GuestBookInfo => {
  const [guestBookInfo, setGuestBookInfo] = useState<GuestBookInfo>({
    guests: [],
  });

  useEffect(() => {
    new Provider().get().then(
      (d) => {
        setGuestBookInfo(d);
      },
      () => {},
    );
  }, []);

  return guestBookInfo;
};

/**
 * Create a class that defines methods in order to provide mock implementations
 * for testing.
 */
export class Provider {
  /**
   * Retrieve the guest book info.
   *
   * @return {Promise<GuestBookInfo>}
   */
  get(): Promise<GuestBookInfo> {
    return retrieveGuestBookInfo();
  }
}

export default useGuestBookInfo;
