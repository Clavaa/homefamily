/**
 * Site-wide config. Everything marked TODO is a launch blocker —
 * no fabricated numbers or names may ship.
 */
export const site = {
  brand: "KinCare Pay",
  // Two-tone wordmark pieces used by the Logo component.
  brandMark: { primary: "KinCare", accent: "Pay" },
  // TODO: replace with the real call-tracked number before launch (555 = placeholder)
  phone: "(608) 555-0123",
  phoneHref: "tel:+16085550123",
  domain: "https://kincarepay.com",
  // TODO: replace with the real intake inbox before launch
  email: "hello@kincarepay.com",
  leadTo: "leads@kincarepay.com",
  homeState: "Wisconsin",
  homeStateSlug: "wisconsin",
  updated: "September 2026", // data snapshot date shown on pay modules
  updatedEs: "septiembre de 2026",
} as const;
