/* =========================================================
   Utiliby – shared JS
   - Dynamic header nav + footer (with social row)
   - Organization schema with sameAs (brand entity)
   - Tool index (single source of truth)
   - Home page enhanced search
   - Breadcrumb search (all other pages)
   - Share module (auto-injected)
   - Copy-to-clipboard, YouTube facade
   ========================================================= */

/* ---------- 1. TOOL INDEX ---------- */
var toolIndex = [
  { name: "Split Bill Calculator",              url: "/tools/everyday-calculators/split-bill-calculator/",                 category: "Everyday Calculators", keywords: "bill splitter check restaurant tip tax group dinner share" },
  { name: "Budget Planner Calculator",          url: "/tools/everyday-calculators/budget-planner-calculator/",            category: "Everyday Calculators", keywords: "budget 50/30/20 needs wants savings monthly money personal finance" },
  { name: "GPA Calculator",                     url: "/tools/everyday-calculators/gpa-calculator/",                       category: "Everyday Calculators", keywords: "gpa grade point average weighted unweighted cumulative college school" },
  { name: "Fertilizer/Lawn Calculator",         url: "/tools/everyday-calculators/fertilizer-lawn-calculator/",           category: "Everyday Calculators", keywords: "fertilizer npk lawn grass seed lime topdressing spreader garden" },
  { name: "Screen Time Calculator",             url: "/tools/everyday-calculators/screen-time-calculator/",               category: "Everyday Calculators", keywords: "screen time digital wellbeing phone hours lifetime health" },
  { name: "Keto Macro Calculator",              url: "/tools/health-fitness/keto-macro-calculator/",                      category: "Health & Fitness",     keywords: "keto macro protein fat carbs diet low-carb carnivore macros" },
  { name: "Sleep Cycle Calculator",             url: "/tools/health-fitness/sleep-cycle-calculator/",                     category: "Health & Fitness",     keywords: "sleep cycle bedtime wake up nap sleep debt calculator" },
  { name: "Stretching Routine Generator",       url: "/tools/health-fitness/stretching-routine-generator/",               category: "Health & Fitness",     keywords: "stretching routine generator stretch flexibility morning desk break mobility" },
  { name: "V-Belt Length Calculator",           url: "/tools/engineering/v-belt-length-calculator/",                      category: "Engineering",          keywords: "v-belt length pulley belt drive wrap angle mechanical" },
  { name: "Spring Rate Calculator",             url: "/tools/engineering/spring-rate-calculator/",                        category: "Engineering",          keywords: "spring rate calculator spring constant compression extension torsion wahl factor stress" },
  { name: "Roof Pitch Calculator",              url: "/tools/construction/roof-pitch-calculator/",                        category: "Construction",         keywords: "roof pitch slope rise run degrees roof angle" },
  { name: "Fence Post Calculator",              url: "/tools/construction/fence-post-calculator/",                        category: "Construction",         keywords: "fence post concrete bags spacing wood chainlink" },
  { name: "Password Generator",                 url: "/tools/developer-tools/password-generator/",                        category: "Developer Tools",      keywords: "password generator secure random strong" },
  { name: "Jet Lag Calculator",                 url: "/tools/travel-tools/jet-lag-calculator/",                           category: "Travel Tools",         keywords: "jet lag time zone travel sleep recovery flight" },
  { name: "Vendor Comparison Tool",             url: "/tools/business-legal-tools/vendor-comparison-tool/",               category: "Business & Legal",     keywords: "vendor comparison supplier procurement weighted decision" },
  { name: "Lesson Plan Template Generator",     url: "/tools/education-study-tools/lesson-plan-template-generator/",      category: "Education",            keywords: "lesson plan template teacher classroom generator" },
  { name: "Bold Italic Text Generator",         url: "/tools/text-writing/bold-italic-text-generator/",                   category: "Text & Writing",       keywords: "bold italic unicode fancy text cursive font generator" },
  { name: "Zodiac Sign Calculator",             url: "/tools/astrology/zodiac-sign-calculator/",                          category: "Astrology",            keywords: "zodiac sign calculator astrology sun sign" },
  { name: "Cooking Measurement Converter",      url: "/tools/recipe-cooking-tools/cooking-measurement-converter/",        category: "Cooking",              keywords: "cooking measurement converter cups grams ounces recipe" },
  { name: "Moon Phase Calculator",              url: "/tools/date-time-tools/moon-phase-calculator/",                     category: "Date & Time",          keywords: "moon phase calculator lunar calendar full moon new moon" },
  { name: "Rental Yield Calculator",            url: "/tools/real-estate-tools/rental-yield-calculator/",                 category: "Real Estate",          keywords: "rental yield calculator property investment cash flow cap rate" },
  { name: "Loot Table Randomizer",              url: "/tools/gaming-tools/loot-table-randomizer/",                        category: "Gaming",               keywords: "loot table randomizer weighted rpg gacha drops" },
  { name: "Closed Caption Generator",           url: "/tools/accessibility-tools/closed-caption-generator/",              category: "Accessibility",        keywords: "closed caption generator srt vtt subtitle wcag" },
  { name: "Watermark Remover",                  url: "/tools/image-tools/watermark-remover/",                             category: "Image",                keywords: "watermark remover remove watermark image photo" },
  { name: "PDF to Text Extractor",              url: "/tools/pdf-document-tools/pdf-to-text-extractor/",                  category: "PDF & Document",       keywords: "pdf to text extractor document convert" },
  { name: "Audio Merger",                       url: "/tools/audio-music-tools/audio-merger/",                            category: "Audio & Music",        keywords: "audio merger joiner combine mp3 wav merge" },
  { name: "Sitemap Validator",                  url: "/tools/seo-web-tools/sitemap-validator/",                           category: "SEO & Web",            keywords: "sitemap validator xml checker seo" },
  { name: "My IP Address Checker",              url: "/tools/security-privacy-tools/my-ip-address-checker/",              category: "Security & Privacy",   keywords: "ip address checker my ip vpn webrtc leak test" },
  { name: "Meeting Scheduler Poll",             url: "/tools/productivity-organization-tools/meeting-scheduler-poll/",    category: "Productivity",         keywords: "meeting scheduler poll availability doodle find time" },
  { name: "Color Name Identifier",              url: "/tools/design-color-tools/color-name-identifier/",                  category: "Design & Color",       keywords: "color name identifier hex rgb picker" },
  { name: "TikTok Caption Generator",           url: "/tools/social-media-tools/tiktok-caption-generator/",               category: "Social Media",         keywords: "tiktok caption generator hashtags viral" },
  { name: "Elevator Pitch Generator",           url: "/tools/marketing-advertising-tools/elevator-pitch-generator/",      category: "Marketing",            keywords: "elevator pitch generator startup investor sales" },
  { name: "Newsletter Sign-up Form Generator",  url: "/tools/email-tools/newsletter-signup-form-generator/",              category: "Email",                keywords: "newsletter signup form generator email opt-in" }
  { name: "How to Calculate Keto Macros (Guide)", url: "/guides/how-to-calculate-keto-macros/",                           category: "Guide",                keywords: "how to calculate keto macros guide tutorial protein fat carbs mifflin st jeor" }
];

/* ---------- 2. SOCIAL PROFILES ---------- */
var socialProfiles = [
  { name: "YouTube",   url: "https://www.youtube.com/@Utilibyteam",                          icon: "youtube"   },
  { name: "Facebook",  url: "https://www.facebook.com/profile.php?id=61594822713947",        icon: "facebook"  },
  { name: "Instagram", url: "https://www.instagram.com/utilibyteam/",                        icon: "instagram" },
  { name: "X",         url: "https://x.com/Utiliby",                                         icon: "x"         },
  { name: "TikTok",    url: "https://tiktok.com/utiliby",                                    icon: "tiktok"    },
  { name: "Pinterest", url: "https://pinterest.com/utiliby",                                 icon: "pinterest" }
];

/* ---------- 3. UTILITIES ---------- */
function ulEsc(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function ulContains(haystack, needle){
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1;
}

/* ---------- 4. ORGANIZATION SCHEMA (brand entity) ---------- */
(function(){
  function injectOrgSchema(){
    if(document.getElementById("utiliby-org-schema")) return;
    var schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Utiliby",
      "alternateName": "Utiliby Free Online Tools",
      "url": "https://utiliby.com",
      "logo": "https://utiliby.com/favicon.png",
      "description": "Free online calculators, converters and generators that run entirely in your browser.",
      "sameAs": socialProfiles.map(function(p){ return p.url; })
    };
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "utiliby-org-schema";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", injectOrgSchema);
  } else {
    injectOrgSchema();
  }
})();

/* ---------- 5. SITE NAV + FOOTER (with social row) ---------- */
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

  var socialSVG = {
    youtube:   '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    facebook:  '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
    x:         '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.1 8.13L23.3 22h-6.6l-5.17-6.76L5.6 22H2.5l7.6-8.7L1 2h6.8l4.67 6.18L18.9 2zm-1.15 18.1h1.72L7.4 3.8H5.55l12.2 16.3z"/></svg>',
    tiktok:    '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2-3.4V2H10v13.6a2.6 2.6 0 1 1-2.6-2.6c.2 0 .4 0 .6.1V9a6.4 6.4 0 0 0-.6 0 6.4 6.4 0 1 0 6.4 6.4V8.8a9.4 9.4 0 0 0 5.8 2V7c-.3 0-.6 0-1-.3z"/></svg>',
    pinterest: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0a12 12 0 0 0-4.4 23.2c-.1-.9-.2-2.4 0-3.4l1.5-6.2s-.4-.8-.4-1.9c0-1.8 1-3.1 2.3-3.1 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1 4.2-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.9-2.3 3.9-5.6 0-2.9-2.1-5-5.1-5-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.1.9 2.7.1.1.1.2.1.3l-.3 1.3c-.1.2-.2.3-.4.2-1.5-.7-2.4-2.8-2.4-4.6 0-3.7 2.7-7.1 7.7-7.1 4.1 0 7.2 2.9 7.2 6.8 0 4-2.5 7.2-6 7.2-1.2 0-2.3-.6-2.6-1.3l-.7 2.7c-.3 1-.9 2.3-1.4 3.1A12 12 0 1 0 12 0z"/></svg>'
  };

  function buildHeader() {
    var el = document.getElementById("site-header-nav");
    if (!el) return;
    var html = "";
    for (var i = 0; i < categoryLinks.length; i++) {
      html += '<a href="' + categoryLinks[i][0] + '">' + categoryLinks[i][1] + '</a>';
    }
    el.innerHTML = html;
  }

  function buildSocialRow() {
    var h = '<div class="footer-social">';
    h += '<div class="footer-social-label">Follow Utiliby</div>';
    h += '<div class="footer-social-row">';
    for (var i = 0; i < socialProfiles.length; i++) {
      var p = socialProfiles[i];
      var icon = socialSVG[p.icon] || "";
      h += '<a href="' + p.url + '" target="_blank" rel="noopener" class="footer-social-link" aria-label="Utiliby on ' + p.name + '">' + icon + '<span>' + p.name + '</span></a>';
    }
    h += '</div>';
    h += '</div>';
    return h;
  }

  function buildFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var html = "";
    // Legal links row
    html += '<div class="footer-links-row">';
    for (var i = 0; i < legalLinks.length; i++) {
      html += '<a href="' + legalLinks[i][0] + '">' + legalLinks[i][1] + '</a>';
    }
    html += '</div>';
    // Social row
    html += buildSocialRow();
    // Copyright
    html += '<p class="footer-copy">© 2026 Utiliby. Free online tools.</p>';
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

/* ---------- 6. HOME PAGE SEARCH ---------- */
(function () {
  function init() {
    var q = document.getElementById("q");
    if (!q) return;
    var allCards = Array.prototype.slice.call(document.querySelectorAll(".card[data-name]"));
    if (allCards.length === 0) return;

    var popularGrid = null;
    var h2s = document.querySelectorAll("h2");
    for (var i = 0; i < h2s.length; i++) {
      if (h2s[i].textContent.toLowerCase().indexOf("popular") > -1) {
        var next = h2s[i].nextElementSibling;
        if (next && next.classList.contains("grid")) { popularGrid = next; break; }
      }
    }
    if (!popularGrid) popularGrid = allCards[0].parentNode;

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
      var prev = grid.previousElementSibling;
      if (prev && prev.tagName === "H2") prev.style.display = show ? "" : "none";
    }

    function update() {
      var v = q.value.trim().toLowerCase();
      var visibleUrls = {};

      for (var i = 0; i < allCards.length; i++) {
        var c = allCards[i];
        var match = !v || ulContains(c.dataset.name || "", v);
        c.style.display = match ? "" : "none";
        if (match) {
          var href = c.getAttribute("href");
          if (href) visibleUrls[href] = true;
        }
      }

      clearInjected();

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

/* ---------- 7. BREADCRUMB SEARCH ---------- */
(function () {
  function init() {
    if (document.getElementById("q")) return;
    if (document.documentElement.classList.contains("embed")) return;
    var crumbs = document.querySelector("nav.crumbs");
    if (!crumbs) return;
    if (document.getElementById("site-search")) return;

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

/* ---------- 8. SHARE MODULE ---------- */
(function () {
  function buildShareUI(host){
    var canonical = document.querySelector('link[rel="canonical"]');
    var url = canonical ? canonical.href : location.href.split("#")[0].split("?")[0];
    var rawTitle = document.title.replace(/\s*[|–—].*$/, "").trim();

    function shareText(){
      var resultText = host.getAttribute("data-result") || "";
      return resultText ? resultText + " — " + rawTitle : rawTitle;
    }

    function render(){
      var t = shareText();
      var u = url;
      var links = {
        x:        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(u),
        facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(u),
        linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(u),
        whatsapp: "https://api.whatsapp.com/send?text=" + encodeURIComponent(t + " " + u),
        reddit:   "https://www.reddit.com/submit?url=" + encodeURIComponent(u) + "&title=" + encodeURIComponent(rawTitle),
        email:    "mailto:?subject=" + encodeURIComponent(rawTitle) + "&body=" + encodeURIComponent(t + "\n\n" + u)
      };
      var hasNativeShare = typeof navigator.share === "function";

      var h = '';
      h += '<div class="tool-share-label">Share this tool</div>';
      h += '<div class="tool-share-row">';
      h += '<button type="button" class="tool-share-btn tool-share-copy" data-share-action="copy">📋 Copy link</button>';
      if(hasNativeShare){
        h += '<button type="button" class="tool-share-btn tool-share-native" data-share-action="native">🔗 Share</button>';
      }
      h += '<a href="' + links.x + '" target="_blank" rel="nofollow noopener noreferrer" class="tool-share-btn">𝕏 X</a>';
      h += '<a href="' + links.facebook + '" target="_blank" rel="nofollow noopener noreferrer" class="tool-share-btn">Facebook</a>';
      h += '<a href="' + links.linkedin + '" target="_blank" rel="nofollow noopener noreferrer" class="tool-share-btn">LinkedIn</a>';
      h += '<a href="' + links.whatsapp + '" target="_blank" rel="nofollow noopener noreferrer" class="tool-share-btn">WhatsApp</a>';
      h += '<a href="' + links.reddit + '" target="_blank" rel="nofollow noopener noreferrer" class="tool-share-btn">Reddit</a>';
      h += '<a href="' + links.email + '" class="tool-share-btn">Email</a>';
      h += '</div>';

      host.innerHTML = h;
    }

    render();
    host._refresh = render;

    host.addEventListener("click", function(e){
      var btn = e.target.closest("[data-share-action]");
      if(!btn) return;
      var action = btn.getAttribute("data-share-action");
      if(action === "copy"){
        if(navigator.clipboard){
          navigator.clipboard.writeText(url).then(function(){
            var o = btn.textContent;
            btn.textContent = "✓ Copied!";
            setTimeout(function(){ btn.textContent = o; }, 1400);
          });
        }
      } else if(action === "native"){
        if(navigator.share){
          navigator.share({
            title: rawTitle,
            text: shareText(),
            url: url
          }).catch(function(){});
        }
      }
    });
  }

  function init(){
    if(document.documentElement.classList.contains("embed")) return;

    var tools = document.querySelectorAll("section.tool");
    for(var i = 0; i < tools.length; i++){
      if(tools[i].querySelector(".tool-share")) continue;
      var div = document.createElement("div");
      div.className = "tool-share noembed";
      div.setAttribute("data-result", "");
      tools[i].appendChild(div);
    }
    var hosts = document.querySelectorAll(".tool-share");
    for(var j = 0; j < hosts.length; j++){
      buildShareUI(hosts[j]);
    }
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.utShare = {
    setResult: function(text){
      var hosts = document.querySelectorAll(".tool-share");
      for(var i = 0; i < hosts.length; i++){
        hosts[i].setAttribute("data-result", text);
        if(typeof hosts[i]._refresh === "function") hosts[i]._refresh();
      }
    }
  };
})();

/* ---------- 9. COPY TO CLIPBOARD ---------- */
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

/* ---------- 10. YOUTUBE FACADE ---------- */
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