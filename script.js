function openChoice(t){window.open("https://wa.me/22787193330"+(t?"?text="+t:""),"_blank","noopener")}
document.querySelectorAll("[data-copie]").forEach(function(im){var s=document.querySelectorAll(".grille .mat")[im.getAttribute("data-copie")];if(s)im.src=s.src});
var cases=document.querySelectorAll('input[name="produit"]');
cases.forEach(function(c){c.addEventListener("change",function(){var q=c.closest(".lig").querySelector(".qte");q.disabled=!c.checked;if(c.checked)q.focus()})});
document.querySelectorAll("[data-produit]").forEach(function(a){a.addEventListener("click",function(){cases.forEach(function(c){if(c.value===a.getAttribute("data-produit")){c.checked=true;c.closest(".lig").querySelector(".qte").disabled=false}})})});
document.getElementById("cmdForm").addEventListener("submit",function(e){
  e.preventDefault();
  var ch=Array.from(cases).filter(function(c){return c.checked}),er=document.getElementById("prodErr");
  if(!ch.length){er.hidden=false;er.scrollIntoView({behavior:"smooth",block:"center"});return}
  er.hidden=true;
  var v=function(i){return encodeURIComponent(document.getElementById(i).value)};
  var l=ch.map(function(c){var q=c.closest(".lig").querySelector(".qte").value.trim();return "• "+c.value+(q?" : "+q:"")}).join("\n");
  openChoice("Bonjour FK Boutique,%0ANom : "+v("nom")+"%0AProduit(s) :%0A"+encodeURIComponent(l)+"%0APaiement : "+v("paiement")+"%0ADétails : "+v("details"));
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
}
var dp, b = document.getElementById("inst");
window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); dp = e; b.hidden = false; });
b.addEventListener("click", function () { if (dp) { dp.prompt(); dp = null; b.hidden = true; } });
