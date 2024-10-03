import textFields from '@/textFields/textFields.json';

type TextFields = {
  [key: string]: Record<string, any>;
};

export function getTextFields(pageId: string): Record<string, any> {
   const fields = (textFields as TextFields)[pageId] || {};
   return fields;
}

export function getPageTitle(pageId: string): string {
  return getTextFields(pageId).pageTitle || '';
}

export function getTextFieldsForClubPage(pageId:string): Record<string, any> {
   const clubTextFields = getTextFields(pageId);
   const contactUsTextFields = getTextFields("generic-contact-page");

   return { ...clubTextFields, ...contactUsTextFields };
}

export function getTextFieldsForCountryPage(pageId: string): Record<string, any> {
   const countryTextFields = getTextFields(pageId);
   const cardLabelTextFields = getTextFields("country-card-labels");

   return { ...countryTextFields, ...cardLabelTextFields };
}