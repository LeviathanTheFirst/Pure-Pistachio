"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/ui/icons/LineIcons";

type Errors = Partial<Record<FieldName, string>>;

type FieldName = "name" | "email" | "company" | "country" | "interest" | "message";

/**
 * Interest options mirror the `?intent=` query used across the site's CTAs
 * (site.ts: quote/sample/service) so a deep link lands with the right choice
 * already selected.
 */
const INTERESTS = [
  { value: "quote", label: "Request a quote" },
  { value: "sample", label: "Request a sample" },
  { value: "service", label: "I'm interested in services" },
  { value: "general", label: "General" },
] as const;

const INTEREST_VALUES = INTERESTS.map((i) => i.value);

/** Style shared by all inputs for consistent focus + error states. */
const fieldBase =
  "w-full rounded-sm border bg-white px-4 py-3 text-[0.9375rem] text-charcoal placeholder:text-charcoal-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1";
const fieldOk = "border-stone";
const fieldErr = "border-primary";

const LABELS: Record<FieldName, string> = {
  name: "Full name",
  email: "Business email",
  company: "Company",
  country: "Country / region",
  interest: "I'm interested in",
  message: "Message",
};

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid business email.";
  if (!values.company.trim()) errors.company = "Please enter your company.";
  if (!values.country.trim()) errors.country = "Please enter your country or region.";
  if (!values.interest) errors.interest = "Please choose what you're interested in.";
  return errors;
}

/** Field wrapper mirrors the label + error + hint pattern on every input. */
function Field({
  id,
  label,
  error,
  children,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {optional ? <span className="text-charcoal-70"> (optional)</span> : <span aria-hidden className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-primary">
          {error}
        </p>
      )}
    </div>
  );
}

export function InquiryForm() {
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Honor /contact?intent=… deep links from the site's CTAs. Read client-side
  // after mount so nothing depends on server search params (static export).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const intent = new URLSearchParams(window.location.search).get("intent");
    if (intent && (INTEREST_VALUES as readonly string[]).includes(intent)) {
      setValues((v) => ({ ...v, interest: intent }));
    }
  }, []);

  const set = (field: FieldName, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear the field error as the user corrects it.
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    if (Object.keys(next).some((k) => next[k as FieldName])) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start rounded-sm border border-stone bg-primary-soft p-6"
      >
        <p className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-primary">
          Thanks — we&apos;ve received your inquiry
        </p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-70">
          We&apos;ll get back to you within one business day with next steps —
          specs, samples, or a quote.
        </p>
        <Button variant="secondary" className="mt-5" onClick={() => setSubmitted(false)}>
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={LABELS.name} error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldBase, errors.name ? fieldErr : fieldOk)}
          />
        </Field>

        <Field id="email" label={LABELS.email} error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldBase, errors.email ? fieldErr : fieldOk)}
          />
        </Field>

        <Field id="company" label={LABELS.company} error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={cn(fieldBase, errors.company ? fieldErr : fieldOk)}
          />
        </Field>

        <Field id="country" label={LABELS.country} error={errors.country}>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            value={values.country}
            onChange={(e) => set("country", e.target.value)}
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? "country-error" : undefined}
            className={cn(fieldBase, errors.country ? fieldErr : fieldOk)}
          />
        </Field>
      </div>

      <Field id="interest" label={LABELS.interest} error={errors.interest}>
        <div className="relative">
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(e) => set("interest", e.target.value)}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={cn(fieldBase, "appearance-none pr-10", errors.interest ? fieldErr : fieldOk)}
          >
            <option value="" disabled>
              Select one
            </option>
            {INTERESTS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-70"
          />
        </div>
      </Field>

      <Field id="message" label={LABELS.message} error={errors.message} optional>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={cn(fieldBase, "resize-y")}
        />
      </Field>

      <div className="pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Submit inquiry
        </Button>
      </div>
    </form>
  );
}