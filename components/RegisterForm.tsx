"use client";

import { useState, type FormEvent } from "react";
import IntlTelInput from "@intl-tel-input/react";
import "intl-tel-input/styles";
import { PHONE_COUNTRIES } from "@/lib/phone-codes";
import {
  validateRegistration,
  PROPERTIES,
  BUDGETS,
  type RegistrationErrors,
} from "@/lib/validate-registration";

const inputClasses =
  "w-full border-0 border-b border-border bg-transparent py-3 text-base placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none";
const labelClasses =
  "text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase";
const errorClasses = "mt-1.5 text-xs text-red-600";

type Status = "idle" | "submitting" | "success" | "error";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [property, setProperty] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { name, email, phone, country, property, budget, message };
    const validationErrors = validateRegistration(payload);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.message ?? "Something went wrong. Please try again.");
        if (data.errors) setErrors(data.errors);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center border border-border p-10">
        <p className="text-lg leading-relaxed">
          Thank you — your enquiry has been received. A private advisor will
          be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <label className="block">
          <span className={labelClasses}>Full Name</span>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={`mt-3 ${inputClasses}`}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </label>

        <label className="block">
          <span className={labelClasses}>Email</span>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            aria-invalid={Boolean(errors.email)}
            className={`mt-3 ${inputClasses}`}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </label>

        <label className="block">
          <span className={labelClasses}>Phone</span>
          <div
            className={`mt-3 border-b bg-transparent transition-colors ${
              errors.phone ? "border-red-600" : "border-border focus-within:border-foreground"
            }`}
          >
            <IntlTelInput
              initialCountry="ae"
              separateDialCode
              loadUtils={() => import("intl-tel-input/utils")}
              onChangeNumber={setPhone}
              containerClass="w-full"
              inputProps={{
                placeholder: "50 000 0000",
                autoComplete: "tel",
                "aria-invalid": Boolean(errors.phone),
                className:
                  "w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground/60",
              }}
            />
          </div>
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </label>

        <label className="block">
          <span className={labelClasses}>Country of Residence</span>
          <select
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-invalid={Boolean(errors.country)}
            className={`mt-3 ${inputClasses}`}
          >
            <option value="" disabled>
              Select
            </option>
            {PHONE_COUNTRIES.map((c) => (
              <option key={c.iso2} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.country && <p className={errorClasses}>{errors.country}</p>}
        </label>

        <label className="block">
          <span className={labelClasses}>Property of Interest</span>
          <select
            name="property"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            aria-invalid={Boolean(errors.property)}
            className={`mt-3 ${inputClasses}`}
          >
            <option value="" disabled>
              Select
            </option>
            {PROPERTIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.property && <p className={errorClasses}>{errors.property}</p>}
        </label>

        <label className="block">
          <span className={labelClasses}>Budget</span>
          <select
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-invalid={Boolean(errors.budget)}
            className={`mt-3 ${inputClasses}`}
          >
            <option value="" disabled>
              Select
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget && <p className={errorClasses}>{errors.budget}</p>}
        </label>
      </div>

      <label className="block">
        <span className={labelClasses}>Message (Optional)</span>
        <textarea
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything we should know"
          className={`mt-3 resize-y ${inputClasses}`}
        />
      </label>

      <p className="text-sm text-muted-foreground">
        By submitting this form you agree to be contacted by a private
        advisor regarding Palm Jebel Ali availability.
      </p>

      {status === "error" && serverMessage && (
        <p className="text-xs text-red-600">{serverMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="border border-foreground bg-foreground px-8 py-4 text-xs font-semibold tracking-[0.2em] text-background uppercase transition-colors hover:bg-foreground/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
