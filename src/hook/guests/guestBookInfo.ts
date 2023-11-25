export type GuestBookInfo = {
  guests: GuestInfo[];
};

export type GuestInfo = {
  name: string;
  message: string;
  visitDate: string;
  website: string;
};
