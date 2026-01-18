import * as React from 'react';

export default function DoctoraliaReviewsWidget({
  facility = 'grupo-cabot',
  url = 'https://www.doctoralia.es/clinicas/grupo-cabot',
  label = 'GRUPO CABOT',
  saasOnly = true,
  className = '',
}) {
  return (
    <div className={className}>
      <a
        className="zl-facility-url"
        href={url}
        rel="nofollow"
        data-zlw-facility={facility}
        data-zlw-type="certificate"
        data-zlw-saas-only={saasOnly ? 'true' : 'false'}
        data-zlw-a11y-title="Opiniones en Doctoralia"
      >
        {label}
      </a>
    </div>
  );
}
