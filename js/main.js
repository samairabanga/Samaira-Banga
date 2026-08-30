// Shared badge shown on every clickable photo/video thumbnail so it's
// obvious at a glance that it links out.
const LINK_ARROW_HTML = `<span class="link-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></span>`;

function renderBookshelf() {
  const shelf = document.getElementById("bookshelf");
  if (!shelf) return;

  shelf.innerHTML = PROJECTS.map((p) => `
    <div class="book-card">
      <a class="book-link" href="project.html?slug=${encodeURIComponent(p.slug)}" data-cover="${p.cover}" data-title="${p.title}">
        <div class="book">
          <img src="${p.cover}" alt="${p.title} project book cover" />
        </div>
      </a>
    </div>
  `).join("");

  shelf.querySelectorAll(".book-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Let modified clicks (open in new tab, etc.) behave normally.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      flyBookFullscreen(link);
    });
  });
}

function flyBookFullscreen(link) {
  const imgEl = link.querySelector("img");
  const rect = imgEl.getBoundingClientRect();
  const href = link.href;

  const overlay = document.createElement("div");
  overlay.className = "book-flight";

  const flyImg = document.createElement("img");
  flyImg.src = link.dataset.cover;
  flyImg.alt = "";
  flyImg.className = "book-flight-img";
  flyImg.style.top = `${rect.top}px`;
  flyImg.style.left = `${rect.left}px`;
  flyImg.style.width = `${rect.width}px`;
  flyImg.style.height = `${rect.height}px`;

  overlay.appendChild(flyImg);
  document.body.appendChild(overlay);

  // Force layout so the browser registers the starting rect before we
  // animate to the fullscreen end state.
  // eslint-disable-next-line no-unused-expressions
  flyImg.getBoundingClientRect();

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    flyImg.style.top = "0";
    flyImg.style.left = "0";
    flyImg.style.width = "100vw";
    flyImg.style.height = "100vh";
  });

  setTimeout(() => {
    window.location.href = href;
  }, 480);
}

function renderDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

  document.title = `${project.title} — Samaira Banga`;

  const summaryHtml = project.summary
    ? `<p class="detail-summary">${project.summary}</p>` : "";

  const metaHtml = project.meta
    ? `<div class="detail-meta">${project.meta}</div>` : "";

  const factsHtml = project.facts
    ? `<div class="detail-facts">${Object.entries(project.facts)
        .map(([k, v]) => `<div><span>${k}</span>${v}</div>`)
        .join("")}</div>` : "";

  const headerHtml = `
    <div class="detail-role">${project.role}</div>
    <h1 class="detail-title">${project.title}</h1>
    ${summaryHtml}
    ${metaHtml}
    ${factsHtml}
  `;

  // Full-width horizontal photo(s), clickable, with a caption below —
  // distinct from the narrow portrait video-row pairing below.
  const photosHtml = (project.photos || []).map((p) => `
    <a class="detail-photo" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} photo on LinkedIn">
      <img src="${p.image}" alt="${project.title}" />
      ${LINK_ARROW_HTML}
    </a>
    ${p.caption ? `<p class="detail-photo-caption${p.captionLarge ? " is-large" : ""}">${p.caption}</p>` : ""}
  `).join("");

  // Photo gallery: max 2 columns per row, each image kept at its own
  // natural aspect ratio (unlike the fixed-portrait video thumbnails),
  // with its own caption paragraph(s) directly below it.
  const galleryHtml = (project.gallery && project.gallery.length) ? (() => {
    const rowSize = 2;
    const rows = [];
    for (let i = 0; i < project.gallery.length; i += rowSize) {
      rows.push(project.gallery.slice(i, i + rowSize));
    }

    return rows.map((row) => {
      const colsHtml = row.map((g) => {
        const imgHtml = `<img src="${g.image}" alt="${project.title}" />`;
        const media = g.url
          ? `<a class="gallery-photo" href="${g.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} photo">${imgHtml}${LINK_ARROW_HTML}</a>`
          : `<div class="gallery-photo">${imgHtml}</div>`;
        const textHtml = (g.text || []).map((para) => `<p>${para}</p>`).join("");

        return `
          <div class="gallery-col">
            ${media}
            ${textHtml ? `<div class="gallery-col-text">${textHtml}</div>` : ""}
          </div>
        `;
      }).join("");

      return `<div class="detail-gallery">${colsHtml}</div>`;
    }).join("");
  })() : "";

  // Numbered sections: an optional heading, a row of images (max 2 per
  // row), then a shared caption below the whole row.
  const sectionsHtml = (project.sections || []).map((s) => {
    const titleHtml = s.title ? `<h2 class="detail-section-title">${s.title}</h2>` : "";

    const rowSize = 2;
    const imgRows = [];
    for (let i = 0; i < (s.images || []).length; i += rowSize) {
      imgRows.push(s.images.slice(i, i + rowSize));
    }
    const rowsHtml = imgRows.map((row) => {
      const colsHtml = row.map((src) => `
        <div class="gallery-col">
          <div class="gallery-photo"><img src="${src}" alt="${project.title}" /></div>
        </div>
      `).join("");
      return `<div class="detail-gallery">${colsHtml}</div>`;
    }).join("");

    const textHtml = (s.text || []).map((para) => `<p>${para}</p>`).join("");

    return `${titleHtml}${rowsHtml}${textHtml ? `<div class="detail-body">${textHtml}</div>` : ""}`;
  }).join("");

  if (project.videos && project.videos.length) {
    // Standard layout: max 2 columns per row. Each column stacks its own
    // thumbnail on top and its own paragraph(s) directly below it — so
    // e.g. video 2's text sits under video 2's picture, not spread
    // across the whole row.
    const rowSize = 2;
    const rows = [];
    for (let i = 0; i < project.videos.length; i += rowSize) {
      rows.push(project.videos.slice(i, i + rowSize));
    }

    let globalIndex = 0;
    const rowsHtml = rows.map((row) => {
      const colsHtml = row.map((v) => {
        const i = globalIndex++;
        const isVideo = /instagram\.com/.test(v.url);
        const label = isVideo
          ? `Watch ${project.title} video ${i + 1} on Instagram`
          : `View ${project.title} photo ${i + 1} on LinkedIn`;
        const altText = isVideo ? `video ${i + 1} thumbnail` : `photo ${i + 1}`;
        const colTextHtml = (v.text || []).map((para) => `<p>${para}</p>`).join("");

        return `
          <div class="gallery-col">
            <a class="detail-video-thumb" href="${v.url}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
              <img src="${v.thumbnail}" alt="${project.title} ${altText}" />
              ${LINK_ARROW_HTML}
            </a>
            ${colTextHtml ? `<div class="gallery-col-text">${colTextHtml}</div>` : ""}
          </div>
        `;
      }).join("");

      return `<div class="detail-gallery">${colsHtml}</div>`;
    }).join("");

    const extraBodyHtml = (project.body || []).map((para) => `<p>${para}</p>`).join("");

    el.innerHTML = `
      ${headerHtml}
      ${photosHtml}
      ${rowsHtml}
      ${galleryHtml}
      ${sectionsHtml}
      ${extraBodyHtml ? `<div class="detail-body">${extraBodyHtml}</div>` : ""}
    `;
  } else {
    const bodyHtml = (project.body || []).map((para) => `<p>${para}</p>`).join("");
    el.innerHTML = `${headerHtml}${photosHtml}${galleryHtml}${sectionsHtml}${bodyHtml ? `<div class="detail-body">${bodyHtml}</div>` : ""}`;
  }

  playBookOpeningIntro(project);
}

function playBookOpeningIntro(project) {
  const intro = document.getElementById("book-intro");
  const introCover = document.getElementById("book-intro-cover");
  const detail = document.getElementById("project-detail");
  if (!intro || !introCover || !detail) return;

  introCover.src = project.cover;
  introCover.alt = `${project.title} project book cover`;

  // Give the browser a frame to paint the cover at rest before it opens.
  requestAnimationFrame(() => {
    setTimeout(() => {
      intro.classList.add("opening");
      detail.classList.add("revealed");
    }, 200);

    setTimeout(() => {
      intro.classList.add("done");
    }, 1150);
  });
}

// Shared, lazily-created AudioContext. Browsers block audio from starting
// on its own, so we "unlock" it on the very first user interaction and
// reuse that same context later when the tear sound actually needs to play.
let audioCtx = null;

function unlockAudio() {
  if (audioCtx) return;
  const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtxClass) return;
  audioCtx = new AudioCtxClass();
}

["pointerdown", "keydown"].forEach((evt) => {
  window.addEventListener(evt, unlockAudio, { once: true });
});

function playTearSound() {
  unlockAudio();
  if (!audioCtx) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  const duration = 0.9;
  const sampleRate = audioCtx.sampleRate;
  const buffer = audioCtx.createBuffer(1, Math.floor(sampleRate * duration), sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const bandpass = audioCtx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.Q.value = 0.6;
  bandpass.frequency.setValueAtTime(1400, audioCtx.currentTime);
  bandpass.frequency.linearRampToValueAtTime(3200, audioCtx.currentTime + duration * 0.55);
  bandpass.frequency.linearRampToValueAtTime(700, audioCtx.currentTime + duration);

  const highpass = audioCtx.createBiquadFilter();
  highpass.type = "highpass";
  highpass.frequency.value = 350;

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.02);
  gainNode.gain.linearRampToValueAtTime(0.8, audioCtx.currentTime + duration * 0.5);
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

  noise.connect(bandpass);
  bandpass.connect(highpass);
  highpass.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  noise.start();
  noise.stop(audioCtx.currentTime + duration);
}

function scheduleCrumbleFlight() {
  const main = document.querySelector(".home-main");
  if (!main) return;

  setTimeout(() => {
    const rect = main.getBoundingClientRect();
    const innerHtml = main.innerHTML;

    const left = document.createElement("div");
    left.className = "tear-half tear-left";
    left.style.top = `${rect.top}px`;
    left.style.left = `${rect.left}px`;
    left.style.width = `${rect.width}px`;
    left.style.height = `${rect.height}px`;
    left.innerHTML = innerHtml;

    const right = document.createElement("div");
    right.className = "tear-half tear-right";
    right.style.top = `${rect.top}px`;
    right.style.left = `${rect.left}px`;
    right.style.width = `${rect.width}px`;
    right.style.height = `${rect.height}px`;
    right.innerHTML = innerHtml;

    document.body.appendChild(left);
    document.body.appendChild(right);
    main.style.visibility = "hidden";

    playTearSound();

    // Force layout so the browser registers the starting position before
    // animating the two halves apart.
    // eslint-disable-next-line no-unused-expressions
    left.getBoundingClientRect();

    requestAnimationFrame(() => {
      left.classList.add("tear-apart");
      right.classList.add("tear-apart");
    });

    setTimeout(() => {
      window.location.href = "projects.html";
    }, 2600);
  }, 8000);
}

renderBookshelf();
renderDetail();
scheduleCrumbleFlight();
