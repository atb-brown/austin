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
      "https://raw.githubusercontent.com/atb-brown/guest-book/main/guests.json"
    )
    .then((v): GuestBookInfo => {
      return {
        guests: v.data.guests.map((gi: ExpectedFields) => {
          return {
            name: gi[_1],
            message: gi[_2],
            visitDate: gi[_3],
            website: gi[_4],
          };
        }),
      };
    });
};

export default retrieveGuestBookInfo;
