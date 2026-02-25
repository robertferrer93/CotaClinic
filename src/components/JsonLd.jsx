import { useEffect } from 'react';

export default function JsonLd({ id, data }) {
  useEffect(() => {
    const scriptId = id || 'jsonld';
    let el = document.getElementById(scriptId);

    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = scriptId;
      document.head.appendChild(el);
    }

    el.text = JSON.stringify(data);
  }, [id, data]);

  return null;
}
