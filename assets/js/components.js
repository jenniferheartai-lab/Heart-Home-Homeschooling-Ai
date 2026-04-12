const path = window.location.pathname;

const isHomePage =
  path.endsWith("/") ||
  path.endsWith("/index.html") ||
  path.endsWith("/Heart-Home-Homeschooling-Ai") ||
  path.endsWith("/Heart-Home-Homeschooling-Ai/");

const homeLink = isHomePage ? "index.html" : "../index.html";
const readingLink = isHomePage ? "pages/reading.html" : "reading.html";
const mathLink = isHomePage ? "pages/math.html" : "math.html";
const writingLink = isHomePage ? "pages/writing.html" : "writing.html";
const tutorLink = isHomePage ? "pages/tutor-hub.html" : "tutor-hub.html";

const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

if (nav) {
  nav.innerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${homeLink}" class="brand">1854 Digital Academy</a>
        <div class="nav-links">
          <a href="${homeLink}">Home</a>
          <a href="${readingLink}">Reading</a>
          <a href="${mathLink}">Math</a>
          <a href="${writingLink}">Writing</a>
          <a href="${tutorLink}">Tutor Hub</a>
        </div>
      </div>
    </nav>
  `;
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <p>© 1854 Digital Academy — Classical learning for the modern scholar.</p>
    </footer>
  `;
}
