"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "./Eyebrow";
import { RegisterForm } from "./RegisterForm";

const SEEN_KEY = "register-popup-seen";
const SHOW_DELAY_MS = 1200;

export function RegisterPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    const timer = setTimeout(() => dialogRef.current?.showModal(), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SEEN_KEY, "1");
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={() => sessionStorage.setItem(SEEN_KEY, "1")}
      onClick={(e) => {
        if (e.target === dialogRef.current) dismiss();
      }}
      className="m-auto max-h-[90vh] w-[92vw] max-w-lg overflow-y-auto border-0 bg-transparent p-0 backdrop:bg-black/70"
    >
      <div className="relative border border-border bg-background p-6 sm:p-10">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center text-lg text-muted-foreground hover:text-foreground"
        >
          &times;
        </button>

        <Eyebrow>Private Enquiry</Eyebrow>
        <h2 className="mt-3 pr-8 font-serif text-2xl leading-tight font-light sm:text-3xl">
          Register your interest
        </h2>

        <div className="mt-8">
          <RegisterForm />
        </div>
      </div>
    </dialog>
  );
}
