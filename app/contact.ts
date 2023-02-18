export interface Contact {
  id: number;
  title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone1: string;
  phone2: string;
  address: Address;
  note: string;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
