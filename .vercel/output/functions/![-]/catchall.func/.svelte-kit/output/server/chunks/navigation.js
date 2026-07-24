const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "AI Taskforce", href: "/ai-taskforce" },
  { label: "Meet the Committee", href: "/meet-the-committee" },
  {
    label: "Who are the BCS",
    href: "/who-are-the-bcs",
    children: [
      { label: "Who are the BCS", href: "/who-are-the-bcs" },
      {
        label: "Registrations & Memberships",
        href: "/who-are-the-bcs/registrations-and-memberships"
      },
      { label: "BCS Branches", href: "/who-are-the-bcs/branches" },
      { label: "Who is BCS Berkshire?", href: "/who-are-the-bcs/who-is-bcs-berkshire" }
    ]
  },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Anthony Parker Prize", href: "/anthony-parker-memorial-prize" },
  { label: "Partners & Sponsors", href: "/partners-sponsors-affiliations-friends" },
  { label: "Contact us", href: "/contact-us" }
];
const footerNav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "AI Taskforce", href: "/ai-taskforce" },
  { label: "Meet the Committee", href: "/meet-the-committee" },
  { label: "Who are the BCS", href: "/who-are-the-bcs" },
  { label: "Registrations & Memberships", href: "/who-are-the-bcs/registrations-and-memberships" },
  { label: "BCS Branches", href: "/who-are-the-bcs/branches" },
  { label: "Who is BCS Berkshire?", href: "/who-are-the-bcs/who-is-bcs-berkshire" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Anthony Parker Memorial Prize", href: "/anthony-parker-memorial-prize" },
  { label: "Partners, Sponsors & Friends", href: "/partners-sponsors-affiliations-friends" },
  { label: "Contact us", href: "/contact-us" }
];
export {
  footerNav as f,
  primaryNav as p
};
