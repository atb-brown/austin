import { GuestBookInfo } from "./guestBookInfo";
import axios from "axios";

const _1 = "name";
const _2 = "message";
const _3 = "visit-date";
const _4 = "website";

type ExpectedFields = {
  [_1]: string;
  [_2]: string;
  [_3]: string;
  [_4]: string;
};

/**
 * Retrieve the guest book information from the data source.
 *
 * @return {Promise<GuestBookInfo>}
 */
const retrieveGuestBookInfo = (): Promise<GuestBookInfo> => {
  return axios
    .get(
      "https://raw.githubusercontent.com/atb-brown/guest-book/main/guests.json",
    )
    .then((v): GuestBookInfo => {
      return {
        // We can't provide a type for the object coming in here, so we need to
        //  disable some of the unsafe/'any' rules. But the whole purpose of this
        //  function is to structure the unknown object into a type object, so
        //  we're isolating and minimizing the impact here.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        guests: v.data.guests.map((gi: ExpectedFields) => {
          return {
            message: gi[_2],
            name: gi[_1],
            visitDate: gi[_3],
            website: gi[_4],
          };
        }),
      };
    });
};

export default retrieveGuestBookInfo;
