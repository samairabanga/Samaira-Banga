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

  if (project.videos && project.videos.length) {
    // Pair each video with the body paragraph at the same index, so
    // e.g. video 2's thumbnail and the "#2 ..." paragraph start at
    // exactly the same vertical position (a shared CSS grid row).
    const pairCount = Math.min(project.videos.length, project.body.length);

    const rowsHtml = project.videos.slice(0, pairCount).map((v, i) => {
      const isVideo = /instagram\.com/.test(v.url);
      const label = isVideo
        ? `Watch ${project.title} video ${i + 1} on Instagram`
        : `View ${project.title} photo ${i + 1} on LinkedIn`;
      const altText = isVideo ? `video ${i + 1} thumbnail` : `photo ${i + 1}`;
      const badge = isVideo ? `<span class="play-badge">&#9654;</span>` : "";

      return `
        <div class="video-row">
          <a class="detail-video-thumb" href="${v.url}" target="_blank" rel="noopener noreferrer" aria-label="${label}">
            <img src="${v.thumbnail}" alt="${project.title} ${altText}" />
            ${badge}
          </a>
          <div class="video-row-text"><p>${project.body[i]}</p></div>
        </div>
      `;
    }).join("");

    const extraBodyHtml = project.body.slice(pairCount).map((para) => `<p>${para}</p>`).join("");

    el.innerHTML = `
      ${headerHtml}
      <div class="detail-video-rows">${rowsHtml}</div>
      ${extraBodyHtml ? `<div class="detail-body">${extraBodyHtml}</div>` : ""}
    `;
  } else {
    const bodyHtml = project.body.map((para) => `<p>${para}</p>`).join("");
    el.innerHTML = `${headerHtml}<div class="detail-body">${bodyHtml}</div>`;
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

renderBookshelf();
renderDetail();
