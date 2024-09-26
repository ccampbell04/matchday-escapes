import * as React from "react";

export function EmailTemplate({
  name,
  club,
  email,
  phone,
  length,
  numberOfGuests,
  roomType,
  airports,
}: {
  name: string;
  club: string;
  email: string;
  phone: string;
  length: string;
  numberOfGuests: string;
  roomType: string;
  airports: string;
}): JSX.Element {
   return (
      <>
         <h1>{name}</h1>
         <h1>{club}</h1>
         <h1>{email}</h1>
         <h1>{phone}</h1>
         <h1>{length}</h1>
         <h1>{numberOfGuests}</h1>
         <h1>{roomType}</h1>
         <h1>{airports}</h1>
      </>
   )
}
