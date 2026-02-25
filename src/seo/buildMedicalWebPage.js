// src/seo/buildMedicalWebPage.js
export function buildMedicalWebPage({
  url,
  title,
  description,
  image,
  condition,

  // opcionales (para SEO médico serio)
  published,
  modified,
  reviewedBy, // Person schema (mismo formato que author)
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#medicalwebpage`,
    url,
    name: title,
    description,
    inLanguage: 'es-ES',
    about: [
      { '@type': 'MedicalCondition', name: condition },
      { '@type': 'AnatomicalStructure', name: 'Rodilla' },
    ],
    primaryImageOfPage: image
      ? { '@type': 'ImageObject', url: image }
      : undefined,

    // fechas (si existen)
    datePublished: published,
    dateModified: modified,

    // revisión médica (si existe)
    reviewedBy: reviewedBy,
  };
}
