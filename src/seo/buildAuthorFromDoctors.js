// src/seo/buildAuthorFromDoctors.js
import { doctors } from '../data/doctors';

const SITE_URL = 'https://cotasportclinic.com';

export function buildAuthorFromDoctors(doctorId) {
  const d = doctors.find((x) => x.id === doctorId);
  if (!d) throw new Error(`Doctor not found in doctors.js: ${doctorId}`);

  // URL canónica del perfil (tu patrón actual)
  const profileUrl = `${SITE_URL}/equipo/${d.id}`;

  return {
    '@type': 'Person',
    name: d.name,
    jobTitle: 'Traumatólogo',
    identifier: d.colegiado ? `Col. ${d.colegiado}` : undefined,
    url: profileUrl,
    image: d.imageProfile
      ? `${SITE_URL}${d.imageProfile}`
      : d.imageCard
      ? `${SITE_URL}${d.imageCard}`
      : undefined,
    affiliation: {
      '@type': 'Organization',
      name: 'CotaSport Clinic',
      url: SITE_URL,
    },
  };
}
