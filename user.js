// Privacy & Tracking
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.partition.network_state.ocsp_cache", true);
user_pref("privacy.partition.network_state", true);
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("browser.send_pings", false);
user_pref("beacon.enabled", false);

// Telemetry & Data Collection
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);


// Performance Tweaks
user_pref("browser.sessionstore.interval", 300000);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 262144); // 256MB
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("dom.ipc.processCount", 4);
user_pref("ui.prefersReducedMotion", 1);
user_pref("layout.spellcheckDefault", 0);

// Disable some bloat (but KEEP Pocket & FxA)
user_pref("browser.discovery.enabled", false); // disables extension recommendations
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("extensions.screenshots.disabled", true); // you can re-enable this if needed
user_pref("dom.push.enabled", false); // turn off site push notifications

// Misc
user_pref("accessibility.force_disabled", 1);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", true);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.suggest.history", true);
user_pref("layout.css.prefers-color-scheme.content-override", 2); // 2 = dark

// Optional: Enable GPU Acceleration
user_pref("gfx.webrender.all", true);
// 🔄 Reduce content processes (default is 8)
user_pref("dom.ipc.processCount", 2); // 2 content processes

// 🚫 Disable preloading next tabs & pages
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);

// 🧹 Auto-unload tabs when low on memory
user_pref("browser.tabs.unloadOnLowMemory", true);

// 💤 Discard tabs aggressively
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.max_tabs_undo", 0); // No undo tab memory
user_pref("browser.sessionstore.max_windows_undo", 0);

// ⏱️ Reduce session save frequency
user_pref("browser.sessionstore.interval", 600000); // 10 min

// 🔧 Disable accessibility API unless needed
user_pref("accessibility.force_disabled", 1);

// ⛔ Stop all notifications (saves background state)
user_pref("dom.push.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("permissions.default.desktop-notification", 2);

// 💾 Don't cache disk (for SSD/memory-bound systems)
user_pref("browser.cache.disk.enable", false);

// 🧼 Optional: limit form history
user_pref("browser.formfill.enable", false);

