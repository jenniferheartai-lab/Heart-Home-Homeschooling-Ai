const path = window.location.pathname;

const isHomePage =
  path.endsWith("/") ||
  path.endsWith("/index.html") ||
  path.endsWith("/Heart-Home-Homeschooling-Ai") ||
  path.endsWith("/Heart-Home-Homeschooling-Ai/");

const nav = document.getElementById("nav");
const footer = document.getElementById("footer");

const homeLink = isHomePage ? "index.html" : "../index.html";
const readingLink = isHomePage ? "pages/reading.html" : "reading.html";
const mathLink = isHomePage ? "pages/math.html" : "math.html";
const scienceLink = isHomePage ? "pages/science.html" : "science.html";
const historyLink = isHomePage ? "pages/history.html" : "history.html";
const bibleLink = isHomePage ? "pages/bible.html" : "bible.html";
const tutorLink = isHomePage ? "pages/tutor-hub.html" : "tutor-hub.html";

if (nav) {
  nav.innerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${homeLink}" class="brand">Heart &amp; Home Homeschool</a>
        <div class="nav-links">
          <a href="${homeLink}">Home</a>
          <a href="${readingLink}">Reading</a>
          <a href="${mathLink}">Math</a>
          <a href="${scienceLink}">Science</a>
          <a href="${historyLink}">History</a>
          <a href="${bibleLink}">Bible &amp; Character</a>
          <a href="${tutorLink}">Tutor Hub</a>
        </div>
      </div>
    </nav>
  `;
}

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <p>© Heart &amp; Home Homeschool — Faith-centered learning for real families.</p>
    </footer>
  `;
}
