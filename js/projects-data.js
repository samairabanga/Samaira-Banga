// Central place to edit project content. Each project becomes one
// "book" on the Projects shelf and one detail page.
// `cover` points at an image in assets/ — the book render itself
// (spine, pages, shadow) should already be baked into that image.
const PROJECTS = [
  {
    slug: "whoop",
    title: "WHOOP",
    role: "Wearable fitness and health platform",
    summary: "Placeholder summary of your work at WHOOP. Swap this out with the real description.",
    cover: "assets/whoop-cover.jpg",
    facts: {
      Role: "TBD",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the WHOOP project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "sunrooof",
    title: "SUNROOOF",
    role: "Patented wellness lighting technology",
    summary: "Placeholder summary of your work at SUNROOOF. Swap this out with the real description.",
    cover: "assets/sunrooof-cover.jpg",
    facts: {
      Role: "TBD",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the SUNROOOF project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
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
    summary: "Placeholder summary of your work at Gamma. Swap this out with the real description.",
    cover: "assets/gamma-cover.jpg",
    facts: {
      Role: "TBD",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the Gamma project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "jumboventures",
    title: "JumboVentures",
    role: "Tufts startup incubator club",
    summary: "Director of Partnerships at JumboVentures, Tufts' student-run startup incubator club.",
    cover: "assets/jumboventures-cover.jpg",
    facts: {
      Role: "Director of Partnerships",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the JumboVentures project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "clodo",
    title: "Clodo AI (YC)",
    role: "Backed by Y Combinator — planet scale people sourcing",
    summary: "Head of Growth at Clodo AI (YC), a planet-scale people sourcing platform.",
    cover: "assets/clodo-cover.jpg",
    facts: {
      Role: "Head of Growth",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the Clodo AI project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  },
  {
    slug: "girlsintovc",
    title: "Girls into VC",
    role: "Closing the gender gap in venture capital",
    summary: "Regional Lead at Girls into VC, working to close the gender gap in venture capital.",
    cover: "assets/girlsintovc-cover.jpg",
    facts: {
      Role: "Regional Lead",
      Year: "TBD",
      Type: "TBD"
    },
    body: [
      "Placeholder body copy for the Girls into VC project detail page. Replace with the real write-up once content is finalized.",
      "Add a second paragraph here describing outcomes, tools used, or your specific contribution."
    ]
  }
];
