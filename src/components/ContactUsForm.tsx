"use client";

import { CButton, CCol, CForm, CFormInput, CFormSelect } from "@coreui/react";
import { FormEvent, useState } from "react";

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

  const [guests, setGuests] = useState("1");
  const [nights, setNights] = useState("2");

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
        {nights !== "7+" ? (
          <CCol md={3}>
            <CFormSelect
              name="length"
              id="inputLength"
              label={textFields.length}
              onChange={(e) => setNights(e.target.value)}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
              <option>7+</option>
            </CFormSelect>
          </CCol>
        ) : (
          <CCol md={3}>
            <CFormInput
              name="length"
              type="number"
              id="inputLength"
              label={textFields.length}
              placeholder={"7+"}
            />
          </CCol>
        )}

        {guests !== "7+" ? (
          <CCol md={4}>
            <CFormSelect
              name="numberOfGuests"
              id="inputNumberOfGuests"
              label={textFields.numberOfGuests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
              <option>7+</option>
            </CFormSelect>
          </CCol>
        ) : (
          <CCol md={4}>
            <CFormInput
              name="numberOfGuests"
              type="number"
              id="inputNumberOfGuests"
              label={textFields.numberOfGuests}
              placeholder={"7+"}
            />
          </CCol>
        )}

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
