// Runnable self-check for validate-registration.ts.
// Run manually with `npx tsx lib/validate-registration.check.ts`.

import { validateRegistration, type RegistrationPayload, PROPERTIES, BUDGETS } from "./validate-registration";

const valid: RegistrationPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+971501234567",
  country: "United Arab Emirates",
  property: PROPERTIES[0],
  budget: BUDGETS[0],
  message: "",
};

console.assert(validateRegistration(valid) === null, "valid payload should pass");
console.assert(validateRegistration({ ...valid, name: "" })?.name !== undefined, "missing name should fail");
console.assert(validateRegistration({ ...valid, email: "" })?.email !== undefined, "missing email should fail");
console.assert(validateRegistration({ ...valid, email: "not-an-email" })?.email !== undefined, "malformed email should fail");
console.assert(validateRegistration({ ...valid, phone: "" })?.phone !== undefined, "missing phone should fail");
console.assert(validateRegistration({ ...valid, phone: "abc" })?.phone !== undefined, "malformed phone should fail");
console.assert(
  validateRegistration({ ...valid, phone: "+999501234567" })?.phone !== undefined,
  "unknown dial code should fail"
);
console.assert(
  validateRegistration({ ...valid, phone: "+97150" })?.phone !== undefined,
  "too-short national number should fail"
);
console.assert(validateRegistration({ ...valid, country: "" })?.country !== undefined, "missing country should fail");
console.assert(
  validateRegistration({ ...valid, property: "Yacht" })?.property !== undefined,
  "out-of-set property should fail"
);
console.assert(
  validateRegistration({ ...valid, budget: "AED 999M" })?.budget !== undefined,
  "out-of-set budget should fail"
);
console.assert(
  validateRegistration({ ...valid, name: "x".repeat(200) })?.name !== undefined,
  "oversized field should fail"
);
console.assert(validateRegistration(null)?.name !== undefined, "null payload should fail");

console.log("validate-registration: all checks passed");
