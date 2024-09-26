"use client";

import { CButton, CCol, CForm, CFormInput, CFormSelect } from "@coreui/react";
import { FormEvent } from "react";

export function ContactUsForm({
  textFields,
}: {
  textFields: Record<string, any>;
}): JSX.Element {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="formContainer">
      <h2>{textFields.contactUsHeading}</h2>
      <CForm className="row g-3" onSubmit={onSubmit}>
        <CCol md={6}>
          <CFormInput
            name="name"
            type="name"
            id="inputName"
            label={textFields.name}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            name="club"
            type="club"
            id="inputClub"
            label={textFields.club}
            placeholder={textFields.heading}
            value={textFields.heading}
            readOnly
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            name="email"
            type="email"
            id="inputEmail"
            label={textFields.email}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            name="phone"
            type="phone"
            id="inputPhone"
            label={textFields.phone}
          />
        </CCol>
        <CCol md={3}>
          <CFormInput
            name="length"
            id="inputLength"
            label={textFields.length}
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            name="numberOfGuests"
            id="inputNumberOfGuests"
            label={textFields.numberOfGuests}
          />
        </CCol>
        <CCol md={5}>
          <CFormSelect
            name="roomType"
            id="inputRoomType"
            label={textFields.roomType.label}
          >
            <option>{textFields.roomType.double}</option>
            <option>{textFields.roomType.twin}</option>
            <option>{textFields.roomType.single}</option>
            <option>{textFields.roomType.suite}</option>
          </CFormSelect>
        </CCol>
        <CCol md={12}>
          <CFormInput
            name="airports"
            id="inputAirport"
            label={textFields.localAirport.label}
            placeholder={textFields.localAirport.placeholder}
          />
        </CCol>
        <CCol xs={12}>
          <center>
            <CButton color="primary" type="submit">
              {textFields.submit}
            </CButton>
          </center>
        </CCol>
      </CForm>
    </div>
  );
}
