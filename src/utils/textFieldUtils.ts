import baseTextFieldsJson from "@/textFields/baseTextFields.json";
import countryTextFieldsJson from "@/textFields/countryTextFields.json";
import clubTextFieldsJson from "@/textFields/clubTextFields.json";

type TextFields = {
  [key: string]: Record<string, any>;
};

export function getTextFields(
  textFields: TextFields,
  pageId: string
): Record<string, any> {
  const fields = textFields[pageId] || {};
  return fields;
}

export function getClubPageTitle(pageId: string): string {
  return getTextFields(clubTextFieldsJson, pageId).pageTitle || "";
}

export function getHeaderTextFields(pageId: string): Record<string, any> {
  return getTextFields(baseTextFieldsJson, pageId);
}

export function getCountryPageTitle(pageId: string): string {
  return getTextFields(countryTextFieldsJson, pageId).pageTitle || "";
}

export function getTextFieldsForClubPage(pageId: string): Record<string, any> {
  const clubTextFields = getTextFields(clubTextFieldsJson, pageId);
  const contactUsTextFields = getTextFields(baseTextFieldsJson, "generic-contact-page");

  return { ...clubTextFields, ...contactUsTextFields };
}

export function getTextFieldsForCountryPage(
  pageId: string
): Record<string, any> {
  const countryTextFields = getTextFields(countryTextFieldsJson, pageId);
  const cardLabelTextFields = getTextFields(baseTextFieldsJson, "country-card-labels");

  return { ...countryTextFields, ...cardLabelTextFields };
}
