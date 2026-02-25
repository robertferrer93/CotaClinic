export function buildArticle({
  url,
  title,
  description,
  image,
  published,
  modified,
  author,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#medicalwebpage` },
    headline: title,
    description,
    image: image ? [image] : undefined,
    author,
    reviewedBy: author,
    datePublished: published,
    dateModified: modified,
    inLanguage: 'es-ES',
    publisher: {
      '@type': 'Organization',
      name: 'CotaSport Clinic',
      url: 'https://cotasportclinic.com',
    },
  };
}
