import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export default function GlassBackground({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        'bg-[var(--color-dark)] backdrop-blur-lg rounded-3xl border border-[rgba(255,255,255,0.6)]',
        className
      )}
    />
  );
}
