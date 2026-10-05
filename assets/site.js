/* ---------- SITE NAV + FOOTER ---------- */
(function () {
  // Categories shown in the header only
  var categoryLinks = [
    ["/tools/everyday-calculators/", "Everyday"],
    ["/tools/health-fitness/", "Health"],
    ["/tools/engineering/", "Engineering"],
    ["/tools/construction/", "Construction"],
    ["/tools/developer-tools/", "Developer"],
    ["/tools/accessibility-tools/", "Accessibility"],
    ["/tools/text-writing/", "Text"],
    ["/tools/travel-tools/", "Travel"],
    ["/tools/astrology/", "Astrology"],
    ["/tools/image-tools/", "Image"],
    ["/tools/date-time-tools/", "Date &amp; Time"],
    ["/tools/real-estate-tools/", "Real Estate"],
    ["/tools/business-legal-tools/", "Business"],
    ["/tools/gaming-tools/", "Gaming"],
    ["/tools/recipe-cooking-tools/", "Cooking"],
    ["/tools/education-study-tools/", "Education"]
  ];

  // Legal / meta links shown in the footer on every page
  var legalLinks = [
    ["/", "Home"],
    ["/about/", "About"],
    ["/contact/", "Contact"],
    ["/privacy-policy/", "Privacy Policy"],
    ["/terms/", "Terms"]
  ];

  function buildHeader() {
    var el = document.getElementById("site-header-nav");
    if (!el) return;
    var html = "";
    for (var i = 0; i < categoryLinks.length; i++) {
      html += '<a href="' + categoryLinks[i][0] + '">' + categoryLinks[i][1] + '</a>';
    }
    el.innerHTML = html;
  }

  function buildFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;

    var html = "";
    for (var i = 0; i < legalLinks.length; i++) {
      html += '<a href="' + legalLinks[i][0] + '">' + legalLinks[i][1] + '</a>';
    }
    html += '<p>© 2026 Utiliby. Free online tools.</p>';
    el.innerHTML = html;
  }

  function buildAll() {
    buildHeader();
    buildFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildAll);
  } else {
    buildAll();
  }
})();

/* ---------- COPY TO CLIPBOARD ---------- */
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-copy]'); if (!b) return;
  var s = document.getElementById(b.dataset.copy);
  var t = s ? (s.value || s.textContent) : location.href.split('#')[0].split('?')[0];
  navigator.clipboard.writeText(t.trim()).then(function () {
    var o = b.textContent; b.textContent = 'Copied!';
    setTimeout(function () { b.textContent = o; }, 1500);
  });
});

/* ---------- HOMEPAGE SEARCH FILTER ---------- */
var q = document.getElementById('q');
if (q) q.addEventListener('input', function () {
  var v = q.value.toLowerCase();
  document.querySelectorAll('.card[data-name]').forEach(function (c) {
    c.style.display = c.dataset.name.indexOf(v) > -1 ? '' : 'none';
  });
});

/* ---------- YOUTUBE FACADE ---------- */
document.addEventListener('DOMContentLoaded', function () {
  function loadYt(el) {
    var id = el.dataset.id;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
    f.title = el.getAttribute('aria-label') || 'YouTube video';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    el.replaceWith(f);
  }
  var fac = document.getElementById('ytFacade');
  if (fac) {
    fac.addEventListener('click', function () { loadYt(fac); });
    fac.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadYt(fac); }
    });
  }
});