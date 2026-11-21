/* PICKLOVE: Us site settings. Edit these, no build step needed. */
window.PICKLOVE_SITE = {
  DOMAIN: "pickloveus.com",
  SUPPORT_EMAIL: "support@pickloveus.com",   // TODO: mailbox not set up yet
  APP_STORE_URL: "",  // TODO: "https://apps.apple.com/app/id6831194490" once the app is live
  PLAY_URL: ""        // TODO: "https://play.google.com/store/apps/details?id=com.picklove.us" once the app is live
};
(function (c) {
  document.querySelectorAll("[data-cfg-href]").forEach(function (a) {
    var v = c[a.getAttribute("data-cfg-href")]; if (v) { a.href = v; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-cfg-mail]").forEach(function (a) {
    var v = c[a.getAttribute("data-cfg-mail")]; if (v) { a.href = "mailto:" + v; if (a.textContent.indexOf("@") > 0) a.textContent = v; }
  });
})(window.PICKLOVE_SITE);
