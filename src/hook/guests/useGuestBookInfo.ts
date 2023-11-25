import { GuestBookInfo } from "./guestBookInfo";
import retrieveGuestBookInfo from "./retrieveGuestBookInfo";
import { useState, useEffect } from "react";

export type Provider = () => Promise<GuestBookInfo>;

/**
 * The real implementation. No logic should go here; any necessary logic should be put in testable elements.
 *
 * @return {Provider}
 */
const providerImpl: Provider = () => {
  return retrieveGuestBookInfo();
};

/**
 * This hook will allow components to access information from the guest book.
 *
 * @param {GuestBookInfo} provider The provider of the data. Optional. Should not be provided except for testing.
 * @return {GuestBookInfo}
 */
const useGuestBookInfo = (provider: Provider = providerImpl): GuestBookInfo => {
  const [guestBookInfo, setGuestBookInfo] = useState<GuestBookInfo>({
    guests: [],
  });

  useEffect(() => {
    provider().then((d) => setGuestBookInfo(d));
  }, [provider]);

  return guestBookInfo;
};

export default useGuestBookInfo;
