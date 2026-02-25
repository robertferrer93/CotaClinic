// src/hooks/useHead.js
import { useEffect } from 'react';

export function useHead({
  title,
  description,
  canonical,
  image = 'https://cotasportclinic.com/og-image.png',
}) {
  useEffect(() => {
    if (title) document.title = title;

    // --- Meta description ---
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    // --- Canonical ---
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Helper para OG y Twitter
    const setMetaProperty = (attr, key, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // --- Open Graph ---
    setMetaProperty('property', 'og:title', title);
    setMetaProperty('property', 'og:description', description);
    setMetaProperty('property', 'og:url', canonical);
    setMetaProperty('property', 'og:image', image);
    setMetaProperty('property', 'og:type', 'website');
    setMetaProperty('property', 'og:site_name', 'CotaSport Clinic');

    // --- Twitter ---
    setMetaProperty('name', 'twitter:card', 'summary_large_image');
    setMetaProperty('name', 'twitter:title', title);
    setMetaProperty('name', 'twitter:description', description);
    setMetaProperty('name', 'twitter:image', image);
  }, [title, description, canonical, image]);
}
