// Central place to edit project content. Each project becomes one
// "book" on the Projects shelf and one detail page.
// `cover` points at an image in assets/ — the book render itself
// (spine, pages, shadow) should already be baked into that image.
const PROJECTS = [
  {
    slug: "whoop",
    title: "WHOOP",
    role: "Wearable fitness and health platform",
    meta: "Role — TBD",
    cover: "assets/whoop-cover.jpg",
    // Full-width horizontal photo, clickable, with a caption below it.
    photos: [
      {
        image: "assets/whoop.jpg",
        caption: "Campaign for the MASS AI Coalition, a private sector initiative encouraging founders, operators, and students new to Boston to build from Boston.",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7473116035550736384/"
      }
    ],
    body: [
      "Placeholder body copy for the WHOOP project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "sunrooof",
    title: "SUNROOOF",
    role: "Patented wellness lighting technology",
    meta: "Brand Marketing Intern Summer 2026",
    cover: "assets/sunrooof-cover.jpg",
    body: [
      "<strong>#1 Founder-led storytelling:</strong> Historical backdrop of the tube light as one of mankind’s most important invention to the modern day living in urban cities. We’ve spent over a century making artificial light better. But our bodies evolved with sunlight that changes with the day and supports our well-being. So why keep improving artificial light when we can bring the experience of sunlight indoors? That’s why we built SUNROOOF. Because lighting shouldn’t just help you see. It should help you live well. SUNROOOF is sunlight. And anything else? It’s just another light.",
      "<strong>#2 Celebrity Collaboration:</strong> Building social proof through Bollywood actress Shilpa Shetty."
    ],
    // Each entry is a clickable thumbnail that opens the Instagram Reel
    // in a new tab. Swap in the real thumbnail filenames + Reel URLs.
    videos: [
      { thumbnail: "assets/sunrooof-reel-1.jpg", url: "https://www.instagram.com/reel/Dbx7BBmJCUR/" },
      { thumbnail: "assets/sunrooof-reel-2.jpg", url: "https://www.instagram.com/p/DWBnBYdkSQD/" }
    ]
  },
  {
    slug: "gamma",
    title: "GAMMA",
    role: "AI powered presentations",
    meta: "Role — TBD",
    cover: "assets/gamma-cover.jpg",
    photos: [
      {
        image: "assets/gamma.jpg",
        caption: "3 Perspectives on the process and creativity of visual communication in the age of AI.",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7478933854884425728/"
      }
    ],
    body: [
      "Placeholder body copy for the Gamma project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "jumboventures",
    title: "JumboVentures",
    role: "Tufts startup incubator club",
    meta: "Director of Partnerships",
    cover: "assets/jumboventures-cover.jpg",
    body: [
      "Placeholder body copy for the JumboVentures project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "clodo",
    title: "Clodo AI (YC)",
    role: "Backed by Y Combinator — planet scale people sourcing",
    meta: "Head of Growth",
    cover: "assets/clodo-cover.jpg",
    body: [
      "Placeholder body copy for the Clodo AI project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "girlsintovc",
    title: "Girls into VC",
    role: "Closing the gender gap in venture capital",
    meta: "Regional Lead",
    cover: "assets/girlsintovc-cover.jpg",
    body: [
      "Hosted a Vibe-coding Hackathon during Boston's first A16Z Tech Week.",
      "Social marketing before the event, resulting in 100+ attendees.",
      "Sponsorships from Gamma, Lovable, and Silicon Valley Bank."
    ],
    // Both link out to the same LinkedIn post per the given URL.
    videos: [
      { thumbnail: "assets/girlsintovc-photo-1.jpg", url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/" },
      { thumbnail: "assets/girlsintovc-photo-2.jpg", url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/" }
    ]
  }
];
