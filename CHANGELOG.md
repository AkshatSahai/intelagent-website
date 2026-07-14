# Changelog

All notable changes to the Intelagent website are recorded here.
Newest changes are listed first.

## [2026-07-14]
### Added
- "Monthly Revenue" dropdown on the contact form ($0 - $5,000 / $5,000 - $10,000 / $10,000 - $25,000 / $25,000+), sent to the webhook as `revenue`. It sits beside "How big is your team?" in a two-column row.
- Contact form submissions are now captured: `onSubmit` POSTs all fields as JSON to the N8N production webhook, which routes leads into the Airtable CRM. Multi-select "where the time goes" checkboxes are sent as an array, and a "Thanks" confirmation shows only on a successful send.
- Client-side name validation (letters, spaces, hyphens, and apostrophes only) with an inline error message above the submit button.
- Optional phone validation: when a number is provided it must be exactly 10 digits, and it is normalized to `(XXX) XXX-XXXX` before sending.

### Changed
- Reworked the "Where does the time go?" checkboxes down to 5 options: Lead follow up, Booking & scheduling, Finance & admin (merges the old "Invoicing and payments" and "Finance and admin"), Client retention/feedback, and Honestly, all of it.
- On a failed send, the form is kept and an inline error is shown instead of a false "Thanks", so leads are never silently dropped.

### Removed
- The "What's the biggest thing eating your time right now?" textarea and its `message` field in the webhook payload.

## [2026-06-24]
### Added
- Initial Intelagent marketing site — landing page, design-system tokens, and assets.

### Fixed
- Serve the site at the root `/` route by providing `index.html` (fixes the Vercel 404).
