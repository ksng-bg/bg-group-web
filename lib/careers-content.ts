// Content for the /careers page.
// Copy is written to build trust for a self-employed, field-based role that
// unfortunately shares surface markers with scam ads (per-task pay, own device,
// "start immediately"). The page's job is to prove Brilly Group is a real,
// UK-registered company before the applicant emails us.
//
// GUARDRAIL: collectors are genuinely self-employed contractors, NOT employees
// or "workers". Never promise guaranteed hours, shifts, a rota, or a fixed wage
// here — that risks UK worker-status reclassification. Keep everything
// per-approved-submission, flexible, and invoice-based.

export const COMPANIES_HOUSE_URL =
  "https://find-and-update.company-information.service.gov.uk/company/14176606"

export const APPLY_EMAIL = "job@brillygroup.com"
export const APPLY_MAILTO =
  "mailto:job@brillygroup.com?subject=More%20info%20%E2%80%94%20Field%20%26%20Market%20Researcher"

// ---------------------------------------------------------------------------
// HIRING TOGGLE
// Flip to `true` to re-open the full Field & Market Researcher advert below.
// While `false`, /careers shows a graceful "no open roles" landing (keeps the
// URL + company-legitimacy content, invites future interest) and is noindexed.
// ---------------------------------------------------------------------------
export const HIRING_OPEN = false

export const REGISTER_MAILTO =
  "mailto:job@brillygroup.com?subject=Register%20my%20interest%20in%20future%20roles%20at%20Brilly%20Group"

export const closedNotice = {
  eyebrow: "Careers at Brilly Group",
  headline: "No open roles right now",
  body: [
    "Thanks for your interest in working with Brilly Group. We don't have any active vacancies at the moment.",
    "We're a growing UK technology and business-services company, and we take on field, operations and technical people from time to time. If you'd like to be considered when something opens up, send us a short note and we'll keep you in mind.",
  ],
  ctaText: "Register your interest",
  contactName: "Recruitment Team, Brilly Group",
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ProcessStep {
  title: string
  description: string
}

export const careersContent = {
  hero: {
    eyebrow: "Careers at Brilly Group",
    headline: "Field & Market Researcher — Greater Manchester",
    subline:
      "Flexible, self-employed work photographing local shops and restaurants to keep mapping and location data up to date. You choose when and how long you work. Paid weekly.",
    payChip: "£12.71–£15.50 / hr equivalent · Paid weekly",
    ctaText: "Apply now",
  },

  // Legitimacy strip — the verified public facts are the strongest trust asset.
  legitimacy: {
    heading: "A real, UK-registered company — not a gig-app middleman.",
    facts: [
      { label: "Registered company", value: "Brilly Group Limited" },
      { label: "Company number", value: "14176606" },
      { label: "Incorporated", value: "June 2022" },
      { label: "Registered as", value: "IT consultancy & employment agency" },
      { label: "Based in", value: "Sale, Greater Manchester" },
    ],
    verifyText: "Verify us on Companies House",
  },

  whatItIs: {
    heading: "What the job actually is",
    body: [
      "You'll visit shops and restaurants in your local area and use a simple mobile app to capture up-to-date location data: a few clear photos and a short (about 3-minute) walk-through video of each place.",
      "This keeps the mapping and location information that millions of people rely on accurate and current. You photograph business premises — not people. It's straightforward, above-board market and location-data work.",
    ],
  },

  // The centrepiece: answer the "is this a scam?" fear head-on.
  trust: {
    heading: "Is this legit? Your questions, answered honestly.",
    subheading:
      "This is self-employed, pay-per-task work — which we know can look like the ads you're right to be wary of. So here's exactly how we operate.",
    faqs: [
      {
        question: "Will you ever ask me for money?",
        answer:
          "No. Never. There are no fees, no deposits, no \"starter kit\" to buy, and we don't ask for your bank details upfront. If anyone ever asks you to pay something to start, it isn't us — walk away.",
      },
      {
        question: "Is there a real contract?",
        answer:
          "Yes. Before you start you'll sign a written Field Collector Agreement that sets out the work and the pay, and you keep your own copy. Nothing starts on a verbal promise.",
      },
      {
        question: "Do you check who I am?",
        answer:
          "Yes — we verify your ID and your right to work in the UK, and a real person at Brilly reviews it. We're a compliant UK business, so we confirm who we're working with. Scams skip this step; we don't.",
      },
      {
        question: "How and when do I get paid?",
        answer:
          "You're self-employed, so you send us a short weekly invoice and we pay for the work that's been approved, by bank transfer. Being self-employed is exactly what gives you full control over when and how much you work.",
      },
      {
        question: "Why per approved submission instead of a fixed wage?",
        answer:
          "Because it rewards accurate, good-quality work and keeps you genuinely independent — do as much or as little as you like, whenever suits you. In practice, output typically works out to the equivalent of £12.71–£15.50 per hour.",
      },
      {
        question: "Why does it have to be an Android phone?",
        answer:
          "It's purely a technical requirement of the data-collection app. You'll need Android 7.0 or above (but not Android 9.0); iPhone and Huawei aren't supported, and we'd avoid Samsung as it can have issues with the app.",
      },
      {
        question: "What am I collecting, and who's it for?",
        answer:
          "Up-to-date photos and short videos of shop and restaurant premises that feed into mapping and location-data services. We deliver this on behalf of a technology client whose name is kept confidential under our contract — which is completely normal for data work of this kind.",
      },
    ] as FaqItem[],
  },

  process: {
    heading: "How joining works",
    subheading: "A clear, six-step process — the same one a real employer runs.",
    steps: [
      {
        title: "Apply",
        description:
          "Email us and answer four quick questions (below). No CV gymnastics, no application fee.",
      },
      {
        title: "Quick screening",
        description:
          "We confirm the basics: you're in/near Greater Manchester, you have a supported Android phone, and you have the right to work in the UK.",
      },
      {
        title: "ID & right-to-work check",
        description:
          "You share ID and proof of right to work. A person at Brilly reviews and approves it — this is a legal must, and a sign we're the real thing.",
      },
      {
        title: "Sign your agreement",
        description:
          "You sign the Field Collector Agreement digitally and keep a copy. Everything's in writing before any work begins.",
      },
      {
        title: "Guided training",
        description:
          "A short handbook and video walk you through exactly what a good submission looks like, followed by a quick quiz so you start confident.",
      },
      {
        title: "Start & get paid weekly",
        description:
          "You get your first area, the app, and ongoing support. You work the hours you choose, submit your work, invoice weekly, and get paid.",
      },
    ] as ProcessStep[],
  },

  requirements: {
    heading: "What you'll need",
    items: [
      "An Android phone (Android 7.0 or above — not Android 9.0). Not iPhone or Huawei, and preferably not Samsung.",
      "Your own mobile data (an allowance may be considered where needed).",
      "To live in or near Greater Manchester.",
      "The legal right to work in the UK.",
      "A good eye for detail and consistent photo/video quality.",
      "Reliability — most work is within walking distance, and you're welcome to travel further and work a full day elsewhere if you like.",
    ],
  },

  apply: {
    heading: "Ready to apply?",
    body: "Email us the four answers below and we'll take it from there. We reply to every genuine applicant.",
    questions: [
      "Do you understand this is a field-based role, out visiting stores — not office-based or remote?",
      "Do you have an Android phone running Android 7.0 or above (not an iPhone or Huawei)?",
      "Do you live in or near Greater Manchester?",
      "Do you have the legal right to work in the UK?",
    ],
    contactName: "Recruitment Team, Brilly Group",
  },
}

export default careersContent
