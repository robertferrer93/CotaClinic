// src/components/JsonLd.jsx
import { useEffect } from 'react';

export default function JsonLd({ id, data }) {
  useEffect(() => {
    if (!data) return;

    const scriptId = id || 'jsonld';
    let script = document.getElementById(scriptId);

    // Limpiador de undefined
    const cleanData = JSON.parse(
      JSON.stringify(data, (key, value) =>
        value === undefined ? undefined : value
      )
    );

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(cleanData);

    // Cleanup cuando el componente se desmonta (cambio de página)
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, data]);

  return null;
}
