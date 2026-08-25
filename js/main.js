function renderBookshelf() {
  const shelf = document.getElementById("bookshelf");
  if (!shelf) return;

  shelf.innerHTML = PROJECTS.map((p, i) => `
    <div class="book-card">
      <a class="book-link" href="project.html?slug=${encodeURIComponent(p.slug)}">
        <div class="book">
          <div class="book-spine"></div>
          <div class="book-cover" style="background:${p.cover}">
            <span class="book-index">${String(i + 1).padStart(2, "0")}</span>
          </div>
          <div class="book-pages"></div>
        </div>
        <div class="book-meta">
          <h3>${p.title}</h3>
          <div class="book-role">${p.role}</div>
        </div>
      </a>
    </div>
  `).join("");
}

function renderDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

  document.title = `${project.title} — Samaira Banga`;

  const factsHtml = Object.entries(project.facts)
    .map(([k, v]) => `<div><span>${k}</span>${v}</div>`)
    .join("");

  const bodyHtml = project.body.map((para) => `<p>${para}</p>`).join("");

  el.innerHTML = `
    <div class="detail-grid">
      <div class="detail-cover" style="background:${project.cover}"></div>
      <div>
        <div class="detail-role">${project.role}</div>
        <h1 class="detail-title">${project.title}</h1>
        <p class="detail-summary">${project.summary}</p>
        <div class="detail-facts">${factsHtml}</div>
        <div class="detail-body">${bodyHtml}</div>
      </div>
    </div>
  `;
}

renderBookshelf();
renderDetail();
