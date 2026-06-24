# Intelagent Design System

> **"Your operations, handled."** — the calm, expert partner that quietly takes the operational grind off small and growing business owners' plates.

Intelagent is a pre-launch AI consulting / agentic automation company for small and mid-sized businesses. They build layers of agentic AI that sit on top of business operations (leads, booking, finance, email, nurturing, invoicing, payments) to eliminate manual workflows — done-for-you, in plain English, with the owner always in control.

---

## Sources

This design system was built from the following brand materials (all located in `Brand Assets/` of the mounted local folder):

| File | Content |
|------|---------|
| `brand-context.md` | Company overview, positioning, audience, personality, values |
| `brand-identity.md` | Visual identity brief: logo, color palette, typography, imagery, iconography, design principles |
| `brand-messaging.md` | Taglines, value proposition, messaging hierarchy, channel copy |
| `brand-positioning.md` | Competitive landscape, positioning statement, what the brand refuses to be |
| `brand-strategy.md` | Full brand strategy: vision, mission, values, goals, persona detail |
| `brand-voice.md` | Voice dimensions, vocabulary (words we use / avoid), style rules, channel adaptations, before/after examples |
| `target-audience.md` | Persona profiles: Marcus (local owner) and Priya (SMB operator) |
| `competitor-branding.md` | Competitive audit: Zapier, Make, Beam AI, Vstorm, JADA, generic agencies |
| `Intelagent-Brand-Guidelines.docx` | Compiled brand guidelines document (binary; readable content extracted from above .md files) |

No Figma links or GitHub repositories were provided. No actual logo vector files were provided — see **Caveats** below.

---

## CONTENT FUNDAMENTALS

### Tone of voice
Intelagent sounds like **the sharpest person in the room who never needs to prove it** — a calm expert friend who happens to be brilliant at this. The blend:

- **Plain-spoken:** Says things the way a smart friend would. If a sentence needs a glossary, rewrite it.
- **Reassuring:** Leads with relief and control. The owner finishes a sentence feeling calmer.
- **Confident:** Makes clear claims, no hedging. Quiet certainty.
- **Warm:** Talks to one person, not a market. Acknowledges real late nights and real stress.
- **Honest:** Never oversells, never promises magic. Names what AI can and can't do.
- **Grounded:** Real tasks, real outcomes, real workflows. Abstraction is the enemy.
- **Respectful:** Never talks down. The owner isn't behind for not knowing the tech.

### Casing
**Sentence case everywhere** — headlines, buttons, labels. Feels human and modern. Reserve title case only for formal labels that genuinely require it (e.g., "Terms of Service").

### I vs. you
Heavy use of **"you"** — direct address to one owner. "We" for the Intelagent team as a present partner. First-person singular ("I") almost never; Intelagent is a team/partner, not a person.

### Contractions
Always. "We'll," "you're," "it's," "doesn't." Core to sounding human rather than corporate.

### Voice: active
"We handle your invoicing" — not "your invoicing is handled by us."

### Numbers
Numerals for concrete specifics: 9pm, 6-person team, same-day, within 5 minutes. Spell out only when a number opens a sentence.

### Emoji
**Never.** Emoji undercut the calm, professional authority of the brand. No emoji in UI copy, social posts, or marketing materials.

### Punctuation
No em-dashes (use a period, comma, or parentheses). Use periods for calm. Exclamation marks are rare and earned — never to manufacture excitement.

### Copy vibe examples

| ✅ On-brand | ❌ Off-brand |
|------------|------------|
| "We build AI that quietly handles your busywork." | "Leverage our cutting-edge agentic AI platform." |
| "You stay in control the whole way." | "Fully autonomous AI running your entire business." |
| "Not sure where AI even fits? That's normal." | "Still doing this manually? Time to catch up." |
| "Every lead gets a reply within minutes." | "Unlock transformative, scalable growth." |
| "The business keeps running." | "Disrupt the future of operations." |

### Brand vocabulary
**Use:** handle, handled, take it off your plate, behind the scenes, quietly, in the background, stop being the bottleneck, runs without you, the busywork, plain English, the way you already work, in control, your call, falls through the cracks, follow up, leads, bookings, invoices, get your time back, peace of mind.

**Avoid:** agentic, orchestration, leverage (as verb), synergy, transformative, revolutionary, game-changing, cutting-edge, seamless, robust, scalable solution, paradigm, disrupt, next-generation, future-proof, RAG, LLM, autonomous (as headline), 10x, world-class.

---

## VISUAL FOUNDATIONS

### Colors
Warm monochromatic palette anchored by orange. The single clearest visual differentiator from a cold blue/purple AI category.

| Token | Hex | Usage |
|-------|-----|-------|
| `--orange-500` | `#E0750E` | Primary brand. Logo, CTAs, key accents. Deliberate, not everywhere. |
| `--orange-700` | `#A8480A` | Deep Ember. Hover states, depth, pressed states. |
| `--charcoal-900` | `#2B2724` | Warm Charcoal. Primary text, headlines. Softer than pure black. |
| `--cream-100` | `#FBF7F2` | Warm Cream. Primary background. Calm, inviting, not clinical. |
| `--cream-400` | `#E8E1D8` | Warm Light Grey. Dividers, card backgrounds, subtle UI. |
| `--cream-200` | `#F4EFE8` | Surface warm. Secondary background sections. |

Never introduce blue or purple as a brand color. Never use stark `#FFFFFF` as the primary background — use cream instead.

### Typography
Two-family system: display for confidence, body for clarity.

| Role | Family | Weight |
|------|--------|--------|
| Headlines / display | Hanken Grotesk | 700–800, tight leading (1.15–1.3), negative tracking |
| Subheads | Hanken Grotesk | 600, snug leading (1.3) |
| Body | Inter | 400, generous leading (1.6), normal tracking |
| Labels / UI | Inter | 500, slightly increased tracking |
| Captions | Inter | 400, small |

Avoid Inter as a headline face — it's the category default and adds no distinction. Never use decorative, script, or monospace-as-decoration faces.

### Backgrounds
- Default: warm cream `#FBF7F2`
- Surface cards: pure white `#FFFFFF` — pops warmly against cream
- Inverted/dark sections: warm charcoal `#2B2724`
- Avoid dark mode as default — it pulls the brand toward cold enterprise

### Spacing & Layout
Generous white space is the visual proof that "we'll handle it." One clear focal point per section. Never busy or cramped.
- Base unit: 4px
- Section padding: 80–96px vertical
- Consistent 8-point grid for component spacing

### Corner radii
Rounded, never sharp. The softness echoes the friendly robot mark.
- Buttons: `--radius-full` (fully rounded, pill shape) or `--radius-lg`
- Cards: `--radius-xl` (16px)
- Inputs: `--radius-md` (8px)
- Modals: `--radius-2xl` (20px)

### Shadows
Warm-tinted, never cold grey. Used to lift cards and CTAs subtly.
- Cards: `--shadow-md` (soft warm lift)
- Buttons: `--shadow-orange` on hover (orange glow for primary CTA)
- Never heavy, never dramatic — calm and grounded

### Borders
- Default: `--cream-400` `#E8E1D8` — barely-there warm dividers
- Strong: `--cream-600` for visible separators
- Accent: orange `#E0750E` for focus rings and active states

### Animations & Transitions
- Calm, not bouncy. No dramatic entrances.
- `--transition-base` (180ms ease) for most hover/active states
- `--transition-spring` (300ms cubic-bezier) for reveals and modals
- Entrance animations: gentle fade-up (opacity + translateY). Never spinning/pulsing decorative loops.
- Hover states: slightly darker shade (orange-700 for orange elements), shadow lift for cards
- Press/active: scale down to 0.97, slightly darker shade

### Cards
- White background `#FFFFFF` on cream base
- `--shadow-md` — subtle warm lift
- `--radius-xl` corners (16px)
- `--border-subtle` (cream-400) or no border
- Generous internal padding: 24–32px

### Iconography
Rounded line icons at medium weight. Echoes the robot mark's rounded friendly geometry. Lucide Icons (CDN: `https://unpkg.com/lucide@latest`) is the preferred CDN-based icon set — matches weight, style, and corner radius language of the brand.

### Imagery
Warm, real, documentary-leaning. Real small-business owners in real environments. Natural warm-toned light. No:
- Glowing network nodes
- Circuit boards or abstract "AI brains"
- Blue gradient blobs
- Suits-and-holograms stock photos

### Color vibe of imagery
Natural warm tones, lightly lifted, tied to the orange/cream palette. Real light, real spaces.

---

## ICONOGRAPHY

**Icon system:** [Lucide Icons](https://lucide.dev) — loaded via CDN. Rounded corners, medium stroke weight (1.5–2), consistent style across the set. Matches the brand's friendly-but-functional character.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="check-circle"></i>
<script>lucide.createIcons();</script>
```

No emoji used as icons. No unicode characters as decorative icons. No custom hand-rolled SVGs for UI icons — use Lucide consistently.

**Logo assets** (in `assets/`):
| File | Usage |
|------|-------|
| `logo.svg` | Primary lockup — robot mark + wordmark, orange on cream/white |
| `logo-mark.svg` | Icon-only robot head — app icons, avatars, favicons |
| `logo-reversed.svg` | White wordmark — for orange or dark backgrounds |
| `logo-mark-white.svg` | White robot mark — for dark/orange backgrounds |

> ⚠️ **Caveat:** These logo SVGs are approximations based on the brand brief description (all-caps wordmark + friendly robot mark). The actual logo vector files were not provided. See caveats at the bottom.

---

## FILE INDEX

```
styles.css                      ← Global entry point (import this one file)
tokens/
  colors.css                    ← All color custom properties
  typography.css                ← Font imports + type scale tokens
  spacing.css                   ← Space, radius, shadow, transition, z-index tokens
assets/
  logo.svg                      ← Primary horizontal lockup
  logo-mark.svg                 ← Robot icon mark only
  logo-reversed.svg             ← White version for dark/orange BG
  logo-mark-white.svg           ← White mark for dark/orange BG
  Intelagent-Brand-Guidelines.docx ← Source brand guidelines document
components/
  core/
    Button.jsx / .d.ts / .prompt.md
    Badge.jsx / .d.ts / .prompt.md
    Tag.jsx / .d.ts / .prompt.md
    Avatar.jsx / .d.ts / .prompt.md
    Card.jsx / .d.ts / .prompt.md
    buttons.card.html
    data-display.card.html
  forms/
    Input.jsx / .d.ts / .prompt.md
    Select.jsx / .d.ts / .prompt.md
    Checkbox.jsx / .d.ts / .prompt.md
    forms.card.html
  feedback/
    Toast.jsx / .d.ts / .prompt.md
    Alert.jsx / .d.ts / .prompt.md
    Spinner.jsx / .d.ts / .prompt.md
    feedback.card.html
guidelines/
  colors-brand.card.html
  colors-neutrals.card.html
  colors-semantic.card.html
  type-display.card.html
  type-body.card.html
  type-scale.card.html
  spacing-tokens.card.html
  spacing-radius.card.html
  spacing-shadows.card.html
  brand-logo.card.html
  brand-voice.card.html
ui_kits/
  website/
    index.html                  ← Interactive homepage prototype
    Hero.jsx
    Nav.jsx
    Services.jsx
    HowItWorks.jsx
    Personas.jsx
    Footer.jsx
readme.md                       ← This file
SKILL.md                        ← Claude Code skill definition
```

---

## CAVEATS

1. **No actual logo vector files were provided.** The `assets/logo.svg` and mark variants are approximations built from the written brand brief. The brief describes "all-caps INTELAGENT with a robot-head O" but INTELAGENT contains no letter O — the robot mark has been interpreted as a standalone circular icon mark alongside the wordmark. **Please provide the actual vector logo files to replace these approximations.**

2. **No Figma access was provided.** All components and UI were built from brand documentation alone, not from inspected production designs.

3. **No codebase was provided.** Components are built from brand documentation conventions, not from existing production code.

4. **Font substitutions:** Hanken Grotesk and Inter are used via Google Fonts CDN. If Intelagent has licensed custom typefaces, please provide the font files and update `tokens/typography.css`.
