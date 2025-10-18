import { ComponentPropsWithoutRef } from 'react';

export default function Text({
  className,
  ...props
}: ComponentPropsWithoutRef<'p'>) {
  return <p {...props} className={className} />;
}
