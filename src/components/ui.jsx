// src/components/ui.jsx
import * as React from 'react';
import clsx from 'clsx';

export function ButtonPrimary({ as: As = 'button', className, ...props }) {
  return (
    <As
      className={clsx(
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-2xl',
        'text-white font-semibold',
        'bg-cota-navy shadow-soft hover:shadow-lift transition-all',
        'hover:opacity-[0.98] active:translate-y-[0.5px]',
        'focus:outline-none focus:ring-2 focus:ring-cota-navy focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}

export function ButtonSecondary({ as: As = 'button', className, ...props }) {
  return (
    <As
      className={clsx(
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-2xl',
        'border font-semibold',
        'border-cota-line text-cota-navy bg-white',
        'hover:bg-cota-mist transition-all',
        'active:translate-y-[0.5px]',
        'focus:outline-none focus:ring-2 focus:ring-cota-navy focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}

/**
 * Container
 * - Wrapper consistente para páginas/zonas de contenido
 * - Si mañana quieres cambiar padding/ancho global, lo haces aquí.
 */
export function Container({ as: As = 'div', className, ...props }) {
  return (
    <As
      className={clsx('max-w-7xl mx-auto px-6 w-full', className)}
      {...props}
    />
  );
}

/**
 * Article
 * - Columna de lectura centrada para páginas de contenido (LCA, menisco, etc.)
 */
export function Article({ as: As = 'article', className, ...props }) {
  return (
    <As className={clsx('max-w-3xl mx-auto w-full', className)} {...props} />
  );
}

/**
 * Section (clean)
 * - Alterna fondos a ancho completo: tone="plain" | "mist"
 * - Contenido centrado (max-w-7xl) aquí, no en Layout
 * - scroll-mt para que los anchors no queden tapados por el header sticky
 */
export function Section({
  id,
  className,
  children,
  tone = 'plain',
  pad = 'normal', // 'tight' | 'normal' | 'loose'
  border = true,
}) {
  const toneClass = tone === 'mist' ? 'bg-cota-mist' : 'bg-white';

  const padClass =
    pad === 'tight'
      ? 'py-4 md:py-6'
      : pad === 'loose'
      ? 'py-16 md:py-20'
      : 'py-12 md:py-16';

  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-24',
        padClass,
        border && 'border-t border-cota-line',
        toneClass,
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
