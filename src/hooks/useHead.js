// src/hooks/useHead.js
import { useEffect } from 'react';

export function useHead({
  title,
  description,
  canonical,
  image = 'https://cotasportclinic.com/og-image.png',

  // extras opcionales
  author, // string (solo para meta tag)
  type = 'website', // 'article' o 'website'
  publishedTime, // ISO yyyy-mm-dd o ISO completo
  modifiedTime, // ISO
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

    // --- Meta author (opcional) ---
    if (author) {
      let meta = document.querySelector('meta[name="author"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'author');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', author);
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

    // Helper para OG
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
    setMetaProperty('property', 'og:type', type);
    setMetaProperty('property', 'og:site_name', 'CotaSport Clinic');

    // --- Article times (solo si type === 'article') ---
    // (Google no lo exige en OG, pero es útil y consistente)
    if (type === 'article') {
      setMetaProperty('property', 'article:published_time', publishedTime);
      setMetaProperty('property', 'article:modified_time', modifiedTime);
    }
  }, [
    title,
    description,
    canonical,
    image,
    author,
    type,
    publishedTime,
    modifiedTime,
  ]);
}
