# Changelog

All notable changes to the Intelagent website are recorded here.
Newest changes are listed first.

## [2026-07-14]
### Added
- Contact form submissions are now captured: `onSubmit` POSTs all fields as JSON to the N8N production webhook, which routes leads into the Airtable CRM. Multi-select "where the time goes" checkboxes are sent as an array, and a "Thanks" confirmation shows only on a successful send.
- Client-side name validation (letters, spaces, hyphens, and apostrophes only) with an inline error message above the submit button.
- Optional phone validation: when a number is provided it must be exactly 10 digits, and it is normalized to `(XXX) XXX-XXXX` before sending.

### Changed
- On a failed send, the form is kept and an inline error is shown instead of a false "Thanks", so leads are never silently dropped.

## [2026-06-24]
### Added
- Initial Intelagent marketing site — landing page, design-system tokens, and assets.

### Fixed
- Serve the site at the root `/` route by providing `index.html` (fixes the Vercel 404).
