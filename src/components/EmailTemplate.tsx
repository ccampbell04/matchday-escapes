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
         <h3>New Enquiry</h3>
         <p>Name: {name}</p>
         <p>Club: {club}</p>
         <p>Email: {email}</p>
         <p>Phone: {phone}</p>
         <p>Length of stay: {length}</p>
         <p>Number of guests: {numberOfGuests}</p>
         <p>Room type: {roomType}</p>
         <p>Departure airports: {airports}</p>
      </>
   )
}
