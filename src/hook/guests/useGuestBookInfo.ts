import { ProviderKey, get } from "../provide/ProviderRegistry";
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

  const provider = get<() => Promise<GuestBookInfo>>(
    ProviderKey.useGuestBookInfo,
    retrieveGuestBookInfo,
  );

  useEffect(() => {
    provider().then(
      (d) => {
        setGuestBookInfo(d);
      },
      () => {},
    );
  }, [provider]);

  return guestBookInfo;
};

export default useGuestBookInfo;
