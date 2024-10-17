"use client";

import { SubmitWithToast } from "@/components/SubmitWithToast";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CSpinner,
} from "@coreui/react";
import { FormEvent, useReducer, useState } from "react";
import { DynamicNumberInput } from "./DynamicNumberInput";
import logger from "@/utils/loggerUtils";

type State = {
  name: string;
  club: string;
  email: string;
  phone: string;
  length: string;
  lengthGreaterThan7: string;
  numberOfGuests: string;
  guestsGreaterThan7: string;
  roomType: string;
  airports: string;
};

type Action = { type: string; value?: string };

function reducer(state: State, action: Action): State {
  if (action.type === "reset") {
    return {
      name: "",
      club: state.club,
      email: "",
      phone: "",
      length: "",
      lengthGreaterThan7: "7",
      numberOfGuests: "",
      guestsGreaterThan7: "7",
      roomType: "",
      airports: "",
    };
  } else {
    return { ...state, [action.type]: action.value };
  }
}

export function ContactUsForm({
  textFields,
}: {
  textFields: Record<string, any>;
}): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

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

      dispatch({ type: "reset" });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      const result = await response.json();
      console.debug("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", { error: error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    club: "",
    email: "",
    phone: "",
    length: "2",
    lengthGreaterThan7: "7",
    numberOfGuests: "1",
    guestsGreaterThan7: "7",
    roomType: "",
    airports: "",
  });

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
            value={state.name}
            onChange={(e) => dispatch({ type: "name", value: e.target.value })}
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
            value={state.email}
            onChange={(e) => dispatch({ type: "email", value: e.target.value })}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            name="phone"
            type="phone"
            id="inputPhone"
            label={textFields.phone}
            value={state.phone}
            onChange={(e) => dispatch({ type: "phone", value: e.target.value })}
          />
        </CCol>

        <DynamicNumberInput
          stateComparison={state.length}
          inputState={state.lengthGreaterThan7}
          md={3}
          name="length"
          id="inputLength"
          selectOnChange={(e) =>
            dispatch({ type: "length", value: e.target.value })
          }
          inputOnChange={(e) =>
            dispatch({ type: "lengthGreaterThan7", value: e.target.value })
          }
          labelText={textFields.length}
          sevenPlusText={textFields.sevenPlus}
        />

        <DynamicNumberInput
          stateComparison={state.numberOfGuests}
          inputState={state.guestsGreaterThan7}
          md={4}
          name="numberOfGuests"
          id="inputNumberOfGuests"
          selectOnChange={(e) =>
            dispatch({ type: "numberOfGuests", value: e.target.value })
          }
          inputOnChange={(e) =>
            dispatch({ type: "guestsGreaterThan7", value: e.target.value })
          }
          labelText={textFields.numberOfGuests}
          sevenPlusText={textFields.sevenPlus}
        />

        <CCol md={5}>
          <CFormSelect
            name="roomType"
            id="inputRoomType"
            label={textFields.roomType.label}
            onChange={(e) =>
              dispatch({ type: "roomType", value: e.target.value })
            }
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
            value={state.airports}
            onChange={(e) =>
              dispatch({ type: "airports", value: e.target.value })
            }
          />
        </CCol>
        <CCol xs={12}>
          <center className="contactUsButton">
            {!isSubmitting ? (
              <SubmitWithToast textFields={textFields} />
            ) : (
              <CButton color="info" disabled>
                <CSpinner as="span" size="sm" aria-hidden="true" />
                {textFields.submitting}
              </CButton>
            )}
          </center>
        </CCol>
      </CForm>
    </div>
  );
}
