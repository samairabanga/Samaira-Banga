// Central place to edit project content. Each project becomes one
// "book" on the Projects shelf and one detail page.
// `cover` points at an image in assets/ — the book render itself
// (spine, pages, shadow) should already be baked into that image.
const PROJECTS = [
  {
    slug: "whoop",
    title: "WHOOP",
    role: "Wearable fitness and health platform",
    meta: "Community campaign",
    cover: "assets/whoop-cover.jpg",
    // Full-width horizontal photo, clickable.
    photos: [
      {
        image: "assets/whoop.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7473116035550736384/"
      }
    ],
    body: [
      "Campaign for the MASS AI Coalition, a private sector initiative encouraging founders, operators, and students new to Boston to build from Boston."
    ]
  },
  {
    slug: "sunrooof",
    title: "SUNROOOF",
    role: "Patented wellness lighting technology",
    meta: "Brand Marketing Intern Summer 2026",
    cover: "assets/sunrooof-cover.jpg",
    // Each entry is a clickable thumbnail (opens the Instagram Reel in a
    // new tab) paired with its own `text` paragraph(s), rendered right
    // next to it in a shared grid row.
    videos: [
      {
        thumbnail: "assets/sunrooof-reel-1.jpg",
        url: "https://www.instagram.com/reel/Dbx7BBmJCUR/",
        text: [
          "<strong>#1 Founder-led storytelling:</strong> We’ve spent over a century making artificial light better. But our bodies evolved with sunlight that changes with the day and supports our well-being. So why keep improving artificial light when we can bring the experience of sunlight indoors? That’s why we built SUNROOOF. Because lighting shouldn’t just help you see. It should help you live well. SUNROOOF is sunlight. And anything else? It’s just another light."
        ]
      },
      {
        thumbnail: "assets/sunrooof-reel-2.jpg",
        url: "https://www.instagram.com/p/DWBnBYdkSQD/",
        text: [
          "<strong>#2 Celebrity Collaboration:</strong> Building social proof through Bollywood actress Shilpa Shetty."
        ]
      }
    ]
  },
  {
    slug: "gamma",
    title: "GAMMA",
    role: "AI powered presentations",
    meta: "Campaign",
    cover: "assets/gamma-cover.jpg",
    photos: [
      {
        image: "assets/gamma.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7478933854884425728/"
      }
    ],
    body: [
      "3 Perspectives on the process and creativity of visual communication in the age of AI."
    ]
  },
  {
    slug: "jumboventures",
    title: "JumboVentures",
    role: "Tufts startup incubator club",
    meta: "Director of Partnerships",
    cover: "assets/jumboventures-cover.jpg",
    // Landscape/mixed-aspect photos — rendered at their natural aspect
    // ratio (unlike the portrait video thumbnails), 2 per row, each with
    // its own caption directly below it.
    gallery: [
      {
        image: "assets/jv1.png",
        text: [
          "Hosted 5+ podcast-style fireside chats with Alumni:",
          "Jesse Zhang, Co-Founder @ Beacons AI. Zoe Watson, Co-Founder @ Microvitality."
        ]
      },
      {
        image: "assets/jv2.png",
        text: [
          "Hani Azzam, VC Partner. Katy Nelson, Ex-A16z. Steve Kaufer, CEO @ Tripadvisor."
        ]
      },
      {
        image: "assets/jv3.png",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7440194432399851520/",
        text: ["Generated 50k+ LinkedIn impressions for Jumboventures."]
      },
      {
        image: "assets/jv4.png",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7452822623039852544/",
        text: ["Increasing awareness and event attendance across other Boston schools."]
      }
    ]
  },
  {
    slug: "clodo",
    title: "Clodo AI (YC)",
    role: "Backed by Y Combinator — planet scale people sourcing",
    meta: "#1 Growth",
    cover: "assets/clodo-cover.jpg",
    // Numbered sections: an optional heading, a row of images (max 2 per
    // row), then a shared caption below the whole row.
    sections: [
      {
        images: ["assets/clodo-1.png", "assets/clodo-2.png"],
        text: [
          "Created Founder-Led content on LinkedIn for <a class=\"inline-link\" href=\"https://www.linkedin.com/in/sidharthrajaram/\" target=\"_blank\" rel=\"noopener noreferrer\">@Sidrajaram</a> and <a class=\"inline-link\" href=\"https://www.linkedin.com/in/rithvikchuppala/\" target=\"_blank\" rel=\"noopener noreferrer\">@RithvikChuppala</a>, growing from 0 to 2M+ impressions and 0 to $40k revenue."
        ]
      }
    ]
  },
  {
    slug: "girlsintovc",
    title: "Girls into VC",
    role: "Closing the gender gap in venture capital",
    meta: "Regional Lead",
    cover: "assets/girlsintovc-cover.jpg",
    videos: [
      {
        thumbnail: "assets/girlsintovc-photo-1.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/",
        text: [
          "Hosted a Vibe-coding Hackathon during Boston's first A16Z Tech Week."
        ]
      },
      {
        thumbnail: "assets/girlsintovc-photo-2.jpg",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7467707389861928960/",
        text: [
          "Social marketing before the event, resulting in 100+ attendees.",
          "Sponsorships from Gamma, Lovable, and Silicon Valley Bank."
        ]
      },
      {
        thumbnail: "assets/girlsintovc-photo-3.jpg",
        url: "https://www.instagram.com/reels/DbL_dWmSLYs/",
        text: [
          "Content targeted at increasing community membership, 12k+ views, 3% conversion rate."
        ]
      }
    ]
  }
];
