// src/hooks/useHead.js
import { useEffect } from 'react';

function upsertMeta({ name, property, content }) {
  if (!content) return;
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (name) el.setAttribute('name', name);
    if (property) el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink({ rel, href }) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noindex = false,
}) {
  useEffect(() => {
    const siteName = 'CotaSport Clinic';

    // Title
    if (title) {
      document.title = title.includes(siteName)
        ? title
        : `${title} | ${siteName}`;
    } else {
      document.title = siteName;
    }

    // Description
    if (description) {
      upsertMeta({ name: 'description', content: description });
    }

    // Robots (noindex en páginas tipo /gracias si queréis)
    if (noindex) {
      upsertMeta({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      // Si existe previamente, lo quitamos para no “bloquear” accidentalmente
      const robots = document.head.querySelector(`meta[name="robots"]`);
      if (robots) robots.remove();
    }

    // Canonical (muy importante en SPA)
    const canon =
      canonical ||
      (typeof window !== 'undefined' ? window.location.href : null);
    if (canon) upsertLink({ rel: 'canonical', href: canon });

    // Open Graph
    upsertMeta({ property: 'og:site_name', content: siteName });
    upsertMeta({ property: 'og:title', content: ogTitle || title || siteName });
    upsertMeta({
      property: 'og:description',
      content: ogDescription || description,
    });
    upsertMeta({ property: 'og:type', content: ogType });
    upsertMeta({ property: 'og:url', content: canon });

    if (ogImage) {
      upsertMeta({ property: 'og:image', content: ogImage });
    }

    // Twitter
    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({
      name: 'twitter:title',
      content: ogTitle || title || siteName,
    });
    upsertMeta({
      name: 'twitter:description',
      content: ogDescription || description,
    });
    if (ogImage) {
      upsertMeta({ name: 'twitter:image', content: ogImage });
    }
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    noindex,
  ]);
}
