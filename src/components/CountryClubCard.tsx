"use client";

import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";

export function CountryClubCard({
  cardTextFields,
  labelTextFields,
  currentPage,
}: {
  cardTextFields: Record<string, any>;
  labelTextFields: Record<string, any>;
  currentPage: string;
}) {
  return (
    <CCard>
      <CCardHeader as="h5">{cardTextFields.title}</CCardHeader>
      <CCardBody>
        <p>{cardTextFields.description}</p>
        <ul>
          <li>
            {labelTextFields.location}
            {cardTextFields.location}
          </li>
          <li>
            {labelTextFields.league}
            {cardTextFields.league}
          </li>
          <li>
            {labelTextFields.founded}
            {cardTextFields.founded}
          </li>
          <li>
            {labelTextFields.stadium}
            {cardTextFields.stadium}
          </li>
          <li>
            {labelTextFields.capacity}
            {cardTextFields.capacity}
          </li>
          <li>
            {labelTextFields.built}
            {cardTextFields.built}
          </li>
        </ul>
        <div className="countryCardButtonPadding">
          <CButton
            color="primary"
            href={`${currentPage}${cardTextFields.link}`}
          >
            Plan your trip
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
}
