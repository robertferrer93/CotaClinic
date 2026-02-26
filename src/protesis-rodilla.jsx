// src/protesis-rodilla.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './components/ui.jsx';
import { useHead } from './hooks/useHead';
import JsonLd from './components/JsonLd.jsx';

import { PROTESIS_RODILLA_CONTENT as PAGE } from './content/pathologies/protesis-rodilla.content.jsx';

import { buildMedicalWebPage } from './seo/buildMedicalWebPage';
import { buildArticle } from './seo/buildArticle';
import { buildFAQPage } from './seo/buildFAQPage';
import { buildAuthorFromDoctors } from './seo/buildAuthorFromDoctors';

// 1) AUTHOR primero
const AUTHOR = buildAuthorFromDoctors(PAGE.authorId);

// 2) Schemas después
const WEBPAGE_SCHEMA = buildMedicalWebPage({
  url: PAGE.url,
  title: PAGE.title,
  description: PAGE.metaDescription,
  image: PAGE.image,
  condition: PAGE.condition,
});

const ARTICLE_SCHEMA = buildArticle({
  url: PAGE.url,
  title: PAGE.title,
  description: PAGE.metaDescription,
  image: PAGE.image,
  published: PAGE.published,
  modified: PAGE.modified,
  author: AUTHOR,
  reviewedBy: AUTHOR, // si tu buildArticle lo soporta
});

const FAQ_SCHEMA = buildFAQPage({ url: PAGE.url, faqs: PAGE.faqs });

export default function ProtesisRodillaPage() {
  useHead({
    title: PAGE.metaTitle,
    description: PAGE.metaDescription,
    canonical: PAGE.url,
    type: 'article',
    author: AUTHOR?.name,
    publishedTime: PAGE.published,
    modifiedTime: PAGE.modified,
    image: PAGE.image,
  });

  return (
    <Article>
      <JsonLd id="ld-protesis-webpage" data={WEBPAGE_SCHEMA} />
      <JsonLd id="ld-protesis-article" data={ARTICLE_SCHEMA} />
      {FAQ_SCHEMA && <JsonLd id="ld-protesis-faq" data={FAQ_SCHEMA} />}

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-cota-navy">
          {PAGE.eyebrow}
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-cota-slate">
          {PAGE.title}
        </h1>

        <p className="mt-4 text-neutral-600">{PAGE.intro}</p>

        <p className="mt-4 text-sm text-neutral-500">
          Revisado por <strong>{AUTHOR?.name}</strong>{' '}
          {AUTHOR?.identifier ? `(${AUTHOR.identifier})` : ''} · Publicado{' '}
          {PAGE.published.split('-').reverse().join('/')} · Última revisión{' '}
          {PAGE.modified.split('-').reverse().join('/')}
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            to={PAGE.cta.to}
            className="text-sm font-medium text-cota-navy hover:underline"
          >
            {PAGE.cta.label}
          </Link>
        </div>
      </header>

      {PAGE.sections.map((s) => (
        <section key={s.id} className="mb-10 space-y-3">
          <h2 className="text-2xl font-semibold text-cota-slate">
            {s.heading}
          </h2>

          {s.paragraphs?.map((p, idx) => (
            <p key={idx} className="text-neutral-700">
              {p}
            </p>
          ))}

          {s.list?.length ? (
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              {s.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : null}

          {s.listRich?.length ? (
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              {s.listRich.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          ) : null}

          {s.footer ? <p className="text-neutral-700">{s.footer}</p> : null}
        </section>
      ))}

      {/* FAQ */}
      <section className="border-t border-neutral-200 pt-6 mt-6">
        <h2 className="text-2xl font-semibold text-cota-slate">
          {PAGE.faqTitle}
        </h2>

        <div className="mt-6 space-y-6 text-neutral-700">
          {PAGE.faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-semibold text-cota-slate">{faq.q}</h3>
              <p className="mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relacionado */}
      {PAGE.related?.length ? (
        <section className="border-t border-neutral-200 pt-8 mt-10">
          <h2 className="text-2xl font-semibold text-cota-slate">
            Patologías y tratamientos relacionados
          </h2>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {PAGE.related.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block rounded-xl border border-neutral-200 p-4 hover:shadow-sm transition"
              >
                <span className="font-medium text-cota-navy">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </Article>
  );
}
