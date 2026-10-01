/* ---------- SHARED FOOTER ---------- */
(function () {
  var footerLinks = [
    ["/", "Home"],
    ["/tools/everyday-calculators/", "Everyday Calculators"],
    ["/tools/health-fitness/", "Health &amp; Fitness"],
    ["/tools/engineering/", "Engineering"],
    ["/tools/developer-tools/", "Developer Tools"],
    ["/tools/travel-tools/", "Travel Tools"],
    ["/about/", "About"],
    ["/contact/", "Contact"],
    ["/privacy-policy/", "Privacy Policy"],
    ["/terms/", "Terms"]
  ];

  function buildFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var html = "";
    for (var i = 0; i < footerLinks.length; i++) {
      html += '<a href="' + footerLinks[i][0] + '">' + footerLinks[i][1] + '</a>';
    }
    html += '<p>© 2026 Utiliby. Free online tools.</p>';
    el.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildFooter);
  } else {
    buildFooter();
  }
})();

document.addEventListener('click',function(e){
  var b=e.target.closest('[data-copy]');if(!b)return;
  var s=document.getElementById(b.dataset.copy);
  var t=s?(s.value||s.textContent):location.href.split('#')[0].split('?')[0];
  navigator.clipboard.writeText(t.trim()).then(function(){var o=b.textContent;b.textContent='Copied!';setTimeout(function(){b.textContent=o},1500)});
});
var q=document.getElementById('q');
if(q)q.addEventListener('input',function(){
  var v=q.value.toLowerCase();
  document.querySelectorAll('.card[data-name]').forEach(function(c){c.style.display=c.dataset.name.indexOf(v)>-1?'':'none'});
});

document.addEventListener('DOMContentLoaded',function(){
  function loadYt(el){
    var id=el.dataset.id;
    var f=document.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1';
    f.title=el.getAttribute('aria-label')||'YouTube video';
    f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen=true;
    el.replaceWith(f);
  }
  var fac=document.getElementById('ytFacade');
  if(fac){
    fac.addEventListener('click',function(){loadYt(fac)});
    fac.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();loadYt(fac)}});
  }
});
