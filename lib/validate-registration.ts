// Shared client-side validation for the registration form, adapted from the
// phone/email validation approach used across our Nakheel-style landing pages.

import { DIAL_CODES, PHONE_COUNTRIES } from "./phone-codes";

const COUNTRY_NAMES = new Set(PHONE_COUNTRIES.map((c) => c.name));
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 120;

export const PROPERTIES = [
  "Beach Collection Villa",
  "Coral Collection Villa",
  "Signature Villa",
  "Apartment / Penthouse",
] as const;

export const BUDGETS = [
  "AED 25M – 30M",
  "AED 30M – 50M",
  "AED 50M – 75M",
  "AED 75M+",
  "To be discussed",
] as const;

export interface RegistrationPayload {
  name: string;
  email: string;
  phone: string;
  country: string;
  property: string;
  budget: string;
  message: string;
}

export type RegistrationErrors = Partial<
  Record<Exclude<keyof RegistrationPayload, "message">, string>
>;

export function validateRegistration(data: unknown): RegistrationErrors | null {
  if (typeof data !== "object" || data === null) {
    return { name: "Invalid submission." };
  }
  const d = data as Record<string, unknown>;
  const errors: RegistrationErrors = {};

  const name = typeof d.name === "string" ? d.name.trim() : "";
  if (!name) errors.name = "Full name is required.";
  else if (name.length > MAX_FIELD_LENGTH) errors.name = "Full name is too long.";

  const email = typeof d.email === "string" ? d.email.trim() : "";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  else if (email.length > MAX_FIELD_LENGTH) errors.email = "Email is too long.";

  const phone = typeof d.phone === "string" ? d.phone.trim() : "";
  if (!phone) errors.phone = "Phone number is required.";
  else {
    const dial = DIAL_CODES.find((code) => phone.startsWith(code));
    const nationalNumber = dial ? phone.slice(dial.length) : "";
    if (!dial || !/^\d{6,14}$/.test(nationalNumber)) {
      errors.phone = "Enter a valid phone number.";
    }
  }

  const country = typeof d.country === "string" ? d.country.trim() : "";
  if (!country) errors.country = "Country is required.";
  else if (!COUNTRY_NAMES.has(country)) errors.country = "Select a valid country.";

  const property = typeof d.property === "string" ? d.property : "";
  if (!property) errors.property = "Select a property of interest.";
  else if (!(PROPERTIES as readonly string[]).includes(property)) {
    errors.property = "Select a valid property.";
  }

  const budget = typeof d.budget === "string" ? d.budget : "";
  if (!budget) errors.budget = "Select an investment budget.";
  else if (!(BUDGETS as readonly string[]).includes(budget)) {
    errors.budget = "Select a valid investment budget.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
