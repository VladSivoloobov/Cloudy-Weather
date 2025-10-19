import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export default function StatisticGrid({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul className={clsx('grid-cols-3 gap-y-20', className)} {...props}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}
