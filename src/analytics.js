// src/analytics.js
export const GA_MEASUREMENT_ID = 'G-Y64XGWJRWX';

export function trackPageView(path) {
  if (!window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
}

export function trackEvent(name, params = {}) {
  if (!window.gtag) return;

  window.gtag('event', name, params);
}
