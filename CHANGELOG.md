# Changelog

All notable changes to the Intelagent website are recorded here.
Newest changes are listed first. Each entry says what changed **and what it
means for the website**, so you don't need to read code to follow along.

## [2026-07-14] — Accessibility, mobile navigation, and faster loading

### Added
- **Mobile menu (hamburger) in the navigation bar.** Before this, phone and tablet visitors simply lost the "How it works / What we handle / Why / FAQ" links — they were hidden below 900px with no replacement, leaving only the logo and the "Book a free call" button. Now a hamburger button opens a dropdown with all four links, and it closes itself after you pick one. Mobile visitors can finally get around the site.
- **A proper page title and language tag.** The browser tab now reads "Intelagent — Done-for-you AI for small business" instead of the raw file address, search results display a real title, and screen readers know the page is in English.

### Changed
- **Screen-reader support across the page.** The FAQ accordion now tells assistive technology whether each question is open or closed (`aria-expanded`), form error messages are announced aloud when they appear (`role="alert"`) instead of failing silently for blind visitors, and the ~40 decorative icons are skipped by screen readers rather than read out as meaningless "image" noise.
- **Faster first paint.** The page's main script no longer blocks rendering while it downloads (`defer`), the three design-token stylesheets are no longer downloaded twice, and the Google Fonts request moved from a slow CSS `@import` chain to direct preconnected links in the page head. Net effect: the site starts drawing sooner, especially on slow mobile connections.
- **Dropped the Fira Code font download.** The site never visibly uses it, so every visitor was paying for a font they never saw. Code-style text now falls back to the system monospace font.

### Removed
- **Dead "Privacy Policy" and "Terms" footer links.** They pointed nowhere (`href="#"`), which erodes trust and frustrates keyboard users. They'll return when the real pages exist.
- **An unused 30KB screenshot** (`uploads/pasted-…png`) that shipped with every deploy but was never shown anywhere.

## [2026-07-14] — Contact form: revenue field, simpler checkboxes

### Added
- **"Monthly Revenue" dropdown on the contact form** ($0 - $5,000 / $5,000 - $10,000 / $10,000 - $25,000 / $25,000+), sitting beside "How big is your team?". Every new lead now arrives in the CRM with a revenue band, so leads can be qualified and prioritized at a glance instead of needing a discovery question first.
- **Contact form submissions now reach the business.** Previously the form went nowhere. Submissions POST as JSON to the N8N production webhook, which files each lead into the Airtable CRM — the form went from decorative to the site's actual lead engine.
- **Client-side name and phone validation.** Names must be real-looking (letters, spaces, hyphens, apostrophes) and phone numbers, when given, must be 10 digits (auto-formatted to `(XXX) XXX-XXXX`). The CRM stays free of junk entries, and visitors get a clear inline message the moment something's off.

### Changed
- **"Where does the time go?" checkboxes cut from 6 options to 5** with shorter labels (Lead follow up, Booking & scheduling, Finance & admin, Client retention/feedback, Honestly, all of it). Less reading before submitting, and the merged "Finance & admin" option ends the ambiguity of two overlapping choices.
- **Failed sends no longer pretend to succeed.** If the webhook is down, the visitor keeps their filled-in form and sees an error with a retry suggestion — before, a lead could vanish while the visitor believed it was sent.

### Removed
- **The free-text "What's the biggest thing eating your time right now?" textarea.** One less required field between a visitor and the submit button; the new revenue dropdown and checkboxes capture the same signal in structured form the CRM can actually filter on.

## [2026-06-24] — Initial launch

### Added
- **Initial Intelagent marketing site** — landing page with hero, process, services, FAQ, and contact sections, plus the design-system tokens (colors, typography, spacing) that keep every section visually consistent.

### Fixed
- **The live site now loads at the root URL.** Renamed the page to `index.html` so Vercel serves it at `/` instead of returning a 404 — without this, visitors to the bare domain saw an error page.
