import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export default function Text({
  className,
  ...props
}: ComponentPropsWithoutRef<'p'>) {
  return (
    <p {...props} className={clsx('text-[var(--color-white)]', className)} />
  );
}
