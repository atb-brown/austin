import { GuestBookInfo } from "./guestBookInfo";
import retrieveGuestBookInfo from "./retrieveGuestBookInfo";
import { useState, useEffect } from "react";

export type Provider = () => Promise<GuestBookInfo>;

/**
 * TODO: Come up with a more elegant solution for injection.
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
const useGuestBookInfo = (provider: Provider | null = null): GuestBookInfo => {
  const [guestBookInfo, setGuestBookInfo] = useState<GuestBookInfo>({
    guests: [],
  });

  const prov: Provider = provider ? provider : providerImpl;

  useEffect(() => {
    prov().then((d) => setGuestBookInfo(d));
  }, [prov]);

  return guestBookInfo;
};

export default useGuestBookInfo;
