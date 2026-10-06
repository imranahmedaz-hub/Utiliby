/* =========================================================
   Utiliby – shared JS
   - Dynamic header nav + footer
   - Tool index (single source of truth)
   - Home page enhanced search
   - Breadcrumb search (all other pages)
   - Copy-to-clipboard, YouTube facade
   ========================================================= */

/* ---------- 1. TOOL INDEX (single source of truth) ---------- */
var toolIndex = [
  // Everyday Calculators
  { name: "Split Bill Calculator",              url: "/tools/everyday-calculators/split-bill-calculator/",                 category: "Everyday Calculators", keywords: "bill splitter check restaurant tip tax group dinner share" },
  { name: "Budget Planner Calculator",          url: "/tools/everyday-calculators/budget-planner-calculator/",            category: "Everyday Calculators", keywords: "budget 50/30/20 needs wants savings monthly money personal finance" },
  { name: "GPA Calculator",                     url: "/tools/everyday-calculators/gpa-calculator/",                       category: "Everyday Calculators", keywords: "gpa grade point average weighted unweighted cumulative college school" },
  { name: "Fertilizer/Lawn Calculator",         url: "/tools/everyday-calculators/fertilizer-lawn-calculator/",           category: "Everyday Calculators", keywords: "fertilizer npk lawn grass seed lime topdressing spreader garden" },
  { name: "Screen Time Calculator",             url: "/tools/everyday-calculators/screen-time-calculator/",               category: "Everyday Calculators", keywords: "screen time digital wellbeing phone hours lifetime health" },
  // Health & Fitness
  { name: "Keto Macro Calculator",              url: "/tools/health-fitness/keto-macro-calculator/",                      category: "Health & Fitness",     keywords: "keto macro protein fat carbs diet low-carb carnivore macros" },
  // Engineering
  { name: "V-Belt Length Calculator",           url: "/tools/engineering/v-belt-length-calculator/",                      category: "Engineering",          keywords: "v-belt length pulley belt drive wrap angle mechanical" },
  // Construction
  { name: "Roof Pitch Calculator",              url: "/tools/construction/roof-pitch-calculator/",                        category: "Construction",         keywords: "roof pitch slope rise run degrees roof angle" },
  { name: "Fence Post Calculator",              url: "/tools/construction/fence-post-calculator/",                        category: "Construction",         keywords: "fence post concrete bags spacing wood chainlink" },
  // Developer Tools
  { name: "Password Generator",                 url: "/tools/developer-tools/password-generator/",                        category: "Developer Tools",      keywords: "password generator secure random strong" },
  // Travel Tools
  { name: "Jet Lag Calculator",                 url: "/tools/travel-tools/jet-lag-calculator/",                           category: "Travel Tools",         keywords: "jet lag time zone travel sleep recovery flight" },
  // Business & Legal
  { name: "Vendor Comparison Tool",             url: "/tools/business-legal-tools/vendor-comparison-tool/",               category: "Business & Legal",     keywords: "vendor comparison supplier procurement weighted decision" },
  // Education
  { name: "Lesson Plan Template Generator",     url: "/tools/education-study-tools/lesson-plan-template-generator/",      category: "Education",            keywords: "lesson plan template teacher classroom generator" },
  // Text & Writing
  { name: "Bold Italic Text Generator",         url: "/tools/text-writing/bold-italic-text-generator/",                   category: "Text & Writing",       keywords: "bold italic unicode fancy text cursive font generator" },
  // Astrology
  { name: "Zodiac Sign Calculator",             url: "/tools/astrology/zodiac-sign-calculator/",                          category: "Astrology",            keywords: "zodiac sign calculator astrology sun sign" },
  // Cooking
  { name: "Cooking Measurement Converter",      url: "/tools/recipe-cooking-tools/cooking-measurement-converter/",        category: "Cooking",              keywords: "cooking measurement converter cups grams ounces recipe" },
  // Date & Time
  { name: "Moon Phase Calculator",              url: "/tools/date-time-tools/moon-phase-calculator/",                     category: "Date & Time",          keywords: "moon phase calculator lunar calendar full moon new moon" },
  // Real Estate
  { name: "Rental Yield Calculator",            url: "/tools/real-estate-tools/rental-yield-calculator/",                 category: "Real Estate",          keywords: "rental yield calculator property investment cash flow cap rate" },
  // Gaming
  { name: "Loot Table Randomizer",              url: "/tools/gaming-tools/loot-table-randomizer/",                        category: "Gaming",               keywords: "loot table randomizer weighted rpg gacha drops" },
  // Accessibility
  { name: "Closed Caption Generator",           url: "/tools/accessibility-tools/closed-caption-generator/",              category: "Accessibility",        keywords: "closed caption generator srt vtt subtitle wcag" },
  // Image
  { name: "Watermark Remover",                  url: "/tools/image-tools/watermark-remover/",                             category: "Image",                keywords: "watermark remover remove watermark image photo" },
  // PDF & Document
  { name: "PDF to Text Extractor",              url: "/tools/pdf-document-tools/pdf-to-text-extractor/",                  category: "PDF & Document",       keywords: "pdf to text extractor document convert" },
  // Audio & Music
  { name: "Audio Merger",                       url: "/tools/audio-music-tools/audio-merger/",                            category: "Audio & Music",        keywords: "audio merger joiner combine mp3 wav merge" },
  // SEO & Web
  { name: "Sitemap Validator",                  url: "/tools/seo-web-tools/sitemap-validator/",                           category: "SEO & Web",            keywords: "sitemap validator xml checker seo" },
  // Security & Privacy
  { name: "My IP Address Checker",              url: "/tools/security-privacy-tools/my-ip-address-checker/",              category: "Security & Privacy",   keywords: "ip address checker my ip vpn webrtc leak test" },
  // Productivity
  { name: "Meeting Scheduler Poll",             url: "/tools/productivity-organization-tools/meeting-scheduler-poll/",    category: "Productivity",         keywords: "meeting scheduler poll availability doodle find time" },
  // Design & Color
  { name: "Color Name Identifier",              url: "/tools/design-color-tools/color-name-identifier/",                  category: "Design & Color",       keywords: "color name identifier hex rgb picker" },
  // Social Media
  { name: "TikTok Caption Generator",           url: "/tools/social-media-tools/tiktok-caption-generator/",               category: "Social Media",         keywords: "tiktok caption generator hashtags viral" },
  // Marketing
  { name: "Elevator Pitch Generator",           url: "/tools/marketing-advertising-tools/elevator-pitch-generator/",      category: "Marketing",            keywords: "elevator pitch generator startup investor sales" },
  // Email
  { name: "Newsletter Sign-up Form Generator",  url: "/tools/email-tools/newsletter-signup-form-generator/",              category: "Email",                keywords: "newsletter signup form generator email opt-in" }
];

/* ---------- 2. UTILITIES ---------- */
function ulEsc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function ulContains(haystack, needle){
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1;
}

/* ---------- 3. SITE NAV + FOOTER ---------- */
(function () {
  var categoryLinks = [
    ["/tools/everyday-calculators/", "Everyday"],
    ["/tools/health-fitness/", "Health"],
    ["/tools/engineering/", "Engineering"],
    ["/tools/construction/", "Construction"],
    ["/tools/developer-tools/", "Developer"],
    ["/tools/travel-tools/", "Travel"],
    ["/tools/business-legal-tools/", "Business"],
    ["/tools/education-study-tools/", "Education"],
    ["/tools/text-writing/", "Text"],
    ["/tools/astrology/", "Astrology"],
    ["/tools/recipe-cooking-tools/", "Cooking"],
    ["/tools/date-time-tools/", "Date &amp; Time"],
    ["/tools/real-estate-tools/", "Real Estate"],
    ["/tools/gaming-tools/", "Gaming"],
    ["/tools/accessibility-tools/", "Accessibility"],
    ["/tools/image-tools/", "Image"],
    ["/tools/pdf-document-tools/", "PDF &amp; Document"],
    ["/tools/audio-music-tools/", "Audio &amp; Music"],
    ["/tools/seo-web-tools/", "SEO &amp; Web"],
    ["/tools/security-privacy-tools/", "Security &amp; Privacy"],
    ["/tools/productivity-organization-tools/", "Productivity"],
    ["/tools/design-color-tools/", "Design &amp; Color"],
    ["/tools/social-media-tools/", "Social Media"],
    ["/tools/marketing-advertising-tools/", "Marketing"],
    ["/tools/email-tools/", "Email"]
  ];

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

/* ---------- 4. HOME PAGE — ENHANCED SEARCH ---------- */
(function () {
  function init() {
    var q = document.getElementById("q");
    if (!q) return; // not on homepage

    // Locate the two grids on the homepage
    var allCards = Array.prototype.slice.call(document.querySelectorAll(".card[data-name]"));
    if (allCards.length === 0) return;

    // Find the "Popular tools" grid — used as the injection target
    var popularGrid = null;
    var h2s = document.querySelectorAll("h2");
    for (var i = 0; i < h2s.length; i++) {
      if (h2s[i].textContent.toLowerCase().indexOf("popular") > -1) {
        var next = h2s[i].nextElementSibling;
        if (next && next.classList.contains("grid")) {
          popularGrid = next;
          break;
        }
      }
    }
    if (!popularGrid) popularGrid = allCards[0].parentNode;

    // Split original cards into categories vs popular-tools
    var categoryCards = [];
    var popularCards = [];
    for (var k = 0; k < allCards.length; k++) {
      if (allCards[k].closest(".grid") === popularGrid) popularCards.push(allCards[k]);
      else categoryCards.push(allCards[k]);
    }

    var injected = [];

    function clearInjected() {
      for (var i = 0; i < injected.length; i++) {
        if (injected[i].parentNode) injected[i].parentNode.removeChild(injected[i]);
      }
      injected = [];
    }

    function toggleSectionHeading(grid, show) {
      // Hide the h2 heading above a grid when the entire grid is empty
      var prev = grid.previousElementSibling;
      if (prev && prev.tagName === "H2") {
        prev.style.display = show ? "" : "none";
      }
    }

    function update() {
      var v = q.value.trim().toLowerCase();
      var visibleUrls = {};

      // ---- Step 1: filter ALL original cards (categories + popular tools) ----
      for (var i = 0; i < allCards.length; i++) {
        var c = allCards[i];
        var match = !v || ulContains(c.dataset.name || "", v);
        c.style.display = match ? "" : "none";
        if (match) {
          var href = c.getAttribute("href");
          if (href) visibleUrls[href] = true;
        }
      }

      // ---- Step 2: clear any cards injected during the previous keystroke ----
      clearInjected();

      // ---- Step 3: inject matching tools from the full index into Popular tools ----
      if (v) {
        for (var j = 0; j < toolIndex.length; j++) {
          var tool = toolIndex[j];
          var haystack = tool.name + " " + (tool.keywords || "") + " " + (tool.category || "");
          if (!ulContains(haystack, v)) continue;
          if (visibleUrls[tool.url]) continue;

          var a = document.createElement("a");
          a.className = "card";
          a.href = tool.url;
          a.dataset.name = (tool.name + " " + (tool.keywords || "")).toLowerCase();
          a.dataset.injected = "1";
          a.innerHTML = "<b>" + ulEsc(tool.name) + "</b><span>" + ulEsc(tool.category) + "</span>";
          popularGrid.appendChild(a);
          injected.push(a);
          visibleUrls[tool.url] = true;
        }
      }

      // ---- Step 4: show or hide the "no results" message ----
      var totalVisible = 0;
      for (var x in visibleUrls) totalVisible++;

      var noResult = document.getElementById("home-no-results");
      if (v && totalVisible === 0) {
        if (!noResult) {
          noResult = document.createElement("p");
          noResult.id = "home-no-results";
          noResult.className = "meta";
          noResult.style.textAlign = "center";
          noResult.style.padding = "20px";
          noResult.style.gridColumn = "1 / -1";
          popularGrid.appendChild(noResult);
        }
        noResult.textContent = 'No tools match "' + q.value.trim() + '". Try a different keyword.';
        noResult.style.display = "";
      } else if (noResult) {
        noResult.style.display = "none";
      }

      // ---- Step 5: hide category heading when all its cards are hidden ----
      var anyCategoryVisible = false;
      for (var y = 0; y < categoryCards.length; y++) {
        if (categoryCards[y].style.display !== "none") { anyCategoryVisible = true; break; }
      }
      toggleSectionHeading(categoryCards[0] ? categoryCards[0].closest(".grid") : popularGrid, anyCategoryVisible);
    }

    q.addEventListener("input", update);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ---------- 5. BREADCRUMB SEARCH (all other pages) ---------- */
(function () {
  function init() {
    // Skip on homepage (has #q) and embed mode
    if (document.getElementById("q")) return;
    if (document.documentElement.classList.contains("embed")) return;

    var crumbs = document.querySelector("nav.crumbs");
    if (!crumbs) return;
    if (document.getElementById("site-search")) return;

    // Wrap the breadcrumb in a flex row and add the search box
    var wrap = document.createElement("div");
    wrap.className = "crumbs-row";
    crumbs.parentNode.insertBefore(wrap, crumbs);
    wrap.appendChild(crumbs);

    var searchWrap = document.createElement("div");
    searchWrap.className = "crumbs-search";
    searchWrap.innerHTML =
      '<input id="site-q" type="search" placeholder="Search tools…" autocomplete="off" ' +
      'aria-label="Search tools" aria-expanded="false" aria-controls="site-q-results" role="combobox">' +
      '<div id="site-q-results" class="crumbs-results" role="listbox" hidden></div>';
    wrap.appendChild(searchWrap);

    var input = document.getElementById("site-q");
    var results = document.getElementById("site-q-results");
    var activeIdx = -1;
    var currentMatches = [];

    function closeResults() {
      results.hidden = true;
      results.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      activeIdx = -1;
      currentMatches = [];
    }

    function render(matches) {
      if (matches.length === 0) {
        results.innerHTML = '<div class="crumbs-result-empty">No tools match.</div>';
        results.hidden = false;
        input.setAttribute("aria-expanded", "true");
        return;
      }
      var h = "";
      for (var i = 0; i < matches.length; i++) {
        var m = matches[i];
        var cls = "crumbs-result-item" + (i === activeIdx ? " active" : "");
        h += '<a class="' + cls + '" href="' + m.url + '" role="option" data-idx="' + i + '">' +
             '<span class="crumbs-result-name">' + ulEsc(m.name) + '</span>' +
             '<span class="crumbs-result-cat">' + ulEsc(m.category) + '</span>' +
             '</a>';
      }
      results.innerHTML = h;
      results.hidden = false;
      input.setAttribute("aria-expanded", "true");
    }

    function search(query) {
      var v = query.trim();
      if (!v) { closeResults(); return; }
      var matches = [];
      for (var i = 0; i < toolIndex.length && matches.length < 8; i++) {
        var t = toolIndex[i];
        var haystack = t.name + " " + (t.keywords || "") + " " + (t.category || "");
        if (ulContains(haystack, v)) matches.push(t);
      }
      currentMatches = matches;
      activeIdx = -1;
      render(matches);
    }

    input.addEventListener("input", function () { search(this.value); });
    input.addEventListener("focus", function () { if (this.value.trim()) search(this.value); });

    input.addEventListener("keydown", function (e) {
      if (results.hidden) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, currentMatches.length - 1);
        render(currentMatches);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, -1);
        render(currentMatches);
      } else if (e.key === "Enter" && activeIdx >= 0 && currentMatches[activeIdx]) {
        e.preventDefault();
        window.location.href = currentMatches[activeIdx].url;
      } else if (e.key === "Escape") {
        closeResults();
        input.blur();
      }
    });

    document.addEventListener("click", function (e) {
      if (!searchWrap.contains(e.target)) closeResults();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ---------- 6. COPY TO CLIPBOARD ---------- */
document.addEventListener("click", function (e) {
  var b = e.target.closest("[data-copy]");
  if (!b) return;
  var s = document.getElementById(b.dataset.copy);
  var t = s ? (s.value || s.textContent) : location.href.split("#")[0].split("?")[0];
  if (navigator.clipboard) {
    navigator.clipboard.writeText(t.trim()).then(function () {
      var o = b.textContent;
      b.textContent = "Copied!";
      setTimeout(function () { b.textContent = o; }, 1500);
    });
  }
});

/* ---------- 7. YOUTUBE FACADE ---------- */
document.addEventListener("DOMContentLoaded", function () {
  function loadYt(el) {
    var id = el.dataset.id;
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
    f.title = el.getAttribute("aria-label") || "YouTube video";
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    f.allowFullscreen = true;
    el.replaceWith(f);
  }
  var fac = document.getElementById("ytFacade");
  if (fac) {
    fac.addEventListener("click", function () { loadYt(fac); });
    fac.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); loadYt(fac); }
    });
  }
});